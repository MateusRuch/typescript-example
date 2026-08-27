let ordenacao_decrescente = (array:string[]) => {
    return array.sort((a,b) => b.localeCompare(a));
}
export {ordenacao_decrescente}