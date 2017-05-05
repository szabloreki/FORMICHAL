function mainMenu (){
        if(gameSetting.audio){
            gameSetting.intro.play();
        }
       if(button.setlistener){
            for(var key in buttonList){
                button.d();
                button.draw();
                button.setlistener = false;
            }
       } 
}
