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
function getRunCoeff(us: number[], vs: number[], points: Point[]) {
    us[1] = -getH(2, points) / (2 * (getH(1, points) + getH(2, points)));
    vs[1] = 3 * (getL(2, points) - getL(1, points)) / (2 * (getH(1, points) + getH(2, points)));
    for (let i = 2; i < points.length; i++) {
        us[i] = -getH(i, points) / (2 * getH(i - 1, points) + getH(i, points) + getH(i - 1, points) * us[i - 1]);
        vs[i] = (3 * getL(i, points) - 3 * getL(i - 1, points) - getH(i - 1, points) * vs[i - 1]) / (2 * getH(i - 1, points) + getH(i, points) + getH(i - 1, points) * us[i - 1]);
    }
}
function getA(i: number, cs: number[], points: Point[]): number {
    if (i === 0)
        return points[0].y;
    else {
        return points[i - 1].y;
    }

}
function getB(i: number, cs: number[], points: Point[]): number {
    let h = getH(i, points);
    if (i === points.length - 1) return (getL(i, points) - (2 * h * cs[i] / 3))
    return (getL(i, points) - (h * (cs[i + 1] + 2 * cs[i])) / 3);

}
function getCs(points: Point[]): number[] {
    let cs: number[][] = [];
    //for (let l = 0; l < points.length; l++)
    /*for (let i = 1; i < points.length; i++) {
        const row = new Array(points.length - 1);
        if (i === 1) {
            row[0] = getH(i, points);
            row[1] = getH(i + 1, points);
            row[row.length - 1] = 3 * (getL(i + 1, points) - getL(i, points));
            continue;
        }/*
        else if (i === (points.length)) {
            row[i - 2] = getH(i - 1, points);
            row[i - 1] = 0;
        }
        else {
            row[i - 2] = getH(i - 1, points);
            row[i - 1] = 2 * (getH(i - 1, points) + getH(i, points));
            row[i] = getH(i, points);
        }*
        else if (i === (points.length - 1)) {
            row[i - 1] = getH(i, points);
            row[i] = 2 * (getH(i, points) + getH(i + 1, points));
        }
        else {
            row[i - 1] = getH(i, points);
            row[i] = 2 * (getH(i, points) + getH(i + 1, points));
            row[i + 1] = getH(i + 1, points);
        }
        row[row.length - 1] = 3 * (getL(i, points) - getL(i - 1, points))/*((points[i].y - points[i - 1].y) / getH(i, points) - (points[i - 1].y - points[i - 2].y) / getH(i - 1, points))*;
        cs.push(row);
    }
    const ans = runcalc(cs);*/
    for (let i = 1; i < points.length - 1; i++) {
        const row = new Array(points.length);
        if (i === 1) {
            row[0] = 2 * (getH(i + 1, points) + getH(i, points));
            row[1] = getH(i + 1, points);
            row[row.length - 1] = 3 * (getL(i + 1, points) - getL(i, points));
            cs.push(row);
            continue;
        }
        /*else if (i === (points.length)) {
            row[i - 2] = getH(i - 1, points);
            row[i - 1] = 0;
        }
        else {
            row[i - 2] = getH(i - 1, points);
            row[i - 1] = 2 * (getH(i - 1, points) + getH(i, points));
            row[i] = getH(i, points);
        }*/
        /*else if (i === (points.length - 2)) {
            row[i - 2] = getH(i, points);
            row[i-1] = 2 * (getH(i, points) + getH(i + 1, points));
        }*/
        else {
            row[i - 2] = getH(i, points);
            row[i - 1] = 2 * (getH(i, points) + getH(i + 1, points));
            row[i] = getH(i + 1, points);
        }
        row[row.length - 1] = 3 * (getL(i + 1, points) - getL(i, points));//((points[i].y - points[i - 1].y) / getH(i, points) - (points[i - 1].y - points[i - 2].y) / getH(i - 1, points))*;
        cs.push(row);
    }
    const lastRow = new Array(points.length);
    lastRow[lastRow.length - 2] = 1;
    lastRow[lastRow.length - 1] = 0;
    lastRow[lastRow.length - 3] = 0;
    //cs.push(lastRow);
    const ans = runcalc(cs);
    return ans;
}
function getD(i: number, cs: number[], points: Point[]): number {

    return (cs[i] - cs[i - 1]) / (3 * getH(i, points));
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
