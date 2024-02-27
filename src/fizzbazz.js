function generarFizzBazz(n){
    const FIZZ=3
    const BAZZ=5
    if (n%FIZZ==0 && n%BAZZ==0){
        return "FizzBazz";
    }
    if (n%FIZZ==0){
        return "Fizz";
    }
    if (n%BAZZ==0){
        return "Bazz";
    }
    return n+"";
}

function generarSecuencia(limite) {
    let secuencia = "";
    for (let i = 1; i <= limite; i++) {
        secuencia += generarFizzBazz(i) + " ";
    }
    return secuencia.trim();
}

export { generarFizzBazz, generarSecuencia };