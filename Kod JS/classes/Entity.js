class Entity {
    constructor (x, y, width, height, event, color, id){
             this.x = x;
             this.y = y;
             this.width = width;
             this.height = height;
             this.event = event;
             this.color = color;
             this.id = id;
    }  
}
class optionsEntity {
     eventOnEntity(object){
          if(object.event == "power"){
              object.x = 700;
              object.y = 700;
              Player.immortal = true;
              Player.timeOnimmortal = Date();
              let date = new Date();
              Player.timeOnimmortal = date.getTime() + 100000;
              console.log(gameSetting.time, Player.timeOnimmortal);
              gameSetting.checkPlayerState = true;
          }
      }
     createEntity(x, y, width, height, event, color, id){
        let entity = new Entity(x, y, width, height, event, color, id)
        entityList[id] = entity;
     }
}
let setEntity = new optionsEntity();