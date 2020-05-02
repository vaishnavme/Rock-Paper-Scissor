
function rpsGame(yourChoice) {
    //console.log(yourChoice.id);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    //console.log('Human choice: ', humanChoice);
    botChoice = numberToChoice(randToRpsInt());
    //console.log('Computer Choics: ', botChoice);
    results = decideWinner(humanChoice, botChoice);
    //console.log(results);
    message = finalMessage(results); // {'message':'You Won','color':green}
    //console.log('Message: ', message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return['rock','paper','scissor'][number];
}

// Decision function
function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': {'scissor':1, 'rock': 0.5, 'paper': 0},
        'paper' : {'rock':1, 'paper': 0.5, 'scissor': 0},
        'scissor' : {'paper': 1, 'scissor': 0.5, 'rock': 0}
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

// Message function
function finalMessage([yourScore,computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You Lost!!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You Tied!!', 'color': 'yellow'};
    } else {
        return {'message': 'You Won!!', 'color': 'green'};
    }
}



// Game frontend
function rpsFrontEnd(humanImgChoice, botImgChoice, finalMessage) {
    let imageDatabase = {
        'rock': document.getElementById("rock").src,
        'paper': document.getElementById("paper").src,
        'scissor': document.getElementById("scissor").src
    }
    
    // to remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImgChoice] + "' style='box-shadow: 0pc 10px 50px #00d9ff; border: #00d9ff 6px solid;'>"
    messageDiv.innerHTML = "<h2 style='color: "+ finalMessage['color'] + "; font-size: 60px;  padding: 25px; '>" + finalMessage['message'] + "</h2>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImgChoice] + "' style='box-shadow: 0pc 10px 50px #c2253a; border: #c2253a 6px solid !important;'>"

    document.getElementById('game-box').appendChild(humanDiv);
    document.getElementById('game-box').appendChild(messageDiv);
    document.getElementById('game-box').appendChild(botDiv);
}

function reset() {
    window.location.reload();
}