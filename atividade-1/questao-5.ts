// Leia o array e extraia apenas os elementos pares utilizando o método FILTER do Array, passando uma arrow function como parâmetro.

let lista_pares = (pares:number[]) => { 
    return pares.filter(num => num % 2 === 0);
}

export {lista_pares}