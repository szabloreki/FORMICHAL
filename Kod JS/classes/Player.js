class player {
     constructor (){
          this.x = 0;
          this.y = 570;
          this.height = 25;
          this.width = 25;
          this.immortal = false;
          this.kill = function(){
               this.x = 0;
               this.y = 0;
               this.height = 0;
               this.width = 0;
               this.living = false;
           },
            this.respawn = function(){
               this.x = 0;
               this.y = 570;
               this.height = 25;
               this.width = 25;
               this.living = true; 
           },
       this.timeOnimmortal = null;
       this.score = 0;
       this.living = true; 
     }    
 }
let Player = new player();