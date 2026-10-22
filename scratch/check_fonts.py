import re

with open('src/index.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if '--font-' in line:
        print(f"L{i+1}: {line.strip()}")
