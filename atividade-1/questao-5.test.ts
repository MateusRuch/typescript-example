import { lista_pares } from "./questao-5";

test ("Teste extração dos números pares",() => {
    let resultado_teste = lista_pares([8, 3, 9, 5, 6, 12]);
    let resultado_esperado = [8, 6, 12]
    expect(resultado_teste).toEqual(resultado_esperado)
})