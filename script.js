const btn = document.getElementById('btnSurpresa');

btn.addEventListener('click', () => {

  document
    .getElementById('timeline')
    .scrollIntoView({
      behavior:'smooth'
    });

});

const text = `
Obrigado por transformar os últimos 3 anos nos melhores da minha vida.

Cada sorriso seu virou uma memória inesquecível pra mim.

E se eu pudesse escolher alguém todos os dias...
ainda escolheria você.

Te amo ❤️
`;

let index = 0;

function escreverTexto(){

  if(index < text.length){

    document.getElementById('typingText').innerHTML += text.charAt(index);

    index++;

    setTimeout(escreverTexto, 40);
  }

}

escreverTexto();