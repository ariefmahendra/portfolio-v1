<script>
  import { X, Download, FileText, Loader2 } from 'lucide-svelte';
  import { fade, scale } from 'svelte/transition';

  export let show = false;
  export let cvUrl = "";
  export let onClose = () => {};

  let isLoading = true;

  // Reset loading state when modal opens
  $: if (show) {
    isLoading = true;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  } else {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  // Close on Escape key
  function handleKeydown(e) {
    if (e.key === 'Escape') onClose();
  }

  function handleLoad() {
    isLoading = false;
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if show}
  <div class="modal-backdrop" transition:fade={{ duration: 300 }} on:click|self={onClose} role="dialog" aria-modal="true">
    <div class="modal-content" transition:scale={{ duration: 300, start: 0.95, opacity: 0 }}>
      
      <!-- Header -->
      <div class="modal-header">
        <div class="title">
          <FileText size={18} class="text-accent"/>
          <h3>Curriculum Vitae</h3>
        </div>
        <button on:click={onClose} class="close-btn" aria-label="Close Preview">
          <X size={22} />
        </button>
      </div>

      <!-- Body (PDF Preview) -->
      <div class="modal-body">
        {#if isLoading}
          <div class="loading-state" transition:fade>
            <Loader2 size={40} class="spinner" />
            <p>Loading document...</p>
          </div>
        {/if}
        <iframe 
          src={cvUrl} 
          title="CV Preview" 
          width="100%" 
          height="100%"
          on:load={handleLoad}
          class:hidden={isLoading}
        ></iframe>
      </div>

      <!-- Footer -->
      <div class="modal-footer">
        <button class="btn btn-secondary" on:click={onClose}>Close</button>
        <a href={cvUrl} download="ARIEF_MAHENDRA_CV.pdf" class="btn btn-primary">
          <Download size={18} />
          <span>Download PDF</span>
        </a>
      </div>

    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8); /* Darker backdrop for blocking */
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    overscroll-behavior: contain;
  }

  .modal-content {
    background: var(--nav-bg); /* Adaptive Theme */
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 
      0 0 0 1px rgba(0, 0, 0, 0.2),
      0 20px 50px -10px rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 900px;
    height: 85vh;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    backdrop-filter: blur(16px);
  }

  /* Header */
  .modal-header {
    padding: 1rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(var(--bg-secondary), 0.5);
  }

  .title {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .title h3 {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-main);
  }

  .close-btn {
    color: var(--text-secondary);
    padding: 4px;
    border-radius: 50%;
    transition: all 0.2s;
    display: flex;
  }

  .close-btn:hover {
    color: var(--text-main);
    background: rgba(255, 255, 255, 0.1);
  }

  /* Body */
  .modal-body {
    flex: 1;
    background: #0f0f0f; /* Dark background for PDF contrast */
    position: relative;
    width: 100%;
    height: 100%;
  }

  iframe {
    border: none;
    display: block;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  
  iframe.hidden {
    opacity: 0;
  }

  /* Loading State */
  .loading-state {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: var(--text-secondary);
  }

  :global(.spinner) {
    animation: spin 1s linear infinite;
    color: var(--accent);
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Footer */
  .modal-footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.02);
  }

  /* Buttons */
  .btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.25rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.02em;
  }

  .btn-secondary {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid transparent;
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-main);
  }

  .btn-primary {
    background: var(--text-main);
    color: var(--bg-color);
    border: 1px solid var(--text-main);
  }

  .btn-primary:hover {
    background: transparent;
    color: var(--text-main);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  /* Mobile Responsive */
  @media (max-width: 640px) {
    .modal-backdrop {
      padding: 0;
      align-items: flex-end; /* Sheet-like on mobile */
    }

    .modal-content {
      height: 92vh;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      max-width: 100%;
    }
  }
</style>
