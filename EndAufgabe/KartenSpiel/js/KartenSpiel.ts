document.addEventListener("DOMContentLoaded",run);
interface Karten{

    farbe : string;
    nummer : string;
    id : string;
    img : string;
}

let lila1 : Karten = {

    farbe: "lila",
    nummer: "1",
    id: "lila1",
    img : "imgs/L1.png",
}

let lila2 : Karten = {

    farbe: "lila",
    nummer: "2",
    id:"lila2",
    img : "imgs/L2.png",
}
let lila3 : Karten = {

    farbe: "lila",
    nummer: "3",
    id:"lila3",
    img : "imgs/L3.png",
}
let lila4 : Karten = {

    farbe: "lila",
    nummer: "4",
    id:"lila4",
    img : "imgs/L4.png",
}
let lila5 : Karten = {

    farbe: "lila",
    nummer: "5",
    id:"lila5",
    img : "imgs/L5.png",
}
let lila6 : Karten = {

    farbe: "lila",
    nummer: "6",
    id:"lila6",
    img : "imgs/L6.png",
}
let lila7 : Karten = {

    farbe: "lila",
    nummer: "7",
    id:"lila7",
    img : "imgs/L7.png",
}
let lila8 : Karten = {

    farbe: "lila",
    nummer: "8",
    id:"lila8",
    img : "imgs/L8.png",
}
let gelb1 : Karten = {

    farbe: "gelb",
    nummer: "1",
    id:"gelb1",
    img : "imgs/G1.png",
}
let gelb2 : Karten = {

    farbe: "gelb",
    nummer: "2",
    id:"gelb2",
    img : "imgs/G2.png",
}
let gelb3 : Karten = {

    farbe: "gelb",
    nummer: "3",
    id:"gelb3",
    img : "imgs/G3.png",
}
let gelb4 : Karten = {

    farbe: "gelb",
    nummer: "4",
    id:"gelb4",
    img : "imgs/G4.png",
}
let gelb5 : Karten = {

    farbe: "gelb",
    nummer: "5",
    id:"gelb5",
    img : "imgs/G5.png",
}
let gelb6 : Karten = {

    farbe: "gelb",
    nummer: "6",
    id:"gelb6",
    img : "imgs/G6.png"
}
let gelb7 : Karten = {

    farbe: "gelb",
    nummer: "7",
    id:"gelb7",
    img : "imgs/G7.png",
}
let gelb8 : Karten = {

    farbe: "gelb",
    nummer: "8",
    id:"gelb8",
    img : "imgs/G8.png",
}
let blau1 : Karten = {

    farbe: "blau",
    nummer: "1",
    id:"blau1",
    img : "imgs/B1.png",
}
let blau2 : Karten = {

    farbe: "blau",
    nummer: "2",
    id:"blau2",
    img : "imgs/B2.png",
}
let blau3 : Karten = {

    farbe: "blau",
    nummer: "3",
    id:"blau3",
    img : "imgs/B3.png",
}
let blau4 : Karten = {

    farbe: "blau",
    nummer: "4",
    id:"blau4",
    img : "imgs/B4.png",
}
let blau5 : Karten = {

    farbe: "blau",
    nummer: "5",
    id:"blau5",
    img : "imgs/B5.png",
}
let blau6 : Karten = {

    farbe: "blau",
    nummer: "6",
    id:"blau6",
    img : "imgs/B6.png",
}
let blau7 : Karten = {

    farbe: "blau",
    nummer: "7",
    id:"blau7",
    img : "imgs/B7.png",
}
let blau8 : Karten = {

    farbe: "blau",
    nummer: "8",
    id:"blau8",
    img : "imgs/B8.png",
}
let rot1 : Karten = {

    farbe: "rot",
    nummer: "1",
    id:"rot1",
    img : "imgs/R1.png",
}
let rot2 : Karten = {

    farbe: "rot",
    nummer: "2",
    id:"rot2",
    img : "imgs/R2.png",
}
let rot3 : Karten = {

    farbe: "rot",
    nummer: "3",
    id:"rot3",
    img : "imgs/R3.png",
}
let rot4 : Karten = {

    farbe: "rot",
    nummer: "4",
    id:"rot4",
    img : "imgs/R4.png",
}
let rot5 : Karten = {

    farbe: "rot",
    nummer: "5",
    id:"rot5",
    img : "imgs/R5.png",
}
let rot6 : Karten = {

    farbe: "rot",
    nummer: "6",
    id:"rot6",
    img : "imgs/R6.png",
}
let rot7 : Karten = {

    farbe: "rot",
    nummer: "7",
    id:"rot7",
    img : "imgs/R7.png",
}
let rot8 : Karten = {

    farbe: "rot",
    nummer: "8",
    id:"rot8",
    img : "imgs/R8.png",
}

let Spielerkartenarray: Karten[] = [];
let Pckartenarray: Karten[] = [];
let kartenzieharray: Karten[] = [rot1,rot2,rot3,rot4,rot5,rot6,rot7,rot8,blau1,blau2,blau3,blau4,blau5,blau6,blau7,blau8,gelb1,gelb2,gelb3,gelb4,gelb5,gelb6,gelb7,gelb8,lila1,lila2,lila3,lila4,lila5,lila6,lila7,lila8,rot1,rot2,rot3,rot4,rot5,rot6,rot7,rot8,blau1,blau2,blau3,blau4,blau5,blau6,blau7,blau8,gelb1,gelb2,gelb3,gelb4,gelb5,gelb6,gelb7,gelb8,lila1,lila2,lila3,lila4,lila5,lila6,lila7,lila8];
let ablagekartenarray : Karten[] = [];


function run(){
    document.getElementById("StartGame").addEventListener("click",startgame);
}
let j:number=1;
function startgame(){ 
    switch(j){
        case 1:{
            let ziehKarten: HTMLDivElement = document.createElement("div");
            ziehKarten.setAttribute("id","ziehkarten");
            document.getElementById("ZStapel").appendChild(ziehKarten);
            document.getElementById("StartGame").innerText = "";
            document.getElementById("StartGame").innerText = "Austeilen";
            //document.getElementById("ziehkarten").innerText = "";
            //document.getElementById("ziehkarten").innerText = "click mich um eine Karte zu ziehen";
            ziehKarten.addEventListener("click",Kartenziehen);
            console.log(j);
            j = 2;
            break;
            }
        default:{
            j= 3;
            break;
        }
    }
    if(j==3){
        kartenzieharray.sort(function(a,b){
            return 0.5 - Math.random()})
        austeilen();
    }        
}

function austeilen(){
    for(let i : number = 0; i <= 3; i++)  {
        console.log("hi");
        Spielerkartenarray.push(kartenzieharray[i]);
        kartenzieharray.splice(i,1);
        Pckartenarray.push(kartenzieharray[i]);
        kartenzieharray.splice(i,1);
        console.log(Pckartenarray);
        console.log(Spielerkartenarray);
        
    }  
    ablagekartenarray.push(kartenzieharray[9]);
    kartenzieharray.splice(9,1);
    zeigeKarteSpieler();  
    zeigeKartePC();
}
/*
function zeigeKarteSpieler () {
    document.getElementById("Spieler").innerHTML = "";
    for(let i:number = 0; i<= Spielerkartenarray.length -1; i++){
        let newCard:HTMLImageElement = document.createElement("img");
        newCard.innerHTML = `<img src=${Spielerkartenarray[i].img} width="100" height="100"></img>`;
        newCard.setAttribute("id", Spielerkartenarray[i].nummer.toString());
        newCard.setAttribute("alt",Spielerkartenarray[i].farbe);
        document.getElementById("Spieler").appendChild(newCard);
        newCard.addEventListener("click", spielekarte);
    }
}
*/

function zeigeKarteSpieler() {
    document.getElementById("Spieler").innerHTML = "";
    console.log("chabbos wissen wer der babbo ist ;)");
    for(let i:number = 0; i<= Spielerkartenarray.length -1; i++){
        let newCard:HTMLImageElement = document.createElement("img");
        newCard.innerHTML = "";
        newCard.setAttribute("class", i.toString());
        newCard.setAttribute("id", Spielerkartenarray[i].nummer.toString());
        newCard.setAttribute ("src",Spielerkartenarray[i].img);
        newCard.setAttribute("alt",Spielerkartenarray[i].farbe);
        newCard.setAttribute("height", "150");
        newCard.setAttribute("width", "100");
        document.getElementById("Spieler").appendChild(newCard);
        newCard.addEventListener("click", spielekarte);
        console.log(newCard);
    }
}

function zeigeKartePC () {
    document.getElementById("PC").innerHTML = "";
    console.log("chabbos wissen wer der babbo ist ;)");
    for(let i:number = 0; i<= Pckartenarray.length -1; i++){
        let newCard:HTMLImageElement = document.createElement("img");
        newCard.innerHTML = "";
        newCard.setAttribute("id", Pckartenarray[i].nummer.toString());
        newCard.setAttribute ("src",Pckartenarray[i].img);
        newCard.setAttribute("alt",Pckartenarray[i].farbe);
        newCard.setAttribute("height", "150");
        newCard.setAttribute("width", "100");
        document.getElementById("PC").appendChild(newCard);
        
    }
    document.getElementById("Ablage").innerHTML = "";
    for(let i: number = 0; i<1; i++){
    let newCard:HTMLImageElement = document.createElement("img");
        newCard.innerHTML = "";
        newCard.setAttribute("id", ablagekartenarray[0].nummer.toString());
        newCard.setAttribute ("src",ablagekartenarray[0].img);
        newCard.setAttribute("alt",ablagekartenarray[0].farbe);
        newCard.setAttribute("height", "150");
        newCard.setAttribute("width", "100");
        document.getElementById("Ablage").appendChild(newCard);
    }
    if( Spielerkartenarray.length < 1){
        alert("Spieler hat gewonnen");
        leereSpeilfeld();
    }
    if( Pckartenarray.length < 1){
        alert("Pc hat gewonnen");
        leereSpeilfeld();
    }
}

function Kartenziehen(){
    if(kartenzieharray.length <= 1) {
        alert("Ziehstapel ist leer")
        leereSpeilfeld();
    }
    Spielerkartenarray.push(kartenzieharray[1]);
    kartenzieharray.splice(1,1);
    zeigeKarteSpieler();
    Pcspieltkarte();
}


function spielekarte(event : MouseEvent){
    
    console.log(event.target);
    let t : number = ablagekartenarray.length -1;
    let kartenclick : HTMLImageElement = <HTMLImageElement>event.target;
    let kartenfarbe : string = kartenclick.alt;
    let kartennummer : string = kartenclick.id;
    let position : number = parseInt(kartenclick.className);
    if (ablagekartenarray[t].farbe == kartenfarbe || ablagekartenarray[t].nummer == kartennummer){
            ablagekartenarray.push(Spielerkartenarray[position]);
            Spielerkartenarray.splice(position,1);
            ablagekartenarray.splice(0,1);
            zeigeKartePC();
            zeigeKarteSpieler();
    }
    if(ablagekartenarray[t].farbe != kartenfarbe || ablagekartenarray[t].nummer != kartennummer){

        alert("dies Karte wo isch:D");
    }
    
    Pcspieltkarte(); 

}

function Pcspieltkarte(){

    let t : boolean = true;
    for(let i : number = 0 ; i < Pckartenarray.length ; i++){
        console.log(Pckartenarray[i].nummer);

        if (ablagekartenarray[0].farbe == Pckartenarray[i].farbe || ablagekartenarray[0].nummer == Pckartenarray[i].nummer && t == true){
            ablagekartenarray.push(Pckartenarray[i]);
            Pckartenarray.splice(i,1);
            ablagekartenarray.splice(0,1);
            zeigeKartePC();
            zeigeKarteSpieler();
            t = false;
            break;
        }  
    }
    if( t == true){
        Pckartenarray.push(kartenzieharray[0]);
        kartenzieharray.splice(0,1);
        zeigeKartePC();
        zeigeKarteSpieler();
    }
}

function leereSpeilfeld(){
    location.reload();
}