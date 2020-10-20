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

// let string = '';

// function pattern(num) {
 

//   for(let i=1; i<=num; i++) {
//     let  spaces = num-i; 
//     for(let x=1; x<=spaces; x++) {
//       string+=" ";
//     }
//     for(let j=1; j<=i; j++) {
//       string+='* ';
      
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(7);

// optimised

//        *
//       **
//      ***
//     ****
//    *****
//   ******
//  *******

// let string = '';

// function pattern(num) {
 

//   for(let i=1; i<=num; i++) {
   
   
//     for(let j=1; j<=num; j++) {
//       if(j<=num-i){
//         string+="  ";
//       } else {

//         string+='* ';
//       }

      
      
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(7);

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777


// let string = '';

// function pattern(num) {
 

//   for(let i=1; i<=num; i++) {
   
   
//     for(let j=1; j<=i; j++) {
//      string+=i;

      
      
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(7);


// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let string = '';

// function pattern(num) {
 

//   for(let i=1; i<=num; i++) {
   
   
//     for(let j=1; j<=i; j++) {
//      string+=j;
//      string+=' ';
      
      
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(5);

// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9

// let string = '';

// function pattern(num) {
 

//   for(let i=1; i<=num; i++) {
   
   
//     for(let j=1; j<=i; j++) {
//      string+=j+i-1;
//      string+=' ';
      
      
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(5);


// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let string = '';

// function pattern(num) {
 
//   counter = 1;
//   for(let i=1; i<=num; i++) {
   
   
//     for(let j=1; j<=i; j++) {
//      string+=counter;
//      string+=' ';
//      counter++;
      
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(5);


// *                 *
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *

// let string = '';

// function pattern(num) {
 
  
//   for(let i=1; i<=num; i++) {
   
   
//         for(let j=1; j<=i; j++) {
//         string+='* ';
//         }
//         let spaces = 2*num - 2*i;

//         for(let j=1; j<=spaces; j++) {
//           string+='  ';
//         }

//         for(let j=1; j<=i; j++) {
//           string+='* ';
//         }

    

//     string+='\n';
//   } 

//   for(let i=num; i>=1; i--) {
   
   
//     for(let j=1; j<=i; j++) {
//     string+='* ';
//     }
//     let spaces = 2*num - 2*i;

//     for(let j=1; j<=spaces; j++) {
//       string+='  ';
//     }

//     for(let j=1; j<=i; j++) {
//       string+='* ';
//     }



// string+='\n';
// } 

//   console.log(string);
// }

// pattern(5);



