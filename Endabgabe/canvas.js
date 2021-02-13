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
        newYear.find();
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
        newYear.insert(bildName);
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
    function rebuildCanvas(_e) {
        console.log("rebuild");
        let id = this.id;
        let xCoordinates = newYear.rebuildArray[id].x;
        let yCoordinates = newYear.rebuildArray[id].y;
        let type = newYear.rebuildArray[id].type;
        let color = newYear.rebuildArray[id].color;
        let particles = newYear.rebuildArray[id].particles;
        for (let i = 0; i <= newYear.allFireworks.length; i++) {
            newYear.allFireworks.splice(0, newYear.allFireworks.length);
        }
        for (let i = 0; i < xCoordinates.length; i++) {
            let NewObject = {
                type: type[i],
                x: xCoordinates[i],
                y: yCoordinates[i],
                color: color[i],
                particles: particles[i],
                name: ""
            };
            if (NewObject.type == "line") {
                let firework = new newYear.Firework(NewObject.color, parseInt(NewObject.particles), parseInt(NewObject.x), parseInt(NewObject.y));
                newYear.allFireworks.push(firework);
            }
            else {
                let firework = new newYear.FireworkTriangle(NewObject.color, parseInt(NewObject.particles), parseInt(NewObject.x), parseInt(NewObject.y));
                newYear.allFireworks.push(firework);
            }
        }
    }
    newYear.rebuildCanvas = rebuildCanvas;
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