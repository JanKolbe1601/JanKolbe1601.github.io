namespace newYear {
    export interface Object {
        type: string;
        x: string;
        y: string;
        color: string;
        particles: string;
    }

    let buttonExists: boolean = false;

    export interface CanvasElement {
        name: string;
        type: string;
        x: string;
        y: string;
        color: string;
        particles: string;
    }

    export let rebuildArray: CanvasElement[];


    export function insert(_name: string): void {
        let query: string = "command=insert";
        query += "&Name=" + _name;
        for (let i: number = 0; i < allFireworks.length; i++) {
            
            let Element: Object = {
                type: allFireworks[i].type,
                x: allFireworks[i].x.toString(),
                y: allFireworks[i].y.toString(),
                color: allFireworks[i].color.toString(),
                particles: allFireworks[i].particles.toString()
            }
            query += "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y + "&Color=" + Element.color + "&Particles=" + Element.particles;
        }
        sendRequest(query, handleInsertResponse);
        console.log("query:", query);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    export function find(): void {
        let query: string = "command=find";
        sendRequest(query, handleFindResponse);
    } 

   function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            rebuildArray = JSON.parse(xhr.response);
            console.log(rebuildArray);
            if (buttonExists == false) {
                for (let i = 0; i <= rebuildArray.length; i++) {
                    if (rebuildArray[i].name == "null" || rebuildArray[i].name == "") {
                        return;
                    }
                    let button = document.createElement("button");
                    button.innerText = rebuildArray[i].name;
                    button.addEventListener("click", rebuildCanvas);
                    button.setAttribute("id", i.toString());
                    document.getElementById("output").appendChild(button);
                    buttonExists = true;
                }
            }
        }
    } 

}