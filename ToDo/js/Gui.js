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
            ol.appendChild(ArrayWork[i]);
            listener.checkwhoIsDoingWork(ol.children[i]);
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
    showOneWorker (element){
        console.log('loop');
        let ol = document.querySelector('#listOfElements');
        let noToRemove = element;
        let name = noToRemove.textContent;
        let arrayElementToRemove = [];
        for(let i = 0; i < ol.children.length; i ++){
            if(ol.children[i].textContent === name){
                continue;
            }
            else
            {
                 arrayElementToRemove.push(ol.children[i]);
            }
        }
        for(let i =0; i<arrayElementToRemove.length; i++){
            ol.removeChild(arrayElementToRemove[i]);
            }
        let  work = optionsPeople.checkWork(name);
        let inner = `<div class = "infoWorker> ${name} </div>
                     <div class = "work"> Aktualne zadania: ${work} </div>
                     `
        ol.innerHTML += inner;
    }
    
    showNameWhenUserIsCheckingWhoIsDoingWork(arrayDOM) {
        this.clear();
        let  ol = document.querySelector('#listOfElements');
        for(let i=0; i<arrayDOM.length; i++){
            let nameList = arrayDOM[i];
            ol.appendChild(nameList);
        }
    }
};
let gui = new Gui();