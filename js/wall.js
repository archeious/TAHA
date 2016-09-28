function Wall(width, height, ctx) {
  this._ctx = ctx;
  this._width = width;
  this._height = height;
  this._GRIDCOLOR = '#f80808';
  // initialize the cell array to empty aka an empty string
  this._cell = new Array(width);
  for (var i = 0; i < width; i++) {
    this._cell[i] = new Array(height);
    for (var j = 0; j < height; j++) {
      this._cell[i][j] = "";
    }
  }
    this._cell[5][5] = 'A';
  console.log(this._cell);
}

Wall.prototype = {
  constructor: Wall,
  
  reset: function () {
    return;
  },
  
  cell: function(x,y) {
    return this._cell[x][y];
  },
  setCell: function(x,y,value) {
    this._cell[x][y] = value;
  },
   
  render: function() {
    ctx    = this._ctx;
    width  = this._width;
    height = this._height;
    
    //setup context variables
    ctxHeight = ctx.canvas.height;
    ctxWidth  = ctx.canvas.width;
    
    //set cell values
    cellWidth  = ctxWidth / width;
    cellHeight = ctxHeight / height;
    
    
    ctx.strokeStyle = this._GRIDCOLOR;
    
    ctx.font = '30pt Calibri';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (var x=0; x < width; ++x) {
      for (var y=0; y < height; ++y) {
        if ( this.cell(x,y) != "" ) {
          ctx.fillText("A", cellWidth * x + (cellWidth/2), cellHeight * y + (cellHeight/2));
        }
      }
    }
    
    for (var x=0; x < width; ++x) {
      ctx.beginPath();
      ctx.moveTo( (x/width) * ctxWidth , 0 );
      ctx.lineTo( (x/width) * ctxWidth , ctxHeight );
      ctx.stroke();
    }
    for (var y=0; y < height; ++y) {
      ctx.beginPath();
      ctx.moveTo( 0, (y/height) * ctxHeight );
      ctx.lineTo( ctxWidth, (y/height) * ctxHeight );
      ctx.stroke();
    }
    return;
  },
  
}