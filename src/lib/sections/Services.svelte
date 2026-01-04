<script>
  import { services } from "../data/content.js";
  import { reveal } from "../actions/reveal.js";
</script>

<section id="services">
  <div class="container">
    <div class="section-header" use:reveal={{ variant: "up" }}>
      <span class="section-number-modern">02. Services</span>
      <h2 class="section-title-modern">What I Do</h2>
    </div>

    <div class="services-grid">
      {#each services as service, i}
        <div
          class="glass-card service-card"
          use:reveal={{ variant: "zoom", delay: i * 150 }}
        >
          <div class="icon">
            <svelte:component this={service.icon} size={32} />
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .services-grid {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(280px, 1fr)
    ); /* Increased min width */
    gap: 2rem;
  }

  .service-card {
    /* Background and border handled by .glass-card */
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%; /* Ensure equal height */
  }

  /* Override or add specific hover if needed, but glass-card handles most */
  .service-card:hover .icon {
    transform: scale(1.1);
    color: var(--accent);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
    color: var(--text-secondary);
  }

  h3 {
    margin-bottom: 1rem;
    color: var(--text-main);
  }

  p {
    color: var(--text-secondary);
    font-size: 0.95rem;
  }
</style>
