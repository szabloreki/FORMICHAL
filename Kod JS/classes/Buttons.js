class Buttons {
    constructor(x,y,width,height,fun,id){
           this.x = x;
           this.y = y;
           this.width = width;
           this.height = height;
           this.onclick = fun;
           this.id = id;
           this.setlistener = true;
           this.c = function(){
            if((mouse.x > x && mouse.x <  x + width) && (mouse.y > y && mouse.y < y +  height)){
                    this.start();
                   }   
           }
           this.d = function(){
               let to = this.c;
               CANVAS.addEventListener('click',to,false);
           }
           this.check = function(){
               this.onclick();               
           }
        
           this.draw  =function(){
               ctx.fillRect(this.x,this.y,this.width,this.height);
           }   
    }
}
function start(){
            console.log('a');
            ctx.clearRect(0,0,WIDTH,HEIGHT);
            Player.respawn();
            button.setlistener = true;
            gameSetting.audio = false;            
            CANVAS.removeEventListener('click',button.c,false);
            gameSetting.change_scene('game');
    }
let button = new Buttons(WIDTH/2, HEIGHT/2, 200, 200, start,'1');
