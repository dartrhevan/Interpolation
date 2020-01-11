<template>
    <div id="points" align="center">
        <!--<h1>{{handler}}</h1>-->
        <table border="1">
            <thead>
                <tr>
                    <td>X</td>
                    <td>Y</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="p in points">
                    <td>{{p.x}}</td>
                    <td>{{p.y}}</td>
                    <td><button v-on:click="del(p)">Delete</button></td>
                </tr>
                <tr>
                    <td><input id="xf" /></td>
                    <td><input id="yf" /></td>
                    <td>
                        <button ref="but" v-on:click="add()">Add</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button v-on:click="calculate()" id="calc">Calculate</button><!--
        <button v-on:click="calcNewton()">CalcNewton</button>
        <button v-on:click="calcSplains()">calcSplains</button>
        <button v-on:click="calcMMS()">calcMMS</button>
        <br />
        <button v-on:click="fillMMS()">FillMMS</button>
        <button v-on:click="fillSplains()">FillSplains</button>
        <button v-on:click="fillNL()">FillNL</button>-->
        <br />
        <h3 align="center">Solution</h3>
        <div >
            <h4>{{solution.coefDescription}}</h4>
            <table border="1">
                <thead>
                <tr>
                    <td>Description</td>
                    <td>Value</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="ind in solution.coefs">
                    <td>{{ind.description}}</td>
                    <td>{{ind.value}}</td>
                </tr>
                </tbody>
            </table>
            <br/>
            <div>Result: {{solution.result}}</div>
        </div>
        <!--<label id="res"></label>-->
        <details v-if="splains!=null">
            Splains
            <br />
            <div v-for="s in splains">
                {{s.x1}} - {{s.x2}}: y = {{s.a}} + {{s.b}}(x - {{s.x2}}) + {{s.c}}(x - {{s.x2}})^2 + {{s.d}}(x - {{s.x2}})^3
            </div>
            <input type="text" placeholder="x" value="0" id="x" /><button v-on:click="$refs.y.innerHTML=splainF()">Calc</button>f(x)=<label ref="y"></label>
        </details>
    </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
    import Point from '../Model/Point';
    import { calcLagrange, calcNewton, calcSplains, getFBySplain } from '../Calcs';
    //import runCalc from '../RunMethod';
    import Splain from '../Model/Splain';
    import {linear, polinomial} from '../Aprox'
 import Solution from "@/Model/Solution";

    @Component({
        components: {
        }
    })

    export default class Points extends Vue {
/*
        fillMMS() {
            this.$data.points = [new Point(-1, 1), new Point(0, 3), new Point(1, 5), new Point(3, 9), new Point(4, 11)];
        }

        fillSplains() {
            this.$data.points = [new Point(1, 0.8), new Point(1.2, 2.0), new Point(1.4, 2.8),
                new Point(1.6, 4.0), new Point(1.8, 5.2), new Point(2.0, 6.0)];
        }

        fillNL() {
            this.$data.points = [new Point(0, 2), new Point(2, 0), new Point(3, 4)];
        }*/

        calculate() {
            const res = document.getElementById('res') as HTMLElement;
            switch (this.$data.handler) {
                case 'Lagrange':
                    this.$data.solution = calcLagrange(this.getPoints());
                    //res.innerHTML = calcLagrange(this.getPoints());
                    break;
                case 'Newton':
                    this.$data.solution = calcNewton(this.getPoints());
                    //res.innerHTML = calcNewton(this.getPoints());
                    break;
                case 'MMS':
                    this.$data.solution = linear(this.getPoints());
                    //res.innerHTML = `<br/> Linear: ${linear(this.getPoints())} <br/>`;
                    break;
                case 'Splains':
                    this.$data.splains = calcSplains(this.getPoints());
                    break;
            }
        }
/*
        calcLagrange() {
            const res = document.getElementById('res') as HTMLElement;
            res.innerHTML = calcLagrange(this.getPoints());
        }

        calcMMS() {
            const res = document.getElementById('res') as HTMLElement;
            res.innerHTML = `<br/> Linear: ${linear(this.getPoints())} <br/>`;
        }

        calcNewton() {
            const res = document.getElementById('res') as HTMLElement;
            res.innerHTML = calcNewton(this.getPoints());
        }
        calcSplains() {
            //alert("Splains");
            this.$data.splains = calcSplains(this.getPoints())
        }*/
        data() {
            return {
                points: [new Point(0, 2), new Point(2, 0), new Point(3, 4)],
                /*points: [new Point(1, 0.8), new Point(1.2, 2.0), new Point(1.4, 2.8),
                new Point(1.6, 4.0), new Point(1.8, 5.2), new Point(2.0, 6.0)]*/
                splains: null,
                solution: new Solution(),
                handler: this.parseQueryString().get('handler')
            }
        }


        private parseQueryString(strQuery = window.location.search) : Map<string, string> {
            let strSearch   = strQuery.substr(1),
                strPattern  = /([^=]+)=([^&]+)&?/ig,
                arrMatch    = strPattern.exec(strSearch),
                objRes      = new Map<string, string>();
            while (arrMatch != null) {
                objRes.set(arrMatch[1], arrMatch[2]);
                arrMatch = strPattern.exec(strSearch);
            }
            return objRes;
        }

        splainF() {
            const x = Number.parseFloat((document.getElementById('x') as HTMLInputElement).value);
            /*const points = this.getPoints();.sort();
            if (x > points[points.length - 1].x || x < points[0].x) {
                alert("Out of bound exception")
                return null;
            }*/
            console.log(x);

            console.log(this.$data.splains);
            const curSplain = (this.$data.splains as Splain[]).find(s => s.x2 >= x && s.x1 <= x);
            if (curSplain === null || curSplain === undefined) {
                alert("Out of bound exception")
                return null;
            }
            return getFBySplain(x, curSplain);
        }
        getPoints() {
            return this.$data.points as Point[];
        }
        del(p: Point) {
            let arr = this.getPoints();
            arr.splice(arr.indexOf(p), 1);
        }
        add() {
            this.$data.points.push(new Point(Number.parseFloat((document.getElementById('xf') as HTMLInputElement).value),
                Number.parseFloat((document.getElementById('yf') as HTMLInputElement).value)));
        }
    }
</script>

<style scoped>
    #calc {
        font-size: inherit;
    }
</style>
