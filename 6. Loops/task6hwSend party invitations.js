'use strict';

function sendEmail() {
  console.log('Gromcode party invitation was sent!');
} 

function sendEmailList() {
  // hint: you should use sendEmail function inside sendEmailList
  // put your code here
  for(let index = 0; index <= 29; index++) {
      sendEmail();
  }
}
sendEmailList();