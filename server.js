// Componente
class Produto {
    constructor(nome) {
        this.nome = nome;
    }

    getNome() {
        throw new Error("Método 'getNome' deve ser implementado");
    }

    getPreco() {
        throw new Error("Método 'getPreco' deve ser implementado");
    }
}

// Folha
class ProdutoIndividual extends Produto {
    constructor(nome, preco) {
        super(nome);
        this.preco = preco;
    }

    getNome() {
        return this.nome;
    }

    getPreco() {
        return this.preco;
    }
}

// Composição
class Fardo extends Produto {
    constructor(nome) {
        super(nome);
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    removerProduto(produto) {
        const index = this.produtos.indexOf(produto);
        if (index > -1) {
            this.produtos.splice(index, 1);
        }
    }

    getNome() {
        return this.nome;
    }

    getPreco() {
        let precoTotal = 0;
        for (const produto of this.produtos) {
            precoTotal += produto.getPreco();
        }
        return precoTotal;
    }
}

// Classe principal para testar
const main = () => {
    // Criando produtos individuais
    const lata1 = new ProdutoIndividual("Refrigerante Lata", 3.00);
    const lata2 = new ProdutoIndividual("Refrigerante Lata", 3.00);
    const lata3 = new ProdutoIndividual("Refrigerante Lata", 3.00);
    
    // Criando um fardo de refrigerantes
    const fardo = new Fardo("Fardo de Refrigerantes");
    fardo.adicionarProduto(lata1);
    fardo.adicionarProduto(lata2);
    fardo.adicionarProduto(lata3);
    
    // Exibindo informações
    console.log("Nome do fardo: " + fardo.getNome());
    console.log("Preço total do fardo: R$ " + fardo.getPreco().toFixed(2));
};

// Executando a função principal
main();