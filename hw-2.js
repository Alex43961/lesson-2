// HOMEWORK

// USE FOR YOUR HOMEWORK : prompt , alert , confirm
// conditional : if , else if , else
// conditions : if , else if , else
// To number type : +variable , parseInt(variable)
// < , > , <= , >=
// !!! and - && , or - ||
//@@ -14,9 +14,52 @@
// if ok => all right , it's great
// ... if fine =>  it's great
// ... if bad =>  you are so moody today
// ... if user unswer not equal any of above => there is something incorrect , try once again
// ... if user answer not equal any of above => there is something incorrect , try once again
// 4) Ask : How much money do you have ?
//  if more than 300 => output => i take a bit
//  if more than 500 => output => i take some
//  if more than 1000 => output => i take a half of it
//  if more than Not A Number => output => Something incorrect try again later.

let firstName, surname, address, yearOfBirth;

firstName = prompt("Enter your name");
surname = prompt("Enter your surname");
address = prompt("Enter your address");
yearOfBirth = prompt("Enter your yearOfBirth");

alert(`
Hello ${firstName} , your surname is ${surname} and you are ${
  2023 - yearOfBirth
} ... Nice to meet you ;)
`);


let userMood = prompt("How are you ?");


if (userMood === "ok") {
	alert("all right, it's great");
} else if (userMood === "fine") {
	alert("it's great");
} else if (userMood === "bad") {
	alert("you are so moody today");
} else {
	alert("there is something incorrect , try once again");
}




let userCash = +prompt("How much money do you have ?");


if (userCash > 300 && userCash <= 500 && userCash != NaN) {
	alert("i take a bit");
} else if (userCash > 500 && userCash <= 1000 && userCash != NaN) {
	alert("i take some");
} else if (userCash > 1000 && userCash != NaN) {
	alert("i take a half of it");
} else {
	alert("Something incorrect try again later.");
}