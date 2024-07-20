document.addEventListener("DOMContentLoaded", (event) => {
    const playBtn = document.querySelector(".play-btn");
    const body = document.querySelector(".body");
    const lyricsContainer = document.getElementById("lyrics");

    const lyrics = [
        { text: "kancaku ngguya ngguyu", delay: 0.06 },
        { text: "untume metu pitu", delay: 0.08},
        { text: "Rasengojo weroh tapir", delay: 0.08 },
        { text: "Silite jebul telu", delay: 0.06},
        { text: "Nonton jahtilan aku anak sang lautan", delay: 0.08},
        { text: "Mbesul emang tampan", delay: 0.06},
        { text: "Tapi kalah sama ikan", delay: 0.06},
        { text: "Bapakku nelayan juragan pertenakan", delay: 0.10},
        { text: "Ibuku sayang kamu suka lotisan", delay: 0.10}
    ];

    const delays = [
        0.5, 0.5, 0.2, 0.5, 0.8, 0.6, 0.6, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5
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
