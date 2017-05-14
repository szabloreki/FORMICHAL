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
        work (name){
        let workArray = [];
        for( let i =0; i<people.length; i++){
        if(people[i].name === name){
            let work = people[i].work;
         for(let number =0; number < work.length ; number++){
             let worked = work[number];
             let li = document.createElement('li');
             li.classList = "workers";
             li.textContent = worked;
             workArray.push(li);
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
                    if(works != ""){
                    let li = document.createElement('li');
                    li.innerHTML = work;
                    li.classList = "workers";
                    allWorks.push(li);
                    }   
                }    
          }
    return allWorks;
        }
    }
let  genereteDOM = new GenerateDOM();    
