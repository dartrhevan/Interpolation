import Point from './Model/Point';
import Clouse from './Model/Clouse';
import Letter from './Model/Letter';
import Splain from './Model/Splain';
import runcalc from './RunMethod';


function getFundPolL(i: number, points: Point[]): Clouse {
    let res = new Clouse(new Letter(0, 1));
    for (let j = 0; j < points.length; j++)
        if (j != i) {
            let a = new Clouse(new Letter(1, 1), new Letter(0, -points[j].x));
            res = res.mul(a) as Clouse;
        }
    return res.mul(new Letter(0, 1 / getDivider(i, points))) as Clouse;
}

function getDivider(i: number, points: Point[]): number {
    const xi = points[i].x;
    let res = 1;
    for (let j = 0; j < points.length; j++)
        if (j != i)
            res *= (xi - points[j].x);
    return res;
}

export function calcLagrange(points: Point[]): string {
    let res = new Clouse();
    for (let i = 0; i < points.length; i++) {
        let a = getFundPolL(i, points);
        console.log(a.toString());
        res = res.add(a.mul(new Letter(0, points[i].y))) as Clouse;
    }
    return res.toString();
}

//--------------------------------------------------------------------------------------------------------------------------------------------------

function getRunCoeff(us: number[], vs: number[], points: Point[]) {
    us[1] = -getH(2, points) / (2 * (getH(1, points) + getH(2, points)));
    vs[1] = 3 * (getL(2, points) - getL(1, points)) / (2 * (getH(1, points) + getH(2, points)));
    for (let i = 2; i < points.length; i++) {
        us[i] = -getH(i, points) / (2 * getH(i - 1, points) + getH(i, points) + getH(i - 1, points) * us[i - 1]);
        vs[i] = (3 * getL(i, points) - 3 * getL(i - 1, points) - getH(i - 1, points) * vs[i - 1]) / (2 * getH(i - 1, points) + getH(i, points) + getH(i - 1, points) * us[i - 1]);
    }
}
function getA(i: number, cs: number[], points: Point[]): number {
    /*if (i === 0)
        return points[0].y;
    else {*/
    return points[i].y;
    //}

}
function getB(i: number, c: number[], points: Point[]): number {
    return l[i] + (2 * c[i] * h[i] + h[i] * c[i - 1]) / 3;
}

const h: number[] = [];
const l: number[] = []

function getCs(points: Point[]): number[] {
    let delta: number[] = [];
    let lambda: number[] = [];
    let c: number[] = [];
    let N = points.length - 1;
    for (let k = 1; k <= N; k++) {
        h[k] = points[k].x - points[k - 1].x;
        l[k] = (points[k].y - points[k - 1].y) / h[k];
    }
    delta[1] = - h[2] / (2 * (h[1] + h[2]));
    lambda[1] = 1.5 * (l[2] - l[1]) / (h[1] + h[2]);
    for (let k = 2; k < N; k++) {
        delta[k] = - h[k + 1] / (h[k] * delta[k - 1] + 2 * (h[k] + h[k + 1]));
        lambda[k] = ((3 * (l[k + 1] - l[k])) - (h[k] * lambda[k-1])) / ((h[k] * delta[k - 1]) + (2 * (h[k] + h[k + 1])));
    }
    c[0] = 0;
    c[N] = 0;
    for (let k = N - 1; k >= 1; k--) {
        if (k === N - 1)
            c[k] = lambda[k];	
        else c[k] = delta[k] * c[k + 1] + lambda[k];
    }
    return c;
}
function getD(k: number, c: number[], points: Point[]): number {

    return (c[k] - c[k - 1]) / (3 * h[k]);
}
function getH(i: number, points: Point[]): number {//вспомогательая функция
    return points[i].x - points[i - 1].x;
}
function getL(i: number, points: Point[]): number {
    return (points[i].y - points[i - 1].y) / getH(i, points);
}
export function calcSplains(points: Point[]): Splain[] {
    const cs = getCs(points);
    let ans: Splain[] = [];
    for (let i = 1; i < points.length; i++) {
        ans.push(new Splain(points[i - 1].x, points[i].x, getA(i, cs, points), getB(i, cs, points), cs[i], getD(i, cs, points)));
    }
    return ans;
}

export function getFBySplain(x: number, splain: Splain): number {
    return splain.a + splain.b * (x - splain.x1) + splain.c * (x - splain.x1) ** 2 + splain.d * (x - splain.x1) ** 3;
}

//--------------------------------------------------------------------------------------------------------------------------------------------------

export function calcNewton(points: Point[]): string {
    let j = 0;
    let i = points.length;
    let res = new Clouse();
    let deltas = getDividedDifferences(points.length, points);
    do {
        if (j === 0) {
            res = res.add(new Letter(0, points[j].y)) as Clouse;
        }
        else {
            let clouses = new Clouse();
            for (let k = 0; k < j; k++) {
                if (k === 0)
                    clouses = clouses.add(new Letter(1, 1).add(new Letter(0, -points[k].x))) as Clouse;
                else
                    clouses = clouses.mul(new Letter(1, 1).add(new Letter(0, -points[k].x))) as Clouse;
            }
            clouses = clouses.mul(new Letter(0, deltas[0][j])) as Clouse;
            res = res.add(clouses) as Clouse;
        }
        j++;
    }
    while (j < i)
    return res.toString();
}

function getDividedDifferences(i: number, points: Point[]) {
    let deltas: number[][] = new Array();
    for (let l = 0; l < i; l++)
        deltas.push(new Array(i));
    for (let n = 0; n < i; n++) {
        for (let m = 0; m < i; m++) {
            if (n === 0) {
                deltas[m][n] = points[m].y;
            }
            else {
                if (m < points.length - n)
                    deltas[m][n] = (deltas[m + 1][n - 1] - deltas[m][n - 1]) / (points[n + m].x - points[m].x)
            }
        }
    }
    return deltas;
}
