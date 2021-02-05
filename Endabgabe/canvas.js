var newYear;
(function (newYear) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let imageData;
    newYear.allFireworks = [];
    newYear.serverAddress = "https://fireworkofjan.herokuapp.com/";
    function init() {
        canvas = document.getElementsByTagName("canvas")[1];
        newYear.crc = canvas.getContext("2d");
        drawBackground();
        imageData = newYear.crc.getImageData(0, 0, canvas.width, canvas.height);
        //firework.draw()
        let saveButton = document.getElementById("save");
        saveButton.addEventListener("click", saveCanvas);
        update();
    }
    function drawBackground() {
        newYear.crc.rect(0, 0, 500, 400);
        newYear.crc.fillStyle = "rgb(51, 35, 86)";
        newYear.crc.fill();
        for (let i = 0; i < 40; i++) {
            let x = getRandomInt(500);
            let y = getRandomInt(400);
            let star = new Path2D();
            star.arc(x, y, 1, 0, 10);
            newYear.crc.fillStyle = "white";
            newYear.crc.fill(star);
        }
    }
    function saveCanvas() {
        let bildName = prompt("wie möchten sie ihr Bild nennen?");
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    function overlay() {
        newYear.crc.rect(0, 0, 500, 400);
        newYear.crc.fillStyle = "rgba(0,0,0,0.5)";
        newYear.crc.fill();
        newYear.crc.font = "30px Arial";
        newYear.crc.fillStyle = "white";
        newYear.crc.fillText("click any point to set origin", 70, 200);
    }
    newYear.overlay = overlay;
    function getCoordinates(x, y) {
        console.log("placeItHere");
        if (newYear.currentStyle == "line") {
            let firework = new newYear.Firework(newYear.pickedColor, newYear.numberOfParticles, x, y - 120);
            newYear.allFireworks.push(firework);
        }
        if (newYear.currentStyle == "arc") {
            let firework = new newYear.FireworkTriangle(newYear.pickedColor, newYear.numberOfParticles, x, y - 120);
            newYear.allFireworks.push(firework);
        }
        newYear.waitForOrigin = false;
        //crc.clearRect()
        update();
    }
    newYear.getCoordinates = getCoordinates;
    function update() {
        if (newYear.waitForOrigin) {
            return;
        }
        window.setTimeout(update, 1000 / 30);
        newYear.crc.clearRect(0, 0, canvas.width, canvas.height);
        newYear.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < newYear.allFireworks.length; i++) {
            newYear.allFireworks[i].update();
            //console.log(allFireworks[i]);
        }
    }
})(newYear || (newYear = {}));
//# sourceMappingURL=canvas.js.map