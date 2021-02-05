var newYear;
(function (newYear) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", canvasClicked);
    let canvas;
    let availableColors = ["AliceBlue", "Chocolate", "CadetBlue", "DarkSalmon", "Gold", "darkkhaki"];
    let n = 0;
    newYear.pickedColor = availableColors[n];
    newYear.numberOfParticles = 10;
    newYear.waitForOrigin = false;
    newYear.currentStyle = "line";
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        newYear.crc2 = canvas.getContext("2d");
        drawColor();
        particles();
        preview();
        setPoint();
        changeStyle();
    }
    function drawColor() {
        let color = new Path2D();
        color.rect(0, 0, 100, 50);
        newYear.crc2.fillStyle = availableColors[n];
        newYear.crc2.fill(color);
        newYear.crc2.font = "15px Arial";
        newYear.crc2.fillStyle = "black";
        newYear.crc2.fillText("change color", 5, 25);
    }
    function changeStyle() {
        let color = new Path2D();
        color.rect(0, 50, 100, 50);
        newYear.crc2.fillStyle = "cornsilk";
        newYear.crc2.fill(color);
        newYear.crc2.font = "15px Arial";
        newYear.crc2.fillStyle = "black";
        newYear.crc2.fillText("change style", 5, 75);
    }
    function particles() {
        let moreP = new Path2D();
        moreP.rect(100, 0, 200, 50);
        newYear.crc2.fillStyle = "linen";
        newYear.crc2.fill(moreP);
        newYear.crc2.font = "15px Arial";
        newYear.crc2.fillStyle = "black";
        newYear.crc2.fillText("more particles", 150, 30);
        let lessP = new Path2D();
        lessP.rect(100, 50, 200, 50);
        newYear.crc2.fillStyle = "moccasin";
        newYear.crc2.fill(lessP);
        newYear.crc2.fillStyle = "black";
        newYear.crc2.fillText("less particles", 150, 80);
    }
    function preview() {
        let preview = new Path2D();
        preview.rect(300, 0, 100, 100);
        newYear.crc2.fillStyle = "rgb(51, 35, 86)";
        newYear.crc2.fill(preview);
        if (newYear.currentStyle == "line") {
            let firework = new newYear.FireworkNoAnimation(newYear.pickedColor, newYear.numberOfParticles);
            firework.draw();
        }
        if (newYear.currentStyle == "arc") {
            let firework = new newYear.FireworkCircleNA(newYear.pickedColor, newYear.numberOfParticles);
            firework.draw();
        }
    }
    function setPoint() {
        let setPoint = new Path2D();
        setPoint.rect(400, 0, 100, 100);
        newYear.crc2.fillStyle = "peachpuff";
        newYear.crc2.fill(setPoint);
        newYear.crc2.font = "15px Arial";
        newYear.crc2.fillStyle = "black";
        newYear.crc2.fillText("set origin", 420, 50);
    }
    function canvasClicked(_event) {
        let clientX = _event.clientX;
        let clientY = _event.clientY;
        //console.log(clientX, clientY);
        if (clientX < 100 && clientY < 50) {
            console.log("clicked color");
            n = n += 1;
            if (n >= 6) {
                n = 0;
            }
            newYear.pickedColor = availableColors[n];
            drawColor();
            preview();
        }
        if (clientX < 100 && clientY > 50 && clientY < 100) {
            console.log("style change");
            if (newYear.currentStyle == "line") {
                newYear.currentStyle = "arc";
            }
            else {
                newYear.currentStyle = "line";
            }
            preview();
        }
        if (clientX > 100 && clientY < 50 && clientX < 300) {
            console.log("more Particles");
            newYear.numberOfParticles = newYear.numberOfParticles += 1;
            preview();
        }
        if (clientX > 100 && clientY > 50 && clientX < 300 && clientY < 100) {
            console.log("less Particles");
            newYear.numberOfParticles = newYear.numberOfParticles -= 1;
            preview();
        }
        if (clientX > 400 && clientY < 100 && clientX < 500) {
            console.log("setOrigin");
            newYear.waitForOrigin = true;
            newYear.overlay();
        }
        if (newYear.waitForOrigin == true && clientY >= 120 && clientX <= 500 && clientY <= 520) {
            newYear.getCoordinates(clientX, clientY);
        }
    }
})(newYear || (newYear = {}));
//# sourceMappingURL=settings.js.map