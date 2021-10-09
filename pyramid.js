// function pyramidPattern(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n - i; j++) {
//       str += " ";
//     }
//     for (let k = 0; k != 2 * i - 1; k++) {
//       str += "*";
//     }
//     for (let j = i + 1; j <= n; j++) {
//       str += " ";
//     }
//     console.log(str);
//   }
// }
// pyramidPattern(5);

/* function pyramidPattern(a) {
  let b = "";
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < a - i; j++) {
      b += " ";
    }
    for (let k = 0; k <= 2 * i; k++) {
      b += "*";
    }
    if (i !== a - 1) {
      b += "\n";
    }
  }
  return b;
} */

// function pyramidPattern(n) {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//       result += "  ";
//     }
//     for (let k = 0; k < i - 1; k++) {
//       result += "* ";
//     }
//     for (let k = 0; k < i; k++) {
//       result += "* ";
//     }
//     /*
//       for(let k=0;k=2*i-1;k++){
//       result+="*"
//       } */
//     // if (i !== n - 1) {
//     //   result += "\n";
//     // }

//     if (i < n) {
//       result += "\n";
//     }
//   }
//   return result;
// }

// console.log(pyramidPattern(5));

/* function printPattern(a) {
  let result = "";
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= i; j++) {
      result += i;
    }
    result += "\n";
  }
  return result;
}
console.log(printPattern(5)); */

/* function numberPattern(a) {
  let result = "";
  let count = 1;
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= i; j++) {
      result += count;
      count++;
    }
    result += "\n";
  }
  return result;
}
console.log(numberPattern(5)); */

/* function printPattern(a) {
  let result = "";
  for (let i = 1; i <= a; i++) {
    let count = i;
    for (let j = 1; j <= i; j++) {
      result += count;
      count -= 1;
    }
    result += "\n";
  }
  return result;
}
console.log(printPattern(5));
// 1
// 21
// 321
// 4321
// 54321
*/
/*
function printPattern(a) {
  let result = "";
  for (let i = 1; i <= a; i++) {
    let count = i;
    for (let j = 1; j <= a + 1 - i; j++) {
      result += count;
      count++;
    }
    result += "\n";
  }
  return result;
}
console.log(printPattern(5));
12345
2345
345
45
5
 */

function printPattern(a) {
  let result = "";
  for (let i = 1; i <= a; i++) {
    for (let k = 1; k <= i; k++) {
      result += " ";
    }
    for (let j = 1; j <= a + 1 - i; j++) {
      result += "* ";
    }

    result += "\n";
  }
  return result;
}
console.log(printPattern(5));
