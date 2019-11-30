import Point from './Model/Point';
import Clouse from './Model/Clouse';
import Letter from './Model/Letter';
import Splain from './Model/Splain';


function getFundPolL(i: number, points: Point[]): Clouse {
    let res = /*i === 0 ? new Clouse(new Letter(1, 1), new Letter(0, -points[i].x)) :*/ new Clouse(new Letter(0, 1));
    /*if (i === 0)
        console.log(res.toString());*/
    for (let j = 0; j < points.length; j++)
        if (j != i) {
            let a = new Clouse(new Letter(1, 1), new Letter(0, -points[j].x));
            console.log(a.toString());
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
    //console.log(`div: ${res}`);
    return res;
}

export function calcLagrange(points: Point[]): string {
    //console.log(points);
    let res = new Clouse();
    for (let i = 0; i < points.length; i++) {
        let a = getFundPolL(i, points);
        console.log(a.toString());
        res = res.add(a.mul(new Letter(0, points[i].y))) as Clouse;
        /*console.log('y' + points[i].y);
        console.log('res:' + res.toString());*/
    }
    return res.toString();
}

function getA(i: number, cs: number[], points: Point[]): number {
    //TODO
    return 0;
}
function getB(i: number, cs: number[], points: Point[]): number {
    //TODO
    return 0;
}
function getCs(points: Point[]): number[] {
    //TODO
    return [];
}
function getD(i: number, cs: number[], points: Point[]): number {
    //TODO
    return 0;
}
function getH(i: number, points: Point[]): number {//вспомогательая функция
    return points[i].x - points[i - 1].x;
}
export function calcSplains(points: Point[]): Splain[] {
    points = points.sort((a: Point, b: Point) => a.x - b.x)
    return [
        new Splain(0, 1, 1, 2, 3, 4),
        new Splain(1, 3, 5, 6, 1, 0),
        new Splain(3, 3.2, 1, 0, 7, 4)
    ];//stub
    const cs = getCs(points);
    let ans: Splain[];
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