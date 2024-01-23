let userScore=0;
let compScore=0;
let drawScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScoreCount=document.querySelector("#user-score")
const compScoreCount=document.querySelector("#comp-score")
const drawScoreCount=document.querySelector("#draw-score")




const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIndx=Math.floor(Math.random()*3)
    return options[randIndx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreCount.innerText=userScore;
        // console.log("You won")
        msg.innerText=`You won! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
        msg.style.color="white"
        
    }
    else{
        compScore++;
        compScoreCount.innerText=compScore;
        // console.log("You loose")
        msg.innerText=`You lost! your ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor="red"
        msg.style.color="white"

    }
}

    const playGame=(userChoice)=>{
    // console.log("user Choice =",userChoice)
    //generate Computer choice
    const compChoice=genCompChoice();
    // console.log("computer choice is =",compChoice);

    if(userChoice===compChoice){
        // draw
        drawGame(userChoice,compChoice);
    }
    else {
        let userWin=true; 

        if(userChoice==="rock"){
            //scissor,paper
            userWin=userChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //scissor,rock
            userWin=compChoice==="scissor" ? false : true;
        }
        else{
            //paper,rock
            userWin=userChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);

    }
}
const drawGame=(userChoice,compChoice)=>{
    drawScore++;
    drawScoreCount.innerText=drawScore;
    // console.log("Game was draw");
    msg.innerText=`It's a Draw ${userChoice} vs ${compChoice}`
    msg.style.backgroundColor="#31082b"
    msg.style.color="orange"
}

choices.forEach((choice)=>{
        // console.log(choice)
        choice.addEventListener("click",()=>{
            // console.log("choice was clicked")
            const userChoice=choice.getAttribute("id");
            // console.log(`choice was clicked`,userChoice)
            playGame(userChoice);
        })
})