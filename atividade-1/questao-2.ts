// Transforme o array concatenando as strings com 1 (um) espaço (" "). Utilize o método JOIN do Array, passando uma arrow function como parâmetro.

let concatenar = (array:string[]): string => {
    return array.join(" ")
}
export{concatenar}