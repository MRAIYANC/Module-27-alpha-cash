function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden') 
}
function showElemntById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
}

function getARandomAlphabet() {
    const alphaString = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
    const alphaArray = alphaString.split('');
    
    const  randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphaArray[index]
    return alphabet
}

