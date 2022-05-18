const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const userChoiceImg = document.createElement('img')
const computerChoiceImg = document.createElement('img')
const match = document.createElement('div')
const vs = document.createElement('img')
const resultDisplay = document.createElement('h1')

const gameGrid = document.querySelector('#game')

const choices = ['rock', 'papper', 'scissors']

vs.src = 'Street_Fighter_VS_logo.png'
vs.classList.add('imgMatch')
userChoiceImg.classList.add('imgMatch')
computerChoiceImg.classList.add('imgMatch')
match.classList.add('match')

handleClick = (e) => {
    const userChoice = e.target.innerHTML
    userChoiceDisplay.innerHTML = 'You select:   ' + userChoice
    userChoiceImg.src = userChoice + '.jpg'
    const randomChoice = choices[Math.floor(Math.random()*choices.length)]
    computerChoiceDisplay.innerHTML = 'cpu select: ' + randomChoice
    computerChoiceImg.src = randomChoice + '.jpg'
    getResult(userChoice, randomChoice)
    match.append(userChoiceImg, vs, computerChoiceImg)
}

choices.forEach(choice => {
    const button = document.createElement('button')
    button.classList.add('gamebutton')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)

    gameGrid.appendChild(button)
})

gameGrid.append(match, userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const getResult = (userChoice, randomChoice) => {
    switch(userChoice + randomChoice){
        case 'rockscissors':
        case 'papperrock':
        case 'scissorspapper':
            resultDisplay.innerHTML = 'YOU WIN!'
            break
        case 'scissorsrock':
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

