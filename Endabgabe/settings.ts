namespace newYear {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", canvasClicked);

    let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    let availableColors: string [] = ["AliceBlue", "Chocolate", "CadetBlue", "DarkSalmon", "Gold", "darkkhaki"];
    let n: number = 0;
    export let pickedColor = availableColors[n]
    export let numberOfParticles: number = 10;
    export let waitForOrigin: boolean = false;
    export let currentStyle: string = "line";

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawColor();
        particles();
        preview();
        setPoint();
        changeStyle();
    }

    function drawColor(){
        let color: Path2D = new Path2D();
        color.rect(0, 0, 100, 50);
        crc2.fillStyle = availableColors[n];
        crc2.fill(color);
        crc2.font = "15px Arial";
        crc2.fillStyle = "black"
        crc2.fillText("change color",5,25);
    }

    function changeStyle(){
        let color: Path2D = new Path2D();
        color.rect(0, 50, 100, 50);
        crc2.fillStyle = "cornsilk";
        crc2.fill(color);
        crc2.font = "15px Arial";
        crc2.fillStyle = "black"
        crc2.fillText("change style",5,75);
    }

    function particles(){
        let moreP: Path2D = new Path2D();
        moreP.rect(100, 0, 200, 50);
        crc2.fillStyle = "linen";
        crc2.fill(moreP);
        crc2.font = "15px Arial";
        crc2.fillStyle = "black"
        crc2.fillText("more particles",150,30);
        let lessP: Path2D = new Path2D();
        lessP.rect(100, 50, 200, 50);
        crc2.fillStyle = "moccasin"; 
        crc2.fill(lessP);
        crc2.fillStyle = "black";
        crc2.fillText("less particles",150,80);
    }

    function preview () {
        let preview: Path2D = new Path2D();
        preview.rect(300, 0, 100, 100);
        crc2.fillStyle = "rgb(51, 35, 86)";
        crc2.fill(preview);
        if (currentStyle == "line"){
            let firework: FireworkNoAnimation = new FireworkNoAnimation(pickedColor, numberOfParticles);
            firework.draw();
        }
        if (currentStyle == "arc"){
            let firework: FireworkCircleNA = new FireworkCircleNA(pickedColor, numberOfParticles);
            firework.draw();
        }
        
    }
    
    function setPoint (){
            let setPoint: Path2D = new Path2D();
            setPoint.rect(400, 0, 100, 100);
            crc2.fillStyle = "peachpuff";
            crc2.fill(setPoint);
            crc2.font = "15px Arial";
            crc2.fillStyle = "black"
            crc2.fillText("set origin",420 ,50);
    }

    function canvasClicked(_event: MouseEvent){
        let clientX : number = _event.clientX;
        let clientY : number = _event.clientY;
        //console.log(clientX, clientY);
        if (clientX < 100 && clientY < 50){
            console.log("clicked color");
            n = n += 1;
            if (n >= 6) {
                n = 0;
            }
            pickedColor = availableColors[n]
            drawColor();
            preview();
        }
        if (clientX < 100 && clientY > 50 && clientY < 100){
            console.log("style change");
            if (currentStyle == "line"){
                currentStyle = "arc";
            } else {currentStyle = "line";}
            preview();
        }
        if (clientX > 100 && clientY < 50 && clientX < 300){
            console.log("more Particles");
            numberOfParticles = numberOfParticles += 1
            preview();
        }
        if (clientX > 100 && clientY > 50 && clientX < 300 && clientY < 100){
            console.log("less Particles");
            numberOfParticles = numberOfParticles -= 1
            preview();
        }
        if (clientX > 400 && clientY < 100 && clientX < 500){
            console.log("setOrigin");
            waitForOrigin = true;
            overlay();
        }
        if (waitForOrigin == true && clientY >= 120 && clientX <= 500 && clientY <= 520) {
            getCoordinates(clientX, clientY);
        }

    }

}