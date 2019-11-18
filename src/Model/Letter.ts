import IClouse from './IClouse'
import Clouse from './Clouse'

export default class Letter implements IClouse {
    add(clouse: IClouse): IClouse {
        let cl = Object.assign(clouse) as IClouse;
        if (cl instanceof Clouse) {
            let res = Object.assign(cl) as Clouse;
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
            let l = Object.assign(cl) as Letter;
            if (this.power === l.power) {
                l.coef += this.coef;
                return l;
            }
            let c = Object.assign(this) as Letter;
            return new Clouse([l, c])
        }    
    }
    mul(clouse: IClouse): IClouse {
        let cl = Object.assign(clouse) as IClouse;
        if (cl instanceof Clouse) {
            let lets = (cl as Clouse).letters;
            for (let l of lets) {
                l[0] += this.power;
                l[1].coef *= this.coef;
            }
        }
        else {
            let l = cl as Letter;
            l.coef *= this.coef;
            l.power += this.power;
        }
        return cl;
    }
    constructor(public power: number, public coef: number) { }

    public toString() {
        return `${this.coef}*x^${this.power}`;
    }
}