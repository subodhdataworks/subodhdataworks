import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

os.makedirs('scratch', exist_ok=True)

font_dir = r"C:\Windows\Fonts"
try:
    font_badge = ImageFont.truetype(os.path.join(font_dir, "segoeuib.ttf"), 13)
    font_title = ImageFont.truetype(os.path.join(font_dir, "segoeuib.ttf"), 36)
    font_sub_bold = ImageFont.truetype(os.path.join(font_dir, "segoeuib.ttf"), 20)
    font_desc = ImageFont.truetype(os.path.join(font_dir, "segoeui.ttf"), 13)
    font_step_title = ImageFont.truetype(os.path.join(font_dir, "segoeuib.ttf"), 11)
    font_step_sub = ImageFont.truetype(os.path.join(font_dir, "segoeuib.ttf"), 13)
    font_pill = ImageFont.truetype(os.path.join(font_dir, "segoeuib.ttf"), 11)
except Exception:
    font_badge = font_title = font_sub_bold = font_desc = font_step_title = font_step_sub = font_pill = ImageFont.load_default()

W, H = 1280, 360

def create_background(start_hex, end_hex, glow_hex=None, glow_pos=None):
    base = Image.new("RGBA", (W, H))
    draw = ImageDraw.Draw(base)
    
    r1, g1, b1 = int(start_hex[1:3], 16), int(start_hex[3:5], 16), int(start_hex[5:7], 16)
    r2, g2, b2 = int(end_hex[1:3], 16), int(end_hex[3:5], 16), int(end_hex[5:7], 16)
    
    for x in range(W):
        ratio = x / W
        r = int(r1 + (r2 - r1) * ratio)
        g = int(g1 + (g2 - g1) * ratio)
        b = int(b1 + (b2 - b1) * ratio)
        draw.line([(x, 0), (x, H)], fill=(r, g, b, 255))
        
    if glow_hex and glow_pos:
        gr, gg, gb = int(glow_hex[1:3], 16), int(glow_hex[3:5], 16), int(glow_hex[5:7], 16)
        glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        glow_draw = ImageDraw.Draw(glow_layer)
        gx, gy, gr_radius = glow_pos
        glow_draw.ellipse([gx - gr_radius, gy - gr_radius, gx + gr_radius, gy + gr_radius], fill=(gr, gg, gb, 90))
        glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(80))
        base = Image.alpha_composite(base, glow_layer)
        
    return base

def blend_photo(base, photo_path, target_x_offset=740):
    photo = Image.open(photo_path).convert("RGBA")
    pw, ph = photo.size
    scale = H / ph
    new_w = int(pw * scale)
    photo_scaled = photo.resize((new_w, H), Image.Resampling.LANCZOS)
    
    cx = new_w // 2
    crop_w = W - target_x_offset + 120
    left = max(0, cx - crop_w // 2)
    right = min(new_w, left + crop_w)
    photo_cropped = photo_scaled.crop((left, 0, right, H))
    pc_w, pc_h = photo_cropped.size
    
    mask = Image.new("L", (pc_w, pc_h), 255)
    fade_width = 170
    for x in range(fade_width):
        alpha = int(255 * (x / fade_width) ** 1.8)
        for y in range(pc_h):
            mask.putpixel((x, y), alpha)
            
    photo_cropped.putalpha(mask)
    base.paste(photo_cropped, (target_x_offset - 60, 0), photo_cropped)
    return base

# BANNER 1: MALE STUDENT
base1 = create_background("#061026", "#0c1d3f", glow_hex="#0284c7", glow_pos=(800, 180, 280))
photo_male = r"C:\Users\trend\.gemini\antigravity\brain\cd51469a-fb95-4a84-a350-2c2fd8149ae9\real_student_male_1791610428934.jpg"
banner1 = blend_photo(base1, photo_male, target_x_offset=750)
draw1 = ImageDraw.Draw(banner1)

# Badge
draw1.rounded_rectangle([52, 26, 425, 54], radius=14, fill=(15, 23, 42, 210), outline=(56, 189, 248, 140), width=1)
draw1.ellipse([64, 37, 71, 44], fill=(16, 185, 129))
draw1.text((80, 33), "FUTURE IT INDUSTRY  •  AFFILIATE PROGRAM", font=font_badge, fill=(240, 249, 255))

# Title
draw1.text((50, 68), "Earn While You Learn!", font=font_title, fill=(255, 255, 255))

# Sub Highlight
draw1.text((52, 118), "Universal Flat ₹100 Per Successful Enrollment", font=font_sub_bold, fill=(251, 191, 36))

# Description
draw1.text((52, 152), "Invite friends & classmates to Python, GenAI and Data Science courses.", font=font_desc, fill=(186, 220, 255))
draw1.text((52, 172), "Real-time tracking with instant 24/7 IMPS payout direct to your bank account.", font=font_desc, fill=(147, 197, 253))

# 3 Step Badges
steps1 = [
    ("STEP 1", "Share Invite Link", "#0284c7"),
    ("STEP 2", "Student Enrolls", "#7c3aed"),
    ("STEP 3", "Earn ₹100 Flat", "#059669")
]
sx = 52
sy = 208
for i, (tag, label, color) in enumerate(steps1):
    cr = int(color[1:3], 16)
    cg = int(color[3:5], 16)
    cb = int(color[5:7], 16)
    draw1.rounded_rectangle([sx, sy, sx + 185, sy + 58], radius=12, fill=(15, 23, 42, 190), outline=(cr, cg, cb, 150), width=1)
    draw1.rounded_rectangle([sx, sy, sx + 185, sy + 5], radius=2, fill=(cr, cg, cb, 255))
    draw1.text((sx + 14, sy + 14), tag, font=font_step_title, fill=(cr, cg, cb))
    draw1.text((sx + 14, sy + 32), label, font=font_step_sub, fill=(255, 255, 255))
    sx += 195
    if i < 2:
        draw1.text((sx - 10, sy + 22), "->", font=font_badge, fill=(148, 163, 184))

# Bottom Trust Strip
draw1.text((54, 298), "● 100% Genuine Payouts   •   Instant IMPS Payout (60s)   •   Zero Transaction Fees", font=font_pill, fill=(52, 211, 153))

banner1_path = r"c:\Users\trend\Downloads\Github\welcome-to-2050\public\images\affiliate\affiliate_banner_male_real.jpg"
banner1.convert("RGB").save(banner1_path, quality=95)

# BANNER 2: FEMALE STUDENT
base2 = create_background("#061324", "#0f253d", glow_hex="#10b981", glow_pos=(800, 180, 280))
photo_female = r"C:\Users\trend\.gemini\antigravity\brain\cd51469a-fb95-4a84-a350-2c2fd8149ae9\real_student_female_1791610460463.jpg"
banner2 = blend_photo(base2, photo_female, target_x_offset=750)
draw2 = ImageDraw.Draw(banner2)

# Badge
draw2.rounded_rectangle([52, 26, 445, 54], radius=14, fill=(15, 23, 42, 210), outline=(52, 211, 153, 140), width=1)
draw2.ellipse([64, 37, 71, 44], fill=(56, 189, 248))
draw2.text((80, 33), "INSTANT IMPS PAYOUT  •  DIRECT BANK TRANSFER", font=font_badge, fill=(240, 249, 255))

# Title
draw2.text((50, 68), "Zero Waiting. Instant Payout.", font=font_title, fill=(255, 255, 255))

# Sub Highlight
draw2.text((52, 118), "₹100 Commission Credited in 60 Seconds", font=font_sub_bold, fill=(52, 211, 153))

# Description
draw2.text((52, 152), "Withdraw your earnings directly to Google Pay, PhonePe, Paytm, or Bank Account.", font=font_desc, fill=(186, 220, 255))
draw2.text((52, 172), "Universal flat ₹100 per learner for all Students, Creators & Influencers.", font=font_desc, fill=(147, 197, 253))

# 3 Step Badges
steps2 = [
    ("TRANSFER", "Instant 60s IMPS", "#10b981"),
    ("SECURITY", "100% Genuine", "#0284c7"),
    ("CHARGES", "0% Payout Fee", "#f59e0b")
]
sx = 52
sy = 208
for i, (tag, label, color) in enumerate(steps2):
    cr = int(color[1:3], 16)
    cg = int(color[3:5], 16)
    cb = int(color[5:7], 16)
    draw2.rounded_rectangle([sx, sy, sx + 185, sy + 58], radius=12, fill=(15, 23, 42, 190), outline=(cr, cg, cb, 150), width=1)
    draw2.rounded_rectangle([sx, sy, sx + 185, sy + 5], radius=2, fill=(cr, cg, cb, 255))
    draw2.text((sx + 14, sy + 14), tag, font=font_step_title, fill=(cr, cg, cb))
    draw2.text((sx + 14, sy + 32), label, font=font_step_sub, fill=(255, 255, 255))
    sx += 195
    if i < 2:
        draw2.text((sx - 10, sy + 22), "•", font=font_badge, fill=(148, 163, 184))

# Bottom Trust Strip
draw2.text((54, 298), "● Automated 24/7 Processing   •   Verified by NPCI & Banks   •   Universal ₹100/lead", font=font_pill, fill=(56, 189, 248))

banner2_path = r"c:\Users\trend\Downloads\Github\welcome-to-2050\public\images\affiliate\affiliate_banner_female_real.jpg"
banner2.convert("RGB").save(banner2_path, quality=95)
print("Finished recreating clean banners!")
