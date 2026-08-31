// 6.1. Crie duas classes que possuam uma interface em comum. (Evite nomes genéricos como ClassA ou ClassX; use nomes significativos).
// 6.2. As classes devem possuir atributos diferentes.
// 6.3. A interface deve possuir pelo menos um método.
// 6.4. A implementação desse método nas classes deve utilizar seus atributos.
// 6.5. Teste Unitário: Escreva um teste que instancie as classes criadas, altere os atributos e teste o método comum da interface.

interface Animal {
    nome: string;

    mover():string;
}

class Ave implements Animal {
    public nome: string;
    public voar: boolean;

    constructor(nome:string,voar:boolean){
        this.nome = nome;
        this.voar = voar;
    }

    mover(): string {
        if (this.voar){
            return `O(A) ${this.nome} voou até a árvore.`
        } else {
            return `O(A) ${this.nome} não é capaz de voar.`
        }
    }
}

class Peixe implements Animal {
    public nome: string;
    public quantidade_nadadeiras: number;

    constructor (nome:string,quantidade_nadadeiras:number) {
        this.nome = nome;
        this.quantidade_nadadeiras = quantidade_nadadeiras;
    }

    mover(): string {
        return `O(A) ${this.nome}, que tem ${this.quantidade_nadadeiras} nadadeiras, nadou até a superfície.`
    }
}

export {Ave,Peixe}