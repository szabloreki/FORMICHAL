class GenerateDOM {
        nameWorkers (){
            gui.clear();
            let nameArrayDOM = [];
            for(let i=0; i<people.length; i++){
                let name = people[i].name;
                let string = `<li class ="workers">  ${name}</li>`
                nameArrayDOM.push(string);
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
    }
let  genereteDOM = new GenerateDOM();    
