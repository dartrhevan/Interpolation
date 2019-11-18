import IClouse from './IClouse'
import Letter from './Letter'

export default class Clouse implements IClouse {
    add(clouse: IClouse): IClouse {
        let res = Object.assign(this) as Clouse;
        let cl = Object.assign(clouse) as IClouse;
        if (cl instanceof Clouse) {
            let lets = (cl as Clouse).letters;
            for (let l of lets)
                Clouse.addLetterToClouse(res, l[1]);
        }
        else {
            let l = cl as Letter;
            Clouse.addLetterToClouse(res, l);
        }
        return res;
    }
    public static addLetterToClouse(res: Clouse, l: Letter) {
        if (res._letters.has(l.power))
            (res._letters.get(l.power) as Letter).coef += l.coef;
        else
            res._letters.set(l.power, l);
    }

    public static mullLetterToClouse(res: Clouse, l: Letter) {
        for (let i of res.letters) {
            i[1] = l.mul(i[1]) as Letter;
        }
    }

    mul(clouse: IClouse): IClouse {
        let res: Clouse;
        let cl = Object.assign(clouse) as IClouse;
        if (cl instanceof Clouse) {
            let lets: Letter[] = [];
            res = new Clouse(lets);
            for (let i of this._letters)
                res.add(this.mul(i[1]));            
        }
        else {
            res = Object.assign(this) as Clouse;
            Clouse.mullLetterToClouse(res, cl as Letter);
        }
        return res;
    }
    private _letters = new Map<number, Letter>();
    constructor(lets: Letter[]) {
        for (let l of lets)
            this._letters.set(l.power,l);
    }

    public get_letter(i: number) {
        return this._letters.get(i) as Letter;
    }
    public get letters() {
        return this._letters;
    }
    public shrinkToFit() {
        
    }
    public toString() {
        let res = '';
        for (let l of this._letters)
            res += l[1].coef > 0 ? '+' + l[1] : l[1];
        return res;
    }
}