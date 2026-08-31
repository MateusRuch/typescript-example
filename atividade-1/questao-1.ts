// Crie um programa que calcule o quadrado de cada elemento de um array utilizando duas estratégias:
// a) Iterando com "for" simples.
// b) Iterando com "forEach".

function potenciaForArray( lista: number[]) {

    for (var i = 0; i < lista.length; i++) {
        lista[i] **= 2
    }
    return lista
}

function potenciaForEachArray (lista:number[]){
    lista.forEach((elemento,i) => {
        lista[i] = elemento ** 2
    });
    return lista
}

let teste = [3, 5, 7, 3, 8, 9, 1];
let teste1 = [3, 5, 7, 3, 8, 9, 1];

export {potenciaForArray,potenciaForEachArray};