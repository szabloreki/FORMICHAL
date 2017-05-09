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
            let li = document.createElement('li');
            listener.targeting(li);
            li.innerHTML = Array[i];
            ol.appendChild(li);
        }
    }
    clear () {
    let  ol = document.querySelector('#listOfElements');
    ol.innerHTML = "";
    }
};
let gui = new Gui();