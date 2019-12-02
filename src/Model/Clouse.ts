import IClouse from './IClouse'
import Letter from './Letter'

export default class Clouse implements IClouse {
    add(clouse: IClouse): IClouse {
        let res: Clouse = new Clouse();
        let lets = (this as Clouse).letters;
        for (let l of lets)
            Clouse.copyLetter(res, l[1]);
        if (clouse instanceof Clouse) {
            let cl = new Clouse();
            cl = Object.assign(cl, clouse);
            let lets = (cl as Clouse).letters;
            for (let l of lets)
                Clouse.addLetterToClouse(res, l[1]);
        }
        else {
            let cl = new Letter((clouse as Letter).power, (clouse as Letter).coef);
            Clouse.addLetterToClouse(res, cl);
        }
        return res;
    }

    public static addLetterToClouse(res: Clouse, l: Letter) {
        if (res._letters.has(l.power))
            (res._letters.get(l.power) as Letter).coef += l.coef;
        else
            res._letters.set(l.power, l);
    }

    public static copyLetter(res: Clouse, l: Letter) {
        let lt = new Letter(l.power, l.coef);
            res._letters.set(lt.power, lt);
    }

    public static mullLetterToClouse(res: Clouse, l: Letter) {
        for (let i of res.letters) {
            i[1].power = l.power + i[1].power;
            i[1].coef = l.coef * i[1].coef;
        }
    }

    mul(clouse: IClouse): IClouse {
        let res = new Clouse();
        if (clouse instanceof Clouse) {
            let thisS = new Clouse();     
            let lets = (this as Clouse)._letters;
            for (let l of lets)
               Clouse.copyLetter(thisS, l[1]);
            let cl= new Clouse();
            let clets = clouse.letters;
            for (let lol of clets)
                Clouse.copyLetter(cl, lol[1]);
            for (let i of thisS.letters) {
                let temp = cl.mul(i[1]) as Clouse;
                res = res.add(temp) as Clouse;
            }
        }
        else {
            let lt = clouse as Letter;
             let lets = (this as Clouse).letters;
            for (let l of lets)
                Clouse.copyLetter(res, l[1]);
            Clouse.mullLetterToClouse(res, lt);
        }
        return res;
    }
    private _letters = new Map<number, Letter>();
    constructor(...lets: Letter[]) {
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

    public reverse() {
        for (let i = 0; i < this._letters.size / 2; i++) {
            let t = this._letters.get(i) as Letter;
            this._letters.set(i, this._letters.get(this._letters.size - i) as Letter);
            this._letters.set((this._letters.size - i), t)
        }
    }

    public toString() {
        let res = '';
        const zero = new Letter(0, 0);
        for (let l of this._letters)
            if (l[1] !== zero)
                res += l[1].coef >= 0 ? '+' + l[1] : l[1];
        return res;
    }
}