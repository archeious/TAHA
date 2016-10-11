namespace Hex {
    export interface neighbors {
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
    }
    
    export const NoNeighbors:neighbors = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0
    }
    
    export enum HexType {
        Basic,
        Advanced
    }
}