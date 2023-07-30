let carrinho = []

function incrementQuantity(itemId) {
    const quantityElement = document.querySelector(`#${itemId} .quantity`)
    const currentQuantity = parseInt(quantityElement.textContent)
    quantityElement.textContent = currentQuantity + 1
}
function decrementQuantity(itemId) {
    const quantityElement = document.querySelector(`#${itemId} .quantity`)
    const currentQuantity = parseInt(quantityElement.textContent)
    if (currentQuantity > 1) {
        quantityElement.textContent = currentQuantity - 1
    }
}

function carregarCarrinhoDoLocalStorage() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo)
        atualizarDivCarrinho()
    }
}

function salvarCarrinhoNoLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify('carrinho'))
}

function exibirMensagemDeConfirmaçao(nome) {
    alert(`Voce adicionou ${nome} ao carrinho`)
}

function atualizarDivCarrinho() {
    exibirDivCarrinho()


    const carrinhoContainer = document.getElementById("carrinho-container")
    carrinhoContainer.innerHTML = ''

    const carrinhoTitulo = document.createElement('h1')
    carrinhoTitulo.document.innerHTML = 'Itens adicionados no carrinho'

    const tabela = document.createElement('table')
    tabela.innerHTML = `
        <tr>
            <th>QTD</th>    
            <th>Item</th>    
            <th>Valor unitario</th>    
            <th>Sub-total</th>    
            </tr>
    `
    let totalPedido = 0
    for( const item of carrinho) {
        const precoTotalPorItem = item.preco * item.quantidade
        const linhaItem = document.createElement('tr')
        linhaItem.innerHTML = `
            <td> ${item.quantidade}</td>
            <td> ${item.nome}</td>
            <td> ${item.preco.toFIxed(2)}</td>
            <td> ${precoTotalPorItem}</td>
        `
        tabela.appendChild(linhaItem)
        totalPedido += precoTotalPorItem
    }
    const carrinhoTotal = document.createElement('div')
    carrinhoTotal.innerHTML = `Total do pedido: R$ ${totalPedido.toFixed(2)}`

    const btn_fazerPedido = document.createElement('button')
}