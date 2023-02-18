// function for get text element value 
function getTextElementValueById(TextElementId){
    const element = document.getElementById(TextElementId);
    const elementValue = element.innerText;
    return elementValue;
}

// function for get input field value 
function getInputElementValueById(inputElementId){
    const element = document.getElementById(inputElementId);
    const elementValueString = element.value;
    
    // validate function 
    if(typeof elementValueString === 'number' && elementValueString > 0){
        const elementValue = parseFloat(elementValueString);
        return elementValue;    
    }
    else{
        alert('invalid numbera');
        return;
    }
    
}

// function for multiply 2 input field value 
function getMultiplyNumbers(value1, value2){
    let totalOfMultiply = 0.5 * (value1 * value2); 
    return parseFloat(totalOfMultiply);
}


// fucntion for set a new element/list to result area  
function setNewElementToResult(value1, value2){
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


