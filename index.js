const MAX_NUMBER = 100
const MIN_NUMBER = 0

let guessRange = 50

document.getElementById('too-high-btn').addEventListener('click', function () {
    guessRange /= 2
    guess += guessRange
    updateMessage()
    

})

document.getElementById('too-low-btn').addEventListener('click', function () {
    guessRange /= 2
    guess += guessRange
    updateMessage()
    
})

document.getElementById('is-correct-btn').addEventListener('click', function () {
    updateMessage()
    setMessage("Woho! :)")
})


function updateMessage() {
    setMessage(`Is it ${guess}?`)
}


function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    guess = 50

    setMessage(`Is it ${guess}?`)
}

document
    .getElementById('start-btn')
    .addEventListener('click', start)

