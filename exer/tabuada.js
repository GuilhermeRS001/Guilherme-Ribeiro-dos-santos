function tabuada(numero) {
    let numero = prompt("digite a tabuada que voce deseja: ")

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}