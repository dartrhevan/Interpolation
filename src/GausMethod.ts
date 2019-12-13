

function directMove(sys: number[][]) { //прямой проход

    function validateAndCorrect(sys: number[][]) {

        function swapRows(row1: number[], row2: number[]) {
            for (let i = 0; i < row1.length; i++) {
                const temp = row1[i];
                row1[i] = row2[i];
                row2[i] = temp;
            }
        }

        for (let j = 1; j < sys.length; j++) {
            const row = sys.find(e => {
                for (let i = 0; i < j; i++)
                    if (e[i] != 0)
                        return false;
                return true;
            });
            if (row !== sys[j])
                swapRows(row as number[], sys[j]);
        }
    }

    for (let i = 0; i < sys.length - 1; i++) {
        if (sys[i][i] === 0) continue;
        for (let j = i + 1; j < sys.length; j++) {
            const coef = sys[j][i] / sys[i][i];
            for (let k = 0; k < sys[j].length; k++)
                sys[j][k] = Number((sys[j][k] - sys[i][k] * coef).toFixed(15));
        }
    }
    validateAndCorrect(sys);
    console.log(sys);
}

function reverseMove(sys: number[][]) {//обратный проход
    for (let i = sys.length - 1; i >= 0; i--) {
        sys[i][sys.length] /= sys[i][i];
        sys[i][i] = 1;
        for (let j = i - 1; j >= 0; j--) {
            const coef = sys[j][i] / sys[i][i];
            for (let k = sys.length; k >= 0; k--) {
                sys[j][k] = Number((sys[j][k] - sys[i][k] * coef).toFixed(15));
            }
        }
    }
    console.log(sys);
}

export default function gausMethod(sys: number[][]) {
    directMove(sys);
    reverseMove(sys);
    return sys.map(r => r[r.length - 1]);
}
