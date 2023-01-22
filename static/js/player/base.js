import {GameObject} from '/static/js/game_object/base.js'

class Player extends GameObject{
    constructor(root,info){
        super();
        this.root = root ;
        this.x = info.x;
        this.y = info.y;
        this.width = info.width
        this.height = info.height
        this.vx = 0;
        this.vy = 0;
        this.gravity = 50
        this.speedx = info.speedx;
        this.speedy = info.speedy;
        this.ctx = this.root.gameMap.ctx;
        this.id = info.id;
        this.direction = 1
    }
    start(){

    }
    update(){
        this.vy += this.gravity
        this.y += this.vy *this.timeDelta/1000;
        if(this.y>450){
            this.y=450;
        }
        this.render();
    }
    render(){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
export {
    Player
}