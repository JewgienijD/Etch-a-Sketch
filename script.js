
const gridContainer = document.getElementById('grid-container');
const cleanGridButton = document.getElementById('clean');
const rangeGridSize = document.getElementById('grid-numbers');
const buttons = document.querySelectorAll('button');
const colorId = document.getElementById('input-color');
let penColor = '';
let x = '';



function makeSquare(rows,colms){
    remoweSquare();
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-colms', colms);
    for (i=0; i<rows*colms; i++){
        let square = document.createElement('div');
        gridContainer.appendChild(square).className='griditem';
    }
   let gridPixels = gridContainer.getElementsByClassName('griditem');
   Array.from(gridPixels).forEach((griditem)=>{
       griditem.addEventListener('mouseover', (e)=>{
           e.target.style.backgroundColor = penColor;
       })
   })
};

//clean grid by clicking "clean" button
function getCleanGrid(){
let cleanPixels = gridContainer.querySelectorAll('div');
cleanPixels.forEach(griditem=> griditem.style.backgroundColor = '#ffffff');
}
cleanGridButton.addEventListener('click', getCleanGrid); 

//create newsize grid by changing 'range - input'
rangeGridSize.addEventListener('change', function(){
    getCleanGrid();
    makeSquare(rangeGridSize.value, rangeGridSize.value);
})

//remowe old grid 
function remoweSquare(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

//choose colors by clicking colors buttons;
function getPenColor(){
    let buttonId = document.querySelectorAll('button');
    Array.from(buttonId).forEach((button)=>{
        button.addEventListener('click', (e)=>{
            switch(button.id){
                case 'random': penColor = getRandomColor();
                break;
                case 'own': penColor = x;
                break;
                case 'eraser': penColor = getEraserGrid();
            }
            
        })
    })
}

//generate random colors
function getRandomColor(){
   const randomColor = (Math.random()*0xFFFFFF<<0).toString(16);
   return (`#${randomColor}`);
}

//get eraser
function getEraserGrid(){
    let a= '';
    return a;
}

//choose own color
colorId.addEventListener('change',(e)=>x=e.target.value);
              
   


makeSquare(10,10);
getPenColor();






