import * as Http from "http";
import * as Url from "url";
import * as Database from "./database";

console.log("Server starting");
interface AssocStringString {
    [key: string]: string;
}

export interface CanvasElement {
    name: string;
    type: string;
    x: string;
    y: string;
    color: string;
    particles: string;
}


let port: number = Number(process.env.PORT);
if (!port)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);


function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    let query: AssocStringString = <AssocStringString>Url.parse(_request.url, true).query;
    let command: string = query["command"];

    switch (command) {
        case "insert":
        let Canvas: CanvasElement = {
            name: query.Name,
            type: query.Type,
            x: query.X,
            y: query.Y,
            color: query.Color,
            particles: query.Particles
        };
        Database.insert(Canvas);
        console.log("Canvas:",Canvas);
        respond(_response, "Bild wurde gespeichert");
        break;
        case "find":
            Database.findAll(findCallback);
            break;
        default:
            respond(_response, "unknown command:" + command);
            break;
    }
    function findCallback(json: string): void {
        respond(_response, json);
    }
}


function respond(_response: Http.ServerResponse, _text: string): void {
    console.log("Preparing response: " + _text);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text);
    _response.end();
}