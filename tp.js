function Letter(char, x, y){
    this.char = char;
    this.x = x;
    this.y = y;
    this.dx = -CSSMatrixComponent.measureText(char).width/2;
    this.dy = +onpopstate.charSize / 2;
    this.fireworkDy = this.y - hh;
    
}