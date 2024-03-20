let user_score=0;
let comp_score=0;

const choices=document.querySelectorAll(".gameplate"); 
const msg=document.querySelector("#message");
const userPara=document.querySelector("#your");
const comPara=document.querySelector("#cp");
const replayBut=document.querySelector("#replay");


replayBut.addEventListener("click",()=>{
  user_score=0;
  comp_score=0;
  comPara.innerText = comp_score;
  userPara.innerText = user_score;
  msg.innerText=" Welcome to playground";
})


const drawGame= ()=>{
  console.log("Match Draw");
  msg.innerText="Match Draw";
  msg.style.backgroundColor="darksalmon";
}
const showWinner =(winner)=>{
  const compChoice = genCompChoice();
  if(winner===compChoice)
  {
    comp_score++;
    console.log("computer is  winner")
    console.log("Computer score :",comp_score);
    msg.innerText="we lose !!!!!";
    msg.style.backgroundColor="red";
    comPara.innerText = comp_score;
    
  }else{
    user_score++;
    console.log("you are winner");
    console.log("Your score :",user_score);
    msg.innerText="Congrulation we win !!!!!";
    msg.style.backgroundColor="green";
    userPara.innerText = user_score;
   
  }
}
//generation of computer choice 
const genCompChoice= ()=>{
  const option=["rock","paper","Scissors"];
  const randomIdx=Math.floor(Math.random()*3);
  return option[randomIdx];
  }
  //game play

const play_ground= (userchoice)=>{
  console.log("Your choice is :" ,userchoice);
  const compChoice = genCompChoice();
  console.log("comp choice is :",compChoice);
  if(userchoice === compChoice){
    drawGame();
  }
    // else if(userchoice==="rock"){
    //   if(compChoice==="paper")
    //   {
    //     const winner=compChoice;
    //     showWinner(winner);

    //   }
    //   else 
    //   {
    //     const winner=userchoice;
    //     showWinner(winner);
    //   }
    // }
    // else if(userchoice==="Scissors"){
    //   if(compChoice==="paper")
    //   {
    //     const winner=userchoice;
    //     showWinner(winner);


    //   }
    //   else 
    //   {
    //     const winner=compChoice;
    //     showWinner(winner);
    //   }
    // }
    // else if(userchoice==="paper"){
    //   if(compChoice==="rock")
    //   {
    //     const winner=userchoice;
    //     showWinner(winner);

    //   }
    //   else 
    //   {
    //     const winner=compChoice;
    //     showWinner(winner);
    //   }
    
  
  else if(userchoice==="rock" && compChoice==="Scissors"){
    const winner=userchoice;
    showWinner(winner);
  }
  else if(userchoice==="rock" && compChoice==="paper"){
    const winner=compChoice;
    showWinner(winner);
  }
  else if(userchoice==="paper" && compChoice==="Scissors"){
    const winner=compChoice;
    showWinner(winner);
  }
  else if(userchoice==="paper" && compChoice==="rock"){
    const winner=userchoice;
    showWinner(winner);
  }
  else if(userchoice==="Scissors" && compChoice==="rock"){
    const winner=compChoice;
    showWinner(winner);
  }
  else if(userchoice==="Scissors" && compChoice==="paper"){
    const winner=userchoice;
    showWinner(winner);
  }
}

  
  

// choice selected by user
choices.forEach((choice)=>{
  // console.log(choice);
   choice.addEventListener("click",()=>{
       const userchoice=choice.getAttribute("id")
    //  console.log("Your choice is :" ,userchoice);
     play_ground(userchoice);
  })
})
