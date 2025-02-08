document.addEventListener("DOMContentLoaded", () => {
    const bubbleContainer = document.querySelector(".bubble-container");

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        // Random size (10px to 50px)
        const size = Math.random() * 40 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        // Random horizontal position
        bubble.style.left = `${Math.random() * 100}vw`;

        // Random animation duration (6s to 12s)
        const duration = Math.random() * 6 + 6;
        bubble.style.animationDuration = `${duration}s`;

        bubbleContainer.appendChild(bubble);

        // Remove bubble after animation
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }

    // Generate bubbles at intervals
    setInterval(createBubble, 300);
});
