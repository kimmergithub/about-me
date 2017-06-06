var userName = prompt('What is your name visitor?');
console.log('The user has the name of ' + userName);

// questions 1  SIDE notes Prompt always outputs string//
if (userName) {
    var qOne = prompt('Tell me ' + userName + '. What do you think, does my website look nice? Enter: Yes/No or Y/N')
}
else {
  var qOne = prompt('I am not sure that is a name, but tell me ' + userName + '. What do you think, does my website look nice?')
};
console.log(userName + ' answered ' + qOne + ' when asked if my site looked nice.');

// questions 2 tell the lie//
if (qOne.toLowerCase() === 'yes' || qOne.toLowerCase() === 'y') {
    var qTwo = prompt('Thank you ' + userName + '.  Did you know that I am an experienced web developer? Yes/No or Y/N')
}
else {
  var qTwo = prompt('That is not very nice ' + userName + '.  Did you know that this is my first website? Yes/No or Y/N')
}
console.log(userName + ' answered ' + qTwo + ' when asked question 2.  The lie question.');

// questions 3 admit the lie//
if (qTwo.toLowerCase() === 'yes' || qTwo.toLowerCase() === 'y') {
    var qThree = prompt(userName + ' I was lying... Have your ever told a lie?  Enter: Yes/No or Y/N')
}
else {
  var qThree = prompt(userName + ' I was lying... Have your ever told a lie?  Enter: Yes/No or Y/N')
};
console.log(userName + 'answered ' + qThree + 'when asked if they have ever lied.');

// questions 4//
if (qThree.toLowerCase() === 'yes' || qThree.toLowerCase() === 'y') {
    var qFour = prompt('Well ' + userName + ', do you think you can ever forgive me? Yes/No or Y/N')
}
else {
  var qFour = prompt('Well ' + userName + ', you are very noble. do you think you can ever forgive me? Yes/No or Y/N')
}
console.log(userName + 'answered ' + qFour + ' when asked if they could ever forgive me.');

// questions 5//
if (qFour.toLowerCase() === 'yes' || qFour.toLowerCase() === 'y') {
    var qFive = prompt('That is good to hear ' + userName + '.  Do you trust me? Yes/No or Y/N')
}
else {
  var qFive = prompt('That is too bad ' + userName + '.  Will you ever trust me again? Yes/No or Y/N')
}
console.log(userName + 'answered ' + qFive + ' when asked if they can trust me.');

// questions 5//
if (qFive.toLowerCase() === 'yes' || qFive.toLowerCase() === 'y') {
    alert('Please check out my site, maybe it will help regain some trust!  Thank you ' + userName + '.')
}
else {
  alert('Please check out my site, maybe it will help regain some trust!  Thank you ' + userName + '.')
}
