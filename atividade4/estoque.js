let lista = {
    estoque: {}
}

lista.adicionar = function (id, nome, quantidade) {
    if (isNaN(id)) return "ID INVALIDO!"
    if (nome instanceof String) return "NOME INSERIDO NÃO É STRING!";
    let lista_ref = this;

    if (lista_ref.estoque[id] !== undefined) return "NÃO É POSSÍVEL ADICIONAR ITEM JÁ ADICIONADO!"

    lista_ref.estoque[id] = {
        nome: nome,
        quantidade: quantidade
    };
    return true;
}

lista.remover = function (id) {
    let lista_ref = this;
    if (lista_ref.estoque[id] === undefined) return false
    delete lista_ref.estoque[id]
    return true
}

lista.listar = function() {
    return this.estoque;
}

lista.editar = function(id, quantidade) {
    let lista_ref = this;
    if (lista_ref.estoque[id] === undefined) return false
    lista_ref.estoque[id].quantidade = quantidade;
    return true
}

module.exports = lista
