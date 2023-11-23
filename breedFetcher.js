const request = require('request');
//const apiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=sib';
let apiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedToSearch = process.argv[2];
// if no argument is passed
if (!breedToSearch) {
  console.error('Please provide a breed name as a command-line argument.');
  process.exit(1);
}

apiUrl += `${breedToSearch}`;

request(apiUrl, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode); // checking if response exists (is truthy), and if it does, it then accesses the statusCode property of the response object
  console.log('body:', body);
  console.log(typeof body);

  //convert string to object
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);

  if (data.length === 0) {
    console.log('Breed not found. Please try another breed name.');
  } else {
    // print description of the first element in the array of objects (i.e., data)
    console.log(data[0].description);
  }


});
