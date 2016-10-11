namespace Hex {
    export class BasicHex {
        private _type:HexType;
        private _neighbors: neighbors;
             
        public constructor(type:HexType) {
            this._type = type;     
            this._neighbors = NoNeighbors;
        }
    }
}

