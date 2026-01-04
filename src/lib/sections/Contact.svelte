<script>
  import { profile } from '../data/content.js';
  import { reveal } from '../actions/reveal.js';
</script>

<section id="contact">
  <div class="container center-text">
    <div class="section-header" use:reveal={{ variant: 'up' }}>
      <span class="section-number-modern">05. What's Next?</span>
      <h2 class="section-title-modern">Get In Touch</h2>
    </div>

    <p class="description" use:reveal={{ variant: 'up', delay: 400 }}>
      Interested in collaborating or have a technically challenging project? 
      My inbox is always open. Whether you have a question or just want to connect, 
      I'll do my best to get back to you!
    </p>
    
    <div class="cta-container" use:reveal={{ variant: 'up', delay: 600 }}>
      <a href="mailto:{profile.email}" class="btn big-btn">Say Hello</a>
    </div>
  </div>
</section>

<style>
  #contact {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .description {
    color: var(--text-secondary);
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto 2rem auto;
  }

  .big-btn {
    padding: 1.25rem 4rem;
    border: 1px solid var(--accent);
    color: var(--accent);
    border-radius: 4px;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    margin-top: 1rem;
    text-decoration: none;
    display: inline-block;
  }

  .big-btn:hover {
    background: rgba(56, 189, 248, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -10px rgba(56, 189, 248, 0.5);
  }
</style>
