<script>
  import { experience, training } from "../data/content.js";
  import { reveal } from "../actions/reveal.js";
  import { fade } from 'svelte/transition';

  function calculateDuration(period) {
    try {
      const [startStr, endStr] = period.split(" - ");
      const startDate = new Date(startStr);
      const endDate = endStr === "Current" ? new Date() : new Date(endStr);

      let years = endDate.getFullYear() - startDate.getFullYear();
      let months = endDate.getMonth() - startDate.getMonth();

      if (months < 0) {
        years--;
        months += 12;
      }

      // Add 1 month to include the starting month fully found in most professional contexts
      months++;
      if (months >= 12) {
        years++;
        months -= 12;
      }

      const parts = [];
      if (years > 0) parts.push(`${years} Year${years > 1 ? "s" : ""}`);
      if (months > 0) parts.push(`${months} Month${months > 1 ? "s" : ""}`);

      return parts.length > 0 ? parts.join(" ") : "0 Months";
    } catch (e) {
      return "";
    }
  }


  let selectedImage = null;

  function openImage(img) {
    selectedImage = img;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  function closeImage() {
    selectedImage = null;
    document.body.style.overflow = ''; // Restore scrolling
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') closeImage();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section id="experience">
  <div class="container">
    <div class="section-header" use:reveal={{ variant: "up" }}>
      <span class="section-number-modern">03. Career</span>
      <h2 class="section-title-modern">Where I've Worked</h2>
    </div>

    <div class="experience-stack">
      {#each experience as job, i}
        <div
          class="glass-card experience-card"
          use:reveal={{ variant: "up", delay: i * 150 }}
        >
          <div class="card-content">
            <div class="card-top">
              <div class="role-info">
                <h3 class="role">{job.role}</h3>
                <h4 class="company">{job.company}</h4>
              </div>
              <div class="meta-info">
                <div class="duration-badge">
                  <span class="icon">⏳</span>
                  {calculateDuration(job.period)}
                </div>
                <span class="period">{job.period}</span>
              </div>
            </div>

            <div class="divider"></div>

            <div class="description">
                {#each job.description.split('\n') as line}
                    {#if line.trim()}
                        <p>{line}</p>
                    {/if}
                {/each}
            </div>

            {#if job.images && job.images.length > 0}
              <div class="gallery-grid">
                {#each job.images as img}
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <div class="gallery-item" on:click={() => openImage(img.full)}>
                    <img src={img.thumb} alt="Experience documentation" loading="lazy" />
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <!-- Education / Training Section -->
    <div class="section-header subsection-header" use:reveal={{ variant: "up", delay: 200 }}>
        <h2 class="section-title-modern">Internship & Training</h2>
    </div>

    <div class="experience-stack">
        {#each training as job, i}
            <div
            class="glass-card experience-card"
            use:reveal={{ variant: "up", delay: i * 150 }}
            >
            <div class="card-content">
                <div class="card-top">
                <div class="role-info">
                    <h3 class="role">{job.role}</h3>
                    <h4 class="company">{job.company}</h4>
                </div>
                <div class="meta-info">
                    <div class="duration-badge">
                        <span class="icon">⏳</span>
                        {calculateDuration(job.period)}
                    </div>
                    <span class="period">{job.period}</span>
                </div>
                </div>

                <div class="divider"></div>

                <div class="description">
                    {#each job.description.split('\n') as line}
                        {#if line.trim()}
                            <p>{line}</p>
                        {/if}
                    {/each}
                </div>

                {#if job.images && job.images.length > 0}
                  <div class="gallery-grid">
                    {#each job.images as img}
                      <!-- svelte-ignore a11y-click-events-have-key-events -->
                      <div class="gallery-item" on:click={() => openImage(img.full)}>
                        <img src={img.thumb} alt="Experience documentation" loading="lazy" />
                      </div>
                    {/each}
                  </div>
                {/if}
            </div>
            </div>
        {/each}
    </div>
  </div>
</section>

{#if selectedImage}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="lightbox" on:click={closeImage} transition:fade>
    <div class="lightbox-content" on:click|stopPropagation>
      <img src={selectedImage} alt="Full view" />
      <button class="close-btn" on:click={closeImage}>&times;</button>
    </div>
  </div>
{/if}

<style>
  .experience-stack {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .experience-card {
    /* glass-card handles background, border, shadow */
    padding: 2.5rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    border-left: 4px solid transparent; /* Start transparent */
  }

  .experience-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    border-left-color: var(--accent);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 1.5rem;
  }

  .role-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
    min-width: 0; /* Allows text to wrap within flex container */
    padding-right: 1rem;
  }

  .role {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-main);
    line-height: 1.2;
  }

  .company {
    font-size: 1.1rem;
    color: var(--accent);
    font-weight: 500;
  }

  .meta-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    flex-shrink: 0; /* Prevent shrinking */
  }

  .duration-badge {
    background: rgba(56, 189, 248, 0.15);
    color: var(--accent);
    padding: 0.35rem 0.85rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
    border: 1px solid rgba(56, 189, 248, 0.2);
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.1);
  }

  .duration-badge .icon {
    font-size: 0.8rem;
  }

  .period {
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-family: monospace;
    opacity: 0.8;
  }

  .divider {
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    margin-bottom: 1.5rem;
  }

  .description {
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: 1.05rem;
  }

  @media (max-width: 600px) {
    .experience-card {
      padding: 1.5rem;
    }

    .card-top {
      flex-direction: column;
      gap: 1rem;
    }

    .meta-info {
      align-items: center; /* Center horizontally */
      flex-direction: column; /* Stack them */
      justify-content: center;
      width: 100%;
      gap: 0.5rem;
    }

    /* Also center the role info for consistency if not already */
    .role-info {
      align-items: center;
      text-align: center;
    }

    .role {
      font-size: 1.3rem;
    }
  }

  .subsection-header {
      margin-top: 5rem;
      margin-bottom: 3rem;
  }
  
  .description p {
      margin-bottom: 0.5rem;
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .gallery-item {
    width: 100%;
    aspect-ratio: 3/2; /* consistent aspect ratio */
    height: auto; /* let aspect-ratio handle height */
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, border-color 0.3s ease;
  }

  .gallery-item:hover {
    transform: translateY(-5px); /* clearer hover effect */
    border-color: var(--accent);
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease;
  }

  .gallery-item:hover img {
    filter: brightness(1.1);
  }

  @media (max-width: 600px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr); /* Force 2 columns on mobile */
      gap: 0.75rem;
    }
  }

  /* Lightbox Styles */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90vh;
  }

  .lightbox-content img {
    max-width: 100%;
    max-height: 90vh;
    border-radius: 4px;
    box-shadow: 0 0 50px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.1);
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
