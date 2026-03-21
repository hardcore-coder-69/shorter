let caption = "We might be living inside a simulation...";
let captionSize = 25;
async function sequence() {
    // voiceoverEl.currentTime = 9;
    setTimeout(function () {
        showImage({
            src: 'temp/1.png',
            stayTime: 4000,
            exitSound: glitchEl,
            initialTransform: 'scale(1.5)',
            transform: "scale(1.3)",
            transition: "transform 5s linear",
        });
    }, 0);

    setTimeout(function () {
        showImage({
            src: 'temp/2.png',
            stayTime: 5000,
            exitSound: glitchEl,
            initialTransform: 'scale(1)',
            transform: "scale(1.2)",
            transition: "transform 10s linear",
        });
    }, 4000);

    setTimeout(function () {
        showImage({
            src: 'temp/3.png',
            stayTime: 13000,
            exitSound: glitchEl,
            initialTransform: 'scale(1)',
            transform: "scale(1.5)",
            transition: "transform 15s linear",
        });
    }, 9000);

    setTimeout(function () {
        showImage({
            src: 'temp/4.png',
            stayTime: 9000,
            exitSound: glitchEl,
            initialTransform: 'scale(4)',
            transform: "scale(1)",
            transition: "transform 10s linear",
        });
    }, 22000);

    setTimeout(function () {
        showImage({
            src: 'temp/5.png',
            stayTime: 6000,
            exitSound: glitchEl,
            initialTransform: 'scale(1)',
            transform: "scale(1.2)",
            transition: "transform 8s linear",
        });
    }, 31000);

    setTimeout(function() {
        voiceoverEl.pause();
    }, 36000);

    

    // setTimeout(function() {
    //     showVideo({
    //         src: 'temp/5.mp4',
    //         playbackRate: 1,
    //         stayTime: 6000,
    //         exitSound: glitchEl,
    //         initialTransform: 'scale(1)',
    //         transform: "scale(1.2)",
    //         transition: "transform 8s linear",
    //     });
    // }, 30000);
}