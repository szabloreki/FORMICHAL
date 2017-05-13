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
        this.targetLoop = document.querySelector('#TargetLoop');
        this.multipleWork = document.querySelector('#multipleWork');
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
                    if(li.className === "Targeted"){
                        li.className = "";
                    }
                    else
                    {
                        li.className = "Targeted";    
                    }
                }
                if(loop === true){
                    gui.showOneWorker(this);
                }
        } ,false);
        return li;
    }   
    removeMultiple (){
    if(target){
        let ol = document.querySelector('#listOfElements');
        for(let i = 0; i<ol.children.length; i++){
        if (ol.children[i].classList.contains("Targeted")) {
                     console.log(ol.children[i]);
                     let name = ol.children[i].textContent;
                     console.log(name);
                     optionsPeople.removeUser(name);
                     ol.removeChild(ol.children[i]);
                     continue;
                } 
        }
    }     
    }
    addMultipleWork (){
        if(target){
        let ol = document.querySelector('#listOfElements');
        let work = this.workText.value;
        let names =[];
        console.log(work);
        for(let i = 0; i<ol.children.length; i++){
        if (ol.children[i].classList.contains("Targeted")){
                    let name = ol.children[i].textContent;
                    names.push(name);
                } 
        }
        console.log(names);
        optionsPeople.addWork(names, work)
                } 
    }
    checkwhoIsDoingWork (li){
        li.addEventListener('click', function (){
            let work = li.textContent;
            let whoIsDoingWork = optionsPeople.checkWhoisDoingWork(work);
            gui.showNameWhenUserIsCheckingWhoIsDoingWork(whoIsDoingWork);
        },false)
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
});
listener.addListener(listener.showWorkers, function(){
        optionsPeople.showEveryName();
        let arrayDOM = genereteDOM.nameWorkers();    
        gui.showDOM(arrayDOM);
});
listener.addListener(listener.addWork, function (){
    let name = listener.userNameWork.value;
    let workString = listener.workText.value;
    let arrayName = [];
    
    arrayName.push(name);
    console.log(name, workString);
    console.log(this);
    optionsPeople.addWork(arrayName,workString);
});
listener.addListener(listener.UserWork, function(){
    let UserName = listener.User.value;
    optionsPeople.checkWork(UserName);
    let arrayWork = genereteDOM.work(UserName);
    gui.showWork(arrayWork);
});
listener.addListener(listener.allWorks, function (){
    console.log(this);
    
    let ArrayDOM = genereteDOM.allWorks();
    gui.showWork(ArrayDOM);
});
listener.addListener(listener.removeUser, function (){
    listener.removeMultiple();
});
listener.addListener(listener.target , function(){
    console.log(this);
    loop = false;
    target = true;   
});
listener.addListener(listener.targetLoop, function (){
    console.log(this);
    loop = true;
    target = false;
    
});
listener.addListener(listener.multipleWork, function (){
    if(target){
    listener.addMultipleWork();
    console.log('ok');
    }
    else
    {
        information.changeInformation('Nie masz nic zaznaczone!');
    }
});


