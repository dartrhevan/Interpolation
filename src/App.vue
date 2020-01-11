<template>
    <div id="app">
        <Points />
        <!--f(<input id="x" />)=<label id="f">{{calc()}}</label>-->
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    //import Point from './Point';
    import Points from './components/Points.vue';
    //import { calcLagrange, calcNewton } from './Calcs';
    //import runCalc from './RunMethod';

    @Component({
        components: {
            Points
        }
    })
    export default class App extends Vue {
        /*
        calcLagrange() {
            alert(calcLagrange(this.getPoints()));
        }

        calcNewton() {
            alert(calcNewton(this.getPoints()));
        }/*
        calcf() {

        }*
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
        }*/
    }
</script>

<style>
    #app {
        width: fit-content;
        font-size: 20px;
        /*
        display: flex;
        height: 90vh;
        align-items: center;
        justify-content: center;*/
    }
    #points {
        width: fit-content;
    }
    body {
        width: fit-content;
    }
    button {
        box-shadow: lightgray 1px 1px 1px 1px, lightgray -1px -1px 1px 1px;
        background: #09d3cf;
        color: lightgray;
        border-radius: 17px;
        border: none;
        transition: background-color 0.4s;
    }

    input {
        width: 80px;
    }

    table button, table input {
        border-radius: 0;
        margin: 4px;
    }

    table button {
        width: calc(100% - 8px);
        height: inherit;
    }

    button:hover {
        cursor: pointer;
        background-color: #03a2a0;
        color: darkgray;
    }

    button, input {
        margin: 10px;
        font-size: inherit;
        color: black;
    }

    table {
        background: black;
    }

    table tr td {
        padding: 0;
        border: none;
        background: white;
    }
</style>
