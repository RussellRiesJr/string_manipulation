
// Implement the logic in the reversal function that reverses the order of the characters
// in the string, and outputs the result in the DOM, below the text input.
function reversal(string) {
  var rev = document.getElementById("reverse");
  rev.innerHTML = string.split('').reverse().join('');
}

// Implement the logic in the alphabits function that return the characters in alphabetical order,
// and outputs the result in the DOM, below the text input.
function alphabits(string) {
  var alph = document.getElementById("alpha");
  alph.innerHTML = string.split('').sort();
}

// Implement the logic in the palindrome function that determine whether the string is a palindrome.
// If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
function palindrome(string) {
  var drome = document.getElementById("pal");
  if (string === string.split('').reverse().join('')) {
    drome.innerHTML = "Your string is a palindrome!";
  } else {
    drome.innerHTML = "Nope!";
  }
}

// When the user presses the enter key in the text input, or clicks the button,
// set the value of the testString variable (see below) to the value of the input.
function startManip(clickEvent) {
  var testString = document.getElementById("userInput").value;
  clickEvent.preventDefault();
  reversal(testString);
  alphabits(testString);
  palindrome(testString);
}

var run = document.getElementById("run");
run.addEventListener("click", startManip);

document.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    startManip(e);
  }
});

// The output of each of the functions should immediately appear as well.




// console.log(reversal(testString));
// console.log(alphabits(testString));
// console.log(palindrome(testString));