const fs = require('fs');

const genders = ['M','F'];
const femaleNames = ['Eleonora', 'Kinga', 'Wiesława',  'Oliwia', 'Adela', 'Łucja', 'Izabella', 'Zuzanna', 'Bożena', 'Sara'];
const maleNames =['Fryderyk', 'Andrzej', 'Paweł', 'Piotr', 'Florian', 'Dominik', 'Leszek', 'Robert', 'Leonard',  'Lesław'];
const lastNames = ['Żelazko', 'Więcław', 'Balcer', 'Gajda', 'Bladowski', 'Skrzek', 'Ogórek', 'Skoneczny', 'Sobczyńska', 'Ogińska'];
const people = [];

const randomChoice = (random) => random[Math.floor(Math.random() * random.length)];



for (let i = 0; i < 20; i++){
  const gender = randomChoice(genders);
  const firstName = gender === 'M' ? randomChoice(maleNames) : randomChoice (femaleNames);
  const lastName = randomChoice(lastNames);
  const age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
  const phone = '+48 ' + Math.floor(100000000 + Math.random() * 900000000);
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;

  const person = {gender, firstName, lastName, age, phone, email};
  people.push(person);
}

const jsonFile = JSON.stringify(people, null, 2);

fs.writeFile('people.json', jsonFile, (err) => {
    if (err) {
      console.log('Mordeczko coś nie pykło! Obaczaj to: ', err);
    } else {
      console.log('Morde same sukcesy! Obczaj plik people.json')
    }
  });