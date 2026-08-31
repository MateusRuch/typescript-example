import { potenciaForArray, potenciaForEachArray} from './questao-1';

test('Teste com um for simples:', () => {
    let resultado_teste_for = potenciaForArray([3, 5, 7, 3, 8, 9, 1]);
    const resultado_esperado_for = [9, 25, 49, 9, 64, 81, 1];
    expect(resultado_teste_for).toEqual(resultado_esperado_for);
});

test('Teste com forEach:',() => {
    let resultado_teste_forEach = potenciaForEachArray([3, 5, 7, 3, 8, 9, 1]);
    const resultado_esperado_forEach = [9, 25, 49, 9, 64, 81, 1];
    expect(resultado_esperado_forEach).toEqual(resultado_esperado_forEach)
})

