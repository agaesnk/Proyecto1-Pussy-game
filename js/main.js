//Creo pantalla inicial

document.body.onload = function(){
  createSplash();
  var progress = undefined
  var MAX_SEXAPPEAL = 25;
  var sexAppeal = 3;
  var level = 0;
  function addTemp() {
    console.log('addTemp', sexAppeal);
    if (sexAppeal < 25) {
      sexAppeal++;
    }
    progress.value = sexAppeal;
    checkSexappeal();
  }



  function decreaseTemp() {
    console.log('decdTemp', sexAppeal);
    if (sexAppeal > 0) {
      sexAppeal--;
    }
    progress.value = sexAppeal;
    checkSexappeal();
  }

  function hideLevel(levelNumber) {
    var levelToHide = document.getElementById(`level${levelNumber}`)
    levelToHide.classList.add("hide");
  }

  function getProgress () {
    progress = document.getElementById(`progress${level}`);
  }

  function resetSexAppeal () {
    sexAppeal = 3;
    progress.value = sexAppeal;
  }

  function checkSexappeal () {
    if (sexAppeal >= MAX_SEXAPPEAL){
      switch (level) {
        case 1:
          hideLevel(level)
          createGameScreenLevel2()
          break;
        case 2:
          hideLevel(level)
          createGameScreenLevel3()
          break;
        case 3:
          hideLevel(level)
          createWinnerScreen()
          break;
        default:
          break;
      }
    }
    if (sexAppeal <= 0) {
      hideLevel(level);
      createGameOverScreen();
    }
  }

  function createSplash (){
    document.body.className = "contain";
    var splashScreen = document.createElement('section');
    //var title = document.createElement('h1');
    var maintitle = document.createElement('img');
    var subtitle = document.createElement ('h2');
    //var intro = document.createTextNode ('p');
    var footer = document.createElement ('footer');
    var startBtn = document.createElement('button');

    splashScreen.appendChild(maintitle);
    splashScreen.appendChild(subtitle);
    //splashScreen.appendChild(intro);
    splashScreen.appendChild(footer);
    footer.appendChild(startBtn);

    //title.textContent = "Pussy's Master";
    //title.className = "titlestyle";
    maintitle.className = "maintitle";
    maintitle.src = "./images/cooltext292825311319909.png"
    subtitle.textContent = "THE GAME";
    subtitle.className = "substyle";
    //intro.textContent = 'Un texto de introducción que pensaré más tarde';
    startBtn.textContent = "START";
    startBtn.className = "start";



    startBtn.addEventListener('click', handleClickButtonStart);
    document.body.prepend(splashScreen);
  }

  function handleClickButtonStart(){
    removeSplashScreen();
    document.body.removeAttribute("class");
    createGameScreenLevel1();
  }

  function removeSplashScreen() {
    var splashScreen = document.querySelector("section")
    document.body.removeChild(splashScreen);
  }

  //Creo pantalla game Level 1

  function createGameScreenLevel1 (){
    level = 1;
    var level1 = document.getElementById('level1');
    document.body.className = "skinback"
    level1.removeAttribute('class');
    getProgress();
    resetSexAppeal();

    var elementsToIncrease = document.getElementsByClassName('increase');

    for (var i = 0; i < elementsToIncrease.length; i++){
      elementsToIncrease[i].addEventListener('mouseover', addTemp);
    }

    var elementsToDecrease = document.getElementsByClassName('decrease');

    for (var i = 0; i < elementsToDecrease.length; i++){
      elementsToDecrease[i].addEventListener('mouseover', decreaseTemp);
    }  

    const progress = document.querySelector('progress');
  }

  //Creo pantalla game Level 2

  function createGameScreenLevel2 (){
    level = 2;
    var level2 = document.getElementById('level2');
    level2.removeAttribute('class');
    getProgress();
    resetSexAppeal();

    var elementsToIncrease = document.getElementsByClassName('increase');

    for (var i = 0; i < elementsToIncrease.length; i++){
      elementsToIncrease[i].addEventListener('mouseover', addTemp);
    }

    var elementsToDecrease = document.getElementsByClassName('decrease');

    for (var i = 0; i < elementsToDecrease.length; i++){
      elementsToDecrease[i].addEventListener('mouseover', decreaseTemp);
    }  
  }

  //Creo pantalla game Level 3

  function createGameScreenLevel3 (){
    level = 3;
    var level3 = document.getElementById('level3');
    level3.removeAttribute('class');
    getProgress();
    resetSexAppeal();

    var elementsToIncrease = document.getElementsByClassName('increase');

    for (var i = 0; i < elementsToIncrease.length; i++){
      elementsToIncrease[i].addEventListener('mouseover', addTemp);
    }

    var elementsToDecrease = document.getElementsByClassName('decrease');

    for (var i = 0; i < elementsToDecrease.length; i++){
      elementsToDecrease[i].addEventListener('mouseover', decreaseTemp);
    }  
  }

  // function middleHandleClick3(){
  //   var gameScreen = document.querySelector("section")
  //   document.body.removeChild(gameScreen);
  //   createGameOverScreen();
  // }

  //Creo pantalla Game Over

  function createGameOverScreen (){
    var gameOverScreen = document.createElement('section');
    var title = document.createElement('h1');
    var message = document.createElement ('p');
    var restartBtn = document.createElement('button');
    
    gameOverScreen.appendChild (title);
    gameOverScreen.appendChild (message);
    gameOverScreen.appendChild(restartBtn);

  
    title.textContent = "GAME OVER";
    message.innerHTML = "You<br/> have frozen<br/> me...";
    message.className = "frozen";
    restartBtn.textContent = "TRY AGAIN!";


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
    var hot = document.createElement ('img');
    var restartBtn = document.createElement('button');

    gameWinnerScreen.appendChild (title);
    gameWinnerScreen.appendChild (hot);
    gameWinnerScreen.appendChild (restartBtn);


    document.body.className = "contain";
    title.textContent = "You are a Master!";
    title.className = "titlestyle";
    hot.src = "./images/cooltext292827511854661.gif";
    restartBtn.textContent = "RESTART";
    restartBtn.className = "restartBtn";


    restartBtn.addEventListener ('click', finalHandleClick2);
    document.body.prepend(gameWinnerScreen);
  }

  function finalHandleClick2(){
    var gameWinnerScreen = document.querySelector("section")
    document.body.removeChild(gameWinnerScreen);
    createSplash();
  }
};
