let indiceAtual = 0;
const imagens = document.querySelectorAll(".slide");
const titulos = [
  "Alambique Espagírico",
  "Processo Alquímico em Alambique Espagírico",
  "Destilação Espagírica com Alambique de Cobre",
  "Calcinação: O Fogo Purificador da Espagiria",
  "Destilação Espagírica: A Extração do Espírito Vegetal",
  "Preparação da Matéria-Prima Verde"
];
const descricoes = [
  "Instrumento utilizado na prática da espagiria, arte ancestral que une princípios da alquimia e da fitoterapia. Essa peça em forma de gota simboliza a purificação e separação dos elementos, iluminando o processo com uma beleza ritualística e simbólica.",
  "A substância em ebulição dentro do alambique espagírico revela uma etapa do processo de separação e purificação. A cor intensa reflete os princípios ativos extraídos da matéria vegetal, enquanto o instrumento trabalha para isolar os elementos espirituais, voláteis e fixos segundo os preceitos da espagiria.",
  "A imagem mostra um alambique de cobre em pleno processo de destilação, conectado a um condensador de vidro que conduz os vapores até o balão de coleta. Essa técnica tradicional é utilizada para separar os componentes sutis da matéria, respeitando os princípios filosóficos da espagiria: separar, purificar e reunir para elevar a essência da planta ou substância trabalhada.",
  "Nesta imagem, vemos o processo de calcinação — um dos estágios mais intensos da alquimia espagírica. A matéria é exposta ao fogo para queimar impurezas e reduzir-se às cinzas. O calor representa a ação do espírito sobre a matéria, promovendo a transmutação e abrindo caminho para as fases seguintes de purificação e reintegração..",
  "A imagem mostra um aparelho de destilação em pleno processo espagírico. A matéria vegetal aquecida libera seus vapores que, ao passarem pelo condensador, se transformam em essência líquida. Essa operação visa separar o espírito (destilado) da alma e do corpo da planta, um passo essencial na preparação de remédios alquímicos com propriedades sutis e profundas..",
  "Antes do processo alquímico, as ervas são cuidadosamente separadas e preparadas manualmente. Essa etapa representa o contato direto com a natureza e a intenção colocada no início do trabalho espagírico, honrando o vegetal em sua totalidade — corpo, alma e espírito."
];

function atualizarCarrossel() {
  const containerImagens = document.querySelector(".container-imagens");
  containerImagens.style.transform = `translateX(-${indiceAtual * 320}px)`; // 320px é a largura de cada imagem
  document.getElementById("texto-titulo").textContent = titulos[indiceAtual];
  document.getElementById("texto-descricao").textContent = descricoes[indiceAtual];
}

function mudarImagem(direcao) {
  indiceAtual += direcao;
  if (indiceAtual < 0) {
    indiceAtual = imagens.length - 1;
  } else if (indiceAtual >= imagens.length) {
    indiceAtual = 0;
  }
  atualizarCarrossel();
}

atualizarCarrossel();
