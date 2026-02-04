# 3D Model Viewer

A web-based 3D model viewer for displaying glTF/glB files using Google's model-viewer library.

## Features

- 🔄 **Interactive 3D Display**: Rotate, zoom, and pan your 3D models
- 🎯 **Auto-Rotation**: Models automatically rotate on load
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean and professional interface with gradient styling
- 🛠️ **Easy Controls**: Intuitive mouse and touch controls

## Usage

1. Open `index.html` in your web browser
2. The PG7 Cable Gland model will load and display automatically
3. Use the controls to interact with the model:
   - **Click and Drag**: Rotate the model
   - **Scroll**: Zoom in/out
   - **Right-Click + Drag**: Pan the view
   - **Buttons**: Toggle auto-rotation, reset camera, and toggle shadows

## GitHub Pages Deployment

To deploy this project on GitHub Pages:

1. Go to your repository settings
2. Navigate to **Pages** section
3. Under **Source**, select:
   - Branch: `main` (or your main branch)
   - Folder: `/ (root)`
4. Click **Save**
5. Your site will be available at: `https://<your-username>.github.io/<repo-name>`

## File Structure

```
browser_3d_viewer/
├── index.html                  # Main HTML file
├── PG7 Cable Gland.gltf       # 3D model file
├── buffer.bin                  # Binary data for the model
└── README.md                   # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and animations
- **JavaScript**: Vanilla JS for interactions
- **Google Model-Viewer**: https://modelviewer.dev/

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Model Information

- **Model**: PG7 Cable Gland
- **Format**: glTF 2.0
- **Total Vertices**: 13,504
- **Total Triangles**: 16,488

## License

Include your license information here.

## Support

For issues or questions, please open an issue in the repository.
