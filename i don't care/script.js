document.addEventListener('DOMContentLoaded', function() {
    const lyricsText = [
        "Cause I don't care when I'm with my baby, yeah",
        "All the bad things disappear",
        "And you're making me feel like maybe I am somebody",
        "I can deal with the bad nights",
        "When I'm with my baby, yeah",
        "Ooh, ooh, ooh, ooh, oooh, ooh"
    ];

    const delayTimes = [3200, 1800, 3100, 2000, 1550, 2000]; // Different delay times for each line
    const lyricsContainer = document.getElementById('lyrics');
    let currentIndex = 0;

    function showNextLine() {
        if (currentIndex < lyricsText.length) {
            const lineContainer = document.createElement('div');
            lineContainer.classList.add('lyric-line');
            lineContainer.textContent = lyricsText[currentIndex];
            lyricsContainer.appendChild(lineContainer);
            requestAnimationFrame(() => lineContainer.classList.add('show'));

            setTimeout(() => {
                lineContainer.classList.remove('show');
                lineContainer.classList.add('hide');

                setTimeout(() => {
                    lyricsContainer.removeChild(lineContainer);
                    currentIndex++;
                    showNextLine();
                }, 1000); // Wait for hide animation to finish
            }, delayTimes[currentIndex]);
        }
    }

    showNextLine();
});
