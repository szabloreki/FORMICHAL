//Object on scene
    //Game object list  
let e1 = new Enemy(25,425,25,25,'E1','blue',1,0);
let e2 = new Enemy(50,450,25,25,'E2','blue',6,6);
let e3 = new Enemy(75,475,25,25,'E3','blue',4,7);
let e4 = new Enemy(100,500,25,25,'E4','blue',5,10);

setEnemy.createEnemy(25,425,25,25,'E1','blue',1,0);
setEnemy.createEnemy(50,450,25,25,'E2','blue',6,6);
setEnemy.createEnemy(75,475,25,25,'E3','blue',4,7);
setEnemy.createEnemy(100,500,25,25,'E4','blue',5,10);

setEntity.createEntity(55,55,25,25,'power','yellow',0);
setEntity.createEntity(200,200,25,25,'power','yellow',1);
setEntity.createEntity(459,521,25,25,'power','yellow',2);

//Scene
    let animation = function(){
    gameLoop();
    window.requestAnimationFrame(animation);

}
     function gameLoop (){
               //scene: ['mainMenu','highScoreMenu','game','circle','testing'],
    
        if(gameSetting.scene[0] === 'mainMenuTRUE'){
                    mainMenu();
        }
        if(gameSetting.scene[1] === 'highScoreMenuTRUE'){
                    highScoreMenu();
        }
        if(gameSetting.scene[2] === 'gameTRUE'){
                    play();
        }
        if(gameSetting.scene[3] === 'circleTRUE'){
                    circle();
        }
        if(gameSetting.scene[4] === 'testingTRUE'){
                    testing();
        }

    }
animation();










//stworzc jeden setInterval (nie ma x razy tyko 1 obsłgujące wszstkie ceny sposób: każda scena to funckcja wszystkie są zapiosane w loop który jest w intervalu i object mówiący, która scene aktualnie powinna być urochomiona w loop np.menu,game,highscore)