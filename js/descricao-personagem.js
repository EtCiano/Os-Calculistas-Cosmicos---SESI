export let personagem = null;
export let itens = [];

const pitagoras = document.getElementById('pitagoras');
const newton = document.getElementById('newton');
const albert = document.getElementById('albert');
const bombado = document.getElementById('bombado');
const descricao = document.getElementById('descricao-personagem');

bombado.addEventListener('mouseenter', () => {
    descricao.textContent = 'Oppenheimer é o calculista quântico, um personagem de alto risco e alta recompensa. Sua arma, o Dado Quântico, força o jogador a resolver problemas de probabilidade para atacar. Suas habilidades se baseiam na incerteza e na criação de poderosas Reações em Cadeia. Ele é ideal para jogadores que gostam de apostas calculadas para resolver problemas massivos. Suas ações, no entanto, podem ter consequências imprevisíveis.';
});

pitagoras.addEventListener('mouseenter', () => {
    descricao.textContent = 'Pitágoras é o mestre da geometria e da harmonia, que busca a ordem divina nos números. Com sua Régua Áurea, ele constrói estruturas baseadas na proporção perfeita. Usando o Teorema de Pitágoras para se mover e atacar, ele cria ângulos e formas precisas. Sua Lira resolve quebra-cabeças rítmicos, revelando padrões ocultos no cenário. Ele é um personagem focado em controle de área e resolução de puzzles espaciais.';
});

newton.addEventListener('mouseenter', () => {
    descricao.textContent = 'Newton é o arquiteto da física clássica, vendo o universo como um mecanismo a ser calculado. Seu Canhão de Cálculo dispara projéteis em trajetórias perfeitas que o jogador deve computar. Ele manipula a gravidade para controlar inimigos e objetos no campo de batalha. Com seu Prisma, ele decompõe problemas complexos em desafios mais simples de resolver. Seu estilo de jogo é metódico, direto e baseado na manipulação de forças.';
});

albert.addEventListener('mouseenter', () => {
    descricao.textContent = 'Einstein é um pensador pacifista que distorce as próprias regras da realidade. Seu Relógio de Bolso Geodésico manipula o fluxo do tempo, desacelerando obstáculos e inimigos. Ele absorve energia para resolver puzzles com o Efeito Fotoelétrico. Sua habilidade suprema, baseada em E=mc², converte massa em energia para limpar áreas. Seu gameplay é focado na lógica, criatividade e na manipulação do espaço-tempo.';
});

pitagoras.addEventListener('click', () => {  
    personagem = {
        index: 'pitagoras',
        nome: 'Pitágoras',
        vidatotal: 15,
        vidaatual: 15,
        Condicaomental: 12, 
        arma: {
            nome: 'Régua Áurea',
            funcao: 'role 1d20 e caso caia mais que a CA do inimigo role 1d10 para o dano.',
            descricao: 'Não é uma arma de força bruta, mas uma ferramenta de pura criação. Esta lança espectral, ao ser arremessada, projeta linhas e arcos baseados na Proporção Áurea (Φ≈1.618).',
            dado1: 20, 
            necessita: true,  
            modificador: null,
            numero_necessario: null, 
            dado2: 10
        },
        habilidade1: {
            nome: 'Teorema de Pitágoras',
            funcao: 'role 1d20 e caso caia mais que a CA - 5 do inimigo role 1d12 para o dano.',
            descricao: 'Qualquer "Anomalia Numérica" (inimigo) tocada pela linha da hipotenusa é "resolvida" e desintegrada.',
            dado1: 20,  
            necessita: true,  
            modificador: -5,
            numero_necessario: null,
            dado2: 12,
            numero: null,
            alvo: 'vida-inimigo',
            tempo: 3
        },
        habilidade2: {
            nome: 'Visão numérica',
            funcao: 'Faz com que a CA do inimigo caia no valor de 1d10 por 3 turnos',
            descricao: 'Para Pitágoras, o universo não é feito de matéria, mas de números. Sua mente está em constante sintonia com a lógica fundamental da realidade, permitindo-lhe enxergar a estrutura matemática oculta em tudo, desde os inimigos caóticos até os quebra-cabeças mais complexos. Ele não apenas vê o mundo, ele o quantifica.',
            dado1: 10,
            necessita: false,  
            modificador: null,
            numero_necessario: null, 
            dado2: 0,
            numero: null,
            alvo: 'ca-inimigo',
            tempo: 3
        },
        CA: 15
    }
    itens = [
        {   
            index: 'Lira',
            nome: 'Lira',
            funcao: 'Pode-se usar 3 vezes em cada rodada, cada vez curando 1d6 de vida e 1d4 de condição mental',
            descricao: 'Não é uma arma de força bruta, mas uma ferramenta de paz e harmonia. Esta lira tem 3 cordas que são extremamente delicadas e se quebram ao tocar, mas que ao soar elas criam uma melodia extremamente bela, restaura a vida e a condição mental do personagem.',
            curavida: 6,
            aumento_de_CA: null,
            diminuicao_de_CA_inimigo: null,
            aumento_de_chance: null,
            curacondicaomental: 4,
            tempo: null
        },
        {   
            index: 'Lira',
            nome: 'Lira',
            funcao: 'Pode-se usar 3 vezes em cada rodada, cada vez curando 1d6 de vida e 1d4 de condição mental',
            descricao: 'Não é uma arma de força bruta, mas uma ferramenta de paz e harmonia. Esta lira tem 3 cordas que são extremamente delicadas e se quebram ao tocar, mas que ao soar elas criam uma melodia extremamente bela, restaura a vida e a condição mental do personagem.',
            curavida: 6,
            aumento_de_CA: null,
            diminuicao_de_CA_inimigo: null,
            aumento_de_chance: null,
            curacondicaomental: 4,
            tempo: null
        },
        {   
            index: 'Lira',
            nome: 'Lira',
            funcao: 'Pode-se usar 3 vezes em cada rodada, cada vez curando 1d6 de vida e 1d4 de condição mental',
            descricao: 'Não é uma arma de força bruta, mas uma ferramenta de paz e harmonia. Esta lira tem 3 cordas que são extremamente delicadas e se quebram ao tocar, mas que ao soar elas criam uma melodia extremamente bela, restaura a vida e a condição mental do personagem.',
            curavida: 6,
            aumento_de_CA: null,
            diminuicao_de_CA_inimigo: null,
            aumento_de_chance: null,
            curacondicaomental: 4,
            tempo: null
        }
    ]
    localStorage.setItem('personagem', JSON.stringify(personagem));
    localStorage.setItem('itens', JSON.stringify(itens));
    window.open("dialogo1.html", "_self");
})

newton.addEventListener('click', () => {  
    personagem = {
        index: 'newton',
        nome: 'Isacc Newton',
        vidatotal: 12,
        vidaatual: 12,
        Condicaomental: 12, 
        arma: {
            nome: 'Maçã Gravitacional',
            funcao: 'role 1d20 e caso caia mais que a CA do inimigo role 1d10 para o dano.',
            descricao: 'Um orbe em forma de maçã que pode ser arremessado, criando um poço gravitacional que atrai e causa dano contínuo aos inimigos.',
            dado1: 20,  
            necessita: true,  
            modificador: null,
            numero_necessario: null, 
            dado2: 10 
        },
        habilidade1: {
            nome: 'Teorema de Pitágoras',
            funcao: 'role 1d20 e caso caia mais que a CA - 5 do inimigo role 1d12 para o dano.',
            descricao: 'Um cajado que dispara raios de luz. O cajado alterna entre as cores do espectro visível de cores.',
            dado1: 20,  
            necessita: true,  
            modificador: -5,
            numero_necessario: null, 
            dado2: 12,
            numero: null,
            alvo: 'vida-inimigo',
            tempo: null
        },
        habilidade2: {
            nome: 'Leis do Movimento',
            funcao: 'Faz com que seu CA suba em 3 por 3 turnos.',
            descricao: 'Uma habilidade passiva que aumenta a velocidade de movimento de Newton, fazendo-o mais ágil para esquivar ataques.',
            dado1: 0,  
            necessita: false,  
            modificador: null,
            numero_necessario: null, 
            dado2: 0,
            numero: 3,
            alvo: 'ca-personagem',
            tempo: 3
        },
        CA: 15
    }
    itens = [
        {   
            index: 'telescopio',
            nome: 'Telescópio Refletor',
            funcao: 'Diminúi o CA to inimigo por 4 por 3 rodadas.',
            descricao: 'Permite a Newton enxergar pontos fracos nos inimigos, aumentando a chance de acerto crítico.è frágil, então pode ser usado 3 vezes por rodada.',
            curavida: null,
            aumento_de_CA: null,
            diminuicao_de_CA_inimigo: 4,
            aumento_de_chance: null,
            curacondicaomental: null,
            aumento_de_dano: null,
            tempo: 3
        },
        {   
            index: 'telescopio',
            nome: 'Telescópio Refletor',
            funcao: 'Diminúi o CA to inimigo por 4 por 3 rodadas.',
            descricao: 'Permite a Newton enxergar pontos fracos nos inimigos, aumentando a chance de acerto crítico.è frágil, então pode ser usado 3 vezes por rodada.',
            curavida: null,
            aumento_de_CA: null,
            diminuicao_de_CA_inimigo: 4,
            aumento_de_chance: null,
            curacondicaomental: null,
            aumento_de_dano: null,
            tempo: 3
        },
        {   
            index: 'telescopio',
            nome: 'Telescópio Refletor',
            funcao: 'Diminúi o CA to inimigo por 4 por 3 rodadas.',
            descricao: 'Permite a Newton enxergar pontos fracos nos inimigos, aumentando a chance de acerto crítico.è frágil, então pode ser usado 3 vezes por rodada.',
            curavida: null,
            aumento_de_CA: null,
            diminuicao_de_CA_inimigo: 4,
            aumento_de_chance: null,
            curacondicaomental: null,
            aumento_de_dano: null,
            tempo: 3
        }
    ]
    localStorage.setItem('personagem', JSON.stringify(personagem));
    localStorage.setItem('itens', JSON.stringify(itens));
    window.open("dialogo1.html", "_self");
})

albert.addEventListener('click', () => {
    personagem = {
        index: 'albert',
        nome: 'Albert Einstein',
        vidatotal: 18,
        vidaatual: 18,
        Condicaomental: 12, 
        arma: {
            nome: 'Caneta da Teoria',
            funcao: 'role 1d20 e caso caia mais que a CA do inimigo role 1d10 para o dano.',
            descricao: 'Materializa equações de energia que explodem ao contato com o inimigo, baseadas na famosa E=mc².',
            dado1: 20,  
            necessita: true,  
            modificador: null,
            numero_necessario: null, 
            dado2: 10
        },
        habilidade1: {
            nome: 'Dobra Espacial',
            funcao: 'role 1d20 e caso caia mais que 15 role 1d6 e aumente seu CA por 3 turnos.',
            descricao: 'Habilidade de teletransporte de curta distância, "dobrando" o espaço para se mover instantaneamente. Deixa mais difícil de ser acertado.',
            dado1: 20,  
            necessita: true,  
            modificador: null,
            numero_necessario: 15, 
            dado2: 6,
            numero: null,
            alvo: 'ca-personagem',
            tempo: null
        },
        habilidade2: {
            nome: 'Efeito Fotoelétrico',
            funcao: 'Faz com que a CA do inimigo caia no valor de 1d10 por 3 turnos',
            descricao: 'Para Pitágoras, o universo não é feito de matéria, mas de números. Sua mente está em constante sintonia com a lógica fundamental da realidade, permitindo-lhe enxergar a estrutura matemática oculta em tudo, desde os inimigos caóticos até os quebra-cabeças mais complexos. Ele não apenas vê o mundo, ele o quantifica.',
            dado1: 10,  
            necessita: false,  
            modificador: null,
            numero_necessario: null, 
            dado2: 0,
            numero: null,
            alvo: 'ca-inimigo',
            tempo: 3
        },
        CA: 15
    }
    itens = [
        {   
            index: 'bussola',
            nome: 'Bússola de Gedanken',
            funcao: 'Aumenta o 1d20 do próximo ataque em 3.',
            descricao: 'Faz o personagem conseguir encontrar o jeito certo de atacar o inimigo. A bússola só funciona 3 vezes por rodada.',
            curavida: null,
            aumento_de_CA: null,
            diminuicao_de_CA_inimigo: null,
            aumento_de_chance: null,
            curacondicaomental: null,
            aumento_de_dano: null,
            tempo: 1
        },
        {   
            index: 'bussola',
            nome: 'Bússola de Gedanken',
            funcao: 'Aumenta o 1d20 do próximo ataque em 3.',
            descricao: 'Faz o personagem conseguir encontrar o jeito certo de atacar o inimigo. A bússola só funciona 3 vezes por rodada.',
            curavida: null,
            aumento_de_CA: null,
            diminuicao_de_CA_inimigo: null,
            aumento_de_chance: null,
            curacondicaomental: null,
            aumento_de_dano: null,
            tempo: 1
        },
        {   
            index: 'bussola',
            nome: 'Bússola de Gedanken',
            funcao: 'Aumenta o 1d20 do próximo ataque em 3.',
            descricao: 'Faz o personagem conseguir encontrar o jeito certo de atacar o inimigo. A bússola só funciona 3 vezes por rodada.',
            curavida: null,
            aumento_de_CA: null,
            diminuicao_de_CA_inimigo: null,
            aumento_de_chance: null,
            curacondicaomental: null,
            aumento_de_dano: null,
            tempo: 1
        }
    ]
    localStorage.setItem('personagem', JSON.stringify(personagem));
    localStorage.setItem('itens', JSON.stringify(itens));
    window.open("dialogo1.html", "_self");
})

bombado.addEventListener('click', () => {  
    personagem = {
        index: 'robert',
        nome: 'J. Robert Oppenheimer',
        vidatotal: 12,
        vidaatual: 12,
        Condicaomental: 12, 
        arma: {
            nome: 'Isótopos Instáveis',
            funcao: 'role 1d20 e caso caia mais que a CA do inimigo role 1d10 para o dano.',
            descricao: 'Orbes que podem ser arremessados e que têm uma chance de causar uma pequena explosão.',
            dado1: 20,  
            necessita: true,  
            modificador: null,
            numero_necessario: null, 
            dado2: 10
        },
        habilidade1: {
            nome: 'Reação em cadeia',
            funcao: 'role 1d20 e caso caia mais que a CA - 5 do inimigo role 1d16 para o dano.',
            descricao: 'Marcar um inimigo faz com que ele seja atingido por várias explosões pequenas em todo corpo, criando uma sequência de explosões.',
            dado1: 20,  
            necessita: true,  
            modificador: -5,
            numero_necessario: null, 
            dado2: 16,
            numero: null,
            alvo: 'vida-inimigo',
            tempo: null
        },
        habilidade2: {
            nome: 'Chapéu e Cachimbo',
            funcao: 'Faz com que a CA do inimigo caia no valor de 1d10 por 3 turnos.',
            descricao: 'Oppenheimer tira um tempo de paz para aumentar sua condição mental.',
            dado1: 20,  
            necessita: true,  
            modificador: null,
            numero_necessario: null, 
            dado2: 10,
            numero: null,
            alvo: 'ca-inimigo',
            tempo: 3
        },
        CA: 15
    }
    itens = [
        {   
            index: 'cigarro',
            nome: 'Cigarro da Contemplação Crítica',
            funcao: 'Aumenta o dano em 5 na proxima rodada.',
            descricao: 'Ao usar este item, Oppenheimer para por um breve instante, acende um cigarro e dá uma longa tragada. O mundo ao redor fica em tons de cinza e o tempo desacelera por um segundo, enquanto a ponta do cigarro brilha intensamente.',
            curavida: null,
            aumento_de_CA: null,
            diminuicao_de_CA_inimigo: null,
            aumento_de_chance: null,
            curacondicaomental: null,
            aumento_de_dano: 5,
            tempo: null
        },
        {   
            index: 'cigarro',
            nome: 'Cigarro da Contemplação Crítica',
            funcao: 'Aumenta o dano em 5 na proxima rodada.',
            descricao: 'Ao usar este item, Oppenheimer para por um breve instante, acende um cigarro e dá uma longa tragada. O mundo ao redor fica em tons de cinza e o tempo desacelera por um segundo, enquanto a ponta do cigarro brilha intensamente.',
            curavida: null,
            aumento_de_CA: null,
            diminuicao_de_CA_inimigo: null,
            aumento_de_chance: null,
            curacondicaomental: null,
            aumento_de_dano: 5,
            tempo: null
        },
        {   
            index: 'cigarro',
            nome: 'Cigarro da Contemplação Crítica',
            funcao: 'Aumenta o dano em 5 na proxima rodada.',
            descricao: 'Ao usar este item, Oppenheimer para por um breve instante, acende um cigarro e dá uma longa tragada. O mundo ao redor fica em tons de cinza e o tempo desacelera por um segundo, enquanto a ponta do cigarro brilha intensamente.',
            curavida: null,
            aumento_de_CA: null,
            diminuicao_de_CA_inimigo: null,
            aumento_de_chance: null,
            curacondicaomental: null,
            aumento_de_dano: 5,
            tempo: null
        }
    ]
    localStorage.setItem('personagem', JSON.stringify(personagem));
    localStorage.setItem('itens', JSON.stringify(itens));
    window.open("dialogo1.html", "_self");
})
