class Cell {   
    constructor(private val:string) {
        this.update(val);
    }
    
    value():string {
        return this.val;
    }
    
    update(val:string) {
        if (val.length == 1) {
            this.val = val;
        } else {
            this.val = val.substr(0,1);
        }        
    }
}
    