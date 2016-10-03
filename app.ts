module Game {
    export class WordWall {
        
        game: Phaser.Game;
        
        constructor() {
            this.game = new Phaser.Game(1280, 800, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload                
            });
        }
        
        preload() {
            
            // Grpahics
            this.game.load.image('title',"/assets/graphics/space.jpg");
            
            // Spitesheets
            
            // Audio
            
        }
        
        create() {
            this.game.state.add("TitleScreenState", LGS.TitleScreenState, true);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }
    }
}

window.onload = () => {
    var game = new Game.WordWall();
}