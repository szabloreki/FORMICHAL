   function circle(){       
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for(let key in enemyList){
        move.moveLikeSqare(enemyList[key], 500, 100);
        setEnemy.drawEnemy(enemyList[key]);
      } 
         }    