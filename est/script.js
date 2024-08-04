document.addEventListener('DOMContentLoaded', function() {
    const lyricsText = [
        "",
        "J'étais censé t'aimer mais j'ai vu l'averse",
        "(Aku seharusnya mencintaimu tapi aku melihat hujan deras)",
        "J'ai cligné des yeux, tu n'étais plus la même",
        "(Aku berkedip, kamu tidak sama)",
        "Est-ce que je t'aime?",
        "(Apakah aku menyukaimu?)",
        "J'sais pas si je t'aime",
        "(Aku tidak tahu apakah aku mencintaimu)",
        "Est-ce que tu m'aimes?",
        "(Apakah kamu mencintaiku?)",
        "J'sais pas si je t'aime",
        "(Aku tidak tahu apakah aku mencintaimu)"
    ];

    const delayTimes = [0000,0000, 4000, 0000, 3500, 0000, 2200, 0000, 1800, 0000, 1800, 0000, 1800]; 

    const lyricsContainer = document.getElementById('lyrics');
    let currentElement = null;
    let cumulativeDelay = 0;

    function showLyrics() {
      lyricsText.forEach((line, index) => {
        setTimeout(() => {
          if (currentElement) {
            currentElement.classList.remove('highlight');
            currentElement.classList.add('dim');
          }
          const lineElement = document.createElement('div');
          lineElement.textContent = line;
          lineElement.classList.add('highlight');
          lyricsContainer.appendChild(lineElement);
          animateLyrics(lineElement);
          currentElement = lineElement;
        }, cumulativeDelay);
        cumulativeDelay += delayTimes[index]; 
      });
    }

    function animateLyrics(element) {
      element.style.animation = 'fadeIn 2s forwards, zoomIn 0.6s forwards'; 
    }

    showLyrics();
});