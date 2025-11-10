const personagem = JSON.parse(localStorage.getItem('personagem'));
const itens = JSON.parse(localStorage.getItem('itens'));

console.log(personagem);
console.log(itens);

console.log(personagem);
console.log(itens);

const nome_personagem = document.getElementById('nome-personagem_luta')
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

const botao_item = document.getElementById('botao-item')
const botao_habilidade1 = document.getElementById('botao-habilidade1')
const botao_habilidade2 = document.getElementById('botao-habilidade2')
const botao_atacar = document.getElementById('botao-atacar')
const botao_defender = document.getElementById('botao-defender')

const descricao_botoes = document.getElementById('descricao-botoes_luta')


botao_atacar.addEventListener('mouseenter', () => {
    descricao_botoes.textContent = `Atacar usando ${personagem.arma.nome}, ${personagem.arma.descricao}`  
})
botao_atacar.addEventListener('mouseleave', () => {
    descricao_botoes.textContent = ''
})

botao_habilidade1.addEventListener('mouseenter', () => {
    descricao_botoes.textContent = `${personagem.habilidade1.nome}, ${personagem.habilidade1.descricao}`  
})
botao_habilidade1.addEventListener('mouseleave', () => {
    descricao_botoes.textContent = ''
})

botao_habilidade2.addEventListener('mouseenter', () => {
    descricao_botoes.textContent = `${personagem.habilidade2.nome}, ${personagem.habilidade2.descricao}`  
})
botao_habilidade2.addEventListener('mouseleave', () => {
    descricao_botoes.textContent = ''
})

botao_item.addEventListener('click', () => {
    if (!document.getElementById('descricao_botoesid')) {
        itens.forEach(item => {
            const itemdivid = item.index 
            const itemdiv = document.createElement('div')
            itemdiv.id = itemdivid 
            itemdiv.classList.add('itemdiv_luta')
            const itemtitulo = document.createElement('h3')
            const itemdescricao = document.createElement('p')
            const itemfuncao = document.createElement('p')
            const itemquantidade = document.createElement('p')
            itemquantidade.classList.add('item-descricao_luta')
            itemdescricao.classList.add('item-descricao_luta')
            itemfuncao.classList.add('item-descricao_luta')
            itemtitulo.classList.add('item_luta')
            itemquantidade.textContent = `Quantidade: ${item.quantidade}.`
            itemdescricao.textContent = item.descricao
            itemfuncao.textContent = item.funcao
            itemtitulo.textContent = `• ${item.nome}`
            itemdiv.appendChild(itemtitulo)
            itemdiv.appendChild(itemdescricao)
            itemdiv.appendChild(itemfuncao)
            itemdiv.appendChild(itemquantidade)
            descricao_botoes.appendChild(itemdiv)
        });
    } else {
        document.getElementById('descricao_botoesid').remove()
    }
})

botao_defender.addEventListener('mouseenter', () => {
    descricao_botoes.textContent = `Defender contra o inimigo, faz o mesmo causar menos dano contra o personagem.`  
})
botao_defender.addEventListener('mouseleave', () => {
    descricao_botoes.textContent = ''
})





