import {GameObject} from '/static/js/game_object/base.js'

class GameMap extends GameObject{
    constructor(root){
        super();
        this.root = root;
        this.$canvas = $(`<canvas width="1280" height="720"></canvas>`)
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas)
    }
    start(){
    }
    update(){
        this.render();
        
    }

    render(){
        this.ctx.clearRect(0,0,1280,720)
    }
}
export{
    GameMap
}