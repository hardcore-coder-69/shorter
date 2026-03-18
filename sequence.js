async function sequence() {
    let lapsedTime = 0;
    
    setTimeout(function() {
        showImage({
            src: 'temp/1.png',
            stayTime: 5000,
            initialTransform: 'scale(1)',
            transform: "scale(2) translateX(-100px)",
            transition: "transform 10s ease-in",
        });
    }, lapsedTime);
    lapsedTime += 5000;

    setTimeout(function() {
        showImage({
            src: 'temp/2.png',
            stayTime: 7000,
            initialTransform: 'scale(3)',
            transform: "scale(2)",
            transition: "transform 7s ease-in",
        });
    }, lapsedTime);
    lapsedTime += 7000;

    setTimeout(function() {
        showImage({
            src: 'temp/3.png',
            stayTime: 8000,
            initialTransform: 'scale(1)',
            transform: "scale(3)",
            transition: "transform 8s ease-in",
        });
    }, lapsedTime);
    lapsedTime += 8000;
}