function mostrarMensagem() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("conteudo").style.display = "block";
  document.getElementById("botaoMusica").style.display = "block";

  const musica = document.getElementById("musicaFundo");
  musica.play().catch(() => {
    console.log("Autoplay bloqueado. Música iniciará após interação.");
  });
}

window.onload = () => {
  const musica = document.getElementById("musicaFundo");
  musica.volume = 0.4;
}

function toggleMusica() {
  const musica = document.getElementById("musicaFundo");
  const botao = document.getElementById("botaoMusica");

  if (musica.paused) {
    musica.play();
    botao.innerText = "🔊 Pausar Música";
  } else {
    musica.pause();
    botao.innerText = "🔈 Tocar Música";
  }
}

function criarCoracao() {
  const hearts = document.getElementById("hearts");
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
  heart.style.position = "absolute";
  heart.style.bottom = "0";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(criarCoracao, 300);

// Lista de textos para cada imagem
const textosDasImagens = [
  "Nosso passeio de balão 🎈",
  "Aquele bejinho muito bom, AMO nossos passeios ❤️",
  "Minhas loucuras kkkk 😂",
  "Curtindo uma prainha juntos 🌊",
  "Nossas palhaçadas 😂",
  "Vista linda, com a melhor companhia ❤️",
  "Minha foto favorita nossa ❤️",
  "Primeiro ano novo juntos 🌊❤️"
];

// Adiciona evento de clique para abrir modal nas imagens
document.querySelectorAll('.galeria img').forEach((img, index) => {
  img.addEventListener('click', () => {
    abrirModal(img.src, textosDasImagens[index]);
  });
});

function abrirModal(src, texto) {
  const modal = document.getElementById('modalImagem');
  const imagem = document.getElementById('imagemModal');
  const legenda = document.getElementById('textoModal');

  imagem.src = src;
  legenda.textContent = texto;
  modal.style.display = 'flex';
  document.body.classList.add('modal-aberto'); // bloqueia o scroll
}

function fecharModal() {
  document.getElementById('modalImagem').style.display = 'none';
  document.body.classList.remove('modal-aberto'); // desbloqueia o scroll
}

// Fecha o modal ao clicar fora do conteúdo
document.getElementById('modalImagem').addEventListener('click', function (e) {
  if (e.target === this) {
    fecharModal();
  }
});
