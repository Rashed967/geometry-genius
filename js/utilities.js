function getTextElementValueById(TextElementId){
    const element = document.getElementById(TextElementId);
    const elementValue = element.innerText;
    return elementValue;
}

function getInputElementValueById(inputElementId){
    const element = document.getElementById(inputElementId);
    const elementValueString = element.value;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

const firstTriangleValue = getInputElementValueById('triangle-first-input');
const secondTriangleValue = getInputElementValueById('triangle-second-input');


function getMultiplyNumbers(value1, value2){
    const totalOfMultiply = 0.5 * (value1 * value2); 
    return totalOfMultiply;
}

const total =  getMultiplyNumbers(firstTriangleValue, secondTriangleValue);

