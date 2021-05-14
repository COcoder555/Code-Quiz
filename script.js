
// NEED THE START BUTTON TO INITIATE A TIMER 
// The whatever the user chooses for thier answer should be localy stored using "local starage...you will need to strigify it

// Regardless of CORRECT or WRONG answer the when an "Answer" is clicked it should load the next question
// before storing the value locally (  you will use the user input to get tally scores and get infor for high scores)
// var $timer = document.querySelector("#timer")
// var secondsLeft = 200;
// function setTim(){
//     // var timerInterval =setInterval(function(){
//             secondsLeft --;

var questions = ["What is a Boolean?", "What syntax do we use to store an Object?", "What syntax do we use to store an Array?", 
"What do we use to store a String?","Only____ can be stored localy"]

var answers = [["A function", "A syntax error","a binary variable, having two possible values called “true” and “false”",
"A programming language","A measurment of processing speed"],["{", "[",";","#","$"],["$","[",";","#","}"],["Quotation Marks","<>","Parenthesis","{}","[]"],
["number","Loops","functions","Strings","HTML"]]
var $btn1 = document.createElement("button"); 
var $btn2 = document.createElement("button");
var $btn3 = document.createElement("button"); 
var $btn4 = document.createElement("button");
var $btn5 = document.createElement("button");

var btnM = [$btn1, $btn2, $btn3, $btn4, $btn5];
var div = document.getElementById("Answer1");

var $START = document.getElementById("START")
var timeEl = document.getElementById("timer");
var secondsLeft = 500;
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


var $Question = document.querySelector("#Question");
// var $Answer = document.querySelectorAll(".Answer");
var index = 0
function checkAns(event) {
    var element = event.target 
    console.log(index +" "+ questions[index])
    if($Question.textContent==="What is a Boolean?" && element.textContent==="a binary variable, having two possible values called “true” and “false”"){
     // Deduct time else ...next question. Also need to display wrong function neeeded here 
        nextQuestion();
        
    } else if($Question.textContent==="What is a Boolean?" &&  element.textContent !=="a binary variable, having two possible values called “true” and “false”"){
        // Elses minus time 
        secondsLeft -= 20;
        nextQuestion();
        

    }
    
   if($Question.textContent==="What syntax do we use to store an Object?" && element.textContent==="{"){
        nextQuestion();
     

    } else if($Question.textContent==="What syntax do we use to store an Object?" &&  element.textContent !=="{"){
        // secondsLeft-=20;
        // nextQuestion();
       
    } 
    if($Question.textContent==="What syntax do we use to store an Array?" && element.textContent==="["){
        nextQuestion();
    

    } else if($Question.textContent==="What syntax do we use to store an Array?" &&  element.textContent !=="["){
        // nextQuestion();
        // secondsLeft-=20; 
    } 
    if($Question.textContent==="What do we use to store a String?" && element.textContent==="Quotation Marks"){
        nextQuestion();
        

    } else if($Question.textContent==="What do we use to store a String?" &&  element.textContent !=="Quotation Marks"){
        // nextQuestion();
        // secondsLeft -=20;
    }
    if($Question.textContent==="Only____ can be stored localy" && element.textContent==="Strings"){
        ENDGAME();
        

    } else if($Question.textContent==="Only____ can be stored localy" &&  element.textContent !=="Strings"){
        // secondsLeft-=20;
    }

};

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








// $Answer[0].addEventListener("click",checkAns)
// $Answer[1].addEventListener("click",checkAns)
// $Answer[2].addEventListener("click",checkAns)
// $Answer[3].addEventListener("click",checkAns)
// $Answer[4].addEventListener("click",checkAns)


// // };
// setTime()
// $START.addEventListener("click",setTime);
// for( var i = 0; i< $Answer.length; i++){
//     $Answer[i].addEventListener("click",checkAns)
// }



// // var $Answer1 = document.querySelector("#Answer1")
// var secondsLeft= 200;
// function setTim(){
//     var timerInterval =setInterval(function(){
//         secondsLeft --;
        

    
//         s)
// }
// $Answer.addEventListener("click",function(){
//     if($Answer.onclick(textContent= question2));
    
    // If the user returns a correct answer  there should be a return message of CORRECT
    // If the user returns a wrong answer there should be a return of WRONG and penalize the clock.
    
    
    // Regardless of CORRECT or WRONG answer the when an "Answer" is clicked it should load the next question
// };
// });
