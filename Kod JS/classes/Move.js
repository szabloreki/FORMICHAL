  class moved {
  moveLikeSqare(object, width, height){
        this.checkSetUpSquare(object,width,height);
        this.isMovingFirstHalf(object);
        this.isMovingEndHalf(object);
        object.x += object.spdX;
      }
  checkSetUpSquare(object, width, height){
            if(object.didntSetUpPointSquare){
            object.squareLeftX = object.x
            object.squareRightX = object.x + width;
            object.squareTopY = object.y + -height;
            object.squareBottomY = object.y
            object.didntSetUpPointSquare = false;
            object.isMovingFirstHalf = true;
            object.isMovingEndHalf = false;
        }   
      }
  isMovingFirstHalf(object){
            if(object.isMovingFirstHalf){
         if(object.x - object.width > object.squareRightX){
             object.spdY = -7;
              object.y += object.spdY;
              object.spdX = 0;
          }
          if(object.y <object.squareTopY){
              
              object.spdX = -7;
          }
          if(object.x + object.width < object.squareLeftX){
              object.y += 7;
              object.spdX = 0;
              object.isMovingFirstHalf = false;
              object.isMovingEndHalf = true;
          }
       }      //end half   
      }
  isMovingEndHalf(object){
     if(object.isMovingEndHalf){
          if(object.y < object.squareBottomY){
              object.spdY = 7;
              object.y += object.spdY;
          }
          else {
                object.x += 7;
                object.spdX = 7;
                object.spdY = -7;
                object.isMovingFirstHalf = true;
                object.isMovingEndHalf = false;
          }
       }    
      }
  updateMove(object){
          object.x += object.spdX;
          object.y += object.spdY;
          if(object.x > WIDTH || object.x <0){
              object.spdX = - object.spdX;  
          }
          
          if(object.y > HEIGHT || object.y < HEIGHT-HEIGHT ){
              object.spdY = - object.spdY;
          }
      }
 }
let move = new moved();