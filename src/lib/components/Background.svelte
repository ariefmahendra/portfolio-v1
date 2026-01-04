<script>
  import { onMount, onDestroy } from 'svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<div class="background-container">
  <div class="noise"></div>
  <div class="aurora">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>
</div>

<style>
  .background-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    overflow: hidden;
    background-color: var(--bg-color);
    transition: background-color 0.5s ease;
  }

  /* Noise Overlay */
  .noise {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.03; /* Very subtle grain */
    pointer-events: none;
    z-index: 2;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }

  /* Aurora Orbs */
  .aurora {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    filter: blur(80px); /* Heavy blur for soft blends */
    opacity: 0.4; /* Subtle coloring */
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    animation: float 20s infinite alternate ease-in-out;
    opacity: 0.6;
  }

  /* Orb Colors & Definitions */
  .orb-1 {
    top: -10%;
    left: -10%;
    width: 50vw;
    height: 50vw;
    background: var(--accent);
    animation-duration: 25s;
    opacity: 0.25; /* Increased from 0.15 */
  }

  .orb-2 {
    bottom: -10%;
    right: -10%;
    width: 60vw;
    height: 60vw;
    background: #38bdf8; /* Sky blue */
    animation-duration: 30s;
    animation-direction: reverse;
    opacity: 0.2; /* Increased from 0.1 */
  }

  .orb-3 {
    top: 40%;
    left: 40%;
    width: 40vw;
    height: 40vw;
    background: #818cf8; /* Indigo */
    animation-duration: 22s;
    opacity: 0.15; /* Increased from 0.08 */
  }

  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    100% {
      transform: translate(100px, 50px) rotate(20deg);
    }
  }

  /* Dark mode adjustments done automatically via variables, 
     but we can tweak specific orb logic if needed */
  :global([data-theme="light"]) .aurora {
    opacity: 0.6; /* Slightly stronger in light mode for visibility */
  }
</style>
