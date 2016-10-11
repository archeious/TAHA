module TAHA {
    export class GameplayState extends Phaser.State {
        game: Phaser.Game;
        backgroundImage: Phaser.Sprite;
        hexSpr: Array< Array <Phaser.Sprite> >;
        map:Map.BasicMap;
        mapLayer:Phaser.Group;

        moveLeft:boolean = false;
        layerPos = {x:0, y:0};
        moveMax = 200;
        moveSpeed = 5;

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
            this.mapLayer = this.game.add.group();
            this.mapLayer.x = this.game.width/2;
            this.mapLayer.y = this.game.height/2;
            this.map = new Map.BasicMap(15,8,this.mapLayer);
        }

        update() {
            if (this.moveLeft) {
                this.layerPos.x -= this.moveSpeed;
                if (this.layerPos.x < -this.moveMax) {
                    this.layerPos.x = -this.moveMax;
                    this.moveLeft = false;
                }                
            }
            else {
                this.layerPos.x += this.moveSpeed;
                if (this.layerPos.x > this.moveMax) {
                    this.layerPos.x = this.moveMax;
                    this.moveLeft = true;
                }                               
            }
            this.mapLayer.x = (this.game.width / 2) + this.layerPos.x;            
        }
    }
}