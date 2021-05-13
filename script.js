
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
"A programming language","A measurment of processing speed"],["{", "[",";","#","$"],["$","[",";","#","}"],["Quotation Marks","<>","Parenthesis","{}","Question Marks"],
["number","Loops","functions","Strings","HTML"]]
var $START = document.getElementById("START")
var timeEl = document.getElementById("timer");
var secondsLeft = 200;

function setTime() {
    var timerInterval = setInterval( function(){
        secondsLeft --;
        timeEl.textContent =  "Time:" + secondsLeft
        if( secondsLeft===0){
        clearInterval(timerInterval);

        }
    }, 1000);
    
};
setTime()


var $Question = document.querySelector("#Question");
var $Answer = document.querySelectorAll(".Answer");
var index = 0
function checkAns(event) {
    var element = event.target 
    console.log(index +" "+ questions[index])
    if($Question.textContent==="What is a Boolean?" && element.textContent==="a binary variable, having two possible values called “true” and “false”"){
     // Deduct time else ...next question. Also need to display wrong function neeeded here 
        nextQuestion();
        

    } else if($Question.textContent==="What is a Boolean?" &&  element.textContent !=="a binary variable, having two possible values called “true” and “false”"){
        // Elses minus time 
        nextQuestion();
         timeEl- 20;

    }
    
   if($Question.textContent==="What syntax do we use to store an Object?" && element.textContent==="{"){
        nextQuestion();
     

    } else if($Question.textContent==="What syntax do we use to store an Object?" &&  element.textContent !=="{"){
        // minus time
    } 
    if($Question.textContent==="What syntax do we use to store an Array?" && element.textContent==="["){
        nextQuestion();
    

    } else if($Question.textContent==="What syntax do we use to store an Array?" &&  element.textContent !=="["){
        // minus time 
    } 
    if($Question.textContent==="What do we use to store a String?" && element.textContent==="Parenthesis"){
        nextQuestion();

    } else if($Question.textContent==="What do we use to store a String?" &&  element.textContent !=="Parenthesis"){
        
    }
    if($Question.textContent==="Only____ can be stored localy" && element.textContent==="Strings"){
        nextQuestion();

    } else if($Question.textContent==="Only____ can be stored localy" &&  element.textContent !=="Strings"){
        
    }

};

function nextQuestion() { $Question.textContent = questions[index]
    console.log(index)
for(var i = 0 ; i < $Answer.length; i++){ $Answer[i].textContent = answers[index][i]

}

    index++
};

nextQuestion();
$Answer[0].addEventListener("click",checkAns)
$Answer[1].addEventListener("click",checkAns)
$Answer[2].addEventListener("click",checkAns)
$Answer[3].addEventListener("click",checkAns)
$Answer[4].addEventListener("click",checkAns)


// };
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
