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
        display: flex;
        width: 100%;
        height: 90vh;
        align-items: center;
        justify-content: center;
    }
</style>
