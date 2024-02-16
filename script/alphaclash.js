// function play(){
//     // console.log('clicked');
//     // step-1 hide the home screen. to hide the screen ad tge clas hidden to the home section
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)


//     // step-2 show the play screen
//     const playSec = document.getElementById('play-screen')
//     // console.log(playSec.classList)
//     playSec.classList.remove('hidden');
// }

function continueGame() {
    // step 1 generate a random alphabet
    const alphabet = getARandomAlphabet()
    console.log('Your random alphabets:', alphabet)
    // set the alphabet in display
    const currentAlphaElement = document.getElementById('current-alpha');
    currentAlphaElement.innerText = alphabet;
    // set bg color
    setBgColor(alphabet)
}

function play() {
    hideElementById('home-screen')
    showElemntById('play-screen')
    continueGame()
}

// function getARandomAlphabet() {
//     // getiing the alphabets as array
//     // const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//     const alphabetString = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
//     const alphabets = alphabetString.split('')
//     // console.log(alphabets)

//     // generating random number
//     const randomNumber = Math.random()*25;
//     // converting the number as a integer
//     const index = Math.round(randomNumber)
//     // declaring the alphabet as the index of alphabets
//     const alphabet = alphabets[index]
//     // if i call the function to another function we need to return
//     return alphabet
// }






