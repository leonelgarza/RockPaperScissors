const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')

const gameGrid = document.querySelector('#game')

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'papper', 'scissors']

handleClick = (e) => {
    const userChoice = e.target.innerHTML
    userChoiceDisplay.innerHTML = 'You select:   ' + userChoice
    const randomChoice = choices[Math.floor(Math.random()*choices.length)]
    computerChoiceDisplay.innerHTML = 'cpu select: ' + randomChoice
    getResult(userChoice, randomChoice)
}

choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)

    gameGrid.appendChild(button)
})

const getResult = (userChoice, randomChoice) => {
    switch(userChoice + randomChoice){
        case 'rockscissors':
        case 'papperrock':
        case 'scissorspapper':
            resultDisplay.innerHTML = 'YOU WIN!'
            break
        case 'scissorsrocks':
        case 'rockpapper':
        case 'papperscissors':
            resultDisplay.innerHTML = 'YOU LOSE!'
            break
        case 'scissorsscissors':
        case 'rockrock':
        case 'papperpapper':
            resultDisplay.innerHTML = 'ITS A DRAW!'
            break
    } 
}

