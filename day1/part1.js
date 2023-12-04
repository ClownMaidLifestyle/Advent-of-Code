import * as fs from 'fs';

//Variable bus stop
let rawInput; 
let inputArray;
let answer = 0;

let numKeys = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine"
};


console.log(numKeys[3])
//Document Parse 

function parseSplit(){
  rawInput = fs.readFileSync('./day1/input.txt', {encoding: 'utf8'}, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  inputArray = rawInput.split(" ");
}

parseSplit();

//Calibration calculator
function calculator(inputArray){
  for(i = 0; i < inputArray.length; i++){
    answer += calibrationFinder(inputArray[i]);
  }
  return(answer);
}

export function calibrationFinder(line){
  let pass = false;
  let num1 = 0;
  let num1Char = 0;
  let num2 = 0;
  let num2Char = 0;
  let value;

  for(let i = 1; i < 10; i++){
    let l = line.length;
    //nesting code feels yucky if there's a better way and you're reading this pls fix
    while(!pass){
      let findString = line.indexOf(numKeys[i])
      console.log(numKeys[i])
      console.log("finding string: " + findString)
      if (findString > -1){
        line.replace(numKeys[i], i);
      }
      else{
        pass = true;
      }
    }

    let cache = line.indexOf(i);
    if (cache <= num1Char && cache != -1){
      num1 = i;
      num1Char = cache;
    }
    cache = line.lastIndexOf(i);
    if (cache >= num2Char){
      num2 = i;
      num2Char = cache;
    }
  }

  value = (num1 * 10) + num2
  return(
    value
  )
}