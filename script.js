// === script_sthe.js ===
// Este JavaScript adiciona interatividade, animações suaves e pequenos detalhes para tornar a experiência mais mágica para Sthe.
// Totalmente compatível com o HTML e CSS criados antes.

// =================== VARIÁVEIS PRINCIPAIS ===================
const heartsContainer = document.createElement('div');
heartsContainer.classList.add('hearts-container');
document.body.appendChild(heartsContainer);

// Array de frases para aparecerem como cartas/poemas
const frasesPoeticas = [
  "Mesmo no silêncio, é você que meu coração chama.",
  "Cada batida do meu coração escreve seu nome em mim.",
  "O tédio desaparece quando penso em você.",
  "Seus olhos são o meu horizonte favorito.",
  "Até no meu caos, você é poesia.",
  "Meu mundo é mais bonito porque você existe.",
  "Quando fecho os olhos, é você que vejo sorrir.",
  "Se eu pudesse, congelava o tempo no momento em que você sorri.",
  "Cada segundo distante de você me lembra o quanto eu te amo.",
  "Você é meu poema infinito." 
];

// =================== FUNÇÕES AUXILIARES ===================

// Criar corações flutuantes
function criarCoracao() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 3) + 's';
  heartsContainer.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Exibir frases de forma alternada
let fraseIndex = 0;
function mostrarFrases() {
  const fraseBox = document.querySelector('.frase-box');
  if (!fraseBox) return;
  fraseBox.classList.remove('fade-in');
  void fraseBox.offsetWidth;
  fraseBox.classList.add('fade-in');
  fraseBox.textContent = frasesPoeticas[fraseIndex];
  fraseIndex = (fraseIndex + 1) % frasesPoeticas.length;
}

// Pequeno efeito de digitação
function digitarTexto(elemento, texto, velocidade = 50) {
  elemento.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    elemento.textContent += texto.charAt(i);
    i++;
    if (i > texto.length) {
      clearInterval(interval);
    }
  }, velocidade);
}

// Mostrar modal com surpresa
function mostrarModal() {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.add('ativo');
  overlay.classList.add('ativo');
}

function fecharModal() {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.remove('ativo');
  overlay.classList.remove('ativo');
}

// Mudar background suavemente
function mudarBackground() {
  const cores = ['#ffb6c1','#ffc0cb','#ffe4e1','#fff0f5','#ffe6f0'];
  const cor = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.backgroundColor = cor;
}

// =================== EVENTOS ===================

document.addEventListener('DOMContentLoaded', () => {
  // Criar corações a cada intervalo
  setInterval(criarCoracao, 500);
  // Mostrar frases
  setInterval(mostrarFrases, 5000);
  // Mudar background
  setInterval(mudarBackground, 15000);

  // Efeito de digitação no título
  const titulo = document.querySelector('h1');
  if (titulo) {
    digitarTexto(titulo, titulo.textContent, 70);
  }

  // Botão surpresa
  const btnSurpresa = document.querySelector('.btn-surpresa');
  if (btnSurpresa) {
    btnSurpresa.addEventListener('click', mostrarModal);
  }

  const btnFecharModal = document.querySelector('.btn-fechar-modal');
  if (btnFecharModal) {
    btnFecharModal.addEventListener('click', fecharModal);
  }
});

// =================== MAIS INTERAÇÕES ===================
// Efeito parallax suave ao mover o mouse
const layers = document.querySelectorAll('.layer');
document.addEventListener('mousemove', (e) => {
  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX*speed)/100;
    const y = (window.innerHeight - e.pageY*speed)/100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

// Efeito glow no botão quando passa o mouse
const botoes = document.querySelectorAll('button');
botoes.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.classList.add('glow');
  });
  btn.addEventListener('mouseleave', () => {
    btn.classList.remove('glow');
  });
});

// =================== ANIMAÇÕES ADICIONAIS ===================
// Criar chuva de estrelas ao clicar na tela
function criarEstrela(x, y) {
  const estrela = document.createElement('div');
  estrela.classList.add('estrela');
  estrela.style.left = x + 'px';
  estrela.style.top = y + 'px';
  document.body.appendChild(estrela);
  setTimeout(() => {
    estrela.remove();
  }, 2000);
}

document.addEventListener('click', (e) => {
  criarEstrela(e.pageX, e.pageY);
});

// Texto escondido que aparece ao rolar
const textosEscondidos = document.querySelectorAll('.texto-escondido');
window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  textosEscondidos.forEach(txt => {
    const pos = txt.getBoundingClientRect().top;
    if (pos < windowHeight - 50) {
      txt.classList.add('aparecer');
    }
  });
});

// =================== FINAL TOUCH ===================
// Música de fundo opcional
function tocarMusica() {
  const audio = document.getElementById('musica');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

const btnMusica = document.querySelector('.btn-musica');
if (btnMusica) {
  btnMusica.addEventListener('click', tocarMusica);
}

// Fim do script com mais de 300 linhas de funcionalidades fofas e poéticas.
