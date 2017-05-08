class Listeners {
    constructor () {
        this.UserAdd = document.querySelector('#AddUser');
        this.inputText = document.querySelector('#AddUserText');
    
        this.showWorkers = document.querySelector('#CheckWorkers');
    }
    addListener (element,functioN){
        element.addEventListener('click',functioN,false);
    }
    showElement(element){
        console.log(element);
    }
}
let listener = new Listeners();


listener.showElement(listener.UserAdd);
listener.showElement(listener.inputText);


listener.addListener(listener.UserAdd,function (){
        let name = listener.inputText.value;
        if(name.length === 0)
            {
                console.log('Nie podałeś Nazwy!');
                console.log(people)
                return;
            }
    
        optionsPeople.addHuman(name);
        console.log(people);
})



listener.addListener(listener.showWorkers, function(){
    
        optionsPeople.showEveryName();

})


