<script>
  import { profile } from "../data/content.js";
  import { reveal } from "../actions/reveal.js";
  import CVPreviewModal from "../components/CVPreviewModal.svelte";

  let showPreview = false;
</script>

<CVPreviewModal
  show={showPreview}
  cvUrl={profile.resume}
  onClose={() => (showPreview = false)}
/>

<section id="hero" class="hero">
  <!-- Dynamic Background Glow -->
  <div class="hero-glow"></div>

  <div class="container hero-content">
    <div use:reveal={{ variant: "down", delay: 100 }}>
      <p class="greeting">Hi, I'm</p>
    </div>

    <div use:reveal={{ variant: "up", delay: 300 }}>
      <h1 class="name">{profile.name}</h1>
    </div>

    <!-- Professional Role -->
    <div class="role-container" use:reveal={{ variant: "up", delay: 500 }}>
      <h2 class="title">
        {profile.role}
      </h2>
    </div>

    <div use:reveal={{ variant: "up", delay: 700 }}>
      <p class="bio">{profile.bio}</p>
    </div>

    <div class="cta-group" use:reveal={{ variant: "up", delay: 900 }}>
      <a href="#experience" class="btn btn-primary">Check my work</a>
      <button on:click={() => (showPreview = true)} class="btn btn-outline"
        >Download CV</button
      >
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding-top: var(--nav-height);
    overflow: hidden;
  }

  /* Soft Background Glow */
  .hero-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    /* Use theme variables for glow: Light mode might need adjustment, but for now use accent/glow variables */
    background: radial-gradient(
      circle,
      var(--accent-glow) 0%,
      rgba(0, 0, 0, 0) 70%
    ); /* Replaced hardcoded color */
    filter: blur(80px);
    z-index: -1;
    pointer-events: none;
  }

  .greeting {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h1.name {
    font-size: clamp(2rem, 7vw, 4.5rem); /* Reduced for better mobile fit */
    font-weight: 800;
    line-height: 1.1; /* slightly relaxed for wrapping */
    word-break: break-word; /* Ensure it wraps if really needed */
    color: transparent;
    -webkit-text-stroke: 1px var(--accent-glow); /* Replaced white stroke */
    /* Use theme-aware gradient or construct one using variables */
    background: linear-gradient(
      to bottom right,
      var(--text-main) 30%,
      var(--accent) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    letter-spacing: -0.03em;
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 600;
    color: var(--text-secondary);
    /* Clean Sans-Serif, no monospace */
    font-family: var(--font-sans);
    letter-spacing: -0.02em;
  }

  .role-container {
    min-height: 3rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
  }

  .bio {
    max-width: 550px;
    margin-bottom: 3rem;
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .cta-group {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .btn {
    padding: 1rem 2.5rem;
    border-radius: 50px; /* Pill shape */
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .btn-primary {
    background: var(--accent);
    color: var(
      --bg-color
    ); /* Ensure contrast based on theme bg mostly or inverse */
    /* Actually accent usually contrasts with bg-color. Let's use hardcoded contrasting text if accent is static,
       but here accent changes. If accent is dark in light mode, text should be light?
       In app.css:
       Dark Mode: --accent: #d4d4d8 (Light Grey) -> Text should be Dark (#0a0a0a)
       Light Mode: --accent: #27272a (Dark Grey) -> Text should be Light (#fff)

       So var(--bg-color) is actually perfect!
       Dark Mode: bg-color #0a0a0a. Button text #0a0a0a (Dark on Light Grey). Good.
       Light Mode: bg-color #ffffff. Button text #ffffff (White on Dark Grey). Good.
    */
    border: none;
    box-shadow: 0 0 20px var(--accent-glow);
  }

  .btn-primary:hover {
    box-shadow: 0 0 30px var(--accent-glow);
    transform: translateY(-3px);
  }

  .btn-outline {
    background: transparent;
    color: var(--text-main);
    border: 1px solid var(--text-secondary); /* Softer border than white */
  }

  .btn-outline:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: var(--accent-glow);
  }

  /* Scroll Indicator */
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.7;
    transition: opacity 0.3s;
  }

  .scroll-indicator:hover {
    opacity: 1;
  }

  .mouse {
    width: 26px;
    height: 42px;
    border: 2px solid var(--text-secondary);
    border-radius: 20px;
    position: relative;
    margin-bottom: 0.5rem;
  }

  .wheel {
    width: 4px;
    height: 4px;
    background: var(--accent);
    border-radius: 50%;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scrollWheel 2s infinite;
  }

  .arr-down {
    width: 10px;
    height: 10px;
    border-right: 2px solid var(--text-secondary);
    border-bottom: 2px solid var(--text-secondary);
    transform: rotate(45deg);
    animation: scrollArrow 2s infinite;
    animation-delay: 0.2s;
  }

  @keyframes scrollWheel {
    0% {
      top: 8px;
      opacity: 1;
    }
    100% {
      top: 24px;
      opacity: 0;
    }
  }

  @keyframes scrollArrow {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-5px, -5px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(5px, 5px);
    }
  }

  @media (max-width: 768px) {
    .hero {
        align-items: center; /* Center everything vertically */
        justify-content: center;
        text-align: center; /* Center text */
        padding-top: 140px; /* Increased to clear the fixed Navbar safely */
    }

    .hero-content {
        display: flex;
        flex-direction: column;
        align-items: center; /* Center flex items */
    }

    /* Original font override removed to let clamp() work naturally, 
       or use a smaller clamp specifically for mobile if needed. 
       The top-level clamp(2rem, 7vw, 4.5rem) is already good. */
    
    .hero-glow {
      width: 300px;
      height: 300px;
    }

    .cta-group {
        justify-content: center; /* Center buttons */
    }
  }
</style>
