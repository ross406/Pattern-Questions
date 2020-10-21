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


// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1



// let string = '';

// function pattern(num) {
 

//   for(let i=num; i>=1; i--) {
   
   
//     for(let j=1; j<=i; j++) {
//      string+=j;
//      string+=' ';
     
      
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(5);


// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// let string = '';

// function pattern(num) {
 

//   for(let i=1; i<=num; i++) {
   
   
//     for(let j=1; j<=num+1-i; j++) {
//      string+=j;
//      string+=' ';
     
      
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(5);

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1


// let string = '';

// function pattern(num) {
 
//   let n = 1;

//   for(let i=1; i<=num; i++) {
   
   
//     for(let j=1; j<=i; j++) {
   
//     if((i+j) % 2 === 0) {
//       string+='1'
//     } else {
//       string+='0'      
//     }    
//     string+=' ';      
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(5);

//     # # # # #
//    # # # # #
//   # # # # #
//  # # # # #
// # # # # #


// let string = '';

// function pattern(num) {
 


//   for(let i=1; i<=num; i++) {
   
//     for(let j=1; j<=num-i; j++) {
//       string+=' ';
//     }
   
//     for(let j=1; j<=num; j++) {
      
//        string+="# "
   
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(5);



// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let string = '';

// function pattern(num) {
 

//   for(let i=1; i<=num; i++) {
//     for(let j=1; j<=num-i; j++) {
//             string+=' ';
//           }
   
//     for(let j=1; j<=i; j++) {
//      string+=j;
//      string+=' ';
      
      
//     }
//     string+='\n';
//   } 

//   console.log(string);
// }

// pattern(5);

// Palindrome

  //         1
  //       2 1 2
  //     3 2 1 2 3
  //   4 3 2 1 2 3 4
  // 5 4 3 2 1 2 3 4 5


// let string = '';

// function pattern(num) {

//   for(let i=1; i<=num; i++) {
//     let j;

//     for(j=1; j<=num-i; j++){
//       string+='  ';
//     }

//     let k=i;

//     for(; j<=num;j++){
//         string+=k--;
//         string+=' ';
//     }

//     k=2;

//     for(; j<=num+i-1;j++){
//       string+=k++;
//       string+=' ';
//     }

//     string+='\n'

//   }

//   console.log(string)

// }

// pattern(5);

    //       #
    //     # # #
    //   # # # # #
    // # # # # # # #
    // # # # # # # #
    //   # # # # #
    //     # # #
    //       #


// let string = '';

// function pattern(num){

//   for(let i=1; i<=num; i++){
//     for(let j=1; j<=num-i; j++) {
//       string+="  ";
//     }
//     for(let j=1; j<=i*2-1; j++) {
//       string+="# ";
//     }
//     string+='\n';
//   }

//   for(let i=num; i>=1; i--){
//     for(let j=1; j<=num-i; j++) {
//       string+="  ";
//     }
//     for(let j=1; j<=i*2-1; j++) {
//       string+="# ";
//     }
//     string+='\n';
//   }

//   console.log(string);
// }

// pattern(4);


  //       #
  //     # #
  //   # # #
  // # # # #
  // # # # #
  //   # # #
  //     # #
  //       #


// let string = '';

// function pattern(num){

//   for(let i=1; i<=num; i++){
//     for(let j=1; j<=num-i; j++) {
//       string+="  ";
//     }
//     for(let j=1; j<=i; j++) {
//       string+="# ";
//     }
//     string+='\n';
//   }

//   for(let i=num; i>=1; i--){
//     for(let j=1; j<=num-i; j++) {
//       string+="  ";
//     }
//     for(let j=1; j<=i; j++) {
//       string+="# ";
//     }
//     string+='\n';
//   }

//   console.log(string);
// }

// pattern(4);

    //     #
    //    # #
    //   # # #
    //  # # # #
    //  # # # #
    //   # # #
    //    # #
    //     #

// let string = '';

// function pattern(num){

//   for(let i=1; i<=num; i++){
//     for(let j=1; j<=num-i; j++) {
//       string+=" ";
//     }
//     for(let j=1; j<=i; j++) {
//       string+="# ";
//     }
//     string+='\n';
//   }

//   for(let i=num; i>=1; i--){
//     for(let j=1; j<=num-i; j++) {
//       string+=" ";
//     }
//     for(let j=1; j<=i; j++) {
//       string+="# ";
//     }
//     string+='\n';
//   }

//   console.log(string);
// }

// pattern(4);



const pattern = (num) => {

  let string = '';

  for(let i=1; i<=3; i++) {
    for(let j=1; j<=num; j++){
      if(((i+j) % 4 === 0) || (i===2  && j%4 ===0)) {
        string+="# ";
      } else {
        string+="  ";
      }
    }

    string+='\n';
  }

  console.log(string);
}

pattern(9);