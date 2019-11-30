import IClouse from './IClouse'
import Clouse from './Clouse'

export default class Letter implements IClouse {
    add(clouse: IClouse): IClouse {
        let cl = clouse;// as IClouse;
        if (cl instanceof Clouse) {
            let res = new Clouse();
            Object.assign(res, cl);
            let lets = res.letters;
            for (let l of lets) {
                if (l[0] === this.power) {
                    l[1].coef += this.coef;
                    return cl;
                }
                lets.set(this.power, this);
                //l[0] += this.power;
            }
            return res;
        }
        else {
            let l = new Letter(0,0);
            Object.assign(l, cl);
            if (this.power === l.power) {
                l.coef += this.coef;
                return l;
            }
            let c = Object.assign(this) as Letter;
            return new Clouse(l, c)
        }    
    }
    mul(clouse: IClouse): IClouse {
        if (clouse instanceof Clouse) {
            let cl = new Clouse();
            Object.assign(cl, clouse);
            let lets = (cl as Clouse).letters;
            for (let l of lets) {
                l[0] += this.power;
                l[1].coef *= this.coef;
            }
            return cl;
        }
        else {
            let l = new Letter(0, 0);//cl as Letter;
            Object.assign(l, clouse);
            l.coef *= this.coef;
            l.power += this.power;
            return l;
        }
    }
    constructor(public power: number, public coef: number) { }

    public toString() {
        if (this.power > 1)
            return `${this.coef}x^${this.power}`;
        else if (this.power === 1) return `${this.coef}x`
        else return `${this.coef}`;
    }
}