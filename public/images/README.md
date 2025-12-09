# Profile Photo Instructions

## How to Add Your Photo

1. **Place your photo file** in this directory (`public/images/`)
2. **Name it**: `profile-photo.jpg` (or `.png`, `.webp`)
3. **Recommended size**: 
   - Minimum: 400x400 pixels
   - Recommended: 800x800 pixels or larger
   - Square aspect ratio works best
4. **File formats supported**: `.jpg`, `.jpeg`, `.png`, `.webp`

## Photo Requirements

- **Format**: Square (1:1 aspect ratio) works best
- **Size**: Keep file size under 2MB for faster loading
- **Quality**: High quality, professional headshot recommended
- **Background**: Clean background (solid color or blurred) works well

## Example

```
public/images/profile-photo.jpg
```

The photo will automatically appear in:
- Hero section (large circular photo)
- Header navigation (small avatar)

## Alternative File Names

If you want to use a different filename, update these files:
- `app/page.tsx` - Change the `src` in the hero section Image component
- `components/Header.tsx` - Change the `src` in the header Image component

