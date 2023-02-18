document.getElementById('first-shap-btn').addEventListener('click', function(){
    const rectangleShapText = document.getElementById('rectangle-shap').innerText;
    const rectangleFormula = document.getElementById('rectangle-formula').innerText;
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="w-11/12 inline-flex justify-between">
    <span>${rectangleShapText}</span> <span>12cm <sup>2</sup></span>
<button class="text-white font-medium text-xs bg-blue-500 px-3 py-1  rounded-md">Covert to m <sup>2</sup> </button>
</div>
    `
    const resultListContainer = document.getElementById('result-list-container');
    resultListContainer.appendChild(li);
})