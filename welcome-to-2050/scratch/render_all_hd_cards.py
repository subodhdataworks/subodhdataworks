import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 600, 320

def get_font(size, bold=False):
    font_paths = [
        'C:/Windows/Fonts/segoeuib.ttf' if bold else 'C:/Windows/Fonts/segoeui.ttf',
        'C:/Windows/Fonts/consolab.ttf' if bold else 'C:/Windows/Fonts/consola.ttf',
        'C:/Windows/Fonts/arialbd.ttf' if bold else 'C:/Windows/Fonts/arial.ttf',
    ]
    for p in font_paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()

def create_card_bg(color1, color2, style='gradient'):
    img = Image.new('RGB', (W, H), color1)
    top = Image.new('RGB', (W, H), color2)
    mask = Image.new('L', (W, H))
    mask_data = []
    for y in range(H):
        for x in range(W):
            if style == 'radial':
                dx = (x - W / 2) / (W / 2)
                dy = (y - H / 2) / (H / 2)
                dist = math.sqrt(dx * dx + dy * dy)
                val = int(max(0, min(255, 255 * (1.0 - dist * 0.7))))
            else:
                factor = (x / W * 0.6) + (y / H * 0.4)
                val = int(255 * factor)
            mask_data.append(val)
    mask.putdata(mask_data)
    img.paste(top, (0, 0), mask)
    
    # Add subtle tech grid
    draw = ImageDraw.Draw(img, 'RGBA')
    for gx in range(0, W, 45):
        draw.line([(gx, 0), (gx, H)], fill=(255, 255, 255, 14), width=1)
    for gy in range(0, H, 45):
        draw.line([(0, gy), (W, gy)], fill=(255, 255, 255, 14), width=1)
    
    return img

def draw_glass_terminal(img, x, y, w, h, title, lines, header_color=(30, 41, 59)):
    draw = ImageDraw.Draw(img, 'RGBA')
    # Terminal frame
    draw.rounded_rectangle([x, y, x + w, y + h], radius=16, fill=(15, 23, 42, 230), outline=(56, 189, 248, 140), width=2)
    # Header
    draw.rounded_rectangle([x, y, x + w, y + 36], radius=16, fill=header_color)
    draw.rectangle([x, y + 20, x + w, y + 36], fill=header_color)
    # 3 traffic dots
    draw.ellipse([x + 14, y + 12, x + 24, y + 22], fill=(239, 68, 68))
    draw.ellipse([x + 30, y + 12, x + 40, y + 22], fill=(245, 158, 11))
    draw.ellipse([x + 46, y + 12, x + 56, y + 22], fill=(16, 185, 129))
    # Title
    font_hdr = get_font(16, bold=True)
    draw.text((x + 70, y + 8), title, font=font_hdr, fill=(226, 232, 240))
    # Code Lines
    font_code = get_font(22, bold=True)
    cur_y = y + 54
    for text, color in lines:
        draw.text((x + 24, cur_y), text, font=font_code, fill=color)
        cur_y += 38

# Load Python 3D Logo
py_logo_path = 'public/images/arena/python/py_logo_3d.png'
py_logo = Image.open(py_logo_path).convert('RGBA') if os.path.exists(py_logo_path) else None

# Load Boy and Robot
boy_path = 'public/images/arena/crops/hd_boy.png'
robot_path = 'public/images/arena/crops/hd_robot.png'
boy_img = Image.open(boy_path).convert('RGBA') if os.path.exists(boy_path) else None
robot_img = Image.open(robot_path).convert('RGBA') if os.path.exists(robot_path) else None

def paste_centered(dst, src, pos, size):
    if not src:
        return
    resized = src.resize(size, Image.Resampling.LANCZOS)
    dst.paste(resized, pos, resized)

# =========================================================================
# 1. BASICS CARDS (15 CARDS)
# =========================================================================

# Card 1: Python Introduction & Setup
im = create_card_bg((12, 74, 110), (14, 165, 233))
if boy_img:
    paste_centered(im, boy_img, (20, 20), (280, 280))
if py_logo:
    paste_centered(im, py_logo, (360, 60), (190, 190))
im.save('public/images/arena/basics/01_intro_setup.jpg', quality=95)

# Card 2: Syntax, Comments & Keywords
im = create_card_bg((30, 27, 75), (109, 40, 217))
draw_glass_terminal(im, 40, 35, 520, 250, 'main.py — Terminal', [
    ('>>> print("Hello Python!")', (56, 189, 248)),
    ('# This is a Python comment', (148, 163, 184)),
    ('>>> def start_journey():', (244, 114, 182)),
    ('...     return "Success 100%"', (74, 222, 128))
])
im.save('public/images/arena/basics/02_syntax_comments.jpg', quality=95)

# Card 3: Variables & Naming
im = create_card_bg((120, 53, 15), (217, 119, 6))
draw = ImageDraw.Draw(im, 'RGBA')
# 3D Treasure Chest & variable sign
draw.rounded_rectangle([70, 60, 530, 260], radius=24, fill=(180, 83, 9, 220), outline=(254, 243, 199), width=3)
draw.rounded_rectangle([100, 90, 500, 230], radius=16, fill=(15, 23, 42, 230))
font_title = get_font(30, bold=True)
font_sub = get_font(24, bold=True)
draw.text((130, 110), 'Variables & Values', font=font_title, fill=(251, 191, 36))
draw.text((130, 155), 'x = 10', font=font_sub, fill=(56, 189, 248))
draw.text((260, 155), 'hero = "NOVA"', font=font_sub, fill=(167, 139, 250))
draw.text((130, 190), 'level = 5', font=font_sub, fill=(52, 211, 153))
if py_logo:
    paste_centered(im, py_logo, (450, 40), (120, 120))
im.save('public/images/arena/basics/03_variables_naming.jpg', quality=95)

# Card 4: Data Types
im = create_card_bg((15, 23, 42), (59, 130, 246))
draw = ImageDraw.Draw(im, 'RGBA')
# Draw 3 large 3D blocks: int, str, bool, float
blocks = [
    (60, 80, 'int', (234, 88, 12), '42'),
    (190, 80, 'str', (16, 185, 129), '"data"'),
    (320, 80, 'bool', (139, 92, 246), 'True'),
    (450, 80, 'float', (14, 165, 233), '3.14'),
]
for bx, by, lbl, col, val in blocks:
    draw.rounded_rectangle([bx, by, bx + 105, by + 160], radius=18, fill=col, outline=(255, 255, 255, 180), width=2)
    draw.text((bx + 20, by + 20), lbl, font=get_font(24, bold=True), fill=(255, 255, 255))
    draw.rounded_rectangle([bx + 10, by + 85, bx + 95, by + 145], radius=10, fill=(15, 23, 42, 220))
    draw.text((bx + 18, by + 100), val, font=get_font(18, bold=True), fill=(253, 224, 71))
im.save('public/images/arena/basics/04_data_types.jpg', quality=95)

# Card 5: Input & Output
im = create_card_bg((3, 105, 161), (14, 116, 144))
draw_glass_terminal(im, 40, 35, 520, 250, 'Input / Output Stream', [
    ('name = input("Enter your name: ")', (56, 189, 248)),
    ('>>> User typed: "Subodh"', (250, 204, 21)),
    ('print(f"Welcome to Future IT, {name}!")', (74, 222, 128)),
    ('Output: Welcome to Future IT, Subodh!', (244, 114, 182))
])
im.save('public/images/arena/basics/05_input_output.jpg', quality=95)

# Card 6: Operators
im = create_card_bg((15, 23, 42), (16, 185, 129))
draw = ImageDraw.Draw(im, 'RGBA')
ops = [
    (60, 80, '+', (59, 130, 246), 'Add'),
    (190, 80, '−', (239, 68, 68), 'Sub'),
    (320, 80, '×', (245, 158, 11), 'Mul'),
    (450, 80, '÷', (168, 85, 247), 'Div'),
]
for bx, by, op, col, desc in ops:
    draw.rounded_rectangle([bx, by, bx + 105, by + 160], radius=20, fill=col, outline=(255, 255, 255), width=3)
    draw.text((bx + 32, by + 15), op, font=get_font(46, bold=True), fill=(255, 255, 255))
    draw.rounded_rectangle([bx + 10, by + 95, bx + 95, by + 145], radius=10, fill=(15, 23, 42, 200))
    draw.text((bx + 26, by + 108), desc, font=get_font(18, bold=True), fill=(255, 255, 255))
im.save('public/images/arena/basics/06_operators.jpg', quality=95)

# Card 7: Type Conversion
im = create_card_bg((88, 28, 135), (147, 51, 234))
draw_glass_terminal(im, 40, 35, 520, 250, 'Type Casting Workshop', [
    ('num_str = "100"      # type: str', (148, 163, 184)),
    ('num_int = int(num_str) # -> 100', (52, 211, 153)),
    ('num_flt = float(100)   # -> 100.0', (56, 189, 248)),
    ('result  = str(num_flt) # -> "100.0"', (244, 114, 182))
])
im.save('public/images/arena/basics/07_type_conversion.jpg', quality=95)

# Card 8: Conditions (if/else)
im = create_card_bg((15, 23, 42), (225, 29, 72))
draw = ImageDraw.Draw(im, 'RGBA')
conds = [
    (60, 90, 'if', (239, 68, 68), 'score >= 90', 'Grade: A+'),
    (230, 90, 'elif', (245, 158, 11), 'score >= 70', 'Passed'),
    (400, 90, 'else', (59, 130, 246), 'retry()', 'Keep Going'),
]
for bx, by, tag, col, cond, res in conds:
    draw.rounded_rectangle([bx, by, bx + 145, by + 145], radius=16, fill=col, outline=(255, 255, 255, 200), width=2)
    draw.text((bx + 45, by + 10), tag, font=get_font(32, bold=True), fill=(255, 255, 255))
    draw.rounded_rectangle([bx + 10, by + 65, bx + 135, by + 135], radius=10, fill=(15, 23, 42, 230))
    draw.text((bx + 16, by + 74), cond, font=get_font(15, bold=True), fill=(253, 224, 71))
    draw.text((bx + 16, by + 102), res, font=get_font(15, bold=True), fill=(52, 211, 153))
im.save('public/images/arena/basics/08_conditions.jpg', quality=95)

# Card 9: Loops
im = create_card_bg((6, 78, 59), (16, 185, 129))
draw_glass_terminal(im, 40, 35, 520, 250, 'Iteration Engine — Loops', [
    ('for level in range(1, 11):', (56, 189, 248)),
    ('    print(f"Cleared Level {level}!")', (74, 222, 128)),
    ('while energy > 0:', (244, 114, 182)),
    ('    keep_coding()', (253, 224, 71))
])
im.save('public/images/arena/basics/09_loops.jpg', quality=95)

# Card 10: Strings
im = create_card_bg((15, 23, 42), (99, 102, 241))
draw = ImageDraw.Draw(im, 'RGBA')
draw.rounded_rectangle([60, 60, 540, 260], radius=24, fill=(30, 27, 75, 230), outline=(129, 140, 248), width=3)
draw.text((100, 95), '"Hello, Future World!"', font=get_font(34, bold=True), fill=(250, 204, 21))
draw.text((100, 155), '.upper()  -> "HELLO, FUTURE WORLD!"', font=get_font(18, bold=True), fill=(56, 189, 248))
draw.text((100, 195), '.replace() -> "Hello, Python World!"', font=get_font(18, bold=True), fill=(52, 211, 153))
im.save('public/images/arena/basics/10_strings.jpg', quality=95)

# Card 11: Lists
im = create_card_bg((15, 23, 42), (14, 165, 233))
draw = ImageDraw.Draw(im, 'RGBA')
draw.rounded_rectangle([50, 60, 550, 260], radius=20, fill=(8, 47, 73, 240), outline=(56, 189, 248), width=3)
draw.text((80, 90), 'skills = [ "Python", "SQL", "AI" ]', font=get_font(26, bold=True), fill=(255, 255, 255))
draw.rounded_rectangle([80, 150, 200, 220], radius=12, fill=(2, 132, 199))
draw.text((100, 170), '[0] Python', font=get_font(18, bold=True), fill=(255, 255, 255))
draw.rounded_rectangle([220, 150, 340, 220], radius=12, fill=(16, 185, 129))
draw.text((245, 170), '[1] SQL', font=get_font(18, bold=True), fill=(255, 255, 255))
draw.rounded_rectangle([360, 150, 480, 220], radius=12, fill=(168, 85, 247))
draw.text((395, 170), '[2] AI', font=get_font(18, bold=True), fill=(255, 255, 255))
im.save('public/images/arena/basics/11_lists.jpg', quality=95)

# Card 12: Tuples
im = create_card_bg((88, 28, 135), (124, 58, 237))
draw = ImageDraw.Draw(im, 'RGBA')
draw.rounded_rectangle([50, 60, 550, 260], radius=20, fill=(46, 16, 101, 240), outline=(192, 132, 252), width=3)
draw.text((80, 90), 'coordinates = ( 1920, 1080 )', font=get_font(28, bold=True), fill=(250, 204, 21))
draw.text((80, 155), 'Immutable — Safe & Fast Data Storage', font=get_font(20, bold=True), fill=(226, 232, 240))
draw.text((80, 195), 'width, height = coordinates', font=get_font(20, bold=True), fill=(52, 211, 153))
im.save('public/images/arena/basics/12_tuples.jpg', quality=95)

# Card 13: Sets
im = create_card_bg((15, 23, 42), (236, 72, 153))
draw = ImageDraw.Draw(im, 'RGBA')
draw.rounded_rectangle([50, 60, 550, 260], radius=20, fill=(80, 7, 36, 240), outline=(244, 114, 182), width=3)
draw.text((80, 90), 'unique_ids = { 101, 102, 103 }', font=get_font(28, bold=True), fill=(255, 255, 255))
draw.text((80, 155), 'Automatically removes duplicates!', font=get_font(20, bold=True), fill=(253, 224, 71))
draw.text((80, 195), 'union() | intersection() | difference()', font=get_font(18, bold=True), fill=(56, 189, 248))
im.save('public/images/arena/basics/13_sets.jpg', quality=95)

# Card 14: Dictionaries
im = create_card_bg((15, 23, 42), (245, 158, 11))
draw_glass_terminal(im, 40, 35, 520, 250, 'Key - Value Pairs', [
    ('student = {', (255, 255, 255)),
    ('    "name": "NOVA",', (56, 189, 248)),
    ('    "role": "AI Tutor",', (74, 222, 128)),
    ('    "level": 10', (250, 204, 21)),
    ('}', (255, 255, 255))
])
im.save('public/images/arena/basics/14_dictionaries.jpg', quality=95)

# Card 15: Functions
im = create_card_bg((30, 41, 59), (59, 130, 246))
draw_glass_terminal(im, 40, 35, 520, 250, 'functions.py', [
    ('def calculate_bonus(salary, score):', (56, 189, 248)),
    ('    bonus = salary * (score / 100)', (250, 204, 21)),
    ('    return bonus', (244, 114, 182)),
    ('>>> calculate_bonus(1200000, 15) -> 180,000', (74, 222, 128))
])
im.save('public/images/arena/basics/15_functions.jpg', quality=95)

print('Successfully rendered all 15 Basics cards in HD!')

# =========================================================================
# 2. ADVANCED CARDS (10 CARDS)
# =========================================================================

# Card 1: Modules & Packages
im = create_card_bg((15, 23, 42), (2, 132, 199))
draw = ImageDraw.Draw(im, 'RGBA')
mods = [
    (60, 90, 'os', (34, 197, 94)),
    (180, 90, 'sys', (168, 85, 247)),
    (300, 90, 'random', (239, 68, 68)),
    (420, 90, 'math', (59, 130, 246)),
]
for mx, my, mname, mcol in mods:
    draw.rounded_rectangle([mx, my, mx + 105, my + 130], radius=16, fill=mcol, outline=(255, 255, 255, 200), width=2)
    draw.text((mx + 18, my + 45), mname, font=get_font(22, bold=True), fill=(255, 255, 255))
if py_logo:
    paste_centered(im, py_logo, (240, 190), (100, 100))
im.save('public/images/arena/advanced/01_modules_packages.jpg', quality=95)

# Card 2: Exceptions & Debugging
im = create_card_bg((88, 28, 135), (219, 39, 119))
draw_glass_terminal(im, 40, 35, 520, 250, 'try ... except debugger', [
    ('try:', (244, 114, 182)),
    ('    result = 100 / user_input', (255, 255, 255)),
    ('except ZeroDivisionError as err:', (239, 68, 68)),
    ('    print("Handled gracefully by NOVA!")', (74, 222, 128))
])
im.save('public/images/arena/advanced/02_exceptions_debug.jpg', quality=95)

# Card 3: File Handling
im = create_card_bg((12, 74, 110), (2, 132, 199))
draw = ImageDraw.Draw(im, 'RGBA')
files = [
    (70, 85, 'TXT', (245, 158, 11), 'data.txt'),
    (230, 85, 'CSV', (16, 185, 129), 'sales.csv'),
    (390, 85, 'JSON', (147, 51, 234), 'config.json'),
]
for fx, fy, ftype, fcol, fname in files:
    draw.rounded_rectangle([fx, fy, fx + 140, fy + 140], radius=18, fill=fcol, outline=(255, 255, 255), width=2)
    draw.text((fx + 38, fy + 20), ftype, font=get_font(28, bold=True), fill=(255, 255, 255))
    draw.rounded_rectangle([fx + 10, by:=fy + 75, fx + 130, by + 50], radius=10, fill=(15, 23, 42, 220))
    draw.text((fx + 22, by + 14), fname, font=get_font(16, bold=True), fill=(253, 224, 71))
im.save('public/images/arena/advanced/03_file_handling.jpg', quality=95)

# Card 4: Object-Oriented Programming (OOP)
im = create_card_bg((6, 78, 59), (16, 185, 129))
draw_glass_terminal(im, 40, 35, 520, 250, 'OOP — Classes & Objects', [
    ('class DataEngineer(Student):', (56, 189, 248)),
    ('    def __init__(self, name, skills):', (244, 114, 182)),
    ('        self.name = name', (253, 224, 71)),
    ('        self.skills = ["Python", "SQL"]', (74, 222, 128))
])
im.save('public/images/arena/advanced/04_oop.jpg', quality=95)

# Card 5: Data Processing with Pandas
im = create_card_bg((15, 23, 42), (234, 88, 12))
draw_glass_terminal(im, 40, 35, 520, 250, 'import pandas as pd, numpy as np', [
    ('df = pd.read_csv("companies.csv")', (56, 189, 248)),
    ('df["Salary_LPA"] = np.random.randint(6, 15)', (250, 204, 21)),
    ('df.groupby("Role")["Salary_LPA"].mean()', (74, 222, 128)),
    ('Average Placement: 10.5 LPA', (244, 114, 182))
])
im.save('public/images/arena/advanced/05_pandas_numpy.jpg', quality=95)

# Card 6: Data Visualization
im = create_card_bg((76, 29, 149), (219, 39, 119))
draw = ImageDraw.Draw(im, 'RGBA')
draw.rounded_rectangle([50, 50, 550, 270], radius=20, fill=(15, 23, 42, 240), outline=(244, 114, 182), width=3)
# Draw 3D bar chart
bars = [
    (90, 110, 50, (56, 189, 248)),
    (160, 70, 50, (52, 211, 153)),
    (230, 140, 50, (251, 191, 36)),
    (300, 50, 50, (244, 114, 182)),
    (370, 90, 50, (168, 85, 247)),
    (440, 30, 50, (34, 197, 94)),
]
for bx, top_y, bw, bcol in bars:
    draw.rounded_rectangle([bx, top_y + 40, bx + bw, 240], radius=8, fill=bcol)
# Line connecting tops
pts = [(bx + bw//2, top_y + 40) for bx, top_y, bw, bcol in bars]
for i in range(len(pts)-1):
    draw.line([pts[i], pts[i+1]], fill=(255, 255, 255), width=3)
im.save('public/images/arena/advanced/06_data_viz.jpg', quality=95)

# Card 7: Advanced Data Structures
im = create_card_bg((30, 27, 75), (37, 99, 235))
draw_glass_terminal(im, 40, 35, 520, 250, 'Advanced Data Structures', [
    ('squares = [x**2 for x in range(10)]', (56, 189, 248)),
    ('matrix  = [[1, 2], [3, 4]]', (250, 204, 21)),
    ('mapping = {k: v for k, v in zip(keys, vals)}', (74, 222, 128)),
    ('heapq, deque, namedtuple ready', (244, 114, 182))
])
im.save('public/images/arena/advanced/07_adv_data_structures.jpg', quality=95)

# Card 8: APIs & Web Scraping
im = create_card_bg((6, 78, 59), (5, 150, 105))
draw_glass_terminal(im, 40, 35, 520, 250, 'import requests, BeautifulSoup', [
    ('response = requests.get("https://api.jobs.com")', (56, 189, 248)),
    ('data = response.json()  # Status: 200 OK', (74, 222, 128)),
    ('soup = BeautifulSoup(html, "html.parser")', (250, 204, 21)),
    ('Live Jobs Scraped: 500+ Openings', (244, 114, 182))
])
im.save('public/images/arena/advanced/08_apis_scraping.jpg', quality=95)

# Card 9: Database Connectivity
im = create_card_bg((120, 53, 15), (217, 119, 6))
draw_glass_terminal(im, 40, 35, 520, 250, 'import sqlite3, pymysql', [
    ('conn = sqlite3.connect("future_career.db")', (56, 189, 248)),
    ('cursor = conn.cursor()', (148, 163, 184)),
    ('cursor.execute("SELECT * FROM placements")', (250, 204, 21)),
    ('Result: 100% Placement Support Connected', (74, 222, 128))
])
im.save('public/images/arena/advanced/09_database.jpg', quality=95)

# Card 10: Real-World Projects
im = create_card_bg((15, 23, 42), (124, 58, 237))
draw = ImageDraw.Draw(im, 'RGBA')
draw.rounded_rectangle([50, 50, 550, 270], radius=24, fill=(15, 23, 42, 230), outline=(168, 85, 247), width=3)
draw.text((80, 85), 'Real-World Capstone Projects', font=get_font(28, bold=True), fill=(255, 255, 255))
draw.text((80, 140), '1. E-Commerce Customer Analytics', font=get_font(20, bold=True), fill=(56, 189, 248))
draw.text((80, 180), '2. Live Stock Market Prediction Model', font=get_font(20, bold=True), fill=(52, 211, 153))
draw.text((80, 220), '3. Automated Resume AI Matcher', font=get_font(20, bold=True), fill=(251, 191, 36))
im.save('public/images/arena/advanced/10_real_world_projects.jpg', quality=95)

print('Successfully rendered all 10 Advanced cards in HD!')
