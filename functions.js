let value = 4, total = 80;

function getPercent(n, per) {
    /*
        per = 4
        n = 100
        => per * 100 = n * x
        => x = per * 100 / n
    */
    return (per * 100) / n;
}
console.log(getPercent(total, value));