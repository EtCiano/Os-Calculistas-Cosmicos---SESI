let personagem = JSON.parse(localStorage.getItem('personagem'));
let itens = JSON.parse(localStorage.getItem('itens'));
let loginicial = document.getElementById('loginicial');
loginicial.textContent = `Um Enxame de pequenas criaturas feitas de geometria quebrada e ângulos impossíveis que se movem de forma caótica e errática aparecem na frente de ${personagem.nome}. Elas não são poderosas individualmente, mas atacam em grandes números, zunindo com um som de áudio distorcido e desafinado.`

let inimigo = {
    index: 'enxame',
    nome: 'O Enxame Dissonante',
    vidatotal: 25,
    vidaatual: 25,
    ataque: {
        dado1: 20,  
        necessita: true,  
        modificador: null,
        numero_necessario: null, 
        dado2: 4,
        logs: [`Um grito é emitido pelas criaturas do enxame, a frequencia é tão alta que machuca ${personagem.nome}.`, `As criaturas do enxame atacam em bando, mordendo e arranhando ${personagem.nome}.`, `As criaturas do enxame se lançam contra ${personagem.nome}, tentando sufoca-lo com seus corpos.`],
        },
    ca: 15
}

const log_lista = document.getElementById('log-lista');
const hp_inimigo_atual = document.getElementById('hp-inimigo-atual')
const hp_inimigo_total = document.getElementById('hp-inimigo-total')
hp_inimigo_total.textContent = inimigo.vidatotal
hp_inimigo_atual.textContent = inimigo.vidaatual

function adicionarLog(mensagem, dano) {
    const novoItem = document.createElement('li');
    novoItem.textContent = mensagem[Math.floor(Math.random() * mensagem.length)] + ` Causou ${dano} de dano.`;
    log_lista.appendChild(novoItem);
}

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
botao_atacar.addEventListener('click', () => {
    if (Math.floor(Math.random() * (personagem.arma.dado1 - 1 + 1)) + 1 <= inimigo.ca) {
        dano = Math.floor(Math.random() * (personagem.arma.dado2 - 1 + 1)) + 1
        console.log('acertou')
        inimigo.vidaatual -= dano  
        adicionarLog(personagem.arma.logs, dano)
        hp_inimigo_atual.textContent = inimigo.vidaatual
    } else {
        console.log('errou')
        adicionarLog(personagem.arma.logserro)
    }
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





