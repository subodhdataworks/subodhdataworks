import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts'

const ttsMemoryCache = new Map<string, Buffer>()

function humanNeuralTtsPlugin(): Plugin {
  return {
    name: 'human-neural-tts-middleware',
    configureServer(server) {
      server.middlewares.use('/api/human-tts', async (req, res) => {
        try {
          const url = new URL(req.url || '', 'http://localhost')
          const lang = url.searchParams.get('lang') === 'hi' ? 'hi' : 'en'
          const text = (url.searchParams.get('text') || '').trim()

          if (!text) {
            res.statusCode = 400
            res.end('Missing text')
            return
          }

          // Natural Indian Human Neural Voices:
          // Hindi (Female HR Aditi Sharma): hi-IN-SwaraNeural
          // English (Male HR Subodh Kumar): en-IN-PrabhatNeural
          const voiceName = lang === 'hi' ? 'hi-IN-SwaraNeural' : 'en-IN-PrabhatNeural'
          const cacheKey = `${voiceName}::${text}`

          const cached = ttsMemoryCache.get(cacheKey)
          if (cached) {
            res.setHeader('Content-Type', 'audio/mpeg')
            res.setHeader('Content-Length', cached.length)
            res.setHeader('Cache-Control', 'public, max-age=86400')
            res.end(cached)
            return
          }

          const tts = new MsEdgeTTS()
          await tts.setMetadata(voiceName, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3)
          const { audioStream } = tts.toStream(text)

          const chunks: Buffer[] = []
          audioStream.on('data', (chunk: Buffer) => {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
          })
          audioStream.on('end', () => {
            try {
              tts.close()
            } catch {
              // ignore close errors
            }
            const audioBuffer = Buffer.concat(chunks)
            if (audioBuffer.length > 0) {
              ttsMemoryCache.set(cacheKey, audioBuffer)
              res.setHeader('Content-Type', 'audio/mpeg')
              res.setHeader('Content-Length', audioBuffer.length)
              res.setHeader('Cache-Control', 'public, max-age=86400')
              res.end(audioBuffer)
            } else {
              res.statusCode = 502
              res.end('Empty TTS stream')
            }
          })
          audioStream.on('error', (err: Error) => {
            try {
              tts.close()
            } catch {
              // ignore
            }
            if (!res.headersSent) {
              res.statusCode = 500
              res.end(err.message || 'TTS stream error')
            }
          })
        } catch (err: any) {
          if (!res.headersSent) {
            res.statusCode = 500
            res.end(err?.message || 'TTS error')
          }
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), humanNeuralTtsPlugin()],
})

