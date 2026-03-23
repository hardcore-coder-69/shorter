const screenEl = document.getElementById("screen");
const bgmEl = document.getElementById("bgm");
const voiceoverEl = document.getElementById("voiceover");
const whooshEl = document.getElementById("whoosh-sfx");
const glitchEl = document.getElementById("glitch");
const transitionEl = document.getElementById("transition-whoosh");
const pageFlipEl = document.getElementById("page-flip");
const fastWhooshEl = document.getElementById("fast-whoosh");
const captionEl = document.getElementById("caption");
captionEl.style.fontSize = `${captionSize}px`;
captionEl.innerHTML = caption;

bgmEl.load();
voiceoverEl.load();
whooshEl.load();
transitionEl.load();
pageFlipEl.load();
fastWhooshEl.load();
glitchEl.load();

let running = false;
document.addEventListener("click", async function () {
    if (running) return;
    running = true;
    await startSequence();
})

async function startSequence() {
    await sleep(1000);
    bgmEl.play();
    voiceoverEl.play();
    await sequence();
}

async function showImage(data) {
    let imgContainerEl = document.createElement("div");
    imgContainerEl.classList.add('single-image-container');
    if(data.containerAnimation) {
        imgContainerEl.style.animation = data.containerAnimation;
    }
    
    let imgEl = document.createElement('img');
    imgEl.classList.add("single-image");
    imgEl.setAttribute('src', data.src);
    imgContainerEl.appendChild(imgEl);
    
    setTimeout(function() {
        if(data.exitSound) {
            data.exitSound.play();
            imgEl.classList.add('hiding-now');
        }
        setTimeout(function() {
            imgContainerEl.remove();
        }, 200);
    }, data.stayTime - 200);

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
    videoEl.classList.add("single-video");
    videoEl.autoplay = true;
    videoEl.volume = 0;
    videoEl.muted = true;
    videoEl.setAttribute('src', data.src);
    videoContainerEl.appendChild(videoEl);
    videoEl.oncanplay = () => {
        videoEl.playbackRate = data.playbackRate;
    };

    setTimeout(function() {
        if(data.exitSound) {
            data.exitSound.play();
            videoContainerEl.classList.add('hiding-now');
        }
        setTimeout(function() {
            videoContainerEl.remove();
        }, 200);
    }, data.stayTime - 200);

    screenEl.appendChild(videoContainerEl);
    if(data.initialTransform) {
        videoEl.style.transform = data.initialTransform;
        await sleep(100);
    }

    if(data.transition && data.transform) {
        videoEl.style.transition = data.transition;
        videoEl.style.transform = data.transform;
    }
}


async function sleep(ms) {
    return new Promise(res => setTimeout(() => res(), ms));
}