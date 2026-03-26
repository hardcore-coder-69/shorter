let caption = "We might be living inside a simulation...";
let captionSize = 25;
async function sequence() {
    // bgmEl.currentTime = 16;
    bgmEl.volume = 0.3;
    voiceoverEl.volume = 1;
    voiceoverEl.playbackRate = 1;
    glitchEl.volume = 0.5;
    
    setTimeout(function () {
        showImage({
            src: 'temp/1.png',
            stayTime: 3000,
            exitSound: glitchEl,
            initialTransform: 'scale(3)',
            transform: "scale(2)",
            transition: "transform 3s linear",
            containerAnimation: 'blink 0.2s infinite'
        });
    }, 0);

    setTimeout(function () {
        showImage({
            src: 'temp/2.jpg',
            stayTime: 4000,
            exitSound: glitchEl,
            initialTransform: 'scale(1.5)',
            transform: "scale(1)",
            transition: "transform 4s linear",
            containerAnimation: 'blink 0.2s infinite'
        });
    }, 3000);

    setTimeout(function () {
        showImage({
            src: 'temp/2.jpg',
            stayTime: 4000,
            exitSound: glitchEl,
            initialTransform: 'scale(1)',
            transform: "scale(1.5)",
            transition: "transform 4s linear",
            containerAnimation: 'blink 0.2s infinite'
        });
    }, 7000);

    setTimeout(function () {
        showImage({
            src: 'temp/3.png',
            stayTime: 5000,
            exitSound: glitchEl,
            initialTransform: 'scale(1.1)',
            transform: "scale(1)",
            transition: "transform 5s linear",
            containerAnimation: 'blink 0.2s infinite'
        });
    }, 11000);

    setTimeout(function () {
        showImage({
            src: 'temp/4.png',
            stayTime: 5000,
            exitSound: glitchEl,
            initialTransform: 'scale(2)',
            transform: "scale(1.5)",
            transition: "transform 5s linear",
            containerAnimation: 'blink 0.2s infinite'
        });
    }, 16000);

    setTimeout(function () {
        showImage({
            src: 'temp/4.png',
            stayTime: 5000,
            exitSound: glitchEl,
            initialTransform: 'scale(2)',
            transform: "scale(2.5)",
            transition: "transform 5s linear",
            containerAnimation: 'blink 0.2s infinite'
        });
    }, 21000);

    setTimeout(function () {
        showImage({
            src: 'temp/5.png',
            stayTime: 9000,
            exitSound: glitchEl,
            initialTransform: 'scale(3)',
            transform: "scale(2)",
            transition: "transform 10s linear",
            containerAnimation: 'blink 0.2s infinite'
        });
    }, 26000);

    setTimeout(function () {
        showImage({
            src: 'temp/11.jpg',
            stayTime: 8000,
            exitSound: glitchEl,
            initialTransform: 'scale(2)',
            transform: "scale(1.6)",
            transition: "transform 8s linear",
            containerAnimation: 'blink 0.2s infinite'
        });
    }, 35000);

    setTimeout(function () {
        showImage({
            src: 'temp/6.png',
            stayTime: 10000,
            exitSound: glitchEl,
            initialTransform: 'scale(3)',
            transform: "scale(2)",
            transition: "transform 12s linear",
            containerAnimation: 'blink 0.2s infinite'
        });
    }, 43000);

    
    // setTimeout(function() {
    //     showVideo({
    //         src: 'temp/2.mp4',
    //         playbackRate: 1,
    //         stayTime: 5000,
    //         exitSound: glitchEl,
    //         initialTransform: 'scale(1.5) translateX(70px)',
    //         transform: "scale(2) translateX(70px)",
    //         transition: "transform 10s linear",
    //         containerAnimation: 'blink 0.2s infinite'
    //     });
    // }, 0);
}