
const gridContainer = document.getElementById('grid-container');
const cleanGridButton = document.getElementById('clean');
const rangeGridSize = document.getElementById('grid-numbers');

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
           e.target.style.backgroundColor = 'orange';
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

makeSquare(10,10);






