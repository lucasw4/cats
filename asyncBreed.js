const fs = require('fs');

const breedDetailsFromFile = function(breed, cbf) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf-8', (error, data) => {
    console.log('In readFile\'s Callback: it has the data.');

    if (!error) cbf(data);
  });
};

const printCatBreed = function(breed) {
  console.log(`Return Value: ${breed}`);
};
breedDetailsFromFile('Bombay', printCatBreed);