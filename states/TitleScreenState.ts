module TAHA {
    export class TitleScreenState extends Phaser.State {
        game: Phaser.Game;
        titleScreenImage: Phaser.Sprite;

        startBtn: Phaser.Button;
        startBtnSpr: Phaser.Sprite;
        
        pulseDirection: number = 1.0;
        pulseSize: number = 1.0;
        pulseSpeed: number = 0.008;
        pulseMaxSize: number = 1.07;
        pulseMinSize: number = 0.93;
        
        constructor() {
            super();      
        }
        
        create() {
            this.titleScreenImage = this.add.sprite(0, 0,"title");
            this.titleScreenImage.scale.setTo(
                this.game.width / this.titleScreenImage.width,
                this.game.height / this.titleScreenImage.height);

            this.startBtn = this.add.button(
                this.game.width / 2,
                this.game.height * 0.8,
                "startBtn");
            this.startBtn.anchor.setTo(0.5,0.5);

            this.startBtn.onInputUp.add(this.startPressed,this);
            


        }

        startPressed() {
            console.log("PRESSED YO!");
            this.game.state.start('GameplayState');
        }

        update() {
            if (this.pulseDirection > 0) {
                this.pulseSize += this.pulseSpeed;
                if (this.pulseSize > this.pulseMaxSize) {
                    this.pulseSize = this.pulseMaxSize;
                    this.pulseDirection = -1;                    
                }
            } else {
                this.pulseSize -= this.pulseSpeed;
                if (this.pulseSize < this.pulseMinSize) {
                    this.pulseSize = this.pulseMinSize;
                    this.pulseDirection = 1;                    
                }
            }
            this.startBtn.scale.setTo(this.pulseSize);
        }

        render() {
        }
    }
}