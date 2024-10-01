document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;

        const offsetX = event.clientX - centerX;
        const offsetY = event.clientY - centerY;

        const rotateX = (-offsetY / 20).toFixed(2);
        const rotateY = (offsetX / 20).toFixed(2);

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});
