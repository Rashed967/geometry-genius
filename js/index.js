
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

document.getElementById('blog-page-btn').addEventListener('click', function(){
    window.location.href = 'blog.html'
})


// random code genarotr


// // first div 
document.getElementById('first-div').addEventListener('mouseenter', function(){
    random_bg_color('first-div');
})


// second div 
document.getElementById('second-div').addEventListener('mouseenter', function(){
    random_bg_color('second-div');
})

// third div 
document.getElementById('third-div').addEventListener('mouseenter', function(){
    random_bg_color('third-div');
})

// fourth div 
document.getElementById('fourth-div').addEventListener('mouseenter', function(){
    random_bg_color('fourth-div');
})

// fifth div 
document.getElementById('fifth-div').addEventListener('mouseenter', function(){
    random_bg_color('fifth-div');
})
// fifth div 
document.getElementById('sixth-div').addEventListener('mouseenter', function(){
    random_bg_color('sixth-div');
})


