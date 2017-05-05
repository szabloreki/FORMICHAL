class Physics {
    checkColision(player,enemy){
          let distanceX = player.x - enemy.x;
          let distanceY = player.y - enemy.y;
        
          if(distanceX < 0){
              distanceX = - distanceX;
          }
          if(distanceY < 0){
              distanceY = - distanceY;
          }
          if(( distanceX < player.width) && (distanceY < player.height)){
              return true;
          }
          return ;
      }
    } 
let physics = new Physics();