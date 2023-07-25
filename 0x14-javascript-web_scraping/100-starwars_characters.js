#!/usr/bin/node
const request = require('request');
const BASE_URL = 'https://swapi-api.hbtn.io/api';

if (process.argv.length > 2) {
  request(`${BASE_URL}/films/${process.argv[2]}/`, (error, response, responseBody) => {
    if (error) {
      console.log(error);
    }
    const charactersURLs = JSON.parse(responseBody).characters;

    charactersURLs.forEach(characterURL => {
      request(characterURL, (err, res, body) => {
        if (err) {
          console.log(err);
        }
        const characterName = JSON.parse(body).name;
        console.log(characterName);
      });
    });
  });
}
