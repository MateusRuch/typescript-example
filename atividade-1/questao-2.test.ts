import { concatenar } from "./questao-2";

test('Teste de concatenação', () => {
    const resultado_teste = concatenar(['Arrays', 'com', 'TypeScript']);
    const resultado_esperado = 'Arrays com TypeScript'
    expect(resultado_teste).toBe(resultado_esperado);
})