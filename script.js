function mostrarMensagem() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("conteudo").style.display = "block";
  document.getElementById("botaoMusica").style.display = "block";

  // const musica = document.getElementById("musicaFundo");
//   musica.play().catch(() => {
//     console.log("Autoplay bloqueado. Música iniciará após interação.");
//   });
// }

// window.onload = () => {
//   const musica = document.getElementById("musicaFundo");
//   musica.volume = 0.4;
// }

// function toggleMusica() {
//   const musica = document.getElementById("musicaFundo");
//   const botao = document.getElementById("botaoMusica");

//   if (musica.paused) {
//     musica.play();
//     botao.innerText = "🔊 Pausar Música";
//   } else {
//     musica.pause();
//     botao.innerText = "🔈 Tocar Música";
//   }
// }

// function criarCoracao() {
//   const hearts = document.getElementById("hearts");
//   const heart = document.createElement("div");
//   heart.className = "heart";
//   heart.style.left = Math.random() * 100 + "vw";
//   heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
//   heart.style.position = "absolute";
//   heart.style.bottom = "0";
//   hearts.appendChild(heart);

//   setTimeout(() => heart.remove(), 5000);
 }

// setInterval(criarCoracao, 300);

// Lista de textos para cada imagem
const textosDasImagens = [
  "Nosso passeio de balão 🎈\n\nO dia mais importante pra mim um dia que nunca vou esquecer, o começo de tudo",
  "AMO nossos passeios ❤️\n\nCoisas que deixei de fazer, passeios, e cada vez que saimos é tão bom, tão leve.",
  "O dia que errei contigo, quando comecei a esconder as coisas, quando tudo começou a ir por agua a baixo, por minha culpa",
  "Ainda nessa praia, era nossa primeira viagem juntos como um casal\nNão sozinhos, mas a primeira vez que estavamos fazendo uma viagem\nE mesmo desempregado, mesmo com tudo, estava me divertindo muito e gostando da experiencia",
  "Essa foto nos definia\nSempre leves, dando risada de tudo, tudo era bom quando estavamos juntos",
  "Nossa primeira viagem de casal sozinhos\nE eu amei cada momento, cada passeio, cada lugar, cada segundo que passou dessa viagem, foi perfeito.\nEu senti como eramos antigamente, tudo leve.\nQuero fazer mais um milhão de viagens com voce",
  "Essa é uma das ultimas fotos que tiramos\nE vejo que mesmo eu sendo a pessoa que fui com voce, mesmo eu fazendo de tudo pra te afastar\nDava pra ver que voce tinha um carinho e um amor enorme por mim\nE quero retribuir isso com todas as forças que tenho no coração",
  "E essas fotos assim, acabam sendo as minhas preferidas, porque não são esperadas, e mostram realmente como somos\nE lembro muito desse dia, que voce estava dengosa\nE amo quando voce esta assim\nQue dou um milhao de beijos na sua bochecha\n\nSei que fui uma pessoa ruim pra voce\nMas vou concertar tudo isso, tudo que eu destrui."
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
