class State {
    checkPlayerState(){
          if(gameSetting.time > Player.timeOnimmortal){
              Player.immortal = false;
              gameSetting.checkPlayerState = false;
          };
      }    
}
let state = new State();