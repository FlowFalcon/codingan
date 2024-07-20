document.addEventListener("DOMContentLoaded", (event) => {
    const playBtn = document.querySelector(".play-btn");
    const body = document.querySelector(".body");
    const lyricsContainer = document.getElementById("lyrics");

    const lyrics = [
        { text: "Cause I'll be waiting for your love", delay: 0.05, color : "cyan"},
        { text: "Let's fly away together", delay: 0.05, color: "cyan" },
        { text: "Let's get this dream forever", delay: 0.05, color: "cyan" },
        { text: "Let's dance like we're in heaven", delay: 0.04, color: "cyan"},
        { text: "Just give me your sweet love", delay: 0.05, color: "cyan"},
        { text: "Let's fly away together", delay: 0.04, color: "cyan" },
        { text: "Let's get this dream forever", delay: 0.05, color: "cyan" },
        { text: "Let's dance like we're in heaven", delay: 0.04, color: "cyan" },
        { text: "You know you're my sweet love", delay: 0.05, color: "cyan"}
    ];

    const delays = [
        0.7, 0.5, 0.5, 0.5, 0.8, 0.6, 0.6, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5
    ];

    async function displayLyrics() {
        for (let i = 0; i < lyrics.length; i++) {
            let line = lyrics[i].text;
            let charDelay = lyrics[i].delay;
            let color = lyrics[i].color;
            for (let char of line) {
                lyricsContainer.innerHTML += `<span style="color:${color};">${char}</span>`;
                await new Promise((resolve) => setTimeout(resolve, charDelay * 1000));
            }
            await new Promise((resolve) => setTimeout(resolve, delays[i] * 1000));
            lyricsContainer.innerHTML += "\n";
            lyricsContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        }
    }

    playBtn.addEventListener("click", () => {
        playBtn.style.display = "none";

        const backgroundFade = document.createElement("div");
        backgroundFade.className = "background-fade";
        body.appendChild(backgroundFade);

        displayLyrics();
    });
});
