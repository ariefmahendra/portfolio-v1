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
      Although I'm not currently looking for any new opportunities, my inbox is always open. 
      Whether you have a question or just want to say hi, I'll try my best to get back to you!
    </p>
    
    <div class="contact-form-container" use:reveal={{ variant: 'up', delay: 600 }}>
      <form class="contact-form" on:submit|preventDefault>
        <div class="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div class="form-group">
          <textarea placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn big-btn">Send Message</button>
      </form>
      <div class="note">
        *Currently this is a demo form. For real inquiries, please <a href="mailto:{profile.email}">email me directly</a>.
      </div>
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
    padding: 1rem 3rem;
    border: 1px solid var(--accent);
    color: var(--accent);
    border-radius: 4px;
    font-size: 1rem;
    transition: 0.3s;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    margin-top: 1rem;
  }

  .big-btn:hover {
    background: rgba(56, 189, 248, 0.1);
    transform: translateY(-3px);
  }

  .contact-form-container {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-main);
    border-radius: 8px;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--accent);
    outline: none;
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
  }

  .note {
    margin-top: 2rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .note a {
    color: var(--accent);
    text-decoration: underline;
  }
</style>
