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
        condicaomentalatual: 12, 
        condicaomentaltotal: 12,
        arma: {
            nome: 'Régua Áurea',
            funcao: 'role 1d20 e caso caia mais que a CA do inimigo role 1d10 para o dano.',
            descricao: 'Não é uma arma de força bruta, mas uma ferramenta de pura criação. Esta lança espectral, ao ser arremessada, projeta linhas e arcos baseados na Proporção Áurea (Φ≈1.618).',
            dado1: 20, 
            necessita: true,  
            modificador: null,
            numero_necessario: null, 
            dado2: 10,
            logs: [`Pitágoras arremessa sua Régua Áurea, traçando linhas perfeitas que cortam o inimigo com precisão matemática.`, `Com um movimento fluido, Pitágoras utiliza a Régua Áurea para criar arcos que envolvem e atingem o inimigo de ângulos inesperados.`, `A Régua Áurea de Pitágoras emite um brilho dourado enquanto ele a lança, criando padrões geométricos no ar que desorientam o inimigo antes do impacto.`],
            logserro: [`Pitágoras erra o cálculo da proporção áurea, fazendo a Régua desviar do alvo.`, `A Régua Áurea de Pitágoras traça uma linha imperfeita, falhando em atingir o inimigo.`, `Pitágoras hesita no arremesso, e a Régua Áurea perde sua precisão matemática.`],   
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
            tempo: 3,
            logs: [`Pitágoras invoca o Teorema de Pitágoras, traçando a hipotenusa que conecta o inimigo a um ponto fixo, causando uma explosão de energia matemática.`, `Com um gesto preciso, Pitágoras ativa o Teorema de Pitágoras, criando uma linha invisível que desintegra o inimigo ao ser tocada.`, `O ambiente ao redor de Pitágoras se transforma em um diagrama geométrico enquanto ele utiliza o Teorema de Pitágoras para eliminar o inimigo com exatidão.`],
            logserro: [`Pitágoras confunde os cálculos do teorema, fazendo a hipotenusa aparecer no lugar errado.`, `O Teorema de Pitágoras falha quando Pitágoras erra as medidas dos catetos.`, `A geometria se distorce e o Teorema de Pitágoras não consegue formar o triângulo correto.`]
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
            tempo: 3,
            logs: [`Pitágoras ativa sua Visão Numérica, revelando os pontos fracos do inimigo e reduzindo sua CA com precisão matemática.`, `Com um olhar penetrante, Pitágoras utiliza a Visão Numérica para analisar o inimigo, diminuindo sua capacidade de defesa.`, `A mente de Pitágoras se conecta ao fluxo numérico do universo enquanto ele emprega a Visão Numérica para enfraquecer o inimigo.`],
            logserro: [`A Visão Numérica de Pitágoras é ofuscada por números caóticos, impedindo a análise.`, `Pitágoras perde o foco e sua Visão Numérica não consegue quantificar o inimigo.`, `Os números se embaralham na mente de Pitágoras, fazendo a Visão Numérica falhar.`]
        },
        ca: 15
    }
    itens = [
        {   
            quantidade: 3,
            index: 'Lira',
            nome: 'Lira',
            funcao: 'Pode-se usar 3 vezes em cada rodada, cada vez curando 1d6 de vida e 1d4 de condição mental',
            descricao: 'Não é uma arma de força bruta, mas uma ferramenta de paz e harmonia. Esta lira tem 3 cordas que são extremamente delicadas e se quebram ao tocar, mas que ao soar elas criam uma melodia extremamente bela, restaura a vida e a condição mental do personagem.',
            curavida: 6,
            aumento_de_ca: null,
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
        condicaomentalatual: 12, 
        condicaomentaltotal: 12,
        arma: {
            nome: 'Maçã Gravitacional',
            funcao: 'role 1d20 e caso caia mais que a CA do inimigo role 1d10 para o dano.',
            descricao: 'Um orbe em forma de maçã que pode ser arremessado, criando um poço gravitacional que atrai e causa dano contínuo aos inimigos.',
            dado1: 20,  
            necessita: true,  
            modificador: null,
            numero_necessario: null, 
            dado2: 10,
            logs: [`Newton arremessa sua Maçã Gravitacional, criando um campo gravitacional que puxa o inimigo para o centro do impacto.`, `A Maçã Gravitacional de Newton distorce o espaço ao redor do inimigo, causando dano através da manipulação da gravidade.`, `Newton lança a Maçã Gravitacional que explode em ondas gravitacionais, desequilibrando e ferindo o inimigo.`],
            logserro: [`Newton erra o cálculo da trajetória e a Maçã Gravitacional desvia do alvo.`, `A gravidade falha e a Maçã Gravitacional de Newton flutua sem direção.`, `Newton hesita no arremesso, fazendo a Maçã Gravitacional perder sua força gravitacional.`]
        },
        habilidade1: {
            nome: 'Prisma Espectral',
            funcao: 'role 1d20 e caso caia mais que a CA - 5 do inimigo role 1d12 para o dano.',
            descricao: 'Um cajado que dispara raios de luz. O cajado alterna entre as cores do espectro visível de cores.',
            dado1: 20,  
            necessita: true,  
            modificador: -5,
            numero_necessario: null, 
            dado2: 12,
            numero: null,
            alvo: 'vida-inimigo',
            tempo: null,
            logs: [`Newton ativa seu Prisma Espectral, decompondo a luz em um feixe multicolorido que perfura o inimigo.`, `O Prisma Espectral de Newton separa a luz branca em todas as cores, cada uma atingindo o inimigo com energia pura.`, `Newton empunha o Prisma Espectral, criando um arco-íris letal que atravessa o inimigo com precisão óptica.`],
            logserro: [`O Prisma Espectral de Newton refrata a luz incorretamente, dispersando o feixe.`, `Newton erra o ângulo e o Prisma Espectral projeta as cores na direção errada.`, `A luz se fragmenta caoticamente, fazendo o Prisma Espectral falhar em focar no alvo.`]
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
            tempo: 3,
            logs: [`Newton aplica suas Leis do Movimento, aumentando sua agilidade e capacidade de esquiva através da física clássica.`, `As Leis do Movimento de Newton entram em ação, tornando-o mais rápido e difícil de atingir.`, `Newton utiliza o conhecimento das Leis do Movimento para antecipar e evitar os ataques inimigos com precisão científica.`],
            logserro: [`Newton confunde as Leis do Movimento, tropeçando em seus próprios pés.`, `As equações se embaralham e Newton perde o equilíbrio ao tentar aplicar as leis.`, `Newton calcula errado a inércia, fazendo as Leis do Movimento falharem.`]
        },
        ca: 15
    }
    itens = [
        {   
            quantidade: 3,
            index: 'telescopio',
            nome: 'Telescópio Refletor',
            funcao: 'Diminúi o CA to inimigo por 4 por 3 rodadas.',
            descricao: 'Permite a Newton enxergar pontos fracos nos inimigos, aumentando a chance de acerto crítico.è frágil, então pode ser usado 3 vezes por rodada.',
            curavida: null,
            aumento_de_ca: null,
            diminuicao_de_CA_inimigo: 4,
            aumento_de_chance: null,
            curacondicaomental: null,
            aumento_de_dano: null,
            tempo: 3,
            logs: [`Newton usa seu Telescópio Refletor para analisar o inimigo, revelando pontos fracos em sua defesa.`, `O Telescópio Refletor de Newton foca na estrutura do inimigo, identificando vulnerabilidades críticas.`, `Newton observa através do Telescópio Refletor, mapeando as fraquezas do inimigo com precisão astronômica.`]
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
        condicaomentalatual: 12, 
        condicaomentaltotal: 12,
        arma: {
            nome: 'Caneta da Teoria',
            funcao: 'role 1d20 e caso caia mais que a CA do inimigo role 1d10 para o dano.',
            descricao: 'Materializa equações de energia que explodem ao contato com o inimigo, baseadas na famosa E=mc².',
            dado1: 20,  
            necessita: true,  
            modificador: null,
            numero_necessario: null, 
            dado2: 10,
            logs: [`Einstein escreve equações no ar com sua Caneta da Teoria, materializando fórmulas que explodem em energia pura.`, `A Caneta da Teoria de Einstein traça E=mc² no espaço, convertendo massa em energia destrutiva contra o inimigo.`, `Einstein utiliza a Caneta da Teoria para criar equações luminosas que se transformam em explosões de energia relativista.`],
            logserro: [`Einstein erra uma variável na equação, fazendo a fórmula se desfazer no ar.`, `A Caneta da Teoria falha quando Einstein esquece um símbolo matemático crucial.`, `Einstein hesita na escrita e a equação se torna instável, dissipando-se sem efeito.`]
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
            tempo: 3,
            logs: [`Einstein dobra o espaço-tempo ao seu redor, teletransportando-se e confundindo o inimigo.`, `A Dobra Espacial de Einstein distorce a realidade, fazendo-o aparecer em outro local instantaneamente.`, `Einstein manipula a geometria do espaço, criando um atalho dimensional que o torna mais difícil de atingir.`],
            logserro: [`Einstein calcula mal a curvatura do espaço-tempo, falhando no teletransporte.`, `A Dobra Espacial se desfaz quando Einstein perde a concentração na relatividade.`, `Einstein confunde as dimensões, fazendo a dobra espacial colapsar antes de se completar.`]
        },
        habilidade2: {
            nome: 'Efeito Fotoelétrico',
            funcao: 'Faz com que a CA do inimigo caia no valor de 1d10 por 3 turnos',
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
            descricao: 'Einstein utiliza o Efeito Fotoelétrico para absorver energia luminosa e enfraquecer as defesas do inimigo, revelando vulnerabilidades através da física quântica.',
            dado1: 10,  
            necessita: false,  
            modificador: null,
            numero_necessario: null, 
            dado2: 0,
            numero: null,
            alvo: 'ca-inimigo',
            tempo: 3,
            logs: [`Einstein ativa o Efeito Fotoelétrico, absorvendo fótons do ambiente para enfraquecer as defesas do inimigo.`, `O Efeito Fotoelétrico de Einstein libera elétrons que interferem na estrutura defensiva do inimigo.`, `Einstein utiliza a luz ambiente através do Efeito Fotoelétrico, criando uma vulnerabilidade quântica no inimigo.`],
            logserro: [`Einstein não consegue absorver fótons suficientes, fazendo o Efeito Fotoelétrico falhar.`, `A frequência da luz está errada e o Efeito Fotoelétrico não se ativa.`, `Einstein perde o controle quântico e os elétrons se dispersam sem efeito.`]
        },
        ca: 15
        }   
        itens = [
            {   
            quantidade: 3,
            index: 'bussola',
            nome: 'Bússola de Gedanken',
            funcao: 'Aumenta o 1d20 do próximo ataque em 3.',
            descricao: 'Faz o personagem conseguir encontrar o jeito certo de atacar o inimigo. A bússola só funciona 3 vezes por rodada.',
            curavida: null,
            aumento_de_ca: null,
            diminuicao_de_CA_inimigo: null,
            aumento_de_chance: 3,
            curacondicaomental: null,
            aumento_de_dano: null,
            tempo: 1,
            logs: [`Einstein consulta sua Bússola de Gedanken, realizando um experimento mental para encontrar o melhor ângulo de ataque.`, `A Bússola de Gedanken de Einstein aponta para a solução ótima, guiando seu próximo movimento com precisão teórica.`, `Einstein usa a Bússola de Gedanken para navegar pelas possibilidades, encontrando o caminho mais eficaz para atingir o inimigo.`]
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
        condicaomentalatual: 12, 
        condicaomentaltotal: 12,
        arma: {
            nome: 'Isótopos Instáveis',
            funcao: 'role 1d20 e caso caia mais que a CA do inimigo role 1d10 para o dano.',
            descricao: 'Orbes que podem ser arremessados e que têm uma chance de causar uma pequena explosão.',
            dado1: 20,  
            necessita: true,  
            modificador: null,
            numero_necessario: null, 
            dado2: 10,
            logs: [`Oppenheimer lança Isótopos Instáveis que se desintegram ao impacto, liberando energia nuclear controlada.`, `Os Isótopos Instáveis de Oppenheimer explodem em uma reação em cadeia, causando dano radioativo ao inimigo.`, `Oppenheimer arremessa orbes radioativos que se fragmentam, criando uma explosão atômica em miniatura.`],
            logserro: [`Os Isótopos Instáveis de Oppenheimer se desintegram prematuramente, perdendo o alvo.`, `Oppenheimer erra o arremesso e os isótopos se dispersam sem causar dano.`, `A instabilidade nuclear falha e os isótopos se tornam inertes antes do impacto.`]
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
            tempo: null,
            logs: [`Oppenheimer inicia uma Reação em Cadeia, criando explosões sucessivas que se espalham pelo corpo do inimigo.`, `A Reação em Cadeia de Oppenheimer desencadeia uma série de fissões nucleares controladas no inimigo.`, `Oppenheimer marca o inimigo para uma Reação em Cadeia, causando explosões múltiplas e devastadoras.`],
            logserro: [`A Reação em Cadeia de Oppenheimer falha ao não atingir a massa crítica necessária.`, `Oppenheimer perde o controle da reação e ela se extingue antes de se propagar.`, `A cadeia nuclear se interrompe quando Oppenheimer erra os cálculos de fissão.`]
        },
        habilidade2: {
            nome: 'Chapéu e Cachimbo',
            funcao: 'Faz com que a CA do inimigo caia no valor de 1d10 por 3 turnos.',
            descricao: 'Oppenheimer tira um tempo de paz para aumentar sua condição mental.',
            dado1: 10,  
            necessita: false,  
            modificador: null,
            numero_necessario: null, 
            dado2: 0,
            numero: null,
            alvo: 'ca-inimigo',
            tempo: 3,
            logs: [`Oppenheimer coloca seu chapéu e acende o cachimbo, contemplando a situação e encontrando vulnerabilidades no inimigo.`, `Com Chapéu e Cachimbo, Oppenheimer reflete sobre a natureza da guerra, revelando pontos fracos na defesa inimiga.`, `Oppenheimer pausa para fumar seu cachimbo, usando o momento de contemplação para analisar e enfraquecer o inimigo.`],
            logserro: [`Oppenheimer se distrai com pensamentos éticos e perde o foco na análise do inimigo.`, `O cachimbo de Oppenheimer se apaga, interrompendo sua contemplação estratégica.`, `Oppenheimer fica perdido em reflexões filosóficas, falhando em encontrar vulnerabilidades.`]
        },
        ca: 15
    }
    itens = [
        {   
            quantidade: 3,
            index: 'cigarro',
            nome: 'Cigarro da Contemplação Crítica',
            funcao: 'Aumenta o dano em 5 na proxima rodada.',
            descricao: 'Ao usar este item, Oppenheimer para por um breve instante, acende um cigarro e dá uma longa tragada. O mundo ao redor fica em tons de cinza e o tempo desacelera por um segundo, enquanto a ponta do cigarro brilha intensamente.',
            curavida: null,
            aumento_de_ca: null,
            diminuicao_de_CA_inimigo: null,
            aumento_de_chance: null,
            curacondicaomental: null,
            aumento_de_dano: 5,
            tempo: 1,
            logs: [`Oppenheimer acende o Cigarro da Contemplação Crítica, o tempo desacelera enquanto ele reflete sobre as consequências de suas ações.`, `O Cigarro da Contemplação Crítica de Oppenheimer brilha intensamente, aumentando sua concentração e poder destrutivo.`, `Oppenheimer fuma o Cigarro da Contemplação Crítica, o mundo fica em tons de cinza enquanto ele se prepara para um ataque devastador.`]
        }
    ]
    localStorage.setItem('personagem', JSON.stringify(personagem));
    localStorage.setItem('itens', JSON.stringify(itens));
    window.open("dialogo1.html", "_self");
})
