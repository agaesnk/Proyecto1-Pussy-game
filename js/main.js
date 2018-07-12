//Creo pantalla inicial

document.body.onload = function(){
  console.log("hola");
  createSplash();
};

function createSplash (){
  var splashScreen = document.createElement('section');
  var title = document.createElement('h1');
  var subtitle = document.createElement ('h2');
  var intro = document.createTextNode ('p');
  var footer = document.createElement ('footer');
  var startBtn = document.createElement('button');

  splashScreen.appendChild(title);
  splashScreen.appendChild(subtitle);
  splashScreen.appendChild(intro);
  splashScreen.appendChild(footer);
  footer.appendChild(startBtn);

  title.textContent = "Pussy's Master";
  subtitle.textContent = "The Game";
  intro.textContent = 'Un texto de introducción que pensaré más tarde';
  startBtn.textContent = "START";

  
  
  startBtn.addEventListener('click', handleClickButtonStart);
  document.body.prepend(splashScreen);
}

function handleClickButtonStart(){
  removeSplashScreen();
  createGameScreenLevel1();
}

function removeSplashScreen() {
  var splashScreen = document.querySelector("section")
  document.body.removeChild(splashScreen);
}

//Creo pantalla game Level 1

function createGameScreenLevel1 (){

  var level1 = document.getElementById('level1');
  level1.removeAttribute('class');

  var elementsToIncrease = document.getElementsByClassName('increase');

  for (var i = 0; i < elementsToIncrease.length; i++){
    elementsToIncrease[i].addEventListener('mouseover', addTemp);
  }

  var elementsToDecrease = document.getElementsByClassName('decrease');

  for (var i = 0; i < elementsToDecrease.length; i++){
    elementsToDecrease[i].addEventListener('mouseover', decreaseTemp);
  }  

  const progress = document.querySelector('progress');

  function addTemp() {
    progress.value++;
  }

  function decreaseTemp() {
    progress.value--;
  }

  // var gameScreen = document.createElement('section');
  // var skipBtn = document.createElement ('button');
  // gameScreen.appendChild(skipBtn);

  // skipBtn.textContent = "SKIP";

  // skipBtn.addEventListener ('click', middleHandleClick1);
  // document.body.prepend(gameScreen)
}

function middleHandleClick1(){
  var gameScreen = document.querySelector("section")
  document.body.removeChild(gameScreen);
  createGameScreenLevel2();
}

//Creo pantalla game Level 2

function createGameScreenLevel2 (){
  var level2 = document.getElementById('level2');
  level1.removeAttribute('class');

  var elementsToIncrease = document.getElementsByClassName('increase');

  for (var i = 0; i < elementsToIncrease.length; i++){
    elementsToIncrease[i].addEventListener('mouseover', addTemp);
  }

  var elementsToDecrease = document.getElementsByClassName('decrease');

  for (var i = 0; i < elementsToDecrease.length; i++){
    elementsToDecrease[i].addEventListener('mouseover', decreaseTemp);
  }  

  const progress = document.querySelector('progress');

  function addTemp() {
    progress.value++;
  }

  function decreaseTemp() {
    progress.value--;
  }

  // var gameScreen = document.createElement('section');
  // var skipBtn = document.createElement ('button');
  // gameScreen.appendChild(skipBtn);

  // skipBtn.textContent = "SKIP";

  // skipBtn.addEventListener ('click', middleHandleClick1);
  // document.body.prepend(gameScreen)
}

//function middleHandleClick1(){
 // var gameScreen = document.querySelector("section")
 // document.body.removeChild(gameScreen);
 // createGameScreenLevel2();
//}
 


//Creo pantalla game Level 3

function createGameScreenLevel3 (){
  var level3 = document.getElementById('level3');
  level1.removeAttribute('class');

  var elementsToIncrease = document.getElementsByClassName('increase');

  for (var i = 0; i < elementsToIncrease.length; i++){
    elementsToIncrease[i].addEventListener('mouseover', addTemp);
  }

  var elementsToDecrease = document.getElementsByClassName('decrease');

  for (var i = 0; i < elementsToDecrease.length; i++){
    elementsToDecrease[i].addEventListener('mouseover', decreaseTemp);
  }  

  const progress = document.querySelector('progress');

  function addTemp() {
    progress.value++;
  }

  function decreaseTemp() {
    progress.value--;
  }

//function createGameScreenLevel3 (){
  //var gameScreen = document.createElement('section');
//var skipBtn = document.createElement ('button');
//gameScreen.appendChild(skipBtn);
//skipBtn.textContent = "SKIP";
//skipBtn.addEventListener ('click', middleHandleClick3);
  //document.body.prepend(gameScreen)
}

function middleHandleClick3(){
  var gameScreen = document.querySelector("section")
  document.body.removeChild(gameScreen);
  createGameOverScreen();
}

//Creo pantalla Game Over

function createGameOverScreen (){
  var gameOverScreen = document.createElement('section');
  var title = document.createElement('h1');
  var message = document.createElement ('p');
  var restartBtn = document.createElement('button');

  gameOverScreen.appendChild (title);
  gameOverScreen.appendChild (message);
  gameOverScreen.appendChild (restartBtn);


  title.textContent = "Game Over";
  message.textContent = "Un mensaje que pensaré más tarde";
  restartBtn.textContent = "RESTART";
  

  restartBtn.addEventListener ('click', finalHandleClick);
  document.body.prepend(gameOverScreen);
}

function finalHandleClick(){
  var gameOverScreen = document.querySelector("section")
  document.body.removeChild(gameOverScreen);
  createSplash();
}


//Creo pantalla Winner

function createWinnerScreen (){
  var gameWinnerScreen = document.createElement('section');
  var title = document.createElement('h1');
  var message = document.createElement ('p');
  var restartBtn = document.createElement('button');

  gameWinnerScreen.appendChild (title);
  gameWinnerScreen.appendChild (message);
  gameWinnerScreen.appendChild (restartBtn);


  title.textContent = "You are a Master";
  message.textContent = "Un mensaje que pensaré más tarde";
  restartBtn.textContent = "RESTART";
  

  restartBtn.addEventListener ('click', finalHandleClick2);
  document.body.prepend(gameWinnerScreen);
}

function finalHandleClick2(){
  var gameWinnerScreen = document.querySelector("section")
  document.body.removeChild(gameWinnerScreen);
  createSplash();
}