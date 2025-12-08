<script>
// @ts-nocheck 
// im getting an error when using let container: any in my files
// so just disabling ts for now

  import { onMount } from "svelte";
  import * as THREE from "three";

  let container;

  onMount(() => {
    // Prevent SSR issues by ensuring window exists
    if (typeof window === "undefined") return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: "orange" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(2, 2, 5);
    scene.add(light);

    camera.position.z = 3;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    // Responsive resizing
    const handleResize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  });
</script>

<style>
  .canvas-container {
    width: 100%;
    height: 90vh; /* full viewport */
    overflow: hidden;
  }
</style>

<div bind:this={container} class="canvas-container"></div>
