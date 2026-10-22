import glob

files = glob.glob('src/**/*.jsx', recursive=True) + glob.glob('src/**/*.js', recursive=True)
errors = []

for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    open_curly = content.count('{')
    close_curly = content.count('}')
    if open_curly != close_curly:
        errors.append(f"{f}: Curly brace mismatch ({open_curly} open vs {close_curly} close)")
    open_paren = content.count('(')
    close_paren = content.count(')')
    if open_paren != close_paren:
        errors.append(f"{f}: Parenthesis mismatch ({open_paren} open vs {close_paren} close)")

if errors:
    for e in errors:
        print("ERROR:", e)
else:
    print(f"All {len(files)} files checked successfully! Braces and parens balanced.")
