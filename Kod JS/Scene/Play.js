function play(){
      let date = new Date();    
      gameSetting.time = date.getTime();
      gameSetting.loopSpawn();
      ctx.clearRect(0,0,600,600);
      ctx.fillStyle = "red";
      ctx.fillRect(Player.x, Player.y, Player.width, Player.height);

         let xsquare = Math.floor(Math.random()*WIDTH-50);
         let ysquare = Math.floor(Math.random()*HEIGHT+50);
 
          for(let key in enemyList){
              setEnemy. defineEnemyMovement(enemyList[key], xsquare, ysquare);
              setEnemy.drawEnemy(enemyList[key]);
              if(physics.checkColision(Player, enemyList[key])){
                  if(Player.immortal){
                    for(let i =0; i<30;i++){
                        setParticle.createParticle(enemyList[key].x, enemyList[key].y);
                      }
                      enemyList[key].kill();
                      Player.score += 50;  
                  }
                  else {
                      dataGame.saveScore();
                      Player.kill();
                      for (let kill in enemyList) delete enemyList[kill];
                      Player.score = 0;
                      ctx.clearRect(0,0,WIDTH,HEIGHT);
                      gameSetting.change_scene('mainMenu');
                    }
                }
          };
         setParticle.loopParticle();
          for(var key in entityList){
              setEnemy.drawEnemy(entityList[key]);
              if(physics.checkColision(Player, entityList[key])){
                  setEntity.eventOnEntity(entityList[key]);
              }
      };
        if(gameSetting.checkPlayerState){
                 state.checkPlayerState();      
        }  
        if(gameSetting.spawnEnemy){
            
            setEnemy.spawnEnemy();
        }
   if(Player.living){
          Player.score += 1;
   }
    dataGame.score();
     }