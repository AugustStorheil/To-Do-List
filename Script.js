let addToDoButton = document.getElementById('LeggTilKnapp');
let toDoContainer = document.getElementById('Task-Container');
let inputField = document.getElementById('inputFielt');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('Task');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})