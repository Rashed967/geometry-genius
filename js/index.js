
// first shap/Triangle script 

document.getElementById('first-shap-btn').addEventListener('click', function(){
    const textElementValue = getTextElementValueById('triangle-shape');
    const firstTriangleValue = getInputElementValueById('triangle-first-input');
    const secondTriangleValue = getInputElementValueById('triangle-second-input');

    const total =  getMultiplyNumbers(firstTriangleValue, secondTriangleValue);

    // set value in result 
    setNewElementToResult(textElementValue, total);
})



// first shap/Triangle script 

document.getElementById('first-shap-btn').addEventListener('click', function(){
    const textElementValue = getTextElementValueById('triangle-shape');
    const firstTriangleValue = getInputElementValueById('triangle-first-input');
    const secondTriangleValue = getInputElementValueById('triangle-second-input');
    const total =  getMultiplyNumbers(firstTriangleValue, secondTriangleValue);

    // set value in result 
    setNewElementToResult(textElementValue, total);
})

