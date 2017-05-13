class GenerateDOM {
        nameWorkers (){
            gui.clear();
            let nameArrayDOM = [];
            for(let i=0; i<people.length; i++){
                let name = people[i].name;
                let li = document.createElement('li');
                li.className = 'workers';
                li.innerHTML = name;                
                nameArrayDOM.push(li);
            }
            return nameArrayDOM;
        }
        //Znajdź błąd nie zwraca tablicy poprawnie przy większej ilośći zadań kopiuje je (więcej niż 2)
        work (name){
        let workArray = [];
        for( let i =0; i<people.length; i++){
        if(people[i].name === name){
            let work = people[i].work;
         for(let number =0; number < work.length ; number++){
             let worked = work[number];
             let string = `<li class ="workers">${worked}</li>`;
             workArray.push(string);
                    }       
                }
          } 
         return workArray;
        }
        allWorks () {
        let allWorks = [];    
            for(let i=0; i < people.length; i++){
            let  works = people[i].work;
                for(let i =0; i < works.length; i ++){
                    let work = works[i]
                    console.log(work);
                    console.log(work);
                    if(works != ""){
                    let string = `<li class ="workers">${work}</li>`;
                     allWorks.push(string);
                    }   
                }    
          }
            return allWorks;
        }
    }
let  genereteDOM = new GenerateDOM();    
