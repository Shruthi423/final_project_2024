document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.movie-card');

    cards.forEach(card => {
        const cardInner = card.querySelector('.card-inner');
        const frontImage = card.querySelector('.card-front');

        // Unblur image on hover
        card.addEventListener('mouseenter', () => {
            frontImage.style.filter = 'blur(0)';
        });

        card.addEventListener('mouseleave', () => {
            frontImage.style.filter = 'blur(6px)';
        });

        // Flip the card on click
        card.addEventListener('click', () => {
            cardInner.classList.toggle('flipped');
            console.log('Card flipped');
        // change the year
        document.addEventListener('DOMContentLoaded', function() {
            const yearSpan = document.getElementById('2024');
            const currentYear = new Date().getFullYear();
            yearSpan.textContent = currentYear;
          });
        });
    });
});
