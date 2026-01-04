<script>
  import { onMount } from 'svelte';
  
  let cursor;
  let follower;
  
  onMount(() => {
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;
    
    // Check if device is touch, if so rely on native interaction mainly
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if(isTouch) return;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if(cursor) {
          cursor.style.left = `${mouseX}px`;
          cursor.style.top = `${mouseY}px`;
      }
    }
    
    document.addEventListener('mousemove', moveCursor);

    // Animation for the follower for smooth delay
    const animate = () => {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        
        if(follower) {
            follower.style.left = `${posX}px`;
            follower.style.top = `${posY}px`;
        }
        
        requestAnimationFrame(animate);
    }
    animate();

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    })
    
    // Re-attach listeners when DOM might change (simple observer could be better but this is MVP)
    const observer = new MutationObserver((mutations) => {
        const newLinks = document.querySelectorAll('a, button');
        newLinks.forEach(link => {
            link.onmouseenter = () => {
                cursor.classList.add('active');
                follower.classList.add('active');
            }
            link.onmouseleave = () => {
                cursor.classList.remove('active');
                follower.classList.remove('active');
            }
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
        document.removeEventListener('mousemove', moveCursor);
        observer.disconnect();
    };
  });
</script>

<div bind:this={cursor} class="cursor"></div>
<div bind:this={follower} class="cursor-follower"></div>

<style>
  .cursor, .cursor-follower {
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      transform: translate(-50%, -50%);
      z-index: 9999;
      display: none; /* Hidden on mobile by default via media query if needed, or JS check */
  }

  /* Only show on non-touch devices manually or rely on JS check above */
  @media (hover: hover) {
      .cursor, .cursor-follower {
          display: block;
      }
  }

  .cursor {
      width: 8px;
      height: 8px;
      background: var(--accent);
  }

  .cursor-follower {
      width: 40px;
      height: 40px;
      border: 1px solid var(--accent);
      transition: width 0.3s, height 0.3s, background 0.3s;
  }

  /* Hover state */
  :global(.cursor-follower.active) {
      width: 60px;
      height: 60px;
      background: rgba(56, 189, 248, 0.1);
      border-color: transparent;
  }
</style>
