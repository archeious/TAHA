module TAHA {
    export class GameplayState extends Phaser.State {
        game: Phaser.Game;
        backgroundImage: Phaser.Sprite;
        hexSpr: Array< Array <Phaser.Sprite> >;

        hexWidth = 52;
        hexHeight = 62;
        
        constructor() {
            super();            
        }
        
        create() {
            this.backgroundImage = this.add.sprite(0, 0,"space");
            this.backgroundImage.scale.setTo(
                this.game.width / this.backgroundImage.width,
                this.game.height / this.backgroundImage.height);
            
            this.hexSpr = Array< Array<Phaser.Sprite>>(10);
            for (let x=0; x < 5; x++) {
                this.hexSpr[x] = Array<Phaser.Sprite>(10)
                for (let y=0; y<5; y++) {                    
                    let yOffset = 0;
                    console.log(y);
                    if (x % 2 == 0) {
                        yOffset = this.hexHeight / 2;
                    }                   


                    this.hexSpr[x][y] = this.add.sprite(
                        (this.game.width / 2) + x * this.hexWidth,
                        (this.game.height / 2) + y * this.hexHeight - yOffset,
                        "hexBasic");
                    this.hexSpr[x][y].scale.setTo(
                        (this.game.width / 15) / this.hexSpr[x][y].width
                        );
                    this.hexSpr[x][y].anchor.setTo(0.5);
                }
            }
        }
    }
}