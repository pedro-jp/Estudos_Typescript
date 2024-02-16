const a : number = 10
const b : number = 10

const sum : number = a + b
console.log(sum)

let acumulador : number = 0
function soma(a : number, b : number){
    for(let i : number = 0; i < 10; i++){
        acumulador += a + b
    }
    return acumulador
}

console.log(soma(2, 3))