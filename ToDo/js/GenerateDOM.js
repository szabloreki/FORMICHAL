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
    }
let  genereteDOM = new GenerateDOM();    
