<script>
  import { profile } from '../data/content.js';
  import ThemeToggle from './ThemeToggle.svelte';
  
  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<nav class="navbar" class:scrolled={scrollY > 10}>
  <div class="container nav-content">
    <a href="#" class="logo">{profile.name}</a>
    
    <div class="desktop-links">
      {#each links as link}
        <a href={link.href}>{link.name}</a>
      {/each}
      <ThemeToggle />
    </div>

    <div class="mobile-actions">
      <ThemeToggle />
      <button class="menu-btn" on:click={toggleMenu} aria-label="Toggle menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
  </div>

  {#if isMenuOpen}
    <div class="mobile-menu">
      {#each links as link}
        <a href={link.href} on:click={toggleMenu}>{link.name}</a>
      {/each}
    </div>
  {/if}
</nav>

<style>
  .navbar {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    max-width: 90%;
    height: 60px; /* Compact height */
    padding: 0 1.5rem;
    
    /* Island Style Base */
    background: rgba(15, 15, 20, 0.6); 
    backdrop-filter: blur(12px) saturate(150%);
    -webkit-backdrop-filter: blur(12px) saturate(150%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 100px; /* Pill shape */
    
    z-index: 1000;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }

  .navbar.scrolled {
    /* More opaque and defined when scrolling */
    background: rgba(20, 20, 25, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    top: 15px; /* Slight movement */
  }

  /* Adjust for Light Mode */
  :global([data-theme="light"]) .navbar {
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  :global([data-theme="light"]) .navbar.scrolled {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.15);
  }

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 3rem; /* Spacing between logo and menu */
  }

  .logo {
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text-main);
    letter-spacing: -0.02em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .desktop-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .desktop-links a {
    font-size: 0.825rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: color 0.3s ease;
  }

  .desktop-links a:hover {
    color: var(--text-main);
  }

  .mobile-actions {
    display: none;
    align-items: center;
    gap: 1rem;
  }

  .menu-btn {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 5px;
  }

  .bar {
    width: 20px;
    height: 2px;
    background-color: var(--text-main);
    transition: 0.3s;
    border-radius: 2px;
  }

  .mobile-menu {
    position: absolute;
    top: 70px; /* Below the island */
    left: 50%;
    transform: translateX(-50%);
    width: 200px; /* Condensed drop menu */
    background: rgba(20, 20, 25, 0.95);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    flex-direction: column;
    display: flex;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    overflow: hidden;
    z-index: 1001; /* Ensure on top */
  }

  :global([data-theme="light"]) .mobile-menu {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  }

  :global([data-theme="light"]) .mobile-menu a:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .mobile-menu a {
    padding: 0.75rem 1.5rem;
    display: block;
    color: var(--text-secondary);
    font-weight: 500;
    text-align: center;
    border-radius: 8px;
    transition: background 0.2s;
  }
  
  .mobile-menu a:hover {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-main);
  }

  @media (max-width: 768px) {
    .navbar {
      top: 15px;
      width: 90%;
      padding: 0 1rem;
      gap: 0;
    }

    .desktop-links {
      display: none;
    }
    
    .mobile-actions {
      display: flex;
    }

    .nav-content {
      width: 100%;
      gap: 0;
    }
  }
</style>
