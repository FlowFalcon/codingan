document.addEventListener("DOMContentLoaded", (event) => {
    const playBtn = document.querySelector(".play-btn");
    const body = document.querySelector(".body");
    const lyricsContainer = document.getElementById("lyrics");

    const lyrics = [
        { text: "Mátame, máteme", delay: 0.09 },
        { text: "Con tu sonrisa bam bam", delay: 0.08 },
        { text: "Yo te espero, yo te espero", delay: 0.07 },
        { text: "Papi, do it bam bam", delay: 0.08 },
        { text: "Mátame, mátame", delay: 0.09 },
        { text: "tu pistolero bam bam", delay: 0.08 },
        { text: "Yo te quiero, Yo te quiero", delay : 0.07},
        { text: "Papi, do it (let's go)", delay: 0.07 },
        { text: "Mátame, máteme", delay: 0.09 },
        { text: "Con tu sonrisa bam bam", delay: 0.08 },
        { text: "Yo te espero, yo te espero", delay: 0.07 },
        { text: "Papi, do it bam bam", delay: 0.08 },
        { text: "Mátame, mátame", delay: 0.09 },
        { text: "tu pistolero bam bam", delay: 0.08 },
        { text: "Yo te quiero, Yo te quiero", delay : 0.07},
        { text: "Papi, do it (let's go)", delay: 0.07 }
    ];

    const delays = [
        0.3, 0.5, 0.3, 0.5, 0.3, 0.5, 0.3, 0.5,0.3, 0.5, 0.3, 0.5, 0.3, 0.5, 0.3, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5
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