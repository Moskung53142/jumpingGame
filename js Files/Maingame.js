const SettingMap = function(){

    this.columns = 32;
    this.rows = 18;
    this.Block_Size = 60;
    this.Map_Block =            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0  // row 1
                                ,0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0  // row 2
                                ,1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0  // row 3
                                ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1  // row 4
                                ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1  // row 5
                                ,0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1  // row 6
                                ,0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1  // row 7
                                ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1  // row 8
                                ,1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1  // row 9
                                ,0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1  // row 10
                                ,0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 1  // row 11
                                ,0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 5, 1, 0, 0, 0, 0, 0, 1  // row 12
                                ,0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1  // row 13
                                ,0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 5, 1, 0, 0, 0, 0, 0, 1  // row 14
                                ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1  // row 15
                                ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1  // row 16
                                ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1  // row 17
                                ,1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] // row 18
    
    this.Map_Block_Collision = [21, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 22  // row 1
                               ,21, 0 , 23, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 22  // row 2
                               ,11, 5 , 5 , 5 , 12, 0 , 0 , 15, 0 , 0 , 15, 0 , 0 , 15, 0 , 0 , 15, 0 , 0 , 15, 0 , 0 , 15, 0 , 0 , 15, 0 , 15, 0 , 15, 0 , 22  // row 3
                               ,21, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 13  // row 4
                               ,21, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 10  // row 5
                               ,21, 0 , 0 , 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 11, 4   // row 6
                               ,21, 15, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 10  // row 7
                               ,21, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 20, 10  // row 8
                               ,15, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 13, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 10  // row 9
                               ,21, 0 , 0 , 0 , 13, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 6 , 5 , 5 , 5 , 5 , 7 , 0 , 0 , 0 , 0 , 0 , 10  // row 10
                               ,21, 15, 0 , 0 , 10, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 10, 0 , 0 , 0 , 0 , 10, 0 , 0 , 0 , 0 , 0 , 10  // row 11
                               ,21, 0 , 0 , 0 , 10, 16, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 10, 0 , 0 , 0 , 20, 10, 0 , 0 , 0 , 0 , 0 , 10  // row 12
                               ,21, 0 , 0 , 0 , 10, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 10, 19, 0 , 0 , 0 , 10, 0 , 0 , 0 , 0 , 0 , 10  // row 13
                               ,21, 0 , 0 , 0 , 14, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 10, 0 , 0 , 0 , 20, 14, 0 , 0 , 0 , 0 , 0 , 10  // row 14
                               ,21, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 10, 19, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 10  // row 15
                               ,21, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 11, 4 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 10  // row 16
                               ,21, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 10, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 18, 10  // row 17
                               ,11, 5 , 5 , 5 , 12, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 15, 0 , 14, 0 , 0 , 0 , 11, 5 , 5 , 5 , 5 , 5 , 5 , 9 ] // row 18
}

SettingMap.prototype = {

    Retry: function(){
        const cover = document.getElementById("cover_game");
        cover.classList.remove('show_content');
        cover.classList.add('hide_content');

        InititalGame();
    }
}

window.addEventListener("load", function(event) {

    InititalGame();
})

function InititalGame(){
    
    var keyDownUp = function(event){
        controller.keyDownUp(event.type, event.keyCode);
    }

    var render = function(){
        
        display.loadBlockImages(() =>{
            display.drawMap(settingMap.Map_Block, settingMap.columns, settingMap.Block_Size);
            
        });
        let player_action = game.world.repositoryAction.player_frames[game.world.player.frame_set]
        display.drawPlayer(player_action.image, game.world.player.x, game.world.player.y, game.world.player.width, game.world.player.height);

        display.render();
    }

    var update = function(){

        if(controller.left.active)  {game.world.player.moveLeft();}
        if(controller.right.active) {game.world.player.moveRight();}
        if(controller.jump.active)  {game.world.player.jump(); controller.jump.active = false;}

        game.update();

        if(game.world.collider.door){

            engine.stop();
            const cover = document.getElementById("cover_game");
            cover.classList.remove('hide_content');
            cover.classList.add('show_content');

            return;

        }
    }

    var Resize = function(event){
        display.resize(document.documentElement.clientWidth, document.documentElement.clientHeight, game.world.height / game.world.width);
        display.render();
    }

    var controller = new Controller();
    var game = new Game();
    var engine = new Engine(1000/30, render, update)
    var settingMap = new SettingMap();
    var display = new Display(document.querySelector("canvas"));
    window.setting_map = new SettingMap();

    display.gameBuffer.canvas.width = game.world.width;
    display.gameBuffer.canvas.height = game.world.height;
    display.gameBuffer.imageSmoothingEnabled = false;

    Resize();
    engine.start();

    window.addEventListener("keydown", keyDownUp);
    window.addEventListener("keyup", keyDownUp);
    window.addEventListener("resize", Resize);
}
