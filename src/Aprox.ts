﻿import Point from "./Model/Point";
import gausMethod from "./GausMethod"


export function linear(points: Point[]) {
    const x = getXSum(points);
    const y = getYSum(points);
    const xsq = getXSqSum(points);
    const xy = getXYSum(points);
    console.log(`x: ${x} y: ${y} x^2: ${xsq} xy: ${xy}`);/*
    const b = (xy - y * xsq) / (x - xsq * points.length);
    const a = (xy - b * x) / xsq;*/
    const coef = gausMethod([[xsq, x, xy],[x, points.length, y]]);
    return `y = ${coef[0]}x + ${coef[1]}`;
}

export function polinomial(points: Point[]) {
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

//module.exports = { linear, polinomial}
