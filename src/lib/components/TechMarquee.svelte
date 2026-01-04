<script>
  import { skills } from '../data/content.js';
</script>

<div class="marquee-container">
  <div class="marquee-track">
    <!-- Doubled content for seamless loop -->
    {#each [...skills, ...skills] as skill}
      <div class="skill-item" style="--hover-color: {skill.color}">
        <span class="icon">
          <svelte:component this={skill.icon} color="currentColor" size={28} />
        </span>
        <span class="name">{skill.name}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .marquee-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 2rem 0;
    mask-image: linear-gradient(
      to right,
      transparent,
      black 10%,
      black 90%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 10%,
      black 90%,
      transparent
    );
  }

  .marquee-track {
    display: flex;
    gap: 2rem; /* reduced gap */
    width: max-content;
    animation: scroll 30s linear infinite;
  }
  
  /* Pause on hover */
  .marquee-container:hover .marquee-track {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%); /* Scroll half because content is doubled */
    }
  }

  .skill-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 100px;
    white-space: nowrap;
    transition: all 0.3s ease;
    cursor: default;
    color: var(--text-secondary);
  }

  .skill-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--hover-color);
    box-shadow: 0 0 15px var(--hover-color);
    transform: translateY(-2px);
  }

  .skill-item:hover .icon,
  .skill-item:hover .name {
    color: var(--hover-color);
  }
  
  .icon {
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
  }

  .name {
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.3s ease;
  }
</style>
