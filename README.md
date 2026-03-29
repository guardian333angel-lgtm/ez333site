# Mystical Grimoire Website

A beautiful space-themed webpage with mystical aesthetics.

## 📋 Setup Instructions

1. **Add Your GIF Files**
   - Replace `your-gif.gif` references in `index.html` with your actual GIF file paths
   - You can use the same GIF for all tabs or different GIFs for each tab
   - Supported formats: GIF, PNG, JPG, WebP
   - Recommended size: 800x600px or similar

2. **File Structure**
   ```
   website/
   ├── index.html       # Main page
   ├── styles.css       # Styling (space theme, stars, fonts)
   ├── script.js        # Interactivity (stars, tabs)
   └── your-gif.gif     # Add your GIF files here
   ```

3. **Customization Options**

   **Star Count**: Edit `script.js` line 5
   ```javascript
   const starCount = 100; // Change this number
   ```

   **Star Size**: Edit `styles.css` in `.star` class
   ```css
   width: 2px;
   height: 2px;
   ```

   **Text Size**: Edit `styles.css` in `.gif-overlay-text` class
   ```css
   font-size: 80px; /* Adjust as needed */
   ```

   **Colors**: Modify hex values in `styles.css`
   - Gold text: `#d4af37`
   - Dark purple background: `#0a0015`
   - Blue glow: `rgba(100, 150, 255, ...)`

## 🎨 Features

- ✨ Black-purple space theme background
- ✨ Blinking white stars with faint blue glow centers
- ✨ 4 navigation tabs: Grimoire, Angels/Demons, Sonics, About
- ✨ Centered GIF display with "?" overlay text
- ✨ Kings font in gold with white glow effect
- ✨ No boxes or barriers around text/buttons
- ✨ Smooth tab switching
- ✨ Responsive design

## 🚀 How to Run

1. Open `index.html` in your web browser
2. Click on any tab to switch between pages
3. Each tab displays the same layout with different content

## 📝 Notes

- All GIF paths need to be updated to point to your actual files
- The Kings font is loaded from Google Fonts API
- Stars regenerate automatically on window resize
- Tab state is saved during session
