
const gridContainer = document.getElementById('grid-container');

function makeSquare(rows,colms){
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-colms', colms);
    for (i=0; i<rows*colms; i++){
        let square = document.createElement('div');
        gridContainer.appendChild(square).className='grid-item';
    }
}

makeSquare(5,5);