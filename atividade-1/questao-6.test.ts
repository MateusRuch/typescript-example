import { TestRunner } from "vitest";
import {Ave,Peixe} from "./questao-6";

test("Teste da classe peixe", () => {
    let peixe = new Peixe ("Baiacu",6)
    let resultado_teste = peixe.mover()
    let resultado_esperado = `O(A) ${peixe.nome}, que tem ${peixe.quantidade_nadadeiras} nadadeiras, nadou até a superfície.`;

    expect(resultado_teste).toEqual(resultado_esperado);
});

test ("Teste da classe Ave", () => {
    let ave = new Ave("Avestruz",false)
    let resultado_teste = ave.mover()
    let resultado_esperado = `O(A) ${ave.nome} não é capaz de voar.`

    expect(resultado_teste).toEqual(resultado_esperado);
});


