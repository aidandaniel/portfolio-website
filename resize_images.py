from PIL import Image

# List your images
images = [
    "225996.webp"
]

# Resize each to 96x96
for img_name in images:
    img = Image.open(img_name)
    img_resized = img.resize((96, 96))
    img_resized.save(img_name)
    print(f"Resized {img_name}")

print("Done!")