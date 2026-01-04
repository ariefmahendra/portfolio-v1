<script>
  import * as THREE from 'three';
  import { onMount } from 'svelte';

  let container;

  onMount(() => {
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 2000;
    
    const positions = new Float32Array(count * 3);
    
    for(let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 60; // Spread of -30 to 30
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05, // Smaller particles
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.4, // More transparent
        sizeAttenuation: true
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onDocumentMouseMove = (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    };

    document.addEventListener('mousemove', onDocumentMouseMove);

    // Animation Loop
    const animate = () => {
        targetX = mouseX * 0.0001; // Reduced sensitivity
        targetY = mouseY * 0.0001;

        particles.rotation.y += 0.0005; // Very slow rotation
        particles.rotation.x += (targetY - particles.rotation.x) * 0.02; // Smoother damping
        particles.rotation.y += (targetX - particles.rotation.y) * 0.02;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('mousemove', onDocumentMouseMove);
        if (container && renderer.domElement) {
            container.removeChild(renderer.domElement);
         }
    };
  });
</script>

<div bind:this={container} class="webgl-container"></div>

<style>
  .webgl-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
    /* Gradient overlay for better text readability */
    background: radial-gradient(circle at center, transparent 0%, var(--bg-color) 100%);
  }
</style>
