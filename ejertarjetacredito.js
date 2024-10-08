function comprobarTarjeta(numeroTarjeta){
    if(numeroTarjeta.toString().length != 16){
        return false;
    }
    numerosTarjeta = numeroTarjeta.toString().split("").map(Number);
    for(let i = 1; i < numerosTarjeta.length; i+=2){
        numerosTarjeta[i]*=2;
    }
    console.log(numerosTarjeta)
    totalnumeros = numerosTarjeta.join("").split("").map(Number);
    console.log(totalnumeros)
    sumanumeros = totalnumeros.reduce((accumulator, currentValue) => accumulator + currentValue, 0);//esto esta copiado de aqui https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    console.log(sumanumeros);
    return sumanumeros % 10 === 0 //si se puede dividir entre 10 esta bien
    
}

console.log("true TEST 1 2640393734787931: " + comprobarTarjeta(2640393734787931))
//console.log("true TEST 2 4365873222235401: " + comprobarTarjeta(4365873222235401))
//console.log("true TEST 3 375977279707000: " + comprobarTarjeta(375977279707000))
//console.log("true TEST 4 4365874653064286: " + comprobarTarjeta(4365874653064286))
//console.log("true TEST 5 4365879869541597: " + comprobarTarjeta(4365879869541597))
//console.log("true TEST 6 4365877389565211: " + comprobarTarjeta(4365877349565211))
//console.log("true TEST 7 4365873222235401: " + comprobarTarjeta(4365873262235401))
//console.log("true TEST 8 4365875967277100: " + comprobarTarjeta(4365875977277100))
//console.log("true TEST 9 4365874653064286: " + comprobarTarjeta(4365874623064286))
//console.log("true TEST 10 4365879869541597: " + comprobarTarjeta(4365879469541597))

