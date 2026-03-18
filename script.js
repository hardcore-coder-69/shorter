const screenEl = document.getElementById("screen");
const bgmEl = document.getElementById("bgm");
const voiceoverEl = document.getElementById("voiceover");

bgmEl.load();
voiceoverEl.load();

let running = false;
document.addEventListener("click", function () {
    if (running) return;
    running = true;
    startSequence();
})

async function startSequence() {

}

async function sleep(ms) {
    return new Promise(res => setTimeout(() => res(), ms));
}