var newYear;
(function (newYear) {
    let buttonExists = false;
    function insert(_name) {
        let query = "command=insert";
        query += "&Name=" + _name;
        for (let i = 0; i < newYear.allFireworks.length; i++) {
            let Element = {
                name: _name,
                type: newYear.allFireworks[i].type,
                x: newYear.allFireworks[i].x.toString(),
                y: newYear.allFireworks[i].y.toString(),
                color: newYear.allFireworks[i].color.toString(),
                particles: newYear.allFireworks[i].particles.toString()
            };
            query += "&Type=" + Element.type + "&X=" + Element.x + "&Y=" + Element.y + "&Color=" + Element.color + "&Particles=" + Element.particles;
        }
        sendRequest(query, handleInsertResponse);
        console.log("query:", query);
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
    function find() {
        let query = "command=find";
        sendRequest(query, handleFindResponse);
    }
    newYear.find = find;
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            newYear.rebuildArray = JSON.parse(xhr.response);
            console.log(newYear.rebuildArray);
            if (buttonExists == false) {
                for (let i = 0; i < newYear.rebuildArray.length; i++) {
                    let button = document.createElement("button");
                    button.innerText = "Bild" + i.toString();
                    button.addEventListener("click", newYear.rebuildCanvas);
                    button.setAttribute("id", i.toString());
                    document.getElementById("output").appendChild(button);
                    buttonExists = true;
                }
            }
        }
    }
})(newYear || (newYear = {}));
//# sourceMappingURL=client.js.map