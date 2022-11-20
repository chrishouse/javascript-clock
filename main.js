let numbers = document.querySelectorAll('p.number');
let numberSpan = document.querySelectorAll('p.number > span');
let i = -90;
let ii = -90;

numbers.forEach((n) => {
    n.style.transform = 'rotate(' + i + 'deg)';
    i+=30;
});

numberSpan.forEach((ns) => {
    ns.style.transform = 'rotate(' + -ii + 'deg)';
    ii+=30;
});

const secondHand = document.querySelector('.hand.second');
const minuteHand = document.querySelector('.hand.minute');
const hourHand = document.querySelector('.hand.hour');

const now1 = new Date();
let seconds = now1.getSeconds();

function setDate() {
    const now2 = new Date();    
    const minutes = now2.getMinutes();
    const hours = now2.getHours();    
    let secondsDegrees = ((seconds / 60) * 360) + 90;
    seconds++;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = (((hours + (minutes / 60)) / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;  
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`; 
}

setDate();

setInterval(setDate, 1000);

let clock = document.querySelector('.clock');

clockColor();

setInterval(clockColor, 5000);

function clockColor() {
    clock.style.borderColor = 'rgba(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ',' + randomAlpha() + ')';
}

function random(min, max) {
    return Math.floor(Math.random()*(max-min)) + min;
}

function randomAlpha() {
    return Math.random();
}