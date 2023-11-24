const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(apiUrl, (error, response, body) => {
   
    const data = JSON.parse(body);
  
    if (error) {
      callback(error, null);
    } else if (data.length === 0) {
      callback('Breed not found. Please try another breed name.', null);
    } else {
      // call the callback with null for error and the description from the body
      callback(null, data[0].description);
    }

  });
};


module.exports = { fetchBreedDescription };