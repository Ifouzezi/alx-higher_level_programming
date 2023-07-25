#!/usr/bin/node
const request = require('request');

function fetchAllData(url, callback) {
  request(url, (error, response, responseBody) => {
    if (error) {
      console.log(error);
      callback(error, null);
      return;
    }

    const data = JSON.parse(responseBody);
    if (data.length === 0) {
      // No more data, invoke the callback with the collected results
      callback(null, data);
    } else {
      // Continue fetching data from the next page
      const nextPageUrl = response.headers.link.match(/<([^>]+)>;\s*rel="next"/);
      if (nextPageUrl) {
        fetchAllData(nextPageUrl[1], (err, restOfData) => {
          if (err) {
            callback(err, null);
            return;
          }
          callback(null, data.concat(restOfData));
        });
      } else {
        // This is the last page, invoke the callback with the collected results
        callback(null, data);
      }
    }
  });
}

if (process.argv.length > 2) {
  const apiUrl = process.argv[2];
  fetchAllData(apiUrl, (err, allData) => {
    if (err) {
      console.log(err);
      return;
    }

    const userCompletionCount = {};
    allData.forEach(item => {
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
