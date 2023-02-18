const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let resultArr = [];
  let inputArr = [];
  let resultDecodedArr = [];
  function formatNumbStr(numbStr) {
    if (numbStr.startsWith("0")) {
      return formatNumbStr(numbStr.slice(1));
    } else {
      return numbStr;
    }
  }
  for (let i = 0; i < expr.length; i += 10) {
    inputArr.push(formatNumbStr(expr.slice(i, i + 10)));
  }
  inputArr.forEach((element) => {
    let relustMorseStr = "";
    for (let i = 0; i < element.length; i += 2) {
      if (element.slice(i, i + 2) == "11") {
        relustMorseStr += "-";
      } else if (element.slice(i, i + 2) == "10") {
        relustMorseStr += ".";
      } else {
        relustMorseStr += element.slice(i, i + 2);
      }
    }
    resultArr.push(relustMorseStr);
  });
  resultArr.forEach((element) => {
    if (element == "**********") {
      resultDecodedArr.push(" ");
    } else {
      resultDecodedArr.push(MORSE_TABLE[element]);
    }
  });
  return resultDecodedArr.join("");
}

module.exports = {
  decode,
};
