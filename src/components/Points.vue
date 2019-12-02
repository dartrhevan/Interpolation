<template>
    <div id="points">

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
        <button v-on:click="calcLagrange()">CalcLagrange</button>
        <button v-on:click="calcNewton()">CalcNewton</button>
        <button v-on:click="calcSplains()">calcSplains</button>
        <br/>
        Result:<label id="res"></label>
        <details v-if="splains!=null">
            Splains
            <br/>
            <div v-for="s in splains">
                {{s.x1}} - {{s.x2}}: y = {{s.a}} + {{s.b}}(x - {{s.x1}}) + {{s.c}}(x - {{s.x1}})^2 + {{s.d}}(x - {{s.x1}})^3
            </div>
            <input type="text" placeholder="x" value="0" id="x"/><button v-on:click="$refs.y.innerHTML=splainF()">Calc</button>f(x)=<label ref="y"></label>
        </details>
    </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
    import Point from '../Model/Point';
    import { calcLagrange, calcNewton, calcSplains, getFBySplain } from '../Calcs';
    import runCalc from '../RunMethod';
    import Splain from '../Model/Splain';

    @Component({
        components: {
        }
    })
    export default class Points extends Vue {
        
        calcLagrange() {
            const res = document.getElementById('res') as HTMLElement;
            res.innerHTML = calcLagrange(this.getPoints());
        }

        calcNewton() {
            const res = document.getElementById('res') as HTMLElement;
            res.innerHTML =calcNewton(this.getPoints());
        }
        calcSplains() {            
            //alert("Splains");
            this.$data.splains = calcSplains(this.getPoints())
        }
        data() {
            return {
                //points: [new Point(0, 2), new Point(2, 0), new Point(3, 4)],
                points: [new Point(1, 0.8), new Point(1.2, 2.0), new Point(1.4, 2.8),
                new Point(1.6, 4.0), new Point(1.8, 5.2), new Point(2.0, 6.0)],
                splains: null
            }
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
</style>