var min = document.getElementById('Min');
var sec = document.getElementById('Sec');
var Minutes = 0;
var Seconds = 59;
var interval;

function Start() {
    interval = setInterval(timer, 1000);
}

function timer() {
    min.innerHTML = Minutes;
    sec.innerHTML = Seconds;
    Seconds--;
    if (Seconds === 0) {
        Minutes--;
        Seconds = 59;
    }
    if(Minutes == -1){
        document.getElementById('ShowResult').style.display = 'block';
        clearInterval(interval)
        Result()
    }
}

var Sawal = [{
    Question: 'Haft Aqsam Kitni he?',
    option1: '2',
    option2: '7',
    option3: '10',
    option4: '20',
    ans: '2'
}, {
    Question: 'Kalm e ki Aqsam he?',
    option1: '7',
    option2: '6',
    option3: '3 ',
    option4: '10',
    ans: '3'
}, {
    Question: 'Mabni Ki Alama he?',
    option1: '12',
    option2: '4',
    option3: '3',
    option4: '6',
    ans: '4'
}, {
    Question: 'Horof e Nasibah kitne he?',
    option1: '4',
    option2: '3',
    option3: '7',
    option4: '10',
    ans: '1'
}, {
    Question: 'Horof e Jarah kitne he?',
    option1: '20',
    option2: '17',
    option3: '15',
    option4: '6',
    ans: '2'
}, {
    Question: 'Horof e Mushabah bil fail kitne he?',
    option1: '8',
    option2: '3',
    option3: '6',
    option4: '2',
    ans: '3'
}, {
    Question: 'Horof e Jazima kitne he?',
    option1: '3',
    option2: '9',
    option3: '4',
    option4: '5',
    ans: '4'
}, {
    Question: 'Horof e Muqarba kitne he?',
    option1: '4',
    option2: '3',
    option3: '7',
    option4: '2',
    ans: '1'
}, {
    Question: 'Afaal e MaduH o Zam kitne he?',
    option1: '2',
    option2: '8',
    option3: '4',
    option4: '7',
    ans: '3'
}, {
    Question: 'Afaal e Naqisa kitne he?',
    option1: '20',
    option2: '10',
    option3: '30',
    option4: '17',
    ans: '4'
},
]

var count = 0;

var sawalNo = document.getElementById('QuestionNomber');
var sawal = document.getElementById('Question');

var option1 = document.getElementById('Options1')
var option2 = document.getElementById('Options2')
var option3 = document.getElementById('Options3')
var option4 = document.getElementById('Options4')


sawalNo.innerHTML = "Qustion no " + [count + 1] + "of 10"
sawal.innerHTML = Sawal[count].Question

option1.innerHTML = Sawal[count].option1
option2.innerHTML = Sawal[count].option2
option3.innerHTML = Sawal[count].option3
option4.innerHTML = Sawal[count].option4


var nextButton = document.getElementById('NextButton')
var resultButton = document.getElementById('resultButton')


function Next() {
    count++;
    check()
    sawalNo.innerHTML = "Qustion no " + [count + 1]  +  "of 10"
    sawal.innerHTML = Sawal[count].Question
    option1.innerHTML = Sawal[count].option1
    option2.innerHTML = Sawal[count].option2
    option3.innerHTML = Sawal[count].option3
    option4.innerHTML = Sawal[count].option4
    if(count === 9){
        nextButton.className = "hide"
        resultButton.className = "NextButton"
    }
    
}


var tick = document.getElementsByName('Options')
var score = 0;

function check(){
    for (var i = 0; i <= tick.length; i++){
        if(tick[i]?.checked){
            tick[i].checked = false;
            nextButton.disabled = true
            resultButton .disabled = true
            if(tick[i]. value === Sawal[count -1] .ans){
                score +=10;
            }
        }
    }
}

var butten = document.getElementById('NextButton')

function active(){
    check()
}

function enable(){
    nextButton.disabled= false
    resultButton .disabled = false
}


function Result(){
    count++;
    check()
    document.getElementById('contairBox').style.display = 'none'
    document.getElementById('ShowResult').style.display ='block';
    document.getElementById('MarksObtained').innerHTML = score
    document.getElementById('CorrectAns').innerHTML = score/10
    document.getElementById('WrongAns').innerHTML = Sawal.length - (score/10)
    document.getElementById('Percentage').innerHTML = score/100 *100
   

    if(score >=40){
        document.getElementById('Result').innerHTML = 'Pass'
    }else{
        document.getElementById('Result').innerHTML = 'Fail'
    }
}
// Start() 