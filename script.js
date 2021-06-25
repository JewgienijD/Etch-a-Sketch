
const gridContainer = document.getElementById('grid-container');

function makeSquare(rows,colms){
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

makeSquare(24,24);

