import {GameMap} from '/static/js/game_map/base.js'
import {Player} from '/static/js/player/base.js'
class KOF{
    constructor(id){
        this.$kof = $("#"+id);
        this.gameMap = new GameMap(this);
        this.plays = [
            new Player(this,{
                id: 0,
                speedx:400,
                speedy:1000,
                x: 200,
                y: 100 ,
                height:200,
                width: 100,
            }),
            new Player(this,{
                id:1,
                speedx:400,
                speedy:1000,
                x:900,
                y:100,
                height: 200,
                width: 100,
            })
        ]
    }
}

export {
    KOF
}