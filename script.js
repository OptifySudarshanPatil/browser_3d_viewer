const viewer = document.getElementById('modelViewer');
const loading = document.getElementById('loading');

// Hide loading spinner when model is loaded
viewer.addEventListener('load', () => {
    loading.style.display = 'none';
});

// Handle loading error
viewer.addEventListener('error', (event) => {
    console.error('Error loading model:', event);
    loading.innerHTML = '<p style="color: red; font-weight: bold;">Error loading model. Please ensure the file path is correct.</p>';
});

// Toggle auto-rotate
function toggleAutoRotate() {
    if (viewer.autoRotate) {
        viewer.autoRotate = false;
    } else {
        viewer.autoRotate = true;
    }
}

// Reset camera to initial position
function resetCamera() {
    // Use the correct method: instead of resetTurntable, use the orbit method
    viewer.cameraOrbit = "0deg 75deg 105%";
    viewer.fieldOfView = "auto";
}

// Toggle shadow
function toggleShadow() {
    const currentShadow = parseFloat(viewer.getAttribute('shadow-intensity'));
    const newShadow = currentShadow > 0 ? 0 : 1;
    viewer.setAttribute('shadow-intensity', newShadow);
}
