<script>
  import { profile } from "../data/content.js";
  import { reveal } from "../actions/reveal.js";
  import TechMarquee from "../components/TechMarquee.svelte";
</script>

<section id="about">
  <div class="container">
    <div class="section-header" use:reveal={{ variant: "up" }}>
      <span class="section-number-modern">01. About Me</span>
      <h2 class="section-title-modern">Know Me More</h2>
    </div>

    <div class="content">
      <div class="about-grid">
        <div class="image-column" use:reveal={{ variant: "left", delay: 200 }}>
          <div class="image-wrapper">
            <div class="image-container">
              <img src={profile.photo} alt={profile.name} loading="lazy" />
              <div class="overlay"></div>
            </div>
            <div class="fancy-border"></div>
          </div>
        </div>

        <div class="text-column" use:reveal={{ variant: "right", delay: 400 }}>
          <div class="glass-card">
            <div class="text-content">
              <p class="intro">
                Hello! I'm <span class="highlight">{profile.name}</span>, a
                <span class="text-accent">Fullstack Developer</span> who loves building 
                robust financial systems and scalable backends.
              </p>
              <p>
                Currently, I'm contributing at <span class="highlight">Bank Negara Indonesia (BNI)</span>, 
                where I focus on developing <span class="highlight">Smart Remittance</span> and <span class="highlight">BNIdirect Family</span> services. 
                I enjoy the challenge of building secure systems that handle real-time financial transactions.
              </p>
              <p>
                I believe that good software isn't just about code—it's about solving real problems reliably. 
                I'm always eager to learn new things, explore better architecture patterns, and make digital 
                products that simply work well.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Technologies moved outside the grid for full width breathing room -->
      <div class="skills-container" use:reveal={{ variant: "up", delay: 600 }}>
        <h3>Technologies I work with:</h3>
        <TechMarquee />
      </div>
    </div>
  </div>
</section>

<style>
  #about {
    /* Ensure enough top space from Hero section */
    padding-top: 150px;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5rem; /* Space between Bio and Skills */
  }

  .about-grid {
    display: grid;
    grid-template-columns: minmax(300px, 0.8fr) 1.2fr;
    gap: 4rem;
    align-items: center; /* Align Top to handle long text gracefully? No, center is usually better if image is tall. Let's stick to center but ensure text doesn't flow out */
    max-width: 1100px;
    margin: 0 auto;
  }

  /* Image Column */
  .image-column {
    display: flex;
    justify-content: center;
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    max-width: 380px;
    aspect-ratio: 3/4;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    background-color: var(--bg-card);
    z-index: 2;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: grayscale(100%) contrast(1.1);
    transition: all 0.5s ease;
  }

  .image-column:hover img {
    filter: grayscale(0%) contrast(1);
    transform: scale(1.03);
  }

  /* Decorative Border */
  .fancy-border {
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid var(--accent);
    border-radius: 16px;
    z-index: 1;
    transition: transform 0.3s ease;
    opacity: 0.5;
  }

  .image-column:hover .fancy-border {
    transform: translate(-5px, -5px);
    opacity: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--accent);
    opacity: 0.2;
    mix-blend-mode: multiply;
    transition: opacity 0.5s ease;
  }

  .image-column:hover .overlay {
    opacity: 0;
  }

  /* Text Column */
  .text-column {
    display: flex;
    flex-direction: column;
    /* Ensure it doesn't overflow horizontally */
    min-width: 0;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    height: fit-content;
  }

  .text-content p {
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
    font-size: 1.05rem;
    line-height: 1.8;
  }

  .text-content p:last-child {
    margin-bottom: 0;
  }

  .intro {
    font-size: 1.4rem !important;
    color: var(--text-main) !important;
    font-weight: 500;
    margin-bottom: 2rem !important;
    line-height: 1.4 !important;
  }

  .highlight {
    color: var(--accent);
    font-weight: 700;
    position: relative;
    display: inline-block;
  }

  /* Skills Section (Now Separate) */
  .skills-container {
    width: 100%;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .skills-container::before {
    content: "";
    position: absolute;
    top: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: var(--accent);
    opacity: 0.3;
  }

  .skills-container h3 {
    font-size: 1.1rem;
    color: var(--text-main);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 2rem;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    #about {
      padding-top: 100px;
    }

    .about-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }

    .image-wrapper {
      margin: 0 auto;
      width: 280px;
    }

    .fancy-border {
      right: -10px;
      bottom: -10px;
    }

    .glass-card {
      padding: 1.5rem;
      /* removed overrides to keep glass effect */
      text-align: left;
    }

    .intro {
      font-size: 1.2rem !important;
    }

    .skills-container {
      padding-top: 1rem;
    }
  }
</style>
