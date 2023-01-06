const container = document.querySelector('#container');

const slider = document.querySelector('#slider');
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = val; 
});


function squareGenerator() {
    for(let numberOfBlocks = 0; numberOfBlocks < 16; numberOfBlocks++){
        const block = document.createElement('div');
        block.classList.toggle('block');
        container.appendChild(block);
        
        for(let numberOfSquares = 0; numberOfSquares < 16; numberOfSquares++){
            const square = document.createElement('div');
            square.classList.toggle('square');
            block.appendChild(square);   
        }
    }
}
squareGenerator();

container.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'black';
})