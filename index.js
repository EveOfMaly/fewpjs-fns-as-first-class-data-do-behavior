/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  // Split the string between the : to get hour and minute
  const splitTime = timeString.split(':');
  // convert the hour string into integer
  const parsedTime = parseInt(splitTime[0]);


  if (parsedTime >= 12 && parsedTime <= 17) { // if the time is between 12 and 5pm
    return `Good Afternoon` ; 
  } else if (parsedTime < 12) {   // if the time is earlier than 12pm return good morning 
      return `Good Morning`;
  } else {
    return `Good Evening`;
  }
}
/* Write your implementation of displayMessage() */
// updates the text inside greeting note with content of argunment

function displayMessage(greetingMessage) {
  const greeting = document.querySelector('h1');
  greeting.innerHTML = greetingMessage; //update the node to display this message
}
