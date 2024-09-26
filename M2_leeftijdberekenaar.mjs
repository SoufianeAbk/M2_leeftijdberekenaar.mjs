import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let toekomstjaar = parseFloat(await userInput.question('Geef een getal in voor toekomstjaar:'));
console.log(toekomstjaar); 

let geboortejaar = parseFloat(await userInput.question('Geef een getal in voor geboortejaar:'));
console.log(geboortejaar);

let uitkomst;

uitkomst = toekomstjaar - geboortejaar;
console.log(" in " + toekomstjaar + " zal ik " + uitkomst + " zijn");
console.log(uitkomst);
