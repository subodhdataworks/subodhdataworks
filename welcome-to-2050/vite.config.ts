import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { spawn } from 'child_process'
import path from 'path'

const ttsMemoryCache = new Map<string, Buffer>()

function humanNeuralTtsPlugin(): Plugin {
  return {
    name: 'human-neural-tts-middleware',
    configureServer(server) {
      server.middlewares.use('/api/human-tts', async (req, res) => {
        try {
          const url = new URL(req.url || '', 'http://localhost')
          const lang = url.searchParams.get('lang') === 'hi' ? 'hi' : 'en'
          const requestedVoice = url.searchParams.get('voice')
          const text = (url.searchParams.get('text') || '').trim()

          if (!text) {
            res.statusCode = 400
            res.end('Missing text')
            return
          }

          // PERMANENTLY LOCKED DEFAULT: hi-IN-SwaraNeural (Authentic Indian Female Teacher Voice)
          const voiceName = 'hi-IN-SwaraNeural'
          const cacheKey = `${voiceName}::${text}`

          const cached = ttsMemoryCache.get(cacheKey)
          if (cached) {
            res.setHeader('Content-Type', 'audio/mpeg')
            res.setHeader('Content-Length', cached.length)
            res.setHeader('Cache-Control', 'public, max-age=86400')
            res.end(cached)
            return
          }

          const scriptPath = path.resolve(process.cwd(), 'scripts/edge_tts_stream.py')
          const py = spawn('python', [scriptPath, voiceName, text])

          const chunks: Buffer[] = []
          py.stdout.on('data', (chunk: Buffer) => {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
          })

          py.on('close', (code) => {
            const audioBuffer = Buffer.concat(chunks)
            if (code === 0 && audioBuffer.length > 0) {
              ttsMemoryCache.set(cacheKey, audioBuffer)
              res.setHeader('Content-Type', 'audio/mpeg')
              res.setHeader('Content-Length', audioBuffer.length)
              res.setHeader('Cache-Control', 'public, max-age=86400')
              res.end(audioBuffer)
            } else {
              if (!res.headersSent) {
                res.statusCode = 502
                res.end('Empty TTS stream')
              }
            }
          })

          py.on('error', (err) => {
            if (!res.headersSent) {
              res.statusCode = 500
              res.end(err.message || 'TTS process error')
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
  build: {
    sourcemap: false,
  },
})
