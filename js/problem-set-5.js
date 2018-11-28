/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE


  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY


/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

}

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE


  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {


  // WRITE YOUR EXERCISE 4 CODE HERE

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

  windspeed = prompt('Enter a positive integer for your windspeed');

  windspeed = parseInt(windspeed);

    while (windspeed < 0) {
      windspeed = prompt('Entry Invalid. Re-enter a non-negative integer.');
      windspeed = parseInt(windspeed);

    }

  while (Number.isInteger(windspeed) == false) {
    windspeed = prompt('Entry Invalid. Re-enter a non-negative integer.');
    windspeed = parseInt(windspeed);

  }


  if (windspeed > 157) {
    let div5 = document.getElementById("hurricane-output")
    div5.innerHTML = "Category 5 Hurricane.";

  }

  if (windspeed >= 130 && windspeed <= 156) {
    let div5 = document.getElementById("hurricane-output")
    div5.innerHTML = "Category 4 Hurricane.";

  }

  if (windspeed >= 111 && windspeed <= 129) {
    let div5 = document.getElementById("hurricane-output")
    div5.innerHTML = "Category 3 Hurricane.";

  }

  if (windspeed >= 96 && windspeed <= 110) {
    let div5 = document.getElementById("hurricane-output")
    div5.innerHTML = "Category 2 Hurricane.";

  }

  if (windspeed >= 74 && windspeed <= 95) {
    let div5 = document.getElementById("hurricane-output")
    div5.innerHTML = "Category 1 Hurricane.";

  }

  if (windspeed >= 39 && windspeed <= 73) {
    let div5 = document.getElementById("hurricane-output")
    div5.innerHTML = "Tropical Storm.";

  }

  if (windspeed < 39) {
    let div5 = document.getElementById("hurricane-output")
    div5.innerHTML = "The skies are calm...";
  }


  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  do {
    scoreOne = Number(prompt("what is the first score?"));
  } while (scoreOne < 0.0 || scoreOne > 10.0);
  scores.push(scoreOne);
  do {
    scoreTwo = Number(prompt("what is the second score?"));
  } while (scoreTwo < 0.0 || scoreTwo > 10.0);
  scores.push(scoreTwo);
  do {
    scoreThree = Number(prompt("what is the third score?"));
  } while (scoreThree < 0.0 || scoreThree > 10.0);
  scores.push(scoreThree);
  do {
    scoreFour = Number(prompt("what is the fourth score?"));
  } while (scoreFour < 0.0 || scoreFour > 10.0);
  scores.push(scoreFour);
  do {
    scoreFive = Number(prompt("what is the fifth score?"));
  } while (scoreFive < 0.0 || scoreFive > 10.0);
  scores.push(scoreFive);
  do {
    scoreSix = Number(prompt("what is the sixth score?"));
  } while (scoreSix < 0.0 || scoreSix > 10.0);
  scores.push(scoreSix);

  total = scores.reduce((a,b) => a + b, 0)
  let l = scores.indexOf(Math.min(...scores));
  let low = scores[1];
  let h = scores.indexOf(Math.max(...scores));
  let high = scores[h];
  let avg = ((total - low - high) / (scores.length-2)).toFixed(2);

  let op = document.getElementById("gymnastics-output");
  op.innerHTML = `Discarded: ${low}, ${high}<br/>Score: ${avg}`;

  //let firstScore = Number(prompt("Please enter a number between 1.0 and 10.0 for your first score"));
//  let secondScore = Number(prompt("Please enter a number between 1.0 and 10.0 for your second score"));
///  let thirdScore = Number(prompt("Please enter a number between 1.0 and 10.0 for your third score"));
///  let fourthScore = Number(prompt("Please enter a number between 1.0 and 10.0 for your fourth score"));
//  let fifthScore = Number(prompt("Please enter a number between 1.0 and 10.0 for your fifth score"));
//  let sixthScore = Number(prompt("Please enter a number between 1.0 and 10.0 for your sixth score"));

//  score.push(secondScore);
  ///score.push(thirdScore);
  ///score.push(fourthScore);
  ///score.push(fifthScore);
///  score.push(sixthScore);

//  while (scores < 1.0) {
///  firstScore = (Number.isInteger(firstScore))? firstScore = firstScore : prompt("No! Enter a number between 1.0 and 10.0 as you were prompted before");

  ///total = firstScore + secondScore + thirdScore + fourthScore + fifthScore + sixthScore;

  //let maximum = Math.max(...scores);
  //let minimum = Math.min(...scores);

//  let discarded = document.getElementById("gymnastics-output");
//  discarded.innerHTML = "Discarded: " + minimum + ", " + maximum;

//  let minimumIndex = scores.indexof(minimum);
//  let maximumIndex = scores.indexof(maximum);

//  scores.splice(maximumIndex);
//  scores.splice(minimumIndex);

//  console.log(scores);
//}

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
