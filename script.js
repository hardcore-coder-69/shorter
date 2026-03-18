const screenEl = document.getElementById("screen");
const bgmEl = document.getElementById("bgm");
const voiceoverEl = document.getElementById("voiceover");

bgmEl.load();
voiceoverEl.load();

let running = false;
document.addEventListener("click", async function () {
    if (running) return;
    running = true;
    await startSequence();
})

async function startSequence() {
    await sleep(1000);
    bgmEl.volume = 0.8;
    voiceoverEl.volume = 1;
    bgmEl.play();
    voiceoverEl.play();
    await sequence();
}

async function showImage(data) {
    let imgEl = document.createElement('img');
    imgEl.setAttribute('src', data.src);
}

async function sleep(ms) {
    return new Promise(res => setTimeout(() => res(), ms));
}