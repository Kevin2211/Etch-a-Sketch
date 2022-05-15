let containerDiv = document.getElementById("grid-16");
let sliderValue = document.getElementById('slider-value');
let slider = document.getElementById('slider');
let resetButton = document.getElementById('resetButton');
let rainbowButton = document.getElementById('rainbowButton');
let blackButton = document.getElementById('blackButton');
let eraserButton = document.getElementById('eraserButton');


function gridSquare(size){

    containerDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(i = 0; i < size * size; i++){
        let div = document.createElement('div');
        div.classList = 'div-element';
        div.addEventListener('mouseover', () => {div.style.cssText = 'background-color: black;'})
        containerDiv.appendChild(div);
    }

} 

function getRandomColor(){
    return randomNum = Math.floor(Math.random() * 256);
}



function resetButtonClicked(){
    let collection = document.getElementsByClassName('div-element');

    for(let i = 0; i <collection.length; i++){
        collection[i].style.cssText = 'background-color: white; ';
    }
}

function rainbowButtonClicked(){
    let collection = document.getElementsByClassName('div-element');

    for(let i = 0; i <collection.length; i++){

        collection[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
        });
    }
}

function blackButtonClicked(){
    let collection = document.getElementsByClassName('div-element');

    for(let i = 0; i <collection.length; i++){

        collection[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        });
    }
}

function eraserButtonClicked(){
    let collection = document.getElementsByClassName('div-element');

    for(let i = 0; i <collection.length; i++){

        collection[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'white';
        });
    }
}


function clearGrid (){
    containerDiv.innerHTML = '';
}




gridSquare(slider.value);
sliderValue.innerHTML = slider.value;

slider.oninput = () => {
    sliderValue.innerHTML = slider.value;
    clearGrid();
    gridSquare(slider.value)};

resetButton.addEventListener('click', resetButtonClicked);
rainbowButton.addEventListener('click', rainbowButtonClicked);
blackButton.addEventListener('click', blackButtonClicked);
eraserButton.addEventListener('click', eraserButtonClicked);
