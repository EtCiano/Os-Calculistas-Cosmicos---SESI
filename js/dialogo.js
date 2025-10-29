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
let dialogos1 = [];

switch (personagem.index) {
    case 'pitagoras':
        dialogos1 = [
            "Pitágoras observa o céu estrelado, buscando inspiração para suas próximas descobertas matemáticas. Com um olhar atento, Pitagoras traça triângulos imaginários entre as estrelas, contemplando a harmonia do universo. Pitágoras, fascinado pelas proporções divinas, reflete sobre como os números governam tanto a música quanto o cosmos.",
            "Enquanto Pitágoras caminha pela noite, ele murmura para si mesmo sobre a importância da razão e da lógica. Pitágoras acredita que o entendimento das leis matemáticas pode revelar os segredos do universo, e ele está determinado a desvendar esses mistérios.",
            "Enquanto reflete sobre o universo, Pitágoras vê as estrelas começando a sumir, e depois parte do chão tendo o mesmo destino, como se o universo estivesse sendo desfeito. Pitágoras sente uma estranha sensação de vazio, como se algo estivesse faltando no cosmos que ele tanto admira.",
            "De repente, Pitágoras se vê em um espaço vazio, sem estrelas ou chão, ele cai nesse vazio, percebendo que apenas ele e a escuridão ao seu redor são visíveis. Pitágoras sente uma mistura de medo e curiosidade, percebendo que está em um lugar desconhecido onde suas habilidades matemáticas podem ser testadas de maneiras inesperadas."
        ]
        break;
    case 'newton':
        dialogos1 = [
            "Newton está deitado sob uma macieira, observando as estrelas e refletindo sobre as leis que regem o universo. Ele pensa sobre como a gravidade não apenas mantém os planetas em órbita, mas também influencia a queda das maçãs. Newton sente uma profunda conexão com o cosmos, acreditando que tudo está interligado por forças invisíveis.",
            "Enquanto Newton contempla o céu noturno, ele murmura para si mesmo sobre a importância da observação e da experimentação. Newton acredita que, através do método científico, ele pode desvendar os segredos do universo e compreender as forças que moldam a realidade.",
            "Enquanto reflete sobre o universo, Newton vê as estrelas começando a sumir, e depois parte do chão tendo o mesmo destino, como se o universo estivesse sendo desfeito. Newton sente uma estranha sensação de vazio, como se algo estivesse faltando no cosmos que ele tanto admira.",
            "De repente, Newton se vê em um espaço vazio, sem estrelas ou chão, ele cai nesse vazio, percebendo que apenas ele e a escuridão ao seu redor são visíveis. Newton sente uma mistura de medo e curiosidade, percebendo que está em um lugar desconhecido onde suas habilidades científicas podem ser testadas de maneiras inesperadas."
        ]
        break;
    case 'albert':
        dialogos1 = [
            "Albert Einstein está sentado em um banco de parque, olhando para o céu estrelado e pensando sobre a natureza do tempo e do espaço. Ele reflete sobre como a relatividade mudou nossa compreensão do universo, e como tudo é relativo ao observador. Albert sente uma profunda admiração pela complexidade do cosmos.",
            "Enquanto Albert contempla o céu noturno, ele murmura para si mesmo sobre a importância da imaginação e da criatividade na ciência. Albert acredita que, através do pensamento inovador, ele pode desvendar os segredos do universo e compreender as leis que governam a realidade.",
            "Enquanto reflete sobre o universo, Albert vê as estrelas começando a sumir, e depois parte do chão tendo o mesmo destino, como se o universo estivesse sendo desfeito. Albert sente uma estranha sensação de vazio, como se algo estivesse faltando no cosmos que ele tanto admira.",
            "De repente, Albert se vê em um espaço vazio, sem estrelas ou chão, ele cai nesse vazio, percebendo que apenas ele e a escuridão ao seu redor são visíveis. Albert sente uma mistura de medo e curiosidade, percebendo que está em um lugar desconhecido onde suas habilidades teóricas podem ser testadas de maneiras inesperadas."
        ]
        break;
    case 'robert':
        dialogos1 = [
            "Robert Oppenheimer está sentado em um campo aberto, olhando para o céu estrelado e refletindo sobre as implicações éticas da ciência. Ele pensa sobre como a física quântica abriu novas fronteiras de conhecimento, mas também trouxe desafios morais. Robert sente uma profunda responsabilidade pelo impacto de suas descobertas no mundo.",
            "Enquanto Oppenheimer contempla o céu noturno, ele murmura para si mesmo sobre a importância da reflexão ética na ciência. Robert acredita que, através do pensamento crítico, ele pode desvendar os segredos do universo e compreender as consequências de suas ações.",
            "Enquanto reflete sobre o universo, Robert vê as estrelas começando a sumir, e depois parte do chão tendo o mesmo destino, como se o universo estivesse sendo desfeito. Robert sente uma estranha sensação de vazio, como se algo estivesse faltando no cosmos que ele tanto admira.",
            "De repente, Robert se vê em um espaço vazio, sem estrelas ou chão, ele cai nesse vazio, percebendo que apenas ele e a escuridão ao seu redor são visíveis. Robert sente uma mistura de medo e curiosidade, percebendo que está em um lugar desconhecido onde suas habilidades científicas podem ser testadas de maneiras inesperadas."
        ]
    break;
    default:
        dialogos1 = ["Erro: personagem não encontrado."]
    }
    console.log(dialogos1);

    const dialogodiv = document.getElementById('dialogodiv');
    let dialogoIndex = 0;

    dialogodiv.addEventListener('click', () => {
        atualizarDialogo();
        })

    function atualizarDialogo() {
        if (dialogoIndex < dialogos1.length) {
            dialogodiv.querySelector('.dialogotexto').textContent = dialogos1[dialogoIndex];
            dialogoIndex++;
        } else {
            console.log('Diálogo concluído.');
            window.open("luta1.html", "_self");
        }
    }

    atualizarDialogo();
