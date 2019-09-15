//Turn ALL the functions in the following code to arrow functions

var url =
  'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick';

//function 1
var makeApiRequest = () => {
  fetch(url)
    .then(response => response.json())
    .then(parsedResponse => console.log(parsedResponse))
    .catch(error => console.log(error))
}

makeApiRequest();

//function 2

var multiplyByFive = num => num * 5;

console.log(multiplyByFive(5));

//function 3

var addThreeNums = (num1, num2, num3) => num1 + num2 + num3;

console.log(addThreeNums(5, 10, 32));

//function 4

var upperCaseFun = str => {
  console.log(str);
  return str.toUpperCase();
};

console.log(upperCaseFun('ameera'));

//function 5
var marineAnimals = ['FISH', 'SHRIMP', 'SHARK', 'OCTOPUS', 'SQUID', 'WHALE'];

var toLowerCaseAnimals = seaAnimals => {
    var lowerCaseSeaAnimals = seaAnimals.map(seaAnimal => seaAnimal.toLowerCase());
}

toLowerCaseAnimals(marineAnimals);
console.log(...marineAnimals);

//function 6
var numbers = [1, 2, 3, 4];

var reducedNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(reducedNumbers);