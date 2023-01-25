import {GameObject} from '/static/js/game_object/base.js'
import {Controller} from '/static/js/controller/base.js'
class GameMap extends GameObject{
    constructor(root){
        super();
        this.root = root;
        this.$canvas = $(`<canvas tabindex="0" width="1280" height="720"></canvas>`)
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas)
        this.$canvas.focus();
        this.controller = new Controller(this.$canvas);
        this.root.$kof.append(`<div class="kof-head">
        <div class="kof-head-hp-0"><div></div></div>
        <div class="kof-head-timer"></div>
        <div class="kof-head-hp-1"><div></div></div>
    </div>`)
        this.timeLeft = 60000;
        this.$timer = this.root.$kof.find(`.kof-head-timer`)
    }
    start(){
    }
    update(){
        this.timeLeft -= this.timeDelta;
        if (this.timeLeft<0){
            this.timeLeft = 0;
            let [me,you] = this.root.players
            if (me.status !== 6 && you.status!==6){
                you.status= me.status = 6;
                you.currentFrameCnt = me.currentFrameCnt = 0;
                me.vx = you.vx = 0;
            }
        }
        this.$timer.text(`${parseInt(this.timeLeft/1000)}`)

        this.render();
    }

    render(){
        this.ctx.clearRect(0,0,1280,720)
    }
}
export{
    GameMap
}