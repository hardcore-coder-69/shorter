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
    bgmEl.volume = 1;
    voiceoverEl.volume = 1;
    voiceoverEl.playbackRate = 1;
    bgmEl.play();
    voiceoverEl.play();
    await sequence();
}

async function showImage(data) {
    let imgContainerEl = document.createElement("div");
    imgContainerEl.classList.add('single-image-container');
    
    let imgEl = document.createElement('img');
    imgEl.classList.add("single-image");
    imgEl.setAttribute('src', data.src);
    imgContainerEl.appendChild(imgEl);
    
    setTimeout(function() {
        imgContainerEl.classList.add("hiding-now");
        setTimeout(() => {
            imgContainerEl.remove();
        }, 500);
    }, data.stayTime - 500);

    screenEl.appendChild(imgContainerEl);
    if(data.initialTransform) {
        imgEl.style.transform = data.initialTransform;
        await sleep(100);
    }

    if(data.transition && data.transform) {
        imgEl.style.transition = data.transition;
        imgEl.style.transform = data.transform;
    }
    
}

async function showVideo(data) {
    let videoContainerEl = document.createElement("div");
    videoContainerEl.classList.add('single-video-container');
    
    let videoEl = document.createElement('video');
    videoEl.setAttribute('autoplay', true);
    videoEl.classList.add("single-video");
    videoEl.setAttribute('src', data.src);
    videoContainerEl.appendChild(videoEl);
}

async function sleep(ms) {
    return new Promise(res => setTimeout(() => res(), ms));
}