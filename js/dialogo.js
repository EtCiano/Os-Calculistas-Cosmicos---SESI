const personagem = JSON.parse(localStorage.getItem('personagem'));
const itens = JSON.parse(localStorage.getItem('itens'));

console.log(personagem);
console.log(itens);

export {personagem, itens};

const nome_personagem = document.getElementById('nome-personagem')
const hp_atual = document.getElementById('hp-atual')
const hp_total = document.getElementById('hp-total')
const cm_atual = document.getElementById('cm-atual')
const cm_total = document.getElementById('cm-total')
const nome_arma = document.getElementById('nome-arma')

nome_personagem.textContent = personagem.nome
hp_atual.textContent = personagem.vidaatual
hp_total.textContent = personagem.vidatotal
cm_atual.textContent = personagem.condicaomentalatual
cm_total.textContent = personagem.condicaomentaltotal
nome_arma.textContent = personagem.arma.nome

const botao_item = document.getElementById('botao-itens')
const botao_habilidade = document.getElementById('botao-habilidades')

botao_item.addEventListener('click', () => {
    if (!document.getElementById('itensdivid')) {
        const itensdiv = document.createElement('div')
        itensdiv.classList.add('informacaopersonagem')
        const itemdivtitulos = document.createElement('h2')
        itemdivtitulos.classList.add('item-titulo')
        itemdivtitulos.textContent = 'itens'
        itensdiv.appendChild(itemdivtitulos)
        itensdiv.id = 'itensdivid'
        itens.forEach(item => {
            const itemtitulo = document.createElement('h3')
            const itemdescricao = document.createElement('p')
            const itemfuncao = document.createElement('p')
            const itemquantidade = document.createElement('p')
            itemquantidade.classList.add('item-descricao')
            itemdescricao.classList.add('item-descricao')
            itemfuncao.classList.add('item-descricao')
            itemtitulo.classList.add('item')
            itemquantidade.textContent = `Quantidade: ${item.quantidade}.`
            itemdescricao.textContent = item.descricao
            itemfuncao.textContent = item.funcao
            itemtitulo.textContent = `• ${item.nome}`
            itensdiv.appendChild(itemtitulo)
            itensdiv.appendChild(itemdescricao)
            itensdiv.appendChild(itemfuncao)
            itensdiv.appendChild(itemquantidade)
        });
        document.getElementById('informacoes').prepend(itensdiv)
    } else {
        document.getElementById('itensdivid').remove()
    }
})

botao_habilidade.addEventListener('click', () => {
    if (!document.getElementById('habilidadesdivid')) {
        const habilidadesdiv = document.createElement('div')
        habilidadesdiv.classList.add('informacaopersonagem')
        habilidadesdiv.id = 'habilidadesdivid'
        const habilidadedivtitulos = document.createElement('h2')
        habilidadedivtitulos.classList.add('item-titulo')
        habilidadedivtitulos.textContent = 'Habilidades'
        habilidadesdiv.appendChild(habilidadedivtitulos)
        document.getElementById('informacoes').prepend(habilidadesdiv)
        const habilidade1titulos = document.createElement('h3')
        const habilidade1descricao = document.createElement('p')
        const habilidade1funcao = document.createElement('p')
        habilidade1titulos.classList.add('item')
        habilidade1descricao.classList.add('item-descricao')
        habilidade1funcao.classList.add('item-descricao')
        habilidade1titulos.textContent = `• ${personagem.habilidade1.nome}`
        habilidade1descricao.textContent = personagem.habilidade1.descricao
        habilidade1funcao.textContent = personagem.habilidade1.funcao
        habilidadesdiv.appendChild(habilidade1titulos)
        habilidadesdiv.appendChild(habilidade1descricao)
        habilidadesdiv.appendChild(habilidade1funcao)
        
        const habilidade2titulos = document.createElement('h3')
        const habilidade2descricao = document.createElement('p')
        const habilidade2funcao = document.createElement('p')
        habilidade2titulos.classList.add('item')
        habilidade2descricao.classList.add('item-descricao')
        habilidade2funcao.classList.add('item-descricao')
        habilidade2titulos.textContent = `• ${personagem.habilidade2.nome}`
        habilidade2descricao.textContent = personagem.habilidade2.descricao
        habilidade2funcao.textContent = personagem.habilidade2.funcao
        habilidadesdiv.appendChild(habilidade2titulos)
        habilidadesdiv.appendChild(habilidade2descricao)
        habilidadesdiv.appendChild(habilidade2funcao)
    } else {
        document.getElementById('habilidadesdivid').remove()
    }
})
