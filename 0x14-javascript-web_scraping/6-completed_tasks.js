#!/usr/bin/node
const request = require('request');

if (process.argv.length > 2) {
  request(process.argv[2], (error, response, responseBody) => {
    const userCompletionCount = {};

    if (error) {
      console.log(error);
    }

    JSON.parse(responseBody).forEach(item => {
      if (item.completed) {
        if (!userCompletionCount[item.userId]) {
          userCompletionCount[item.userId] = 0;
        }
        userCompletionCount[item.userId]++;
      }
    });
    console.log(userCompletionCount);
  });
}
