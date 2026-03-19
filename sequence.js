let caption = "One day on mercury is longer than a year on mercury";
async function sequence() {
    let lapsedTime = 0;
    setTimeout(function () {
        showImage({
            src: 'temp/2.jpg',
            stayTime: 5000,
            initialTransform: 'scale(2)',
            transform: "scale(2) translateX(-200px)",
            transition: "transform 10s linear",
        });
    }, lapsedTime);
    lapsedTime += 5000;

    // setTimeout(function() {
    //     showVideo({
    //         src: 'temp/video.mp4',
    //         playbackRate: 0.7,
    //         stayTime: 10000,
    //         initialTransform: 'scale(1)',
    //         transform: "scale(1.5)",
    //         transition: "transform 10s linear",
    //     });
    // }, lapsedTime);
    // lapsedTime += 10000;

    setTimeout(function () {
        showImage({
            src: 'temp/3.jpg',
            stayTime: 5000,
            initialTransform: 'scale(1.5)',
            transform: "scale(2)",
            transition: "transform 5s linear",
        });
    }, lapsedTime);
    lapsedTime += 5000;

    setTimeout(function () {
        showImage({
            src: 'temp/1.jpg',
            stayTime: 5000,
            initialTransform: 'scale(1.5)',
            transform: "scale(1)",
            transition: "transform 5s linear",
        });
    }, lapsedTime);
    lapsedTime += 5000;

    setTimeout(function () {
        showImage({
            src: 'temp/2.jpg',
            stayTime: 5000,
            initialTransform: 'scale(2) translateX(-200px)',
            transform: "scale(2) translateX(100px)",
            transition: "transform 5s linear",
        });
    }, lapsedTime);
    lapsedTime += 5000;

    setTimeout(function () {
        showImage({
            src: 'temp/3.jpg',
            stayTime: 5000,
            initialTransform: 'scale(2) translateX(100px)',
            transform: "scale(3) translateX(-100px)",
            transition: "transform 10s linear",
        });
    }, lapsedTime);
    lapsedTime += 5000;
}