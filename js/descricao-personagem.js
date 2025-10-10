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
