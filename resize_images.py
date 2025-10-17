from PIL import Image

# List your images
images = [
    'python-logo-only.webp',
    'Matlab_Logo.webp',
    'Github-desktop-logo-symbol.svg.webp'
]

# Resize each to 96x96
for img_name in images:
    img = Image.open(img_name)
    img_resized = img.resize((96, 96))
    img_resized.save(img_name)
    print(f"Resized {img_name}")

print("Done!")