let scene, camera, renderer, globe;

function init() {
    // Create the scene
    scene = new THREE.Scene();

    // Set up the camera
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 150;

    // Set up the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('globe').appendChild(renderer.domElement);

    // Create hologram-style globe (wireframe sphere with glow)
    const geometry = new THREE.SphereGeometry(50, 50, 50);
    
    // Wireframe material to give it a hologram look
    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x00c6ff, // Light blue
        wireframe: true, // Makes it holographic
        transparent: true, // Transparent
        opacity: 0.6 // Semi-transparent
    });

    globe = new THREE.Mesh(geometry, wireframeMaterial);
    scene.add(globe);

    // Add glow effect using an outer sphere
    const glowGeometry = new THREE.SphereGeometry(52, 50, 50);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x00c6ff,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending // Glow effect
    });

    const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowSphere);

    // Ambient light to enhance the glowing effect
    const ambientLight = new THREE.AmbientLight(0x00c6ff, 1);
    scene.add(ambientLight);

    // Animation loop
    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate both the globe and the glow
    globe.rotation.y += 0.002;
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

init();
