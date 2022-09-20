// Ativar barra branca do links do menu ***
const links = document.querySelectorAll('.header-menu a');

function ativarLink(links){
const url = location.href;
const href = links.href;
if (url.includes(href)) {
links.classList.add("ativo");
}
}

links.forEach(ativarLink);

//_________________________________________________________________
// Ativar intens do Orçamento*** 

const paramentros = new URLSearchParams( location.search);

function ativarProdutos(paramentro){
    const elemento = document.getElementById(paramentro);
    if (elemento) {
    elemento.checked = true;
    } 

}
paramentros.forEach(ativarProdutos);
//_________________________________________________________________
//Perguntas frequentes

const perguntas = document.querySelectorAll('.pergutas button');

function ativarPergunta(event){
const pergunta = event.currentTarget;
const controls = pergunta.getAttribute('aria-controls');
const resposta = document.getElementById(controls);

resposta.classList.toggle("ativa");
const ativa = resposta.classList.contains("ativa");
pergunta.setAttribute('aria-expanded',ativa);
console.log(ativa);

}


function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}
perguntas.forEach(eventosPerguntas);
//_________________________________________________________________
//Galeria de bicicleta


const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImage(event){
const img = event.currentTarget;
const midia = matchMedia('(min-width:1000px)').matches;
if (midia) {
    galeriaContainer.prepend(img);
}
}

function eventoGaleria(img){
img.addEventListener('click', trocarImage);
}

galeria.forEach(eventoGaleria);


//_________________________________________________________________
//Animação
if (window.SimpleAnime) {
new SimpleAnime();
    
}


