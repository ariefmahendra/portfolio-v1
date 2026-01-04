<script>
  import { onMount } from 'svelte';
  
  let isDark = $state(true);

  onMount(() => {
    // Check local storage or system preference
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      isDark = false;
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      isDark = true;
      document.documentElement.removeAttribute('data-theme');
    }
  });

  function toggleTheme() {
    isDark = !isDark;
    
    if (!isDark) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.theme = 'light';
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.theme = 'dark';
    }
  }
</script>

<button onclick={toggleTheme} aria-label="Toggle Theme" class="theme-btn">
  {#if isDark}
    <!-- Sun Icon for Dark Mode -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  {:else}
    <!-- Moon Icon for Light Mode -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  {/if}
</button>

<style>
  .theme-btn {
    color: var(--text-main);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
  }
  
  .theme-btn:hover {
    background: var(--bg-secondary);
    color: var(--accent);
    transform: rotate(15deg);
  }

  svg {
    width: 24px;
    height: 24px;
  }
</style>
