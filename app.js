// /use strict is a at the begging of the javascript requires that you use everything strictly as it is written...   PREVENTS the use of varables that are not declared  === takes away the looseness of javascript    Using USE Strict is BEST PRACTICES!!!  THIS IS AN INTERVIEW FLAGS!/
'use strict';
function questions(){
  var userName = prompt('What is your name visitor?');
  console.log('The user has the name of ' + userName);

  // this is where I am designating a score //
  var yes = 0;
  var no = 0;

  var qOne = '';
  var qTwo = '';
  var qThree = '';
  var qFour = '';
  var qFive = '';
  var qSeven = '';

  // questions 1  SIDE notes Prompt always outputs string//
  function questionOne(){
    if (userName) {
      qOne = prompt('Tell me ' + userName + '. What do you think, does my website look nice? Enter: Yes/No or Y/N');
    } else {
      qOne = prompt('I am not sure that is a name, but tell me ' + userName + '. What do you think, does my website look nice?');
    }
    console.log(userName + ' answered ' + qOne + ' when asked if my site looked nice.');
  }
  questionOne();

  // //questions 2 tell the lie//
  function questionTwo(){
    if (qOne.toLowerCase() === 'yes' || qOne.toLowerCase() === 'y') {
      qTwo = prompt('Thank you ' + userName + '.  Did you know that I am an experienced web developer? Yes/No or Y/N');
      yes++;
    } else {
      qTwo = prompt('That is not very nice ' + userName + '.  Did you know that this is my first website? Yes/No or Y/N');
      no++;
    }
    console.log(userName + ' answered ' + qTwo + ' when asked question 2.  The lie question.');
  }
  questionTwo();

  // // questions 3 admit the lie//
  function questionThree(){
    if (qTwo.trim().toLowerCase() === 'yes' || qTwo.toLowerCase() === 'y') {
      qThree = prompt(userName + ' I was lying... I\'m a newb!  Are you usually this gullable?  Enter: Yes/No or Y/N');
      yes++;
    } else {
      qThree = prompt(userName + ' I was lying... I\'m a newb!  Are you usually this gullable?  Enter: Yes/No or Y/N');
      no++;
    }
    console.log(userName + 'answered ' + qThree + ' if they are usually this gullable.');
  }
  questionThree();

  // questions 4//
  function questionFour(){
    if (qThree.toLowerCase() === 'yes' || qThree.toLowerCase() === 'y') {
      userName = 'Mr. Gullable';
      qFour = prompt('Hmmm... ' + userName + ' do think I\'m good at giving nicknames? Yes/No or Y/N');
      yes++;
    } else {
      qFour = prompt('Well ' + userName + ', let me ask you, am I good at giving nickname? Yes/No or Y/N');
      no++;
    }
    console.log(userName + 'answered ' + qFour + ' when asked if I am good at giving nicknames.');
  }
  questionFour();

  // questions 5//
  function questionFive(){
    if (qFour.toLowerCase() === 'yes' || qFour.toLowerCase() === 'y') {
      qFive = prompt('I\'m glad you like your new name ' + userName + '.  Do you think my name is a nickname? Yes/No or Y/N');
      yes++;
    }
    else {
      userName = 'Nelly';
      qFive = prompt('Oh yeah ' + userName + ' I guess you have a bad nickname now.  Would you like a new one? Yes/No or Y/N');
      no++;
    }
    console.log(userName + 'answered ' + qFive + ' when I was good at giving nicknames.');
  }
  questionFive();
  var wrongAnswer = 0;
  // questions 6 //
  var tries = 4;
  var Answer = 25;
  var qSixAnswer = '';

  function questionSix(){
    if (qFive.toLowerCase() === 'yes' || qFive.toLowerCase() === 'y') {
      yes++;
      alert('Too bad ' + userName + '! Let\'s play another guessing game... 4 tries, and if you win you can visit my site, if not you\'ll never see it!');
    } else {
      no++;
      alert('Okay ' + userName + '. Let\'s play a guessing game... 4 tries, if you win you can visit my site, if not you\'ll never see it!');
    }

  // question 6 guessing sequence or moving onto question 7 //

    while (tries > 0) {
      qSixAnswer = parseInt(prompt('How old do you think I am?'));
      if (qSixAnswer > Answer) {
        tries--;
        alert('Wrong, you\'re too high ' + userName + '!');
        console.log(userName + ' answered ' + qSixAnswer + 'for how old do you think I am and has ' + tries + ' attemps left!');
      }
      else if (qSixAnswer < Answer) {
        tries--;
        alert('Wrong, you\'re too low ' + userName + '!');
        console.log(userName + ' answered ' + qSixAnswer + 'for how old do you think I am and has ' + tries + ' attemps left!');
      }
      else if (qSixAnswer === Answer) {
        alert('Correct!  Good job ' + userName);
        tries = 0;
        console.log(userName + ' answered ' + qSixAnswer + 'and can move onto question 7!');
      }
      else {
        alert(userName + ' that wasn\'t even close!');
        tries--;
        console.log(userName + ' answered ' + qSixAnswer + 'for how old do you think I am and has ' + tries + ' attemps left!');
      }
    }

    alert('Looks like we need a new game ' + userName + '...  Let\'s try this...');
  }
  questionSix();

  var qCorrectAnswers = ['kirito', 'asuna', 'eren', 'mikasa', 'naruto', 'captain Levi', 'kakarot'];
  tries = 6;

  // var qSevenAnswer = qPossibleAnswers['5'];
  function questionSeven(){
    while (tries > 0) {
      qSeven = prompt('Name one of my favorite anime characters?');
      if (qCorrectAnswers.indexOf(qSeven.trim().toLowerCase()) >= 0) {
        alert('Good guess! ' + userName + '.');
        tries = 0;
        console.log(userName + ' answered ' + qSeven + 'when asked what one of my favorite anime characters name\'s and can move onto my site!');
      }
      else {
        alert('Sorry ' + userName + ' you\'re not even close!');
        tries--;
        console.log(userName + ' answered ' + qSeven + 'when asked what one of my favorite anime characters name\'s and has ' + tries + ' attempts left!');
      }

    }
    alert('The possible answers were ' + qCorrectAnswers + '.');
    alert('So it looks like you answered ' + yes + ' yeses & ' + no + ' no\'s & ' + wrongAnswer + ' wrong answers.');
    alert('Fine!  I\'ll let you move onto my site... it\'s pretty cool!');
  }
  questionSeven();
  console.log(yes + ' yeses & ' + no + ' no\'s & ' + wrongAnswer + ' wrong answers.');

}
questions();
