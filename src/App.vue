<template>
    <div id="app">
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
                    <td></td>
                </tr>
                <tr>
                    <button ref="but" v-on:click="add()">Add</button>
                </tr>
            </tbody>
        </table>
        <button v-on:click="calcLagrange()">CalcLagrange</button>
        <button v-on:click="calcNewton()">CalcNewton</button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Point from './Point';
    import {calcLagrange, calcNewton} from './Calcs'

    @Component({
        components: {
        }
    })
    export default class App extends Vue {

        calcLagrange() {
            alert(calcLagrange(this.getPoints()));
        }

        calcNewton() {            
            alert(calcNewton(this.getPoints()));
        }
        data() {
            return {
                points: [new Point(0, 3), new Point(1, 2)]
            }
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

<style>
    #app {
        position: absolute;
        left: 35vw;
        top: 35vh;
    }
</style>
