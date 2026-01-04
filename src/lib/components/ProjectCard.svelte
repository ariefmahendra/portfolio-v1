<script>
  import { createEventDispatcher } from 'svelte';
  import { Play } from 'lucide-svelte';
  
  let { project } = $props();
  const dispatch = createEventDispatcher();

  function handleClick() {
    if (project.video) {
        dispatch('play', project.video);
    }
  }
</script>

<article class="glass-card project-card">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="image-wrapper" on:click={handleClick} class:has-video={!!project.video}>
    <img src={project.image} alt={project.title} loading="lazy" />
    {#if project.video}
      <div class="play-overlay">
        <div class="play-icon">
          <Play size={32} fill="white" />
        </div>
      </div>
    {/if}
  </div>
  <div class="content">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div class="tags">
      {#each project.tags as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>
    <div class="links">
      {#if project.link && project.link !== "#"}
        <a href={project.link} target="_blank" rel="noopener noreferrer">Demo</a
        >
      {/if}
      {#if project.repo && project.repo !== "#"}
        <a href={project.repo} target="_blank" rel="noopener noreferrer">Source</a
        >
      {/if}
    </div>
  </div>
</article>

<style>
  .project-card {
    border-radius: 16px; /* Match global */
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0; /* Override glass-card padding if any, we need 0 for image */
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  /* Image Wrapper needs to stay on top */
  .image-wrapper {
    position: relative; /* Essential for play-overlay positioning */
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
    /* Removed grayscale filter */
    transition: filter 0.3s ease;
    flex-shrink: 0;
  }

  .project-card:hover .image-wrapper {
    /* No filter change needed */
  }

  .project-card:hover img {
    transform: scale(1.05); /* Zoom effect */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    color: var(--text-main);
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .tag {
    font-size: 0.75rem;
    background: rgba(56, 189, 248, 0.1);
    color: var(--accent);
    padding: 0.25rem 0.75rem;
    border-radius: 99px;
  }

  .links {
    display: flex;
    gap: 1rem;
    margin-top: auto;
  }

  .links a {
    font-size: 0.9rem;
    font-weight: 500;
    pointer-events: auto;
    color: var(--text-main);
  }

  .links a:hover {
    color: var(--accent);
    text-decoration: underline;
  }

  /* Video Styles */
  .has-video {
    cursor: pointer;
  }

  .play-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
  }

  .image-wrapper:hover .play-overlay,
  .play-overlay {
    /* Make play button visible if it's a video, arguably nicer to always show it slightly or on hover */
    opacity: 1; 
    background: rgba(0, 0, 0, 0.2);
  }

  .play-icon {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(255, 255, 255, 0.5);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.3s ease;
    color: white;
  }

  .has-video:hover .play-icon {
    transform: scale(1.2);
    background: var(--accent);
    border-color: var(--accent);
  }
</style>
