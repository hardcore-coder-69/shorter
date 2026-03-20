let caption = "If something crosses event horizon, it can never come back.";
let captionSize = 19;
async function sequence() {
    let lapsedTime = 0;
    setTimeout(function () {
        showImage({
            src: 'temp/1.png',
            stayTime: 3000,
            exitSound: whooshEl,
            initialTransform: 'scale(1.2)',
            transform: "scale(1)",
            transition: "transform 5s linear",
        });
    }, lapsedTime);
    lapsedTime += 3000;

    // setTimeout(function() {
    //     showVideo({
    //         src: 'temp/video.mp4',
    //         playbackRate: 0.7,
    //         stayTime: 10000,
    //         exitSound: whooshEl,
    //         initialTransform: 'scale(1)',
    //         transform: "scale(1.5)",
    //         transition: "transform 10s linear",
    //     });
    // }, lapsedTime);
    // lapsedTime += 10000;

    setTimeout(function () {
        showImage({
            src: 'temp/2.png',
            stayTime: 8000,
            exitSound: pageFlipEl,
            initialTransform: 'scale(0.5)',
            transform: "scale(1)",
            transition: "transform 10s linear",
        });
    }, lapsedTime);
    lapsedTime += 10000;
}