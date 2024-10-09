function comprobarTarjeta(numeroTarjeta){
    let numerosTarjeta = numeroTarjeta.toString().split("").map(Number);
    console.log(numerosTarjeta)
    for(let i = numerosTarjeta.length-2; i >= 0; i-=2){
        console.log("a")
        numerosTarjeta[i]*=2;
    }
    console.log(numerosTarjeta)
    let totalnumeros = numerosTarjeta.join("").split("").map(Number);
    console.log(totalnumeros)
    let sumanumeros = totalnumeros.reduce((accumulator, currentValue) => accumulator + currentValue, 0);//esto esta copiado de aqui https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    console.log(sumanumeros);
    return sumanumeros % 10 === 0 //si se puede dividir entre 10 esta bien
    
}

console.log("true TEST 1 79927398713: " + comprobarTarjeta(79927398713))
console.log("true TEST 2 5539620018955140: " + comprobarTarjeta(5539620018955140))
console.log("true TEST 3 49927398716: " + comprobarTarjeta(49927398716))
console.log("false TEST 4 49927398717: " + comprobarTarjeta(49927398717))
console.log("false TEST 5 1234567812345678: " + comprobarTarjeta(1234567812345678))
console.log("true TEST 6 1234567812345670: " + comprobarTarjeta(1234567812345670))

