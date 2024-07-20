document.addEventListener("DOMContentLoaded", (event) => {
    const playBtn = document.querySelector(".play-btn");
    const body = document.querySelector(".body");
    const lyricsContainer = document.getElementById("lyrics");

    const lyrics = [
        { text: "Suki yo", delay: 0.1, color: "pink" },
        { text: "I ma Anata ni omoi nosete", delay: 0.11, color: "cyan" },
        { text: "hora", delay: 0.1, color: "cyan" },
        { text: "sunao ni naru no watashi", delay: 0.12, color: "cyan" },
        { text: "kono satti motto", delay: 0.12, color: "cyan" },
        { text: "soba ni ite ii ka na?", delay: 0.11, color: "cyan" },
        { text: "koi to tol ga kasasatte", delay: 0.11, color: "cyan" },
        { text: "Suki yo", delay: 0.1, color: "pink" }
    ];

    const delays = [
        0.5, 0.5, 0.5, 0.6, 0.5, 0.6, 0.6, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5
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
