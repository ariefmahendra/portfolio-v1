<script>
  import Navbar from './lib/components/Navbar.svelte';
  import Hero from './lib/sections/Hero.svelte';
  import Background from './lib/components/Background.svelte';
  import { onMount } from 'svelte';

  let About, Experience, Services, Projects, Contact, Footer;

  onMount(async () => {
    // Lazy load other sections to improve initial load performance
    const modules = await Promise.all([
      import('./lib/sections/About.svelte'),
      import('./lib/sections/Services.svelte'),
      import('./lib/sections/Experience.svelte'),
      import('./lib/sections/Projects.svelte'),
      import('./lib/sections/Contact.svelte'),
      import('./lib/components/Footer.svelte')
    ]);
    
    [About, Services, Experience, Projects, Contact, Footer] = modules.map(m => m.default);
  });
</script>

<Background />
<Navbar />

<main>
  <Hero />
  
  {#if About}
    <svelte:component this={About} />
  {/if}
  
  {#if Services}
    <svelte:component this={Services} />
  {/if}
  
  {#if Experience}
    <svelte:component this={Experience} />
  {/if}
  
  {#if Projects}
    <svelte:component this={Projects} />
  {/if}
  
  {#if Contact}
    <svelte:component this={Contact} />
  {/if}
</main>

{#if Footer}
  <svelte:component this={Footer} />
{/if}

<style>
  main {
    padding: 0 20px;
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    overflow-x: hidden; /* Prevent horizontal scroll */
    width: 100%;
  }
</style>
