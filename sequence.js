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

    setTimeout(function () {
        showImage({
            src: 'temp/2.png',
            stayTime: 10000,
            exitSound: fastWhooshEl,
            initialTransform: 'scale(0.5)',
            transform: "scale(1)",
            transition: "transform 10s linear",
        });
    }, lapsedTime);
    lapsedTime += 10000;

    setTimeout(function () {
        showImage({
            src: 'temp/3.png',
            stayTime: 4000,
            exitSound: whooshEl,
            initialTransform: 'scale(1)',
            transform: "scale(1.1)",
            transition: "transform 5s linear",
        });
    }, lapsedTime);
    lapsedTime += 4000;

    setTimeout(function () {
        showImage({
            src: 'temp/4.png',
            stayTime: 5000,
            exitSound: fastWhooshEl,
            initialTransform: 'scale(1)',
            transform: "scale(1.2)",
            transition: "transform 7s linear",
        });
    }, lapsedTime);
    lapsedTime += 5000;

    setTimeout(function() {
        showVideo({
            src: 'temp/5.mp4',
            playbackRate: 1,
            stayTime: 9000,
            exitSound: whooshEl,
            initialTransform: 'scale(1)',
            transform: "scale(1.5)",
            transition: "transform 10s linear",
        });
    }, lapsedTime);
    lapsedTime += 9000;

    setTimeout(function () {
        showImage({
            src: 'temp/6.png',
            stayTime: 10000,
            exitSound: fastWhooshEl,
            initialTransform: 'scale(1)',
            transform: "scale(1.5)",
            transition: "transform 10s linear",
        });
    }, lapsedTime);
    lapsedTime += 10000;
}