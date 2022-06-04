let black = document.getElementById('black');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
// let pixel = document.getElementsByClassName('pixel');
let limpar = document.getElementById('clear-board');

function selectColor(event) {
  const elementSelected = document.querySelector('.selected');
  elementSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);
green.addEventListener('click', selectColor);

//CRIANDO MEU BOARD
function createBoard() {
  for (let linha = 0; linha < 5; linha += 1) {
    let newLi = document.createElement('li');
    let getPixelBoard = document.getElementById('pixel-board');
    getPixelBoard.appendChild(newLi);
    for (let coluna = 0; coluna < 5; coluna += 1) {
      let newDiv = document.createElement('div');
      newDiv.className = 'pixel'
      newLi.appendChild(newDiv)
    }
  }
}
createBoard()

//Função evento de limpar 
function clear() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

limpar.addEventListener('click', clear);

// //Requisito 10 
// RESTRIÇÃO DO INPUT
function restricaoInput() {
  let newInput = document.createElement('input');
  newInput.setAttribute('type', 'number');
  newInput.setAttribute('value', 'default');
  newInput.setAttribute('max', '50');
  newInput.setAttribute('min', '1');
  newInput.id = 'board-size';
  let board = document.getElementById('board');
  board.appendChild(newInput);
}
restricaoInput();

// botão VQV
function vqv() {
  let vqv = document.createElement('input');
  vqv.id = 'generate-board';
  vqv.setAttribute('type', 'submit');
  vqv.setAttribute('value', 'VQV');
  vqv.innerText = 'VQV'
  board.appendChild(vqv);
}
vqv();

//APAGANDO PIXELS
function redPixels() {
  const getLi = document.querySelectorAll('li');
  for (let index = 0; index < getLi.length; index += 1) {
    getLi[index].remove()
  }
}

//VERIFICANDO TAMANHO DO MEU BOARD
function verificaTamanho (n) {
  if (n == '') {
    alert('Board inválido!')
  } else if(n < 5) {
    n = 5;
  } else if (n > 50) {
    n = 50;
  }
  createPixels(n);
}

//CRIANDO PIXELS COM O VALOR DO INPUT
function createPixels(n) {
  for (let linha = 0; linha < n; linha += 1) {
    let newLi =document.createElement('li');
    let getPixelBoard = document.getElementById('pixel-board');
    getPixelBoard.appendChild(newLi);
    for (let coluna = 0; coluna < n; coluna += 1) {
      let newDiv = document.createElement('div');
      newDiv.className = 'pixel'
      newLi.appendChild(newDiv)
    }
  }
}

// getQuantidade.addEventListener('input', createPixels)

// //Requisito 12 - gerar cor aleatória
// https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/
function generateColor() {

  const letters = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
  
}

red.style.backgroundColor = generateColor();
blue.style.backgroundColor = generateColor();
green.style.backgroundColor = generateColor();

//PINTANDO OS QUADRADOS
function paintColor(event) {
  let elementSelected = document.getElementsByClassName('selected')[0];
  // let bgColor = elementSelected[0].style.backgroundColor;
  const cssSelected = getComputedStyle(elementSelected, null);

  let bgColor = cssSelected.getPropertyValue('background-color');
  event.target.style.backgroundColor = bgColor;
}
let pixel = document.getElementsByClassName('pixel');
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', paintColor)
}

//PEGANDO O VALOR DO INPUT
const getSubmit = document.querySelector('#generate-board');
getSubmit.addEventListener('click', function(e) {
  e.preventDefault()
  var input = document.querySelector('#board-size');
  var n = input.value;
  redPixels()
  verificaTamanho(n);
  for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', paintColor)
  }
});