import { extracao_dois_primeiros } from "./extracao";

test('Teste de extração:',() =>{
    let resultado_teste = extracao_dois_primeiros([2, 4, 6, 2, 8, 9, 5])
    const resultado_esperado = [2, 4,]
    expect(resultado_teste).toEqual(resultado_esperado)
})