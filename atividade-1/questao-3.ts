//   Ordene os elementos de um array de forma decrescente utilizando o método SORT do Array, passando uma arrow function como parâmet

let ordenacao_decrescente = (array:string[]) => {
    return array.sort((a,b) => b.localeCompare(a));
}
export {ordenacao_decrescente}