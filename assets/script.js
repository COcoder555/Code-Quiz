
// Created a array to store the questions to be presented in the quiz
var questions = ["What is a Boolean?", "What syntax do we use to store an Object?", "What syntax do we use to store an Array?", 
"What do we use to store a String?","Only____ can be stored localy"]

// Created an array'within arrays to store the possible answers for each question
 
var answers = [["A Function", "A syntax error","a binary variable, having two possible values called “true” and “false”",
"A programming language","A measurment of processing speed"],["{", "[",";","#","$"],["$","[",";","#","}"],["Quotation Marks","<>","Parenthesis","{}","[]"],
["number","Loops","functions","Strings","HTML"]]

//  Created buttons using createElement and stored them into corrisponding btn variables
var $btn1 = document.createElement("button"); 
var $btn2 = document.createElement("button");
var $btn3 = document.createElement("button"); 
var $btn4 = document.createElement("button");
var $btn5 = document.createElement("button");

var btnM = [$btn1, $btn2, $btn3, $btn4, $btn5];
var div = document.getElementById("Answer1");

// Grabbed the START and TIMER ID's and stored them in variables
var $START = document.getElementById("START")
var timeEl = document.getElementById("timer");
//  Set the secondsLeft to 200
var secondsLeft = 200;

// Created a timer fuction
var timerInterval;
function setTime() {
     timerInterval = setInterval( function(){
        secondsLeft --;
        timeEl.textContent =  "Time:" + secondsLeft
        if( secondsLeft===0){
        clearInterval(timerInterval);

        }
    }, 1000);
    
};
setTime()

// Grabbed the question ID and stored it a variable
var $Question = document.querySelector("#Question");

// Created a function to verify if the correct answer is selected if so it moves to the next question
//  if not to deduct time form the timer
var index = 0
function checkAns(event) {
    var element = event.target 
    console.log(index +" "+ questions[index])
    if($Question.textContent==="What is a Boolean?" && element.textContent==="a binary variable, having two possible values called “true” and “false”"){
     
        nextQuestion();
        
    } else if($Question.textContent==="What is a Boolean?" &&  element.textContent !=="a binary variable, having two possible values called “true” and “false”"){
  
        secondsLeft -= 20;

    }
    
   if($Question.textContent==="What syntax do we use to store an Object?" && element.textContent==="{"){
        nextQuestion();
     
    } else if($Question.textContent==="What syntax do we use to store an Object?" &&  element.textContent !=="{"){
        secondsLeft-=20;
        
    } 
    if($Question.textContent==="What syntax do we use to store an Array?" && element.textContent==="["){
        nextQuestion();
    
    } else if($Question.textContent==="What syntax do we use to store an Array?" &&  element.textContent !=="["){
        
        secondsLeft-=20; 
    } 
    if($Question.textContent==="What do we use to store a String?" && element.textContent==="Quotation Marks"){
        nextQuestion();
        
    } else if($Question.textContent==="What do we use to store a String?" &&  element.textContent !=="Quotation Marks"){
        
        secondsLeft -=20;
    }
    if($Question.textContent==="Only____ can be stored localy" && element.textContent==="Strings"){
        ENDGAME();
        
    } else if($Question.textContent==="Only____ can be stored localy" &&  element.textContent !=="Strings"){
        secondsLeft-=20;
    }

};

// Created a function to display the next question in the questions array and display the possible answers
// Also added event listeners that would check the answers using the checkAns function previoulsy created
function nextQuestion() { $Question.textContent = questions[index]
    console.log(index)
    div.append($btn1, $btn2, $btn3, $btn4, $btn5)
for(var i = 0 ; i < btnM.length; i++){ btnM[i].textContent = answers[index][i]
    

}
btnM[0].addEventListener("click",checkAns)
btnM[1].addEventListener("click",checkAns)
btnM[2].addEventListener("click",checkAns)
btnM[3].addEventListener("click",checkAns)
btnM[4].addEventListener("click",checkAns)


    index++
};
nextQuestion();
// Created an end game function that ends the game, stores time left in local storage, prompts user for initials, then displays the High Scores
var score 
var data = localStorage.getItem("High-Score")
var scoreList 
function ENDGAME() {
    clearInterval(timerInterval);
    timeEl.textContent ="";
    div.textContent ="";
    $Question.textContent ="SCORES";
    score = secondsLeft;
    var initials = prompt("Enter your Initials");
    var usrScore = { score:score, initials:initials}
    if(data){data =JSON.parse(localStorage.getItem("High-Score"));
    data.push(usrScore)
    localStorage.setItem("High-Score", JSON.stringify(data))}
    else{
        usrScore = JSON.stringify([usrScore]);
        localStorage.setItem("High-Score",usrScore);
    }
  scoreList = JSON.parse(localStorage.getItem("High-Score"));
  for(let i = 0; i < scoreList.length; i++){
      var scoreLine = document.createElement("p");
     scoreLine.textContent = scoreList[i].initials + ":" + scoreList[i].score 
     div.append(scoreLine);

  }
}








