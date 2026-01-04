<script>
  import { Github, Linkedin } from 'lucide-svelte';
  import { profile } from '../data/content.js';

</script>



<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <!-- Brand Column -->
      <div class="footer-brand">
        <h3>{profile.name}</h3>
        <p>Architecting secure, high-performance financial systems and seamless digital experiences.</p>
      </div>

      <!-- Quick Links -->
      <div class="footer-column">
        <h4>Quick Links</h4>
        <div class="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <!-- Contact -->
      <div class="footer-column">
        <h4>Connect</h4>
        <div class="footer-links">
          <a href="mailto:{profile.email}">Email Me</a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="copyright">
        &copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.
      </div>
      
      <div class="social-links">
        <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    padding: 4rem 0 2rem;
    background: var(--bg-secondary);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    margin-top: 4rem;
  }

  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 4rem;
    margin-bottom: 3rem;
  }

  .footer-brand p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-top: 1rem;
    max-width: 300px;
  }

  .footer-brand h3 {
    font-size: 1.5rem;
    color: var(--text-main);
    font-weight: 700;
  }

  .footer-column h4 {
    color: var(--text-main);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer-links a {
    color: var(--text-secondary);
    transition: color 0.3s ease;
    text-decoration: none;
    width: fit-content;
  }

  .footer-links a:hover {
    color: var(--accent);
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
  }

  .social-links a {
    color: var(--text-secondary);
    transition: all 0.3s ease;
  }

  .social-links a:hover {
    color: var(--text-main);
    transform: translateY(-2px);
  }

  .copyright {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 2.5rem;
      text-align: center;
    }

    .footer-brand p {
      margin: 1rem auto 0;
    }

    .footer-links {
      align-items: center;
    }

    .footer-bottom {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
</style>
