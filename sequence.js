async function sequence() {
    let lapsedTime = 0;
    
    setTimeout(function() {
        showImage({
            src: 'temp/1.png',
            stayTime: 5000,
            initialTransform: 'scale(1)',
            transform: "scale(2)",
            transition: "transform 5s ease-in",
        });
    }, lapsedTime);
    lapsedTime += 5000;

    setTimeout(function() {
        showImage({
            src: 'temp/2.png',
            stayTime: 4000,
            initialTransform: 'scale(2)',
            transform: "scale(1)",
            transition: "transform 4s ease-in",
        });
    }, lapsedTime);
    lapsedTime += 4000;

    setTimeout(function() {
        showImage({
            src: 'temp/3.png',
            stayTime: 5000,
            initialTransform: 'scale(1)',
            transform: "scale(2)",
            transition: "transform 5s ease-in",
        });
    }, lapsedTime);
    lapsedTime += 5000;
}