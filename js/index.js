
// first shap/Triangle script 

document.getElementById('first-shap-btn').addEventListener('click', function(){
    const textElementValue = getTextElementValueById('triangle-shape');
    const firstInputValue = getInputElementValueById('triangle-first-input');
    const secondInputValue = getInputElementValueById('triangle-second-input');

    const total =  getMultiplyNumbers(firstInputValue, secondInputValue);

    // set value in result 
    setNewElementToResult(textElementValue, total);
})


// second shap/Rectangle script 

document.getElementById('second-shap-btn').addEventListener('click', function(){
    const textElementValue = getTextElementValueById('rectangle-shap');
    const firstInputValue = getInputElementValueById('triangle-first-input');
    const secondInputValue = getInputElementValueById('triangle-second-input');
    const total =  getMultiplyNumbers(firstInputValue, secondInputValue);

    // set value in result 
    setNewElementToResult(textElementValue, total);
})



// third shap/Parallelogram script 

document.getElementById('third-shap-btn').addEventListener('click', function(){
    const textElementValue = getTextElementValueById('parallelogram-shape');
    const firstInputValue = getInputElementValueById('parallelogram-first-input');
    const secondInputValue = getInputElementValueById('parallelogram-second-input');
    const total =  getMultiplyNumbers(firstInputValue, secondInputValue);

    // set value in result 
    setNewElementToResult(textElementValue, total);
})


// fourth shap/Rhombus script 

document.getElementById('fourth-shap-btn').addEventListener('click', function(){
    const textElementValue = getTextElementValueById('rhombus-shap');
    const firstInputValue = getInputElementValueById('rhombus-first-input');
    const secondInputValue = getInputElementValueById('rhombus-second-input');
    const total =  getMultiplyNumbers(firstInputValue, secondInputValue);

    // set value in result 
    setNewElementToResult(textElementValue, total);
})


// fifth shap/Parallelogram script 

document.getElementById('fifth-shap-btn').addEventListener('click', function(){
    const textElementValue = getTextElementValueById('pentagon-shape');
    const firstInputValue = getInputElementValueById('pentagon-first-input');
    const secondInputValue = getInputElementValueById('pentagon-second-input');
    const total =  getMultiplyNumbers(firstInputValue, secondInputValue);

    // set value in result 
    setNewElementToResult(textElementValue, total);
})



