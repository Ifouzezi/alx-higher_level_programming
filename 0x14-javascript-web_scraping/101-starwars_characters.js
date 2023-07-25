#!/usr/bin/node
const request = require('request');
const movieID = process.argv[2];
const URL = 'http://swapi.co/api/films/' + movieID;

// Makes API request, sets async to allow await promise
request(URL, async function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    // Takes results and deserializes from JSON to JS object
    // console.log(Object.prototype.toString.call(characterURLs)) to confirm object type

    const characterURLs = JSON.parse(body).characters;

    // Use a list of links to character pages to make new requests
    // await queues requests until they resolve in order
    for (const characterURL of characterURLs) {
      await new Promise(function (resolve, reject) {
        request(characterURL, function (error, response, body) {
          if (error) {
            console.log(error);
          } else {
            // Extract character names
            const characterName = JSON.parse(body).name;
            console.log(characterName);
            resolve();
          }
        });
      });
    }
  }
});
