class RacaoCachorro {
    constructor() {
        this.estoque = [];
    }

    // Adicionar ração ao estoque
    adicionarRacao(nome, quantidade, tipo) {
        const racao = { nome, quantidade, tipo };
        this.estoque.push(racao);
        console.log(`${quantidade}kg de ${nome} (${tipo}) foi adicionado ao estoque.`);
    }

    // Remover ração do estoque
    removerRacao(nome, quantidade) {
        const racaoIndex = this.estoque.findIndex(item => item.nome === nome);
        if (racaoIndex === -1) {
            console.log(`Ração ${nome} não encontrada no estoque.`);
            return;
        }

        const racao = this.estoque[racaoIndex];
        if (racao.quantidade < quantidade) {
            console.log(`Quantidade insuficiente de ${nome} no estoque.`);
            return;
        }

        racao.quantidade -= quantidade;
        if (racao.quantidade === 0) {
            this.estoque.splice(racaoIndex, 1);
            console.log(`${nome} foi totalmente removido do estoque.`);
        } else {
            console.log(`${quantidade}kg de ${nome} foi removido do estoque. Restam ${racao.quantidade}kg.`);
        }
    }

    // Listar todo o estoque de ração
    listarEstoque() {
        if (this.estoque.length === 0) {
            console.log("O estoque de ração está vazio.");
            return;
        }

        console.log("Estoque de ração:");
        this.estoque.forEach((racao, index) => {
            console.log(`${index + 1}. ${racao.nome} - ${racao.quantidade}kg (${racao.tipo})`);
        });
    }

    // Calcular a quantidade total de ração no estoque
    calcularTotalRacao() {
        const total = this.estoque.reduce((acc, racao) => acc + racao.quantidade, 0);
        console.log(`Total de ração no estoque: ${total}kg`);
        return total;
    }
}

// Exemplo de uso:
const estoqueRacao = new RacaoCachorro();

estoqueRacao.adicionarRacao("Ração Premium", 10, "Adulto");
estoqueRacao.adicionarRacao("Ração Light", 5, "Sênior");
estoqueRacao.adicionarRacao("Ração Filhote", 8, "Filhote");

estoqueRacao.listarEstoque();

estoqueRacao.removerRacao("Ração Premium", 3);

estoqueRacao.listarEstoque();

estoqueRacao.calcularTotalRacao();