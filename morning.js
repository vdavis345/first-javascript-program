//const number = prompt("give me a number between 1-100")


//if(number <= 25) {
  //  document.write("less than 25");
//}
//if(number >= 25 && number <= 50) {
  //  document.write("between 25 and 50");
//}
//if(number >= 50 && number <= 75) {
  //  document.write("between 25 and 50");
//}
//if(number >= 75 && number <= 100) {
  //  document.write("between 25 and 50");
//}

//const firstname = prompt("What's your first name?");
//const lastname = prompt("What's your last name?");

//document.write(firstname + " " + lastname);


let guess = parseInt(prompt ("guess between 1-10"));
let random = Math.floor(Math.random() *10) +1;
while(guess != random){
    alert("try again")
    random = parseInt(prompt ("guess between 1-10"));
}


//let skyIsBlue = true

//while(skyIsBlue === true) {
    //exit condition: yay that end the loop
  //  console/log("it's true")
    //if(counter === 5) {
      //  skyIsBlue = false
    //}
    //counter++



//let userName = prompt( "What is your name?")
//while( userName != "Vincent") {
  //  alert("please enter the name Vincent")
    //userName = prompt("What is your name?")
//}


