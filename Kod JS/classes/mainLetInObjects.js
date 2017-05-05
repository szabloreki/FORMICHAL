class GameSetting {
    constructor(){
      this.time = null;
      this.timeSpanEnemy = 5000;
      //bool to load function
      this.checkPlayerState = false;
      this.spawnEnemy = false;
      this.checkTimeSpawn = true;
      this.audio = true;
      //music
      this.intro = new Audio('Music/CyberPunk.mp3');
  
//if you want add new scene to work only what you must do is add scene to this array and in file GameLoop add simple Conditional statement
      this.scene = ['mainMenu','highScoreMenu','game','circle','testing'];
      this.saveSceneToRemove = [];
      this.numberSceneToRemove = null;
      this.sceneDetected =  false;
          
      this.change_scene  = function(scene){
          
          if(this.sceneDetected == true){
            let scene = this.scene[this.numberSceneToRemove];
            let sceneLength =  scene.length;  
            let sceneRemoveTrue = scene.slice(0,sceneLength-4);
            this.scene[this.numberSceneToRemove] = sceneRemoveTrue;
              
            this.numberSceneToRemove = null;
            this.sceneDetected = false;
          }    
          for(let i = 0; i<this.scene.length; i++){
              if(this.scene[i] === scene){
                  this.scene[i] = this.scene[i] + 'TRUE';
                  this.numberSceneToRemove = i;
                  this.sceneDetected = true;
                  return;
              }            
           }
        }
      this.loopSpawn = function(){
        if(gameSetting.checkTimeSpawn){
              gameSetting.timeSpanEnemy = gameSetting.time + 1000;
              gameSetting.spawnEnemy = true;
              gameSetting.checkTimeSpawn = false;
        }  
      }
    }      
}
let gameSetting = new GameSetting();