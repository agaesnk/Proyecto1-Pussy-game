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

  
  
  startBtn.addEventListener ('click', handleClick);
  document.body.prepend(splashScreen);
}

function handleClick(){
  var splashScreen = document.querySelector("section")
  document.body.removeChild(splashScreen);
  createGameScreenLevel1()
}

//Creo pantalla game Level 1

function createGameScreenLevel1 (){
  var gameScreen = document.createElement('section');
  var title = document.createElement('h1');
  var container = document.createElement ('div'); 
  container.classList.add('container');
  var termometro = document.createElement ('div'); 
  termometro.classList.add('termometro');
  var secondaryObject = document.createElement('img'); 
  secondaryObject.classList.add('temperatura');
  var vulva = document.createElement('div'); 
  vulva.classList.add('vulva');
  var mainObject = document.createElement ('img'); 
  mainObject.classList.add('vagina');
  var skipBtn = document.createElement ('button');

  gameScreen.appendChild(title);
  gameScreen.appendChild(container);
  container.appendChild(termometro);
  termometro.appendChild(secondaryObject);
  container.appendChild(vulva);
  vulva.appendChild(mainObject);
  gameScreen.appendChild(skipBtn);

  title.textContent = "Level 1";
  mainObject.src = "./images/vagina4.png";
  skipBtn.textContent = "SKIP";

  skipBtn.addEventListener ('click', middleHandleClick1);
  document.body.prepend(gameScreen)
}

function middleHandleClick1(){
  var gameScreen = document.querySelector("section")
  document.body.removeChild(gameScreen);
  createGameScreenLevel2();
}

//Creo pantalla game Level 2

function createGameScreenLevel2 (){
  var gameScreen = document.createElement('section');
  var title = document.createElement('h1');
  var container = document.createElement ('div'); 
  container.classList.add('container');
  var termometro = document.createElement ('div'); 
  termometro.classList.add('termometro');
  var secondaryObject = document.createElement('img'); 
  secondaryObject.classList.add('temperatura');
  var vulva = document.createElement('div'); 
  vulva.classList.add('vulva');
  var mainObject = document.createElement ('img'); 
  mainObject.classList.add('vagina');
  var skipBtn = document.createElement ('button');


  gameScreen.appendChild(title);
  gameScreen.appendChild(container);
  container.appendChild(termometro);
  termometro.appendChild(secondaryObject);
  container.appendChild(vulva);
  vulva.appendChild(mainObject);
  gameScreen.appendChild(skipBtn);

  title.textContent = "Level 2";
  mainObject.src = "./images/vagina4.png";
  skipBtn.textContent = "SKIP";

  skipBtn.addEventListener ('click', middleHandleClick2);
  document.body.prepend(gameScreen)
}

function middleHandleClick2(){
  var gameScreen = document.querySelector("section")
  document.body.removeChild(gameScreen);
  createGameScreenLevel3();
}

//Creo pantalla game Level 3

function createGameScreenLevel3 (){
  var gameScreen = document.createElement('section');
  var title = document.createElement('h1');
  var container = document.createElement ('div'); 
  container.classList.add('container');
  var termometro = document.createElement ('div'); 
  termometro.classList.add('termometro');
  var secondaryObject = document.createElement('img'); 
  secondaryObject.classList.add('temperatura');
  var vulva = document.createElement('div'); 
  vulva.classList.add('vulva');
  var mainObject = document.createElement ('img'); 
  mainObject.classList.add('vagina');
  var skipBtn = document.createElement ('button');

  gameScreen.appendChild(title);
  gameScreen.appendChild(container);
  container.appendChild(termometro);
  termometro.appendChild(secondaryObject);
  container.appendChild(vulva);
  vulva.appendChild(mainObject);
  gameScreen.appendChild(skipBtn);

  title.textContent = "Level 3";
  mainObject.src = "./images/vagina4.png";
  skipBtn.textContent = "SKIP";

  skipBtn.addEventListener ('click', middleHandleClick3);
  document.body.prepend(gameScreen)
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