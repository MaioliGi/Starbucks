// Fazer esta função 2º (Ela troca a imagem do sorvete grande)
function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

// Fazer esta função 3º (Ela troca a cor do círculo)
function changeCircleColor(color){
    const circulo =document.querySelector('.circulo');
    circulo.style.background = color;
}

// Fazer esta função 1º (Ela altera o estado Ativo/Desativo)
function toggleMenu() {
    var menuToogle = document.querySelector('.toggle'); // Cria uma variável e usa o DOM para selecionar a classe (.toggle)
    var links = document.querySelector('.links'); // Cria uma variável e usa o DOM para selecionar a classe (.links)
    menuToogle.classList.toggle('active') // Troca o estado da classe (.toggle) para ativo
    links.classList.toggle('active') // Troca o estado da classe (.links) para ativo
}