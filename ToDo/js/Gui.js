class Gui {
    showAllName (arrayDOM) {
        let  ol = document.querySelector('#listOfElements');
        for(let i=0; i<arrayDOM.length; i++){
            let nameList = arrayDOM[i]
            ol.innerHTML += nameList;
        }
    }
    clear () {
    let  ol = document.querySelector('#listOfElements');
    ol.innerHTML = "";
    }
};
let gui = new Gui();