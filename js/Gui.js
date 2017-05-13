class Gui {
    showAllName (arrayDOM) {
        this.clear();
        let  ol = document.querySelector('#listOfElements');
        for(let i=0; i<arrayDOM.length; i++){
            let nameList = arrayDOM[i]
            ol.innerHTML += nameList;
        }
    }
    showWork (ArrayWork){
        this.clear();
        let  ol = document.querySelector('#listOfElements');
        for(let i=0; i<ArrayWork.length; i++){
            let nameList = ArrayWork[i]
            ol.innerHTML += nameList;
        }
    }
    showDOM(Array){
        this.clear();
        let  ol = document.querySelector('#listOfElements');
        for(let i=0; i<Array.length; i++){
            ol.appendChild(Array[i]);
            listener.targeting(ol.children[i]);        
        }
    }
    clear () {
    let  ol = document.querySelector('#listOfElements');
    ol.innerHTML = "";
    }
};
let gui = new Gui();