class OptionsPeople {   
 addHuman (name){
        let human = new PEOPLE(name);
        people.push(human);
        console.log(people);
        information.changeInformation('Dodano pracownika ' + name + '!');
     }   
 showName (){
      for(let i =0; i<people.length; i++){
          console.log(people[i].name)
      }
  }
 addWork (human,work){
      for (let number  =0; number< people.length; number++){
          for (let i =0; i< human.length ; i++){
                if(people[number].name === human[i]){
                    if(people[number].checkIfWorkExisted(work, people[number].work))
                        {
                            people[number].work.push(work);
                            console.log(people[number].name   + ' Dostał robotę' + ' ' + people[number].work);
                            information.changeInformation(people[number].name + ' dostał pracę!');
                            return;
                        }
                }   
          }
      }
 }
 checkWork (name){
    for( let i =0; i<people.length; i++){
        if(people[i].name === name){
            console.log(people[i].name + ' ma robotę: ' + people[i].work);
        }
    }
}
 checkIfExisting (name){
      for( let i =0; i<people.length; i++){
        if(people[i].name === name){
            console.log(people[i].name + ' istnieje');
                    return;
        }
    }    
    console.log('Nie ma nikogo o takim imienu');
}
 checkWhoisDoingWork(work){
    for(let i =0; i<people.length; i++){
        for (let works = 0; works < people[i].work.length; works ++){
            if(people[i].work[works] === work){
                console.log(people[i].name + ' aktualnie wykonuje ta pracę');
                continue;
            }
        }
    }
}
 showEveryName (){
    for(let i =0; i<people.length; i++){
        console.log(people[i].name);
    } 
}
    
 removeUser (name){
     for(let i=0; i < people.length; i++){
         if(people[i].name === name){
             people.splice(i, 1);
             console.log(people);
             information.changeInformation('Usunięto pracownika!');
             return;
         }
     }
     information.changeInformation('Użytkownik, którego podałeś nie istnieje!');
     console.log('Użytkownik, którego podałeś nie istnieje!');
 }
    
    
 getNameWhichList (){
     let list = document.querySelector('#listOfElements');
     let nameArray = [];
     

 }
    
    
    
    
    
}
let optionsPeople =  new OptionsPeople();
