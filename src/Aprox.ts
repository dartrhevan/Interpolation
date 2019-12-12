import Point from "./Model/Point";
import gausMethod from "./GausMethod"


function linear(points: Point[]) {
    const x = getXSum(points);
    const y = getYSum(points);
    const xsq = getXSqSum(points);
    const b = (x * y - y * xsq) / (x - xsq * points.length);
    const a = (x * y - b * x) / xsq;
    return `y = ${a}x + ${b}`;
}

function polinomial(points: Point[]) {
    return '';
}

function getXSum(points : Point[]) : number {
    return points.map(p => p.x).reduce((t, c) => t += c);
}

function getXSqSum(points: Point[]): number {
    return points.map(p => p.x * p.x).reduce((t, c) => t += c);
}

function getXCbSum(points: Point[]): number {
    return points.map(p => p.x * p.x * p.x).reduce((t, c) => t += c);
}

function getYSum(points: Point[]): number {
    return points.map(p => p.y).reduce((t, c) => t += c);
}

function getXYSum(points: Point[]): number {
    return points.map(p => p.y * p.x).reduce((t, c) => t += c);
}
