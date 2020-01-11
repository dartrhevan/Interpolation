/*import Clouse from './Clouse'
import Letter from './Letter'*/

export default class Solution {
    constructor(public result : string = '') { }
    public addCoef(description: any, value: any) {
        this._coefs.push(new Coefficient(description.toString(), value.toString()));
    }
    public addCoefs(coefs: number[]) {
        this._coefs.push(...(coefs.map((n, i) => new Coefficient(i.toString(), n.toString())) as Coefficient[]));
    }
    private _coefs : Coefficient[] = [];
    public get coefs() : Coefficient[] {
        return this._coefs;
    }
    public coefDescription : string = '';
}

class Coefficient {
    constructor(public description: string, public value: string) {
    }
}