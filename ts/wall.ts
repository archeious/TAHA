/// <reference path="cell.ts"/>
class Wall {
    private cells: Array< Array< Cell > >;
    private GRIDCOLOR: string = '#333333'; 
    
    constructor(private width:number, private height:number) {
       this.cells = new Array(width);
       for (var i: number = 0; i < this.width; ++i) {
           this.cells[i] = new Array(height);
           for (var j: number = 0; j < this.height; ++j) {
               this.cells[i][j] = new Cell("");
           }
       }
       this.cells[3][3].update('A');
    }
    
    render(ctx:CanvasRenderingContext2D) {
        let width  = this.width;
        let height = this.height;

        //setup context variables
        let ctxHeight = ctx.canvas.height;
        let ctxWidth  = ctx.canvas.width;

        //set cell values
        let cellWidth  = ctxWidth / width;
        let cellHeight = ctxHeight / height;

        ctx.strokeStyle = this.GRIDCOLOR;

        ctx.font = '30pt Calibri';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (var x=0; x < width; ++x) {
            for (var y=0; y < height; ++y) {
                if ( this.cells[x][y].value() != "" ) {
                ctx.fillText("A", cellWidth * x + (cellWidth/2), cellHeight * y + (cellHeight/2));
                } 
            }
        }
        ctx.beginPath();
        for (var x=1; x < width; ++x) {
            ctx.moveTo( (x/width) * ctxWidth , 0 );
            ctx.lineTo( (x/width) * ctxWidth , ctxHeight );
        }
        for (var y=1; y < height; ++y) {
            ctx.moveTo( 0, (y/height) * ctxHeight );
            ctx.lineTo( ctxWidth, (y/height) * ctxHeight );
        }
        ctx.stroke();
        return;               
    }
}
    

