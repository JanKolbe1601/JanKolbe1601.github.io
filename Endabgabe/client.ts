namespace newYear {
    export interface Object {
        type: string;
        x: string;
        y: string;
        color: string;
        particles: string;
    }


    export function insert(_name: string): void {
        let query: string = "command=insert";

        for (let i: number = 0; i < allFireworks.length; i++) {
            query += "&name=" + _name;
            let Element: Object = {
                type: allFireworks[i].type,
                x: allFireworks[i].x.toString(),
                y: allFireworks[i].y.toString(),
                color: allFireworks[i].toString(),
                particles: allFireworks[i].particles.toString()
            }
            query += "&type=" + Element.type + "&x=" + Element.x + "&y=" + Element.y + "&color=" + Element.color + "&particles=" + Element.particles;
        }
        sendRequest(query, handleInsertResponse);
        console.log(query);
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

/*    export function find(): void {
        let query: string = "command=find";
        sendRequest(query, handleFindResponse);
    } */

/*   function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            rebuildArray = JSON.parse(xhr.response);
            if (buttonExists == false) {
                for (let i: number = 0; i <= rebuildArray.length; i++) {
                    if (rebuildArray[i].name == "null"|| rebuildArray[i].name == "") { return; }
                    let button: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
                    button.innerText = rebuildArray[i].name;
                    button.addEventListener("click", rebuildCanvas);
                    button.setAttribute("id", i.toString())
                    document.getElementById("output").appendChild(button);
                    buttonExists = true;
                }
            }
        }
    } */

}