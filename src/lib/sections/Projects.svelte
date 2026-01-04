<script>
  import { projects } from '../data/content.js';
  import ProjectCard from '../components/ProjectCard.svelte';
  import { reveal } from '../actions/reveal.js';
  import { flip } from 'svelte/animate';

  import { fade } from 'svelte/transition';

  let activeFilter = 'All';
  let activeVideo = null;

  function openVideo(videoId) {
    activeVideo = videoId;
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    activeVideo = null;
    document.body.style.overflow = '';
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') closeVideo();
  }

  // Extract unique high-level tags or use specific categories
  // For this, we'll manually regroup or just use unique tags. 
  // Let's use a smart mapping since tags are diverse.
  const categories = ['Backend', 'IoT', 'Desktop', 'Fullstack'];

  $: filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => {
        // Simple mapping logic: check if project tags include related keywords
        const tags = p.tags.map(t => t.toLowerCase());
        const filter = activeFilter.toLowerCase();
        
        if (filter === 'backend') return tags.includes('golang') || tags.includes('java') || tags.includes('postgresql');
        if (filter === 'iot') return tags.includes('iot');
        if (filter === 'desktop') return tags.includes('desktop app');
        if (filter === 'fullstack') return tags.includes('react') || tags.includes('laravel');
        return false;
      });
</script>

<svelte:window on:keydown={handleKeydown} />

<section id="projects">
  <div class="container">
    <div class="section-header" use:reveal={{ variant: 'up' }}>
      <span class="section-number-modern">04. Portfolio</span>
      <h2 class="section-title-modern">Something I've Built</h2>
    </div>
  
    <div class="filter-container" use:reveal={{ variant: 'up', delay: 100 }}>
      <button 
        class="filter-btn" 
        class:active={activeFilter === 'All'}
        on:click={() => activeFilter = 'All'}
      >
        All
      </button>
      {#each categories as category}
        <button 
          class="filter-btn" 
          class:active={activeFilter === category}
          on:click={() => activeFilter = category}
        >
          {category}
        </button>
      {/each}
    </div>

      <div class="projects-grid">
      {#each filteredProjects as project, i (project.title)} 
        <div 
          use:reveal={{ variant: 'up', delay: i * 200 }} 
          style="height: 100%;"
          animate:flip={{ duration: 400 }}
        >
            <ProjectCard {project} on:play={(e) => openVideo(e.detail)} />
        </div>
      {/each}
    </div>
  </div>
</section>

{#if activeVideo}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="video-modal" transition:fade on:click={closeVideo}>
    <div class="modal-content" on:click|stopPropagation>
      <button class="close-btn" on:click={closeVideo}>&times;</button>
      <iframe 
        src="https://www.youtube.com/embed/{activeVideo}?rel=0" 
        title="Project Video"
        frameborder="0" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
{/if}

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    justify-content: center; /* Center grid items */
  }

  .filter-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
  }

  .filter-btn {
    background: transparent;
    border: 1px solid var(--text-secondary);
    color: var(--text-secondary);
    padding: 0.5rem 1.25rem;
    border-radius: 100px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }

  .filter-btn:hover, .filter-btn.active {
    background: var(--gradient-main);
    border-color: transparent;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
  }

  /* Video Modal */
  .video-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .modal-content {
    position: relative;
    width: 100%;
    max-width: 900px;
    aspect-ratio: 16/9;
    background: black;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 50px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.1);
  }

  iframe {
    width: 100%;
    height: 100%;
  }

  .close-btn {
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    line-height: 1;
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  .close-btn:hover {
    opacity: 1;
  }
</style>
