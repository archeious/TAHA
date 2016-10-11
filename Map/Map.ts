namespace Map {
    export class BasicMap {
        private cells: Array< Array <Phaser.Sprite> >;
        private _width:number = 0;
        private _height:number = 0;

        private hexWidth:number = 52;
        private hexHeight:number = 62;


        public constructor(width:number, height:number, layer:Phaser.Group) {
             this.cells = Array< Array<Phaser.Sprite>>(height);
             this._width = width;
             this._height = height;


             let xOffSet = - (this.width() / 2);
             for (let x=0; x < width; x++) {
                this.cells[x] = Array<Phaser.Sprite>(width)
                let yOffset = - (this.height() / 2);
                if (x % 2 == 0) {
                    yOffset += this.hexHeight / 2;
                }                   

                for (let y=0; y<height; y++) {                    
                    this.cells[x][y] = layer.create(
                        x * this.hexWidth + xOffSet,
                        y * this.hexHeight + yOffset,
                        "hexBasic");
                    this.cells[x][y].scale.setTo(
                        (layer.game.width / 15) / this.cells[x][y].width
                        );
                    this.cells[x][y].anchor.setTo(0.5);
                }
             }
        }

        public width():number {
            return (this._width) * this.hexWidth;
        }

        public height():number {
            return (this._height) * this.hexHeight;
        }

        public render():number {
            let x = 10;
            let y = 10;
            return x * y;
        }
    }
}