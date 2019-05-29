console.log("Hallo :)");
window.onload = function(){

    console.log("Objekte wurden geladen");
    document.getElementById("B1").addEventListener("click", ChangeButton1);
    document.getElementById("B2").addEventListener("click", LOL1);
    document.getElementById("B3").addEventListener("click", LOL2);
    newtext();
}

// HTML-Elemete über TypeScript
function newtext() {
    let heading = document.createElement("h1");
    let node = document.createTextNode("TS Überschrift");
    heading.appendChild(node);
    let element = document.getElementById("id1");
    element.appendChild(heading);
    let para = document.createElement("p");
    node = document.createTextNode("TS Paragraph");
    para.appendChild(node);
    element = document.getElementById("id1");
    element.appendChild(para);
}

// HTML-Element ändert seinen Inhalt
function ChangeButton1() {
    console.log("B1 wurde gedrückt");
    document.getElementById("B1").innerHTML = "#Yay"; 
}
// HTML Element Klasse ändert sich 
function LOL1() {
    console.log("B2 wurde gedrückt");
    document.getElementById("B2").className = "gedrückter Button"; 
    console.log("Die Klasse von B2 hat sich in gedrückter Button geändert");
}
// Rechnungen in der Konsole
function LOL2() {
    console.log("B3 wurde gedrückt");
    let Zahl1 = 6;
    let Zahl2 = 8;
    let Wort1 = "Wie ";
    let Wort2 = "gehts ";
    console.log("Rechnungen");
    console.log(Zahl1 + Zahl2);
    console.log(Wort1 + Wort2);
    console.log(Wort2 + Zahl2);
}