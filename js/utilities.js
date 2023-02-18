// function for get text element value 
function getTextElementValueById(TextElementId) {
    const element = document.getElementById(TextElementId);
    const elementValue = element.innerText;
    return elementValue;
}

// function for get input field value 
function getInputElementValueById(inputElementId) {
    const element = document.getElementById(inputElementId);
    const elementValueString = element.value;

    // validate function 
    if (elementValueString === '' || isNaN(elementValueString)) {
        alert('Please, enter a number');
        
        if(elementValueString < 1){
            alert('Please, enter a even number');
        }
    } 
    else{
        const elementValue = parseFloat(elementValueString);
        return elementValue;
    }
    return elementValue;

}

// function for multiply 2 input field value 
function getMultiplyNumbers(value1, value2) {
    let totalOfMultiply = 0.5 * (value1 * value2);
    let totalOfMultiplyFloat = parseFloat(totalOfMultiply);
    return Math.round(totalOfMultiplyFloat * 100 / 100);
}


// fucntion for set a new element/list to result area  
function setNewElementToResult(value1, value2) {
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="w-11/12 inline-flex justify-between">
    <span>${value1}</span> <span>${value2} <sup>2</sup></span>
<button class="text-white font-medium text-xs bg-blue-500 px-3 py-1  rounded-md">Covert to m <sup>2</sup> </button>
</div>
    `
    const resultListContainer = document.getElementById('result-list-container');
    resultListContainer.appendChild(li);
}


// random backgrund color generate 

function random_bg_color(elementId) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    const element = document.getElementById(elementId);
    element.style.background = bgColor;
}




