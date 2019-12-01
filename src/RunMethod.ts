
export default function runcalc(sys: number[][]) {
    function runMethod(sys: number[][]) {
        const us: number[] = [];
        const vs: number[] = [];
        const xs: number[] = [];
        const getA = (i: number) => sys[i][i - 1]; //alfa
        const getB = (i: number) => sys[i][i];     //beta
        const getC = (i: number) => ((i === sys.length - 1 )? 0 : sys[i][i + 1]); //y
        const getD = (i: number) => sys[i][sys[i].length - 1]; //delta
        function calcCoefficients() {
            us[0] = -getC(0) / getB(0);
            vs[0] = getD(0) / getB(0);
            for(let i = 1; i < sys.length; i++) {
                us[i] =  -getC(i) / (getA(i) * us[i - 1] + getB(i));
                vs[i] = (getD(i) - getA(i) * vs[i - 1]) / (getA(i) * us[i - 1] + getB(i));
            }
        }
        function calcAnswer(i: number) {
            if(i === sys.length - 1)
                xs[i] = vs[i];//(a*q-d)/(b - a*p);
            else
                xs[i] = us[i]*xs[i+1] + vs[i];
            if(i !== 0)
            calcAnswer(i-1)
        }
        calcCoefficients();
        calcAnswer(sys.length - 1);
        console.log("u:" + us);
        console.log("v:" + vs);
        //alert(runOutput(xs));
        return xs;
    }
    return runMethod(sys);
}
