import {GameMap} from '/static/js/game_map/base.js'
import {Kyo} from '/static/js/player/kyo.js'
class KOF{
    constructor(id){
        this.$kof = $("#"+id);
        this.gameMap = new GameMap(this);
        this.players = [
            new Kyo(this,{
                id: 0,
                speedx:400,
                speedy:1000,
                x: 200,
                y: 100 ,
                height:215,
                width: 130,
            }),
            new Kyo(this,{
                id:1,
                speedx:400,
                speedy:1000,
                x:900,
                y:100,
                height: 215,
                width: 130,
            })
        ]
    }
}

export {
    KOF
}