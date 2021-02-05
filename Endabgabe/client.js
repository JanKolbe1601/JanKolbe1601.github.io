var newYear;
(function (newYear) {
    function insert(_name) {
        let query = "command=insert";
        for (let i = 0; i < newYear.allFireworks.length; i++) {
            query += "&name=" + _name;
            let Element = {
                type: newYear.allFireworks[i].type,
                x: newYear.allFireworks[i].x.toString(),
                y: newYear.allFireworks[i].y.toString(),
                color: newYear.allFireworks[i].toString(),
                particles: newYear.allFireworks[i].particles.toString()
            };
            query += "&type=" + Element.type + "&x=" + Element.x + "&y=" + Element.y + "&color=" + Element.color + "&particles=" + Element.particles;
        }
        sendRequest(query, handleInsertResponse);
    }
    newYear.insert = insert;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", newYear.serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
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
})(newYear || (newYear = {}));
//# sourceMappingURL=client.js.map