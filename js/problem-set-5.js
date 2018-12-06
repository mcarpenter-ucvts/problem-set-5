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
  while (true){
    height=prompt("Please enter a valid height");
    height=Number(height);
    if(height>=1 && height<=23 && Number.isInteger(height)){
      break;
    };
  };
  let i=1;
  let hash='#';
  let lines="<code>";
  let spaces=height-2;

  while (i<=height){
    let a='';
    for(let j=0;j<=spaces;j++) {
      a+='&nbsp;';
    }
    spaces--;
    hash=hash+'#';
    lines=lines+a+hash+"</br>";
    i++;
  }
  document.getElementById("mario-easy-output").innerHTML=lines;
  lines=lines+"</code>"


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
  while (true){
    height=prompt("Please enter a valid height");
    height=Number(height);
    if(height>=1 && height<=23 && Number.isInteger(height)){
      break;
    };
  };
  let i=1;
  let hash='#';
  let lines="<code>";
  let spaces_Before=height-2;
  let spaces_After='&nbsp'+'&nbsp';
  while (i<=height){
    let a='';
    for(let j=0;j<=spaces_Before;j++) {
      a+='&nbsp;';
    }
    spaces_Before--;
    hash=hash+'#';
    lines=lines+a+hash+spaces_After+hash+"</br>";
    i++;
  }
  document.getElementById("mario-hard-output").innerHTML=lines;
  lines=lines+"</code>"
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
   let firstSum = 0;
    let secondSum = 0;
    while (true){
      card = prompt("Enter your credit card number: ");
      if (Number.isInteger(Number(card))){
        break;
      }
      if(card === null){
        break;
      }
    }

    if (card !== null) {
      for(let aCard= card.length-2; aCard>= 0; aCard-=2) {
        let num = Number(card[aCard]) * 2;
        let numCardString = num.toString();
        let numCardSum = 0;
        for (let bCard= 0 ; bCard< numCardString.length; bCard++){
          numCardSum = numCardSum + Number(numCardString[bCard]);
        }
        firstSum = numCardSum + firstSum;
        console.log(firstSum);
      }

      for(let cCard= card.length-1; cCard>= 0;cCard-=2){
        secondSum = secondSum + Number(card[cCard])
      }

      console.log(secondSum);

      if (card.length == 15 && (card[0] == 3 &&(card[1] == 7 || card[1] == 4)) && (firstSum + secondSum )% 10 == 0){
        let div3=document.getElementById("credit-output")
        div3.innerHTML="<img src ='./images/amex.png'/>";
      }
      else if ((card.length == 13 || card.length == 16) && card[0] == 4 && (firstSum + secondSum) % 10 == 0){
        let div3=document.getElementById("credit-output")
        div3.innerHTML="<img src ='./images/visa.png'/>";
      }
      else if (card.length == 16 && (card[0] == 5 && (card[1] == 1 || card[1] == 2 || card[1] == 4 || card[1] == 5)) && (firstSum + secondSum) % 10 == 0){
        let div3=document.getElementById("credit-output")
        div3.innerHTML="<img src ='./images/mastercard.png'/>";
      }
      else {
        let div3=document.getElementById("credit-output")
        div3.innerHTML="<img src ='./images/invalid.png'/>";
      }

      card=Number(card);
    } else {
      let div3=document.getElementById("credit-output")
      div3.innerHTML = "";
    }

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
   let attemptsTaken= 0;
   let guessedNum = false;
   let userGuessNum;
   let randomNum = Math.floor(Math.random(1)*1000);

   while(guessedNum == false) {
     userGuessNum = Number(prompt("Input an integer based guess that is between 1 and 1000!"));
     if (userGuessNum <= 1000 && userGuessNum >= 1 && Number.isInteger(userGuessNum)) {
       console.log(randomNum)
       if(userGuessNum < randomNum) {
         alert("This attempt was too low!")
         attemptsTaken+=1;
       }
       if(userGuessNum > randomNum) {
         alert("This attempt was too high!")
         attemptsTaken+=1;
       }
       if(userGuessNum == randomNum) {
         alert("Correct!")
         attemptsTaken+=1;
         found = true;
         div4=document.getElementById("guess-output")
         div4.innerHTML = "Number: " + randomNum + "<br/>Attempts: " + attemptsTaken;
         break;
       }
     }


   }


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


  if (windspeed >= 157) {
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
  do{
    scoreNum1 = Number(prompt("Please enter a score between 0 and 10"));

  } while (scoreNum1 < 0.0 || scoreNum1 > 10.0 || !Number.isInteger(scoreNum1)){
    scores.push(scoreNum1);
  }
  do{
    scoreNum2 = Number(prompt("Please enter a score between 0 and 10"));

  } while (scoreNum2 < 0.0 || scoreNum2 > 10.0 || !Number.isInteger(scoreNum2)){
    scores.push(scoreNum2);
  }
  do{
    scoreNum3 = Number(prompt("Please enter a score between 0 and 10"));

  } while (scoreNum3 < 0.0 || scoreNum3 > 10.0 || !Number.isInteger(scoreNum3)){
    scores.push(scoreNum3);
  }
  do{
    scoreNum4 = Number(prompt("Please enter a score between 0 and 10"));

  } while (scoreNum4 < 0.0 || scoreNum4 > 10.0 || !Number.isInteger(scoreNum4)){
    scores.push(scoreNum4);
  }
  do{
    scoreNum5 = Number(prompt("Please enter a score between 0 and 10"));

  } while (scoreNum5 < 0.0 || scoreNum5 > 10.0 || !Number.isInteger(scoreNum5)){
    scores.push(scoreNum5);
  }
  do{
    scoreNum6 = Number(prompt("Please enter a score between 0 and 10"));

  } while (scoreNum6 < 0.0 || scoreNum6 > 10.0 || !Number.isInteger(scoreNum6)){
    scores.push(scoreNum6);
  }

  let totalScore = Number(scoreNum1) + Number(scoreNum2) + Number(scoreNum3) + Number(scoreNum4) + Number(scoreNum5) + Number(scoreNum6);
  let averageScore = (totalScore - Math.max(scoreNum1, scoreNum2, scoreNum3, scoreNum4, scoreNum5, scoreNum6) - Math.min(scoreNum1, scoreNum2, scoreNum3, scoreNum4, scoreNum5, scoreNum6)) / 4;
  let div6 = document.getElementById("gymnastics-output");
  div6.innerHTML = "Discarded: " + Math.min(scoreNum1, scoreNum2, scoreNum3, scoreNum4, scoreNum5, scoreNum6) + ', ' + Math.max(scoreNum1, scoreNum2, scoreNum3, scoreNum4, scoreNum5, scoreNum6) + '<br/>Score: ' + averageScore.toFixed(2);

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
   let testScore;
   let quizScore;
   let homeworkScore;
   let testAverage;
   let quizAverage;
   let homeworkAverage;
   let finalGradeAverage;

   testScore = prompt("Enter an integer between 1 and 100 for your test score. Continue until all scores have been imputted. Once all scores are inputted, enter -1.");
   while (testScore) {
     testScore = parseFloat(testScore);

     if (testScore == -1) {
       testScore = false;
       break;
     }
     else if(testScore <= 100.00 && 0.0 <= testScore) {
       tests += 1;
       testTotal += testScore
     }
     else{
     }
     testScore = prompt("Enter an integer between 1 and 100 for your test score. Continue until all scores have been imputted. Once all scores are inputted, enter -1.");
   }
   quizScore = prompt("Enter an integer between 1 and 100 for your quiz score. Continue until all scores have been imputted. Once all scores are inputted, enter -1.")
   while (quizScore) {
      quizScore = parseFloat(quizScore);

      if (quizScore == -1) {
        quizScore = false;
        break;
      }
      else if(quizScore <= 100.00 && 0.0 <= quizScore) {
        quizzes += 1;
        quizTotal += quizScore
      }
      else{
      }
      quizScore = prompt("Enter an integer between 1 and 100 for your quiz score. Continue until all scores have been imputted. Once all scores are inputted, enter -1.")
    }
    homeworkScore = prompt("Enter an integer between 1 and 100 for your homework score. Continue until all scores have been imputted. Once all scores are inputted, enter -1.")
    while (homeworkScore) {
      homeworkScore = parseFloat(homeworkScore);

      if (homeworkScore == -1) {
        homeworkScore = false;
        break;
      }
      else if(homeworkScore <= 100.00 && 0.0 <= homeworkScore) {
        homeworks += 1;
        homeworkTotal += homeworkScore
      }
      else{
      }
      homeworkScore = prompt("Enter an integer between 1 and 100 for your homework score. Continue until all scores have been imputted. Once all scores are inputted, enter -1.")
    }

    testAverage = testTotal/tests;
    quizAverage = quizTotal/quizzes;
    homeworkAverage = homeworkTotal/homeworks;
    finalGradeAverage = (testAverage * 0.6) + (quizAverage * 0.3) + (homeworkAverage * 0.1);

    console.log(homeworkScore)
    console.log(quizScore)
    console.log(testScore)
    console.log(testAverage)
    console.log(quizAverage)
    console.log(homeworkAverage)
    console.log(finalGradeAverage)
    let div7 = document.getElementById("report-card-output")
    div7.innerHTML = "Tests: " + testAverage.toFixed(2) + "</br>Quizzes: " + quizAverage.toFixed(2) + "</br>Homework: " + homeworkAverage.toFixed(2) + "</br>Grade: " + finalGradeAverage.toFixed(2);

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
