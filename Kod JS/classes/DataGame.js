class DataGame {
   score (){
          ctx.font = "50px Arial";
          ctx.fillText(Player.score,0,50);
      }
   saveScore(){
    for(var i = 0;i<10;i++){
            if(localStorage.getItem(i)){
                    continue;
                 }
                 else {
             localStorage.setItem(i, Player.score)
                          break;
              }
         if(i ==9){
            clear.clearLocalStorage();
              }    
         }      
    }
}
let dataGame = new DataGame();
