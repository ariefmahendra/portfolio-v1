export function reveal(node, { threshold = 0.15, variant = 'up', delay = 0 } = {}) {

    // Add initial animation class
    node.classList.add(`reveal-${variant}`);

    // Apply delay inline if specified
    if (delay > 0) {
        node.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                node.classList.add('visible');
            } else {
                node.classList.remove('visible');
            }
        });
    }, {
        rootMargin: "0px 0px -20px 0px"
    });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
