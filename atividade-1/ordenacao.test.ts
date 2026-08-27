import {ordenacao_decrescente} from "./ordenacao";

test('Teste de ordenação decrescente de string', () => {
    const resultado_teste = ordenacao_decrescente(['carro', 'boneco', 'ave', 'lapis']);
    const resultado_esperado = ['lapis', 'carro', 'boneco', 'ave']
    expect(resultado_teste).toEqual(resultado_esperado);
})