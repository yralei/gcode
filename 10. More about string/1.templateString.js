'use strict';

/**
 * @param {string} userName
 * @param {string} email
 * @param {number} tasksCount
 * @return {string}
 */
const getMessage = (userName, email, tasksCount) => {
  return `Hello again, ${userName}. Your email is ${email}. You have ${tasksCount} tasks for today`;
};
console.log(getMessage('Iurii', 'iurii@gmail.com', 5));