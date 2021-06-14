'use strict';

function sendEmail(userName) {
  console.log('Gromcode party invitation was sent!' + userName + '!');
} 

function sendEmailList(userNames) {
  // hint: you should use sendEmail function inside sendEmailList
  // put your code here
  userNames = ['Volodymyr', 'Taras', 'Dmytro', 'Iurii'];
  for(let letter of userNames) {
      sendEmail(letter);
  }
}
sendEmailList();