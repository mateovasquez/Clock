const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalClock = document.querySelector('.clock-count');

function setDate(){
    const now       = new Date(); //set a new date
    const seconds   = now.getSeconds(); //gets the actual seconds
    const minutes   = now.getMinutes(); //gets the actual minutes
    const hours     = now.getHours(); //gets the actual hours
    const secondsDegrees = ((seconds / 60) * 360) + 90; //turn seconds to degrees
    const minutesDegrees = ((minutes / 60) * 360) + 90; //turn minutos to degrees
    const hoursDegrees   = ((hours / 12) * 360) + 90; //turn hours to degrees
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform   = `rotate(${hoursDegrees}deg)`;
    digitalClock.innerHTML     = hours + ':' + minutes + ':' + seconds; //insert date into the digital clock
}

setInterval(setDate, 1000); //set the interval of rotation to a second