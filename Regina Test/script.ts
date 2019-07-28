interface Parkplatz{
    name : string;
    StellplatzProReihe: number;
    reihen: number;
}

let Ibau:Parkplatz = {
    name : "Ibau",
    StellplatzProReihe : 10,
    reihen : 6,
}

let Cbau:Parkplatz = {
    name: "Cbau",
    StellplatzProReihe : 12,
    reihen : 4,

}


function berechne(_jahreszeit:string){
if(_jahreszeit == "winter"){
    let Stellplätze:number = Ibau.reihen * (Ibau.StellplatzProReihe -2);
    console.log(Ibau.name, "freie Stellplätze: ", Stellplätze);
}
if(_jahreszeit == "herbst"){
    let Stellplätze:number = Cbau.reihen * (Cbau.StellplatzProReihe -1);
    console.log(Cbau.name,"freie Stellplätze: ", Stellplätze);
}
}