const button = document.querySelector(".cta");
const par = document.querySelector("#show");

const back = document.querySelector("#back");
const next = document.querySelector("#next");

//const parTwo = document.querySelector("#par");

const quates = ["JavaScript is the only language that I'm aware of that people feel they don't need to learn before they start using it", 
"Every great developer you know got there by solving problems they were unqualified to solve until they actually did", 
"There are two ways to write error-free programs; only the third one works",
"We are what we protend to be, so we must be careful about what we protend to be",
"Programming languages are like girlfriends: The new one is better because *you* are better",
"Motivation is simple. You eliminate those who are not motivated"]

let i = 0;
next.addEventListener("click", (e) => {
    e.preventDefault();
    i++;
    if(i > quates.length - 1){
        i = 0;
    }
document.querySelector("#par").textContent = quates[i]
})

back.addEventListener("click", (e) => {
    e.preventDefault();
    i--;
    if(i < 0 ) {
        i = quates.length - 1;
    }
    document.querySelector("#par").textContent = quates[i];
})

button.addEventListener("click", result);
//buttonTwo.addEventListener("click", function (e) {
    //e.preventDefault();
    //let randomQuate = quates [Math.floor(Math.random() * quates.length)]
    //parTwo.style.display = "block";
    //parTwo.textContent = randomQuate;
//})

function result(e){
    e.preventDefault();

    let points = 0;

    if(document.querySelector("#answerOne").checked) {
        points++;
    }
    if(document.querySelector("#answerTwo").checked) {
        points++;
    }
    if(document.querySelector("#answerThree").checked) {
        points++;
    }
    if(document.querySelector("#answerFour").checked) {
        points++;
    }
    if(document.querySelector("#answerFiveOne").checked) {
        points++;
    }
    if(document.querySelector("#answerFiveTwo").checked) {
        points++;
    }
    if(document.querySelector("#answerSix").checked) {
        points++;
    }
    if(document.querySelector("#answerSeven").checked) {
        points++;
    }
    if(document.querySelector("#answerEight").checked) {
        points++;
    }

    par.textContent = "Your score : " + points;
}