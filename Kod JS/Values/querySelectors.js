let mouse = {
          x: null,
          y: null,
}
let CANVAS = document.querySelector('#ctx');
let ctx = document.querySelector('#ctx').getContext('2d');
   document.onmousemove = function(event){
          
          mouse.x = event.clientX - document.getElementById('ctx').getBoundingClientRect().left;
          mouse.y = event.clientY - document.getElementById('ctx').getBoundingClientRect().top;
          
          Player.x = mouse.x;
          Player.y = mouse.y;

      }     