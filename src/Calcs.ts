import Point from './Model/Point';
import Clouse from './Model/Clouse';
import Letter from './Model/Letter';
import Splain from './Model/Splain';


function getFundPolL(i: number, points: Point[]): Clouse {
    let res = i === 0 ? new Clouse(new Letter(1, 1), new Letter(0, -points[i].x)) : new Clouse();
    for (let j = 1; j < points.length; j++)
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
        if(j != i)
            res *= (xi - points[j].x);
    return res;
}

export function calcLagrange(points: Point[]): string {
    console.log(points);
    let res = new Clouse();
    for (let i = 0; i < points.length; i++) {
        let a = getFundPolL(i, points);
        console.log(a.toString());
        res = res.add(a.mul(new Letter(0, points[i].y))) as Clouse;
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
    //TODO: write an algorithm
    return "calcNewton";
}