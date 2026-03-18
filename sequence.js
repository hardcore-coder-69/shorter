async function sequence() {
    let lapsedTime = 0;
    
    setTimeout(function() {
        showImage({
            src: 'temp/1.png',
            stayTime: 3000,
            initialTranform: 'scale(2)',
            transform: "scale(1)",
            transition: "transform 2s ease-in",
        });
    }, lapsedTime);
    lapsedTime += 3000;

    setTimeout(function() {
        showImage({
            src: 'temp/2.png',
            stayTime: 3000,
            initialTranform: 'scale(2)',
            transform: "scale(1)",
            transition: "transform 2s ease-in",
        });
    }, lapsedTime);
    lapsedTime += 3000;

    setTimeout(function() {
        showImage({
            src: 'temp/1.png',
            stayTime: 4000,
            initialTranform: 'scale(2)',
            transform: "scale(1)",
            transition: "transform 2s ease-in",
        });
    }, lapsedTime);
    lapsedTime += 4000;
}