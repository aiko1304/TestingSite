document.addEventListener("DOMContentLoaded", () => {
    const bubbleContainer = document.querySelector(".bubble-container");

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        // Randomize bubble position and size
        const size = Math.random() * 40 + 10; // Size between 10px and 50px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;

        // Random animation duration
        const duration = Math.random() * 5 + 5;
        bubble.style.animationDuration = `${duration}s`;

        bubbleContainer.appendChild(bubble);

        // Remove bubble after animation
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }

    // Generate bubbles at intervals
    setInterval(createBubble, 500);
});
