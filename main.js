var a = 10;
var b = 10;
var sum = a + b;
console.log(sum);
var acumulador = 0;
function ola(a, b) {
    for (var i = 0; i < 10; i++) {
        acumulador += a + b;
    }
    return acumulador;
}
console.log(ola(2, 3));
