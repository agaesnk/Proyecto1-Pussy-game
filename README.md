# Pussy-s-Master

## Descripción

Aplicación web de educación sexual que actúa como soporte en el aprendizaje de la generación de placer femenino, tanto ajeno como propio. 

## MVP - Tecnología (DOM - CANVAS)

La aplicación estará programada con DOM manipulation.
- Constará del dibujo de la parte externa del aparato sexual femenino, la bulba, y un termómetro. 
- El usuario deberá pasar por varias fases sucesivas. 
- Cuando el usuario pase el cursor por las zonas adecuadas a la fase, acumulará puntuación, haciendo subir la temperatura del termómetro. 
- Cuando se equivoque de zona, bajará o se mantendrá la temperatura en el termómetro.

## Backlog

- Se puede captar el aumento de velocidad en el movimiento del cursor.
- Se puede utilizar la pantalla táctil del móvil para mover el cursor.
- Se pueden añadir animaciones que hagan temblar o explotar el termómetro. 

##  Estructuras de Datos

Clase ___main.js__:
\\\javascript.
var game = new Game([options]);
game.start();

function buildSplash(){};
function destroySplash(){};
function buildGameLevel1(){};
function destroyGameLevel1(){};
function buildGameLevel2(){};
function destroyGameLevel2(){};
function buildGameLevel3(){};
function destroyGameLevel3(){};
function buildGameOver(){};
function destroyGameOver(){};
\\\

Clase __game.js__:
\\\javascript.
function Game([options]){
    this.termometer = new termometer()
}

Game.prototype.start = function(){};
Game.prototype._update = function (){};
\\\

Clase __termómetro__:


## States y States Transitions

Definicion del las transiciones del juego y del main.

- splashScreen
- gameScreen1
- gameScreen2
- gameScreen3
- gameoverScreen
- winScreen

funciones de transicion.

## Task

1. Crear la estructura base del splash, de cada nivel del game (casi idénticos), del gameOverScreem y del winScreem.
2. Colocar en los niveles del game la imagen del background con el diseño base.
2. Crear elementos (botones) invisibles sobre el dibujo.
3. Crear distintos eventos sobre los elementos para cada uno de los 3 niveles.
4. Hacer que los eventos obtengan puntuación.
5. Hacer que la puntuación tenga efecto sobre el termómetro.

## Trello

[Link url](https://trello.com/b/iqfhvaAx/proyecto1-devweb)

## Git

Especificar las url del proyecto y del deploy

[Link Repositorio](https://github.com/agaesnk/Pussy-s-Master/tree/master)

[Link Deploy](http://github.com)

## Instrucciones del juego 

Al finalizar el juego generar las instrucciones

