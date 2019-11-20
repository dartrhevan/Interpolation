import IClouse from './IClouse'
import Letter from './Letter'

export default class Clouse implements IClouse {
    add(clouse: IClouse): IClouse {
        let res = new Clouse([]);
        Object.assign(res, this);
        //let cl = Object.assign(clouse) as IClouse;
        if (clouse instanceof Clouse) {
            let cl = new Clouse([]);
            Object.assign(cl, clouse);
            let lets = (cl as Clouse).letters;
            for (let l of lets)
                Clouse.addLetterToClouse(res, l[1]);
            //lets.forEach(l => Clouse.addLetterToClouse(res, l[1]));
        }
        else {
            let cl = new Letter(0, 0);
            Object.assign(cl, clouse);
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
        let res = new Clouse([]);
        if (clouse instanceof Clouse) {
            let cl = clouse as Clouse //new Clouse([]);
            //Object.assign(cl, clouse);
            for (let i of this._letters) 
                res.add(cl.mul(i[1]));
        }
        else {
            let cl = new Letter(0, 0);
            Object.assign(cl, clouse);
            Object.assign(res, this);
            Clouse.mullLetterToClouse(res, cl);
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