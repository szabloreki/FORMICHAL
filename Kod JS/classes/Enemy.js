class Enemy  {
    constructor (x, y, width, height, id, color, spdX, spdY){
        let random = Math.random()*100;
        let likeBall = false;
        let likeSquare = false;
        if(random >50){
                likeBall = true;
            }
        else {
                likeSquare = true;
            }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.id = id;
        this.color = color;
        this.spdX = spdX;
        this.spdY = spdY;
        this.didntSetUpPointSquare = true;
        this.likeBall = likeBall;
        this.likeSquare =  likeSquare;
            }
     kill (){
        this.x  =0;
        this.y = 0;
        this.height = 0;
        this.width = 0;
        this.spdX =0;
        this.spdY = 0;
    }
    show (){
        let a = ` X ${this.x}, Y ${this.y}, Height ${this.height}, Id ${this.id} ${this.color} Width ${this.width}, spdX ${this.spdX}, spdY ${this.spdY}`         
    }
}
class setUpEnemy {
 spawnEnemy(){
        if(gameSetting.time > gameSetting.timeSpanEnemy){
            gameSetting.checkTimeSpawn = true;        
            let x =Math.floor((Math.random() * 550) + 1);
            let y = Math.floor((Math.random() * 550) + 1);
            let id =  Math.floor((Math.random() * 550) + 1);
            let e = new Enemy(x,100,25,25,id,'green',2.5,5)
           enemyList[e.id] = e;
        }
    }
 drawEnemy(object){
          ctx.fillStyle = object.color;
          ctx.fillRect(object.x, object.y, object.width, object.height);
          ctx.fillStyle = "red";
      }
 createEnemy(x, y, width, height, id, color, spdX, spdY){
         let e = new Enemy(x, y, width, height, id, color, spdX, spdY);
         enemyList[e.id] = e;
     }
 defineEnemyMovement(enemy, xsquare, ysquare){
      if(enemy.likeBall){
         move.updateMove(enemy);
              }
      if(enemy.likeSquare){
         move.moveLikeSqare(enemy, xsquare, ysquare);
              }
 }   
}
let setEnemy = new setUpEnemy();