function convertToNumberFor(input) {
  const charToNumber = {
    'A': 0, 'B': 1, 'C': 1, 'D': 1, 'E': 2, 'F': 3, 'G': 3, 'H': 3,
    'I': 4, 'J': 5, 'K': 5, 'L': 5, 'M': 5, 'N': 5, 'O': 6, 'P': 7,
    'Q': 7, 'R': 7, 'S': 7, 'T': 7, 'U': 8, 'V': 9, 'W': 9, 'X': 9,
    'Y': 9, 'Z': 9, 'a': 9, 'b': 8, 'c': 8, 'd': 8, 'e': 7, 'f': 6,
    'g': 6, 'h': 6, 'i': 5, 'j': 4, 'k': 4, 'l': 4, 'm': 4, 'n': 4,
    'o': 3, 'p': 2, 'q': 2, 'r': 2, 's': 2, 't': 2, 'u': 1, 'v': 0,
    'w': 0, 'x': 0, 'y': 0, 'z': 0, ' ': 0
  };

  let result = '';
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (charToNumber[char] !== undefined) {
      result += charToNumber[char];
    } else {
      result += '';
    }
  }
  
  return result;
}

function operasiSatu(result) {
  let sum = 0;
  let operator = '+'; // mulai dengan operator penjumlahan
  let operations = []; // array untuk menyimpan operasi
  let isFirst = true; // tanda digit pertama
  
  for (let i = 0; i < result.length; i++) {
    let digit = parseInt(result[i], 10);
    
    if (isFirst) {
      // digit pertama tidak perlu operator
      sum += digit;
      operations.push('' + digit);
      isFirst = false;
    } else {
      if (operator === '+') {
        sum += digit;
        operations.push('+' + digit);
        operator = '-'; // ganti ke pengurangan setelah penjumlahan
      } else if (operator === '-') {
        sum -= digit;
        operations.push('-' + digit);
        operator = '+'; // ganti ke penjumlahan setelah pengurangan
      }
    }
  }

  // gabungkan array operasi menjadi string dengan spasi di antara elemen
  let operationString = operations.join(' ').trim();
  
  console.log("Urutan operasi: " + operationString); // menampilkan urutan operasi

  return sum;
}


  
function convertNumberToChar(number) {
    const numberToChar = {
      0: 'A', 1: 'B', 2: 'E', 3: 'F', 4: 'I', 5: 'J', 6: 'O', 7: 'P', 8: 'U', 9: 'V'
    };
  
    return numberToChar[number];
  }
  
  function convertNumberStringToCharString(numberString) {
    let charString = '';
    for (let i = 0; i < numberString.length; i++) {
      let number = parseInt(numberString[i], 10);
      charString += convertNumberToChar(number);
    }
    return charString;
  }

  function convertCharToNumberString(charString) {
    const charToNumber = {
      'A': 0, 'B': 1, 'C': 1, 'D': 1, 'E': 2, 'F': 3, 'G': 3, 'H': 3,
      'I': 4, 'J': 5, 'K': 5, 'L': 5, 'M': 5, 'N': 5, 'O': 6, 'P': 7,
      'Q': 7, 'R': 7, 'S': 7, 'T': 7, 'U': 8, 'V': 9, 'W': 9, 'X': 9,
      'Y': 9, 'Z': 9
    };
  
    let numberString = '';
    for (let i = 0; i < charString.length; i++) {
      let char = charString[i];
      if (charToNumber[char] !== undefined) {
        numberString += charToNumber[char];
      } else {
        numberString += '';
      }
    }
    
    return numberString;
  }

  function performFinalOperation(charString) {
    let numberString = convertCharToNumberString(charString);
    let finalNumberString = Math.abs(operasiSatu(numberString)).toString();
    return convertNumberStringToCharString(finalNumberString);
  }
  

let input = "Titanic";
let output = convertToNumberFor(input);
let operasi1 = operasiSatu(output);
let operasi2 = convertNumberStringToCharString(output);
let operasi3 = performFinalOperation(operasi2);

console.log("Input:", input);
console.log("Output:", output);
console.log("Hasil dari operasi nomor 2:", operasi1);
console.log("Hasil dari operasi nomor 3:", operasi2);
console.log("Hasil dari operasi nomor 4:", operasi3);