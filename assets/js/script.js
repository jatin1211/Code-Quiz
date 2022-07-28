var quizContainer = document.querySelector("#quiz");
var resultsContainer = document.querySelector("#results");
var scoreEl = document.querySelector("#score"); 
let score = 0;
let time = 40;
var questionEl = document.querySelector("#question");
var responseEl = document.querySelector("#response");
var bodyEl = document.querySelector("body");

let myQuestions = [
    {
        question:"Javascript is a ____ Language",
        answers:{
            a:"object-oriented",
            b:"object-based",
            c:"procedural"
        },
        correctAnswer: "a"
    },
    {
        question:"Which keyword is used to define a variable in JS",
        answers:{
            a:"var",
            b:"let",
            c:"Both a and b"
        },
        correctAnswer: "c"
    },
    {
        question:"How can a datatype be declared as constant type",
        answers:{
            a:"const",
            b:"var",
            c:"let"
        },
        correctAnswer: "a"
    },
    {
        question:"What keyword is used to check whether a given property is valid or not?",
        answers:{
            a:"in",
            b:"is in",
            c:"exits"
        },
        correctAnswer: "a"

    },
    {
        question:"When an operator’s value is NULL, the typeof returned by the unary operator is:",
        answers:{
            a:"Boolean",
            b:"undefined",
            c:"object"
        },
        correctAnswer: "c"
    },
    {
        question:"Which function is used to serialize an object into a JSON string in Javascript",
        answers:{
            a:"stringify()",
            b:"parse()",
            c:"convert()"
        },
        correctAnswer: "a"
    },
    {
        question:"Which of the following is not a Javascript framework",
        answers:{
            a:"node",
            b:"react",
            c:"cassandra"
        },
        correctAnswer: "a"
    },

];

// submitButton.addEventListener("click", showResults);


const timerEl = document.querySelector("#timer");
timerFunction = setInterval(countdown, 1000);
function countdown(){
    console.log(time);     
    timerEl.textContent = `Time Remaining : ${time} `;
    time--;
    if(time < 0){
        console.log('finish');
        timerEl.textContent = `Time Over`;
        responseEl.textContent = "Quiz Finish";

        clearInterval(timerFunction); 
    };

};
i = 0;
function askQuestion(){

    if(i == myQuestions.length){
        

        quizFinish();
        return;
        
    }
   
    //while(i < myQuestions.length){
    questionEl.innerHTML = `<h2> Quiz </h2>
    
    <p> ${myQuestions[i].question}</p>
    <ol type ="a">  
    <li class="option" id = "a"> ${myQuestions[i].answers.a}</li>
    </br>
    <li class="option" id = "b"> ${myQuestions[i].answers.b}</li>
    </br>
    <li class="option" id = "c"> ${myQuestions[i].answers.c}</li>
    </ol>`; 
    //let userAnswer = "";
    //let count = 0;
    a.addEventListener('click',function(){
        let userAnswer = "a";
        // count = 1;
        // console.log(count);
        
        if(userAnswer == myQuestions[i].correctAnswer){
            responseEl.innerHTML = `Correct`;
            score++;
         
        }
        else{
            responseEl.innerHTML = `Wrong`;
            time -= 5;
            
        }
        i++;
        askQuestion();
    
    });
    b.addEventListener('click',function(){
        userAnswer = "b";
        //count = 1;
        
        if(userAnswer == myQuestions[i].correctAnswer){
            responseEl.innerHTML = `Correct`;
            score++;
    
        }
        else{
            responseEl.innerHTML = `Wrong`;
            time -= 5;
            
        }
        i++;
        askQuestion();
    });
    
    c.addEventListener('click',function(){
        userAnswer = "c";
        
       
        if(userAnswer == myQuestions[i].correctAnswer){
            responseEl.innerHTML = `Correct`;
            score++;
            
        }
        else{
            responseEl.innerHTML = `Wrong`;
            time -= 5;
            
        }
        i++;
        askQuestion();
    }
    );
        
};

askQuestion();

function quizFinish(){
    //responseEl.textContent = "Quiz Finish";
    let initial = prompt("Enter your Initials");
    bodyEl.style.backgroundColor = "pink";
    bodyEl.style.fontSize = "50px";
    bodyEl.innerHTML = `Quiz Finish
    <p>Score=${score}/10</p>
    <p>Quiz taker = ${initial}
    `;
    

    console.log("finishhhhh");
}
