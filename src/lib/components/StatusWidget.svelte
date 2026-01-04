<script>
  let status = "Coding in Svelte";
  let icon = "💻";
</script>

<div class="status-widget">
  <div class="status-icon">{icon}</div>
  <div class="status-content">
    <span class="label">Now Status</span>
    <span class="current">{status}</span>
  </div>
  <div class="equalizer">
    <span></span><span></span><span></span><span></span>
  </div>
</div>

<style>
  .status-widget {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(15, 15, 20, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.75rem 1rem;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 100;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    animation: slideIn 1s cubic-bezier(0.16, 1, 0.3, 1) 1s backwards;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .status-icon {
    font-size: 1.5rem;
  }

  .status-content {
    display: flex;
    flex-direction: column;
    min-width: 100px;
  }

  .label {
    font-size: 0.7rem;
    text-transform: uppercase;
    color: var(--text-secondary);
    letter-spacing: 0.05em;
  }

  .current {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-main);
  }

  .equalizer {
    display: flex;
    gap: 3px;
    align-items: flex-end;
    height: 15px;
  }

  .equalizer span {
    width: 3px;
    background: var(--accent);
    border-radius: 2px;
    animation: bounce 1s infinite ease-in-out;
  }

  .equalizer span:nth-child(1) { animation-delay: 0.0s; height: 6px; }
  .equalizer span:nth-child(2) { animation-delay: 0.2s; height: 10px; }
  .equalizer span:nth-child(3) { animation-delay: 0.4s; height: 8px; }
  .equalizer span:nth-child(4) { animation-delay: 0.1s; height: 12px; }

  @keyframes bounce {
    0%, 100% { height: 4px; }
    50% { height: 100%; }
  }
</style>
