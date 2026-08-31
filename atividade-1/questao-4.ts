//  Leia o array e pegue apenas os dois primeiros elementos utilizando o método SLICE do Array.

let extracao_dois_primeiros = (array:number[]) =>{
    return array.slice(0,2);
}
let teste = [2, 4, 6, 2, 8, 9, 5]
console.log(extracao_dois_primeiros(teste))
export {extracao_dois_primeiros}