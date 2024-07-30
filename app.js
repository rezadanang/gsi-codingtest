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

  function fungsiSatu(result) {
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

  
  
 
  let input = "Avenger Endgame";
  let output = convertToNumberFor(input);
  let finalResult = fungsiSatu(output);

 
  console.log("Input:", input); 
  console.log("Output:", output); 
  console.log("Hasil akhir setelah operasi:", finalResult);

  