class Particle {
        constructor (x,y){
        if(particles.length > 400){
               particles.shift();
           }
        let red = Math.floor(Math.random() *255);   
        let green = Math.floor(Math.random() *20);   
        let blue = Math.floor(Math.random() *20);  
        let transparency = Math.random();
        this.x = x;
        this.y = y;
        this.xVel = (Math.random() -0.5);
        this.yVel = (Math.random() -0.5);
        this.radius = Math.random()*10;
        this.color = `rgba(${red},${green},${blue},${transparency})`;
        }
}
class setUpParticles {
      addParticle(){
       CANVAS.addEventListener("mousemove",function(ev){
       for (let i=0; i<50;i++){
        create({
           x: ev.clientX,
           y: ev.clientY
       })
       }
   })
    }
      fadeParticle(p){         
         p.radius *= 0.99;
   }
      drawParticle(p){
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
              ctx.fillStyle = p.color;
              ctx.fill();
   }
      moveParticle(p){
         p.x += p.xVel;
         p.y += p.yVel;  
   }
      loopParticle(){
            //create();
              particles.forEach((p) =>{
              this.fadeParticle(p);
              this.moveParticle(p);
              this.drawParticle(p);
          })    
        }
      createParticle(x,y){
        let part = new Particle(x, y)
        particles.push(part);
    }
}
let setParticle = new setUpParticles();   