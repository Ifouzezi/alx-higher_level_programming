#!/usr/bin/node

const request = require('request');
const argv = process.argv;
const url = 'https://swapi-api.alx-tools.com/api/films/';

function getStatusJson(theUrl, callback) {
  const options = {
    url: theUrl,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Accept-Charset': 'utf-8'
    }
  };
  request(options, function (err, res, body) {
    if (err) {
      console.log(err);
    } else {
      const json = JSON.parse(body);
      const status = res.statusCode;
      callback(status, json.title);
    }
  });
}

const movieId = argv[2];
getStatusJson(url + movieId, (status, title) => {
  console.log(title);
});
