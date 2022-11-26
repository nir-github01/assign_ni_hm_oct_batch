//1. square Star Pattern.

/** //Method 1 
let n= 5;
let msg= '' ;
for(let i=0; i<=n; i++){

    for(let j = 0; j<=n; j++){
    msg=msg + '*'; 
    }
    msg = msg + '\n';
  
}
console.log(msg) */

/** //Method 2 

let n= 5;
let msg ;
for(let i=0; i<=n; i++){
    msg='';
    for(let j = 0; j<=n; j++){
    msg=msg + '*'; 
    }
    console.log(msg)
}*/

/**Hollow Square Pattern  */

/** // Method 1 
let n= 5;
let msg= '' ;
for(let i=0; i<=n; i++){
    for(let j = 0; j<=n; j++){
       
        if(i==0 || i == n){
            msg=msg + '*';
        }else {
        if(j ==0 || j==n){
            msg=msg + '*';
        }else{
            msg = msg + ' '
        }
    
    }
}
   msg = msg + '\n';
   
}
console.log(msg)*/


/** //Method 2 
 * let n= 5;
let msg ;
for(let i=0; i<=n; i++){
    msg= '';
    for(let j = 0; j<=n; j++){
       
        if(i==0 || i == n){
            msg=msg + '*';
        }else {
        if(j ==0 || j==n){
            msg=msg + '*';
        }else{
            msg = msg + ' ';
        }
    
    }
}
 console.log(msg)
   
}

 */


/** Right Triangle Pattern */

// let n = 5;
// let msg = '';

// for (let i = 1; i <= n; i++) {
//     for (let k = 1; k <= n - i; k++) {
//         msg = msg + ' ';
//     }
//     for (let j = 1; j <= i; j++) {
//         msg = msg + '*';
//     }
//     msg = msg + '\n';
// }
// console.log(msg)


/**Left triangle Pattern */

// let n = 5; 
// let msg= '';
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         msg = msg + '*';
//     }
//     msg = msg + '\n';
// }
// console.log(msg);


/**Downward triangle pattern */

// let n=5;
// let msg="";

// for(let i=0 ; i<=n; i++){
//     for(let j=0; j<=n-i; j++){
//         msg = msg + '*';
//     }
//     msg=msg + '\n';
// }
// console.log(msg);


/**Hollow Triangle star */

// let n=5; 
// let msg="";
// for(let i=0; i<=n; i++){
//     for(let j=0; j<=i; j++){
//         if(i==0 || i==n){
//             msg = msg + '*';
//         }else{
//             if(j==0 || j ==i){
//                 msg = msg + "*";
//             }else{
//                 msg=msg + " ";
//             }
//         }
//     }
//     msg = msg + '\n';
// }
// console.log(msg);


/** 7 Pyramid Pattern */

// let n=5;
// let msg = '';

// for(let i=0; i<=n; i++){
//     for(let j=0; j<=n-i; j++){
//         msg= msg + ' ';
//     }

//     for(let k=0; k<=2*i; k++){
//         msg = msg + '*';
//     }
//     msg = msg + '\n';
// }
// console.log(msg)

/** 8. Reverse Pyramid Pattern */

// let n=5;
// let msg = '';

// for(let i=0; i<=n; i++){
//     for(let j=0; j<=i; j++){
//         msg= msg + ' ';
//     }

//     for(let k=0; k<=2*(n-i); k++){
//         msg = msg + '*';
//     }
//     msg = msg + '\n';
// }
// console.log(msg)


/**Hollow Pyramid Pattern  */

// let n=5;
// let msg = "";
// for(let i= 0; i<=n; i++){
//     for(let j=0; j<=n-i; j++){
        
//         msg=msg + ' ';
//     }
//     for(let k=0; k< 2*i; k++){
//         if(i==0|| i == n){
//             msg = msg + '*';
//         }else{
//             if(k ==0|| k == 2*i-1){
//                 msg =msg + '*'
//             }else{
//                 msg = msg + " ";
//             }
//         }
//     }
//   msg = msg + '\n'
// }
// console.log(msg);


/**Diamond star pattern  */
/** //Upside diamond  (Dowanward Pyramid) Pattern 
let n=5;
let msg = '';
for(let i=0; i<=n; i++){
    for(let j=0; j<=n-i; j++){
        msg= msg + ' ';
    }
    for(let k=0; k<=2*i; k++){
        msg = msg + '*';
    }
    msg = msg + '\n';
}
console.log(msg)
// Downward diamond(Reverse Pyramid) Pattern 
for(let i=0; i<=n; i++){
    for(let j=0; j<=i; j++){
        msg= msg + ' ';
    }

    for(let k=2*(n-i); k>= 0; k--){
        msg = msg + '*';
    }
    msg = msg + '\n';
}
console.log(msg)*/


/**HourGlass star Pattern */
/** //Upward hourGlass (Reverse Pyramid) Pattern 
let n=5;
let msg = '';
for(let i=0; i<=n; i++){
    for(let j=0; j<=i; j++){
        msg= msg + ' ';
    }
  for(let k=2*(n-i); k>= 0; k--){
        msg = msg + '*';
    }
    msg = msg + '\n';
}
console.log(msg)
 //Downward hourglass (Dowanward Pyramid) Pattern 
for(let i=0; i<=n; i++){
    for(let j=0; j<=n-i; j++){
        msg= msg + ' ';
    }
    for(let k=0; k<=2*i; k++){
        msg = msg + '*';
    }
    msg = msg + '\n';
}
console.log(msg)
*/


/**Right pascal star pattern */

// let n=5;
// let msg='';
// for(let i=0; i<=n; i++){
//     for(let j=0; j<=i; j++){
//         msg=msg + "*"
//     }
//     msg =msg + "\n";
// }
// console.log(msg)
// for(let i=0; i<=n; i++){
//     for(let j=n; j>=i; j--){
//         msg=msg + '*';
//     }
//     msg = msg+'\n';
// }
// console.log(msg)


//Left Pascal star Pattern

// let n=5;
// let msg='';
// for(let i=0; i<=n; i++){
//     for(let j=n; j>i; j--){
//         msg=msg + " "
//     }

//     for(let k=0; k<=i; k++){
//         msg =msg + '*';
//     }
//     msg =msg + "\n";
// }
// console.log(msg)
// for(let i=0; i<=n; i++){
//     for(let j=0; j<=i; j++){
//         msg=msg + ' ';
//     }
//     for(let k=n-1; k>=i; k--){
//         msg = msg + '*';
//     }
//     msg = msg+'\n';
// }
// console.log(msg)


/**Heart shape star pattern */

// var n = 6;
// var msg = "";
// for (let i = n / 2; i < n; i += 2) {
//   // print first spaces
//   for (let j = 1; j < n - i; j += 2) {
//     msg += " ";
//   }
//   // print first stars
//   for (let j = 1; j < i + 1; j++) {
//     msg += "*";
//   }
//   // print second spaces
//   for (let j = 1; j < n - i + 1; j++) {
//     msg += " ";
//   }
//   // print second stars
//   for (let j = 1; j < i + 1; j++) {
//     msg += "*";
//   }
//   msg += "\n";
// }
// // lower part
// // inverted pyramid
// for (let i = n; i > 0; i--) {
//   for (let j = 0; j < n - i; j++) {
//     msg += " ";
//   }
//   for (let j = 1; j < i * 2; j++) {
//     msg += "*";
//   }
//   msg += "\n";
// }
// console.log(msg);