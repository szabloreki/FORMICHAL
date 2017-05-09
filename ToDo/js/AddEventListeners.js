class Listeners {
    constructor () {
        this.UserAdd = document.querySelector('#AddUser');
        this.inputText = document.querySelector('#AddUserText');
        this.showWorkers = document.querySelector('#CheckWorkers');
        this.userNameWork = document.querySelector('#UserNameWork');
        this.workText = document.querySelector('#WorkText');
        this.addWork = document.querySelector('#AddWork');
        this.User = document.querySelector('#User');
        this.UserWork = document.querySelector('#CheckUser');
        this.allWorks = document.querySelector('#AllWorks');
        this.removeUserText = document.querySelector('#RemoveUserText');
        this.removeUser = document.querySelector('#RemoveUser');
        this.target = document.querySelector('#Target');
    }
    addListener (element,functioN){
        element.addEventListener('click',functioN,false);
    }
    showElement(element){
        console.log(element);
    }
    
    targeting (li){
        li.addEventListener('click' ,function (){
                if(target === true){
                    console.log(this);
                    let li = this;
                    let LI = li.querySelector('li');
                    if(LI.className === "To"){
                        LI.className = "";
                    }
                    else
                    {
                        LI.className = "To";    
                    }
                 
                }
            } ,false);
        return li;
    }
    
}
let listener = new Listeners();
listener.showElement(listener.inputText);
listener.addListener(listener.UserAdd, function (){
        let name = listener.inputText.value;
        if(name.length === 0)
            {
                console.log('Nie podałeś Nazwy!');
                information.changeInformation('Nie podałeś nazwy!');
                console.log(people)
                return;
            }
        optionsPeople.addHuman(name);
        console.log(people);
})
listener.addListener(listener.showWorkers, function(){
        optionsPeople.showEveryName();
        let arrayDOM = genereteDOM.nameWorkers();    
        gui.showDOM(arrayDOM);
})
listener.addListener(listener.addWork, function (){
    let name = listener.userNameWork.value;
    let workString = listener.workText.value;
    let arrayName = [];
    
    arrayName.push(name);
    console.log(name, workString);
    console.log(this);
    optionsPeople.addWork(arrayName,workString);
})
listener.addListener(listener.UserWork, function(){
    let UserName = listener.User.value;
    optionsPeople.checkWork(UserName);
    let arrayWork = genereteDOM.work(UserName);
    gui.showWork(arrayWork);
})

listener.addListener(listener.allWorks, function (){
    console.log(this);
    
    let ArrayDOM = genereteDOM.allWorks();
    gui.showDOM(ArrayDOM);
})

listener.addListener(listener.removeUser, function (){
    let name = listener.removeUserText.value;
    if(name === ""){
        console.log('Nie podałeś nic!');
        return;
    }
    optionsPeople.removeUser(name);
})

listener.addListener(listener.target , function(){
    console.log(this);
    target = true;
    
})


