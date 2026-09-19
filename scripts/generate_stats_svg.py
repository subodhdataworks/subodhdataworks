import json
import os

HERE = os.path.dirname(__file__)
CONTRIB_PATH = os.path.join(HERE, "..", "data", "contributions.json")

total_contribs = 45
current_streak = 3
longest_streak = 3

if os.path.exists(CONTRIB_PATH):
    try:
        with open(CONTRIB_PATH, "r", encoding="utf-8") as f:
            data = json.load(f)
            total_contribs = data.get("total_contributions", total_contribs)
            current_streak = data.get("current_streak", {}).get("length", current_streak)
            longest_streak = data.get("longest_streak", {}).get("length", longest_streak)
    except Exception as e:
        print("Warning loading contributions.json:", e)

stats_svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="465" height="195" viewBox="0 0 465 195" fill="none">
  <style>
    .header {{ font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #58a6ff; }}
    .stat {{ font: 600 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: #c9d1d9; }}
    .stat-val {{ font: 700 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: #39d353; }}
  </style>
  <rect x="0.5" y="0.5" width="464" height="194" rx="10" fill="#0d1117" stroke="#30363d"/>
  <g transform="translate(25, 35)">
    <text x="0" y="0" class="header">Subodh's GitHub Stats</text>
  </g>
  <g transform="translate(25, 55)">
    <line x1="0" y1="0" x2="415" y2="0" stroke="#21262d" stroke-width="1"/>
    
    <g transform="translate(0, 25)">
      <circle cx="8" cy="6" r="4.5" fill="#39d353"/>
      <text x="24" y="10" class="stat">Total Contributions:</text>
      <text x="330" y="10" class="stat-val">{total_contribs}</text>
    </g>
    
    <g transform="translate(0, 52)">
      <circle cx="8" cy="6" r="4.5" fill="#58a6ff"/>
      <text x="24" y="10" class="stat">Public Repositories:</text>
      <text x="330" y="10" class="stat-val">6</text>
    </g>
    
    <g transform="translate(0, 79)">
      <circle cx="8" cy="6" r="4.5" fill="#f1e05a"/>
      <text x="24" y="10" class="stat">Current Streak:</text>
      <text x="330" y="10" class="stat-val">{current_streak} days</text>
    </g>

    <g transform="translate(0, 106)">
      <circle cx="8" cy="6" r="4.5" fill="#ffa657"/>
      <text x="24" y="10" class="stat">Core Domain:</text>
      <text x="260" y="10" class="stat-val" fill="#58a6ff">Data &amp; BI Analytics</text>
    </g>
  </g>
</svg>"""

langs_svg = """<svg xmlns="http://www.w3.org/2000/svg" width="380" height="195" viewBox="0 0 380 195" fill="none">
  <style>
    .header { font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #58a6ff; }
    .lang-name { font: 600 13px 'Segoe UI', Ubuntu, Sans-Serif; fill: #c9d1d9; }
    .lang-pct { font: 600 13px 'Segoe UI', Ubuntu, Sans-Serif; fill: #8b949e; }
  </style>
  <rect x="0.5" y="0.5" width="379" height="194" rx="10" fill="#0d1117" stroke="#30363d"/>
  <g transform="translate(25, 35)">
    <text x="0" y="0" class="header">Most Used Languages</text>
  </g>
  <g transform="translate(25, 55)">
    <line x1="0" y1="0" x2="330" y2="0" stroke="#21262d" stroke-width="1"/>

    <!-- Progress bar -->
    <g transform="translate(0, 15)">
      <rect x="0" y="0" width="330" height="10" rx="5" fill="#21262d"/>
      <rect x="0" y="0" width="235" height="10" rx="5" fill="#DA5B0B"/>
      <rect x="237" y="0" width="48" height="10" fill="#3572A5"/>
      <rect x="287" y="0" width="28" height="10" fill="#F2C811"/>
      <rect x="317" y="0" width="13" height="10" rx="5" fill="#3178C6"/>
    </g>

    <!-- Legend Row 1 -->
    <g transform="translate(0, 45)">
      <circle cx="6" cy="6" r="5" fill="#DA5B0B"/>
      <text x="20" y="10" class="lang-name">Jupyter Notebook</text>
      <text x="135" y="10" class="lang-pct">71.2%</text>

      <circle cx="185" cy="6" r="5" fill="#3572A5"/>
      <text x="200" y="10" class="lang-name">Python</text>
      <text x="290" y="10" class="lang-pct">14.5%</text>
    </g>

    <!-- Legend Row 2 -->
    <g transform="translate(0, 75)">
      <circle cx="6" cy="6" r="5" fill="#F2C811"/>
      <text x="20" y="10" class="lang-name">Power BI / DAX</text>
      <text x="135" y="10" class="lang-pct">8.5%</text>

      <circle cx="185" cy="6" r="5" fill="#3178C6"/>
      <text x="200" y="10" class="lang-name">TypeScript</text>
      <text x="290" y="10" class="lang-pct">5.8%</text>
    </g>
  </g>
</svg>"""

out_stats = os.path.join(HERE, "..", "github-stats.svg")
out_langs = os.path.join(HERE, "..", "top-langs.svg")

with open(out_stats, "w", encoding="utf-8") as f:
    f.write(stats_svg)

with open(out_langs, "w", encoding="utf-8") as f:
    f.write(langs_svg)

print("Generated github-stats.svg and top-langs.svg successfully!")
