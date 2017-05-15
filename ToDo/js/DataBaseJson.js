class DataBase {
    load (){
        console.log('load');
        let getPeople = localStorage.getItem('people');
        let toObject = JSON.parse(getPeople);
        for(let i=0; i<toObject.length; i++){
            toObject[i].checkIfExisting  = function(work,arrayWork){
                 for(let i =0; i < arrayWork.length; i++){
                     if(arrayWork[i] === work){
                         console.log('Debilu on ma już tą robotę, kompletnie nie umiesz, zarządzać, dobrze, że masz ten system!');
                         information.changeInformation('Użytkownik już to robi!');
                         return false;
                        }
                    }
               return true;   
             }
            console.log(toObject);
        }
        if(toObject.length === 0){
            console.log('Nie wczytuję bo nie ma co');
        }
        people = toObject;
    }
    save (){
        console.log('save');
        let peopleJSON = JSON.stringify(people);
        console.log(peopleJSON);
        localStorage.setItem('people', peopleJSON);
    }    
}
let dataBase = new DataBase();
//let toJson = JSON.stringify(array);
//console.log(toJson);
//localStorage.setItem('ludzie',toJson);
//let getArray = localStorage.getItem('ludzie');
//console.log(getArray);
//let ArrayToObject = JSON.parse(getArray);
//console.log(ArrayToObject);
