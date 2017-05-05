function highScoreMenu(){
        ctx.clearRect(0,0,WIDTH,HEIGHT);
        for(let i = 0;i<10;i++){        
            if(localStorage.getItem(i)){
                let scores = localStorage.getItem(i);
                ctx.fillText(scores, WIDTH-500, HEIGHT/i+70);
            }
        }
}