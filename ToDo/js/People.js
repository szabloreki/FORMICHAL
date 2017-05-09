class PEOPLE {
     constructor (name){
         this.name = name;
         this.work = [];
         this.checkIfWorkExisted = function(work,arrayWork){
                 for(let i =0; i < arrayWork.length; i++){
                     if(arrayWork[i] === work){
                         console.log('Debilu on ma już tą robotę, kompletnie nie umiesz, zarządzać, dobrze, że masz ten system!');
                         information.changeInformation('Użytkownik już to robi!');
                         return false;
                        }
                    }
               return true;   
             }   
     }
 }   
let people = [];
let target = null;


    
    