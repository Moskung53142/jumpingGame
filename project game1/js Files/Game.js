const Game = function(){
    
    this.world = new Game.World();

    this.update = function(){
        
        this.world.update();
    }
};

Game.prototype = {
    constructor: Game
};

Game.Collider = function(){
    
    this.door = false; 

    this.collideBlock = function(value, object, block_x, block_y, block_size){

        switch(value){

            case 0:     break;
            case 1:     this.collideBlockTop   (object, block_y);                  break;  //บน
            case 2:     this.collideBlockBottom(object, block_y + block_size);     break;  //ล่าง
            case 3:     this.collideBlockLeft  (object, block_x);                  break;  //ซ้าย
            case 4:     this.collideBlockRight (object, block_x + block_size);     break;  //ขวา
            case 5:  if(this.collideBlockTop   (object, block_y))                  return; //บน-ล่าง
                        this.collideBlockBottom(object, block_y + block_size);     break;
            case 6:  if(this.collideBlockTop   (object, block_y))                  return; //บน-ซ้าย
                        this.collideBlockLeft  (object, block_x);                  break;
            case 7:  if(this.collideBlockTop   (object, block_y))                  return; //บน-ขวา
                        this.collideBlockRight (object, block_x + block_size);     break;
            case 8:  if(this.collideBlockBottom(object, block_y + block_size))     return; //ล่าง-ซ้าย
                        this.collideBlockLeft  (object, block_x);                  break;
            case 9:  if(this.collideBlockBottom(object, block_y + block_size))     return; //ล่าง-ขวา
                        this.collideBlockRight (object, block_x + block_size);     break;
            case 10: if(this.collideBlockLeft  (object, block_x))                  return; //ซ้าย-ขวา
                        this.collideBlockRight (object, block_x + block_size);     break;
            case 11: if(this.collideBlockTop   (object, block_y))                  return; //บน-ล่าง-ซ้าย
                     if(this.collideBlockBottom(object, block_y + block_size))     return;
                        this.collideBlockLeft  (object, block_x);                  break;
            case 12: if(this.collideBlockTop   (object, block_y))                  return; //บน-ล่าง-ขวา
                     if(this.collideBlockBottom(object, block_y + block_size))     return;
                        this.collideBlockRight (object, block_x + block_size);     break;
            case 13: if(this.collideBlockTop   (object, block_y))                  return; //บน-ซ้าย-ขวา
                     if(this.collideBlockLeft  (object, block_x))                  return;
                        this.collideBlockRight (object, block_x + block_size);     break;
            case 14: if(this.collideBlockBottom(object, block_y + block_size))     return; //ล่าง-ซ้าย-ขวา
                     if(this.collideBlockLeft  (object, block_x))                  return;
                        this.collideBlockRight (object, block_x + block_size);     break;
            case 15: if(this.collideBlockTop   (object, block_y))                  return; //บน-ล่าง-ซ้าย-ขวา
                     if(this.collideBlockBottom(object, block_y + block_size))     return;
                     if(this.collideBlockLeft  (object, block_x))                  return;
                        this.collideBlockRight (object, block_x + block_size);     break;

            case 16:    this.collideTeleport   (object, block_x + block_size / 3); break;

            case 17:    this.collidePadTop     (object, block_y             , block_x    ); break;
            case 18:    this.collidePadBottom  (object, block_y + block_size, block_x    ); break;
            case 19:    this.collidePadLeft    (object, block_x             , block_y    ); break;   
            case 20:    this.collidePadRight   (object, block_x + block_size, block_y    ); break;

            case 21:    this.collideScreenLeft (object, block_x             ); break;
            case 22:    this.collideScreenRight(object, block_x + block_size); break;

            case 23:    this.collideDoor       (object, block_x             ); break;
        }
    }
}

Game.Collider.prototype = {
    constructor: Game.Collider,

    collideBlockTop: function(object, block_top){

        if(object.getBottom() > block_top && object.getOldBottom() <= block_top){

            object.setBottom(block_top);
            object.velocity_y = 0;
            object.jumping = false;
            return true;

        }   return false;
    },

    collideBlockBottom: function(object, block_bottom){

        if(object.getTop() < block_bottom && object.getOldTop() >= block_bottom){

            object.setTop(block_bottom);
            object.velocity_y = 0;
            return true;
            
        }   return false;
    },

    collideBlockLeft: function(object, block_left){

        if(object.getRight() > block_left && object.getOldRight() <= block_left){

            object.setRight(block_left - 0.01);
            object.velocity_x = 0;
            return true;

        }   return false;
    },

    collideBlockRight: function(object, block_right){

        if(object.getLeft() < block_right && object.getOldLeft() >= block_right){

            object.setLeft(block_right);
            object.velocity_x = 0;
            return true;

        }   return false;
    },
    
    collideTeleport: function(object, teleport_positon){

        if(object.getLeft() < teleport_positon && object.getOldLeft() >= teleport_positon){

            object.velocity_x = 0;
            object.setWarp();
            return true;

        }   return false;
    },

    collidePadTop: function(object, pad_top){

        if(object.getTop() > pad_top && object.getTop() < pad_top + 30 ||
           object.getRight() > pad_left && object.getRight() <= pad_left + 60){

            object.setboostPadTop();
            return true;

        }   return false;
    },

    collidePadBottom: function(object, pad_bottom, pad_left){

        if(object.getBottom() <= pad_bottom && object.getBottom() >= pad_bottom - 30 ||
           object.getRight() > pad_left && object.getRight() <= pad_left + 60){

            object.setboostPadBottom();
            return true;

        }   return false;
    },

    collidePadLeft: function(object, pad_left, pad_top){

        if(object.getLeft() > pad_left && object.getLeft() < pad_left + 30 || 
           object.getTop() > pad_top && object.getTop() < pad_top + 60){

            object.setboostPadLeft();
            return true;

        }   return false;
    },

    collidePadRight: function(object, pad_right, pad_top){

        if(object.getRight() < pad_right && object.getRight() > pad_right - 30 ||
           object.getTop() > pad_top && object.getTop() < pad_top + 60){

            object.setboostPadRight();
            return true;

        }   return false;
    },

    collideScreenLeft: function(object, screen_left){

        if(object.getLeft() < screen_left && object.getOldLeft() >= screen_left){

            object.setLeft(screen_left);
            object.velocity_x = 0;
            return true;

        }   return false;
    },

    collideScreenRight: function(object, screen_right){

        if(object.getRight() > screen_right && object.getOldRight() <= screen_right){

            object.setRight(screen_right - 0.01);
            object.velocity_x = 0;
            return true;

        }   return false;
    },

    collideDoor: function(object, door_x){

        if(object.getLeft() < door_x && object.getOldLeft() >= door_x){

            this.door = true;
            return true;

        }   return false; 
    }
}

Game.Object = function(x, y, width, height){

    this.x = x;
    this.y = y;
    this.prev_y = 0;
    this.width  = width;
    this.height = height;
}

Game.Object.prototype = {
    constructor: Game.Object,

    getTop   : function()  { return this.y;              },
    getBottom: function()  { return this.y + this.height;},
    getLeft  : function()  { return this.x;              },
    getRight : function()  { return this.x + this.width  },
    setTop   : function(y) { this.y = y;                 },
    setBottom: function(y) { this.y = y - this.height;   },
    setLeft  : function(x) { this.x = x;                 },
    setRight : function(x) { this.x = x - this.width;    },

    setWarp: function()   { 
        this.x = 1480;
        this.y = 600;
    },

    setboostPadRight: function(){
        this.boost_x = -40;
    },

    setboostPadLeft: function(){
        this.boost_x = 40;
    },

    setboostPadBottom: function(){
        this.boost_y = -72;
    },

    setboostPadTop: function(){
        this.boost_y = 55;
    }
}

Game.MovingObject = function(x, y, width, height, velocity_Max = 23){
    
    Game.Object.call(this, x, y, width, height)

    this.jumping = false;
    this.velocity_Max = velocity_Max
    this.velocity_x = 0;
    this.velocity_y = 0;
    this.x_old = x;
    this.y_old = y;
}

Game.MovingObject.prototype = {

    getOldTop   : function()  { return this.y_old;              },
    getOldBottom: function()  { return this.y_old + this.height;},
    getOldLeft  : function()  { return this.x_old;              },
    getOldRight : function()  { return this.x_old + this.width  },
    setOldTop   : function(y) { this.y_old = y;                 },
    setOldBottom: function(y) { this.y_old = y - this.height;   },
    setOldLeft  : function(x) { this.x_old = x;                 },
    setOldRight : function(x) { this.x_old = x - this.width;    }
}

Object.assign(Game.MovingObject.prototype, Game.Object.prototype);
Game.MovingObject.prototype.constructor = Game.MovingObject;

Game.Frame = function(image, width, height){
    
    this.image = image;
    this.width = width;
    this.height = height;
}

Game.Frame.prototype = {
    constructor: Game.Frame
}

Game.Player = function(x, y){

    Game.MovingObject.call(this, x, y, 10, 10);

    this.width = 40;
    this.height = 60;
    this.frame_set = this.frame_player["idle-right"];
    this.jumping = true;
    this.direction_x = 1;
    this.velocity_x = 0;
    this.velocity_y = 0;
    this.boost_x = 0;
    this.boost_y = 0;
}

Game.Player.prototype = {

    frame_player: {
        
        "idle-right": [0],
        "walk-right": [1],
        "jump-right": [2],
        "idle-left" : [3],
        "walk-left" : [4],
        "jump-left" : [5]

    },

    jump: function(){

        if(!this.jumping && this.velocity_y < 10){

            this.jumping     = true;
            this.velocity_y -= 23;
        }
    },

    moveLeft: function(){

        this.direction_x = -1;
        this.velocity_x -=  1.75;
    },

    moveRight: function(){

        this.direction_x = 1;
        this.velocity_x += 1.75;
    },

    updatePlayerAnimation: function(){

        if(this.velocity_y < 0 || this.y != this.prev_y){
            
            if(this.direction_x < 0) this.frame_set = this.frame_player["jump-left"];
            else this.frame_set = this.frame_player["jump-right"];
        }
        else if(this.direction_x < 0){

            if(this.velocity_x < -0.1) this.frame_set = this.frame_player["walk-left"];
            else this.frame_set = this.frame_player["idle-left"];
        }
        else if(this.direction_x > 0){

            if(this.velocity_x > 0.1) this.frame_set = this.frame_player["walk-right"];
            else this.frame_set = this.frame_player["idle-right"];
        }
    },

    updateLimitSpeed: function(gravity, friction){

        this.x_old = this.x;
        this.y_old = this.y;

        this.prev_y = this.y;

        this.velocity_y += gravity;
        this.velocity_x *= friction;

        if(Math.abs(this.velocity_x) > this.velocity_Max){

            this.velocity_x = this.velocity_Max * Math.sign(this.velocity_x);
        }

        if(Math.abs(this.velocity_y) > this.velocity_Max){

            this.velocity_y = this.velocity_Max * Math.sign(this.velocity_y);
        }


        if(this.boost_y < 0){
            this.boost_y += 2.5;
            this.y += this.boost_y;
        }
        else{
            this.boost_y = 0;
        }

        if(this.boost_x < 0){
            this.boost_x += 2;
            this.x += this.boost_x;
        }
        else if(this.boost_x > 0){
            this.boost_x -= 2;
            this.x += this.boost_x;
        }
        else{
            this.x += this.velocity_x;
        }
        this.y += this.velocity_y
    }

}

Object.assign(Game.Player.prototype, Game.MovingObject.prototype);
Game.Player.prototype.constructor = Game.Player;

Game.RepositoryPlayerAction = function(){
    
    let f = Game.Frame;
    this.player_frames = [new f("./js Files/picture_File/playerStillRight.png", 40, 60), //idle-right
                          new f("./js Files/picture_File/playerMoveRight.png", 40, 60), // move-right
                          new f("./js Files/picture_File/playerJumpRight.png", 40, 60), //jump-right
                          new f("./js Files/picture_File/playerStillLeft.png", 40, 60), //idle-left
                          new f("./js Files/picture_File/playerMoveLeft.png", 40, 60), //move-left
                          new f("./js Files/picture_File/playerJumpLeft.png", 40, 60)]; //jump-left
}

Game.RepositoryPlayerAction.prototype = {
    constructor: Game.RepositoryPlayerAction
}

Game.World = function(gravity = 2, friction = 0.85){

    this.collider = new Game.Collider();
    this.player = new Game.Player(120, 950);
    this.settingMap = new SettingMap();
    this.repositoryAction = new Game.RepositoryPlayerAction();

    this.gravity = gravity;
    this.friction = friction;

    this.column = 32;
    this.row = 18;
    this.block_size = 60;

    this.width = this.column * this.block_size;
    this.height = this.row * this.block_size;
}

Game.World.prototype = {
    constructor: Game.World,

    colliderBlockMap: function(object){

        let value, top, bottom, left, right;

        top = Math.floor(object.getTop() / this.block_size);
        left = Math.floor(object.getLeft() / this.block_size);
        value = this.settingMap.Map_Block_Collision[top * this.column + left];
        this.collider.collideBlock(value, object, left * this.block_size, top * this.block_size, this.block_size);

        top = Math.floor(object.getTop() / this.block_size);
        right = Math.floor(object.getRight() / this.block_size);
        value = this.settingMap.Map_Block_Collision[top * this.column + right];
        this.collider.collideBlock(value, object, right * this.block_size, top * this.block_size, this.block_size);

        bottom = Math.floor(object.getBottom() / this.block_size);
        left = Math.floor(object.getLeft() / this.block_size);
        value = this.settingMap.Map_Block_Collision[bottom * this.column + left];
        this.collider.collideBlock(value, object, left * this.block_size, bottom * this.block_size, this.block_size);

        bottom = Math.floor(object.getBottom() / this.block_size);
        right = Math.floor(object.getRight() / this.block_size);
        value = this.settingMap.Map_Block_Collision[bottom * this.column + right];
        this.collider.collideBlock(value, object, right * this.block_size, bottom * this.block_size, this.block_size);
    },

    update: function(){

        this.player.updateLimitSpeed(this.gravity, this.friction);
        this.colliderBlockMap(this.player);
        this.player.updatePlayerAnimation();
        
        if(this.player.y > this.height + this.height / this.row){
            this.player = new Game.Player(120, 950);
        }

    }
}