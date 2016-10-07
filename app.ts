module Game {
    export class WordWall {
        
        game: Phaser.Game;
        
        constructor() {
            this.game = new Phaser.Game(1024, 768, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload                
            });
        }
        
        preload() {
            //TODO: This needs to be made into an asset manager of sort.  Loading assets like this is terrible
            // and I am terrible person for doing it.  
            // Graphics
            this.game.load.image('title',"/assets/graphics/title.png");
            this.game.load.image('startBtn',"/assets/graphics/start-btn.png");
            this.game.load.image('space', "/assets/graphics/space.jpg");
            this.game.load.image('hexBasic', "/assets/graphics/basic-hex.png");

            // Spitesheets
            
            // Audio
            
        }
        
        create() {
            this.game.state.add("TitleScreenState", TAHA.TitleScreenState, true);
            this.game.state.add("GameplayState", TAHA.GameplayState);
        }
    }
}

window.onload = () => {
    var game = new Game.WordWall();
}