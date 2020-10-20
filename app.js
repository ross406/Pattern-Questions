// 1
// 2 3
// 3 4 5
// 4 5 6 7

// let string = '';

// for (let i = 1; i < 5; i++) {

//   for (let j = 1; j <= i; j++) {
//     string += j + i - 1;
//     string += ' ';
//   }

//   string += '\n';
// }

// console.log(string);

// *********************************************

// * * * * *
// * * * *
// * * *
// * *
// *

// let string = '';

// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j >= i; j--) {
//     string += '*';
//     string += ' ';
//   }
//   string += '\n';
// }

// console.log(string);

// ********************************************

// let string = '';

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += j + i - 1;
//     string += ' ';
//   }
//   string += '\n';
// }

// console.log(string);


// *****************************************

// let string = '';

// function pattern(row, col) {

//   for(let i=1; i<=row; i++) {
//     for(let j=1; j<=col; j++) {
//       if(i===1 || i===row || j===1 || j===col ) {
//         string+='* ';
//       } else {
//         string+='  ';
//       }
      
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(10,7);

// * * * * *
// * * * *
// * * *
// * *
// *

// let string = '';

// function pattern(num) {

//   for(let i=num; i>=1; i--) {
//     for(let j=1; j<=i; j++) {
//       string+='* ';
      
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(7);



  //        *
  //       * *
  //      * * *
  //     * * * *
  //    * * * * *
  //   * * * * * *
  //  * * * * * * *


// let string = '';

// function pattern(num) {
 

//   for(let i=1; i<=num; i++) {
//     let  spaces = num-i; 
//     for(let x=1; x<=spaces; x++) {
//       string+=" ";
//     }
//     for(let j=1; j<=i; j++) {
//       string+='*';
      
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(7);


//        *
//       **
//      ***
//     ****
//    *****
//   ******
//  *******

let string = '';

function pattern(num) {
 

  for(let i=1; i<=num; i++) {
    let  spaces = num-i; 
    for(let x=1; x<=spaces; x++) {
      string+=" ";
    }
    for(let j=1; j<=i; j++) {
      string+='* ';
      
    }
    string+='\n';
  } 

  console.log(string);
}

pattern(7);
