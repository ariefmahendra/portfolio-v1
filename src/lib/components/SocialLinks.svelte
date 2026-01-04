<script>
  import { profile } from '../data/content.js';
</script>

<div class="social-links">
  {#each Object.entries(profile.social) as [platform, url]}
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={platform}>
      <span class="platform-name">{platform}</span>
      <!-- You can add SVG icons here based on platform name -->
    </a>
  {/each}
</div>

<style>
  .social-links {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  a {
    color: var(--text-secondary);
    font-size: 0.9rem;
    text-transform: capitalize;
    font-weight: 500;
  }

  a:hover {
    color: var(--accent);
  }
</style>
