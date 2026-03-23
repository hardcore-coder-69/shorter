let caption = "We might be living inside a simulation...";
let captionSize = 25;
async function sequence() {
    // bgmEl.currentTime = 16;
    bgmEl.volume = 0.5;
    voiceoverEl.volume = 1;
    voiceoverEl.playbackRate = 1;
    glitchEl.volume = 0.5;
    
    // setTimeout(function () {
    //     showImage({
    //         src: 'temp/1.png',
    //         stayTime: 4000,
    //         exitSound: glitchEl,
    //         initialTransform: 'scale(1.5)',
    //         transform: "scale(1.3)",
    //         transition: "transform 5s linear",
    //         containerAnimation: 'blink 0.1s infinite'
    //     });
    // }, 0);

    // setTimeout(function () {
    //     showImage({
    //         src: 'temp/2.png',
    //         stayTime: 5000,
    //         exitSound: glitchEl,
    //         initialTransform: 'scale(1)',
    //         transform: "scale(1.2)",
    //         transition: "transform 10s linear",
    //         containerAnimation: 'blink 0.1s infinite'
    //     });
    // }, 4000);

    // setTimeout(function () {
    //     showImage({
    //         src: 'temp/3.png',
    //         stayTime: 13000,
    //         exitSound: glitchEl,
    //         initialTransform: 'scale(1)',
    //         transform: "scale(1.5)",
    //         transition: "transform 15s linear",
    //         containerAnimation: 'blink 0.1s infinite'
    //     });
    // }, 9000);

    // setTimeout(function () {
        // showImage({
        //     src: 'temp/4.png',
        //     stayTime: 9000,
        //     exitSound: glitchEl,
        //     initialTransform: 'scale(4)',
        //     transform: "scale(1)",
        //     transition: "transform 10s linear",
        //     containerAnimation: 'blink 0.1s infinite'
        // });
    // }, 22000);

    // setTimeout(function () {
    //     showImage({
    //         src: 'temp/5.png',
    //         stayTime: 6000,
    //         exitSound: glitchEl,
    //         initialTransform: 'scale(1)',
    //         transform: "scale(1.2)",
    //         transition: "transform 8s linear",
    //         containerAnimation: 'blink 0.1s infinite'
    //     });
    // }, 31000);

    
    setTimeout(function() {
        showVideo({
            src: 'temp/2.mp4',
            playbackRate: 1,
            stayTime: 5000,
            exitSound: glitchEl,
            initialTransform: 'scale(1.5) translateX(70px)',
            transform: "scale(2) translateX(70px)",
            transition: "transform 10s linear",
            containerAnimation: 'blink 0.1s infinite'
        });
    }, 0);

    setTimeout(function() {
        showVideo({
            src: 'temp/1.mp4',
            playbackRate: 1,
            stayTime: 5000,
            exitSound: glitchEl,
            initialTransform: 'scale(1.5)',
            transform: "scale(2)",
            transition: "transform 10s linear",
            containerAnimation: 'blink 0.1s infinite'
        });
    }, 5000);

    setTimeout(function() {
        showVideo({
            src: 'temp/2.mp4',
            playbackRate: 1,
            stayTime: 7000,
            exitSound: glitchEl,
            initialTransform: 'scale(1.5) translateX(70px)',
            transform: "scale(1.5) translateX(-10px)",
            transition: "transform 10s linear",
            containerAnimation: 'blink 0.1s infinite'
        });
    }, 10000);

    setTimeout(function() {
        showVideo({
            src: 'temp/1.mp4',
            playbackRate: 1,
            stayTime: 6000,
            exitSound: glitchEl,
            initialTransform: 'scale(2) translateX(0px)',
            transform: "scale(3) translateX(0px)",
            transition: "transform 5s linear",
            containerAnimation: 'blink 0.1s infinite'
        });
    }, 17000);

    setTimeout(function() {
        showVideo({
            src: 'temp/1.mp4',
            playbackRate: 1,
            stayTime: 7000,
            exitSound: glitchEl,
            initialTransform: 'scale(2) translateX(70px)',
            transform: "scale(2) translateX(0px)",
            transition: "transform 5s linear",
            containerAnimation: 'blink 0.1s infinite'
        });
    }, 23000);

    setTimeout(function() {
        showVideo({
            src: 'temp/2.mp4',
            playbackRate: 1,
            stayTime: 8000,
            exitSound: glitchEl,
            initialTransform: 'scale(1.5) translateX(-70px)',
            transform: "scale(1.5) translateX(10px)",
            transition: "transform 10s linear",
            containerAnimation: 'blink 0.1s infinite'
        });
    }, 30000);

    setTimeout(function() {
        showImage({
            src: 'temp/galaxy.jpg',
            stayTime: 5000,
            exitSound: glitchEl,
            initialTransform: 'scale(1.1)',
            transform: "scale(1)",
            transition: "transform 5s linear",
            containerAnimation: 'blink 0.1s infinite'
        });
    }, 38000);

    setTimeout(function() {
        showImage({
            src: 'temp/mw.jpg',
            stayTime: 5000,
            exitSound: glitchEl,
            initialTransform: 'scale(1)',
            transform: "scale(1.1)",
            transition: "transform 5s linear",
            containerAnimation: 'blink 0.1s infinite'
        });
    }, 43000);
}