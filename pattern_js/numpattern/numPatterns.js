//1. square number Pattern.

/** //Method 1 
let n= 5;
let msg= '' ;
for(let i=0; i<=n; i++){

    for(let j = 0; j<=n; j++){
    msg=msg + ' '+ j; 
    }
    msg = msg + '\n';
  
}
console.log(msg) */

/**Hollow Square Pattern  */

 /** // Method 1 
let n= 5;
let msg= '' ;
for(let i=0; i<=n; i++){
    for(let j = 0; j<=n; j++){
       
        if(i==0 || i == n){
            msg=msg + j;
        }else {
        if(j ==0 || j==n){
            msg=msg + j;
        }else{
            msg = msg + ' '
        }
    
    }
}
   msg = msg + '\n';
   
}
console.log(msg)
*/


/** Right Triangle number Pattern */

// let n = 5;
// let msg = '';

// for (let i = 1; i <= n; i++) {
//     for (let k = 1; k <= n - i; k++) {
//         msg = msg + ' ';
//     }
//     for (let j = 1; j <= i; j++) {
//         msg = msg + j;
//     }
//     msg = msg + '\n';
// }
// console.log(msg)

/**4 Left triangle number Pattern */

// let n = 5; 
// let msg= '';
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         msg = msg + j;
//     }
//     msg = msg + '\n';
// }
// console.log(msg);

/**5 Downward triangle number pattern */

// let n=5;
// let msg="";

// for(let i=0 ; i<=n; i++){
//     for(let j=0; j<=n-i; j++){
//         msg = msg + j;
//     }
//     msg=msg + '\n';
// }
// console.log(msg);


/**6 Hollow Triangle number Pattern*/

// let n=5; 
// let msg="";
// for(let i=0; i<=n; i++){
//     for(let j=0; j<=i; j++){
//         if(i==0 || i==n){
//             msg = msg + j;
//         }else{
//             if(j==0 || j ==i){
//                 msg = msg + j;
//             }else{
//                 msg=msg + " ";
//             }
//         }
//     }
//     msg = msg + '\n';
// }
// console.log(msg);


/** 7 Pyramid number Pattern */

// let n=5;
// let msg = '';

// for(let i=0; i<=n; i++){
//     for(let j=0; j<=n-i; j++){
//         msg= msg + ' ';
//     }

//     for(let k=0; k<=2*i; k++){
//         msg = msg + k;
//     }
//     msg = msg + '\n';
// }
// console.log(msg)


/** 8. Reverse Pyramid number Pattern */

// let n=5;
// let msg = '';

// for(let i=0; i<=n; i++){
//     for(let j=0; j<=i; j++){
//         msg= msg + ' ';
//     }

//     for(let k=0; k<=2*(n-i); k++){
//         msg = msg + k;
//     }
//     msg = msg + '\n';
// }
// console.log(msg)


/**9 Hollow Pyramid number Pattern  */

// let n=5;
// let msg = "";
// for(let i= 0; i<=n; i++){
//     for(let j=0; j<=n-i; j++){
        
//         msg=msg + ' ';
//     }
//     for(let k=0; k< 2*i; k++){
//         if(i==0|| i == n){
//             msg = msg + k;
//         }else{
//             if(k ==0|| k == 2*i-1){
//                 msg =msg + k
//             }else{
//                 msg = msg + " ";
//             }
//         }
//     }
//   msg = msg + '\n'
// }
// console.log(msg);




/**10 Diamond number pattern  */
 //Upside diamond  (Dowanward Pyramid) Pattern 
// let n=5;
// let msg = '';
// for(let i=0; i<=n; i++){
//     for(let j=0; j<=n-i; j++){
//         msg= msg + ' ';
//     }
//     for(let k=0; k<=2*i; k++){
//         msg = msg + k;
//     }
//     msg = msg + '\n';
// }
// console.log(msg)
// // Downward diamond(Reverse Pyramid) Pattern 
// for(let i=0; i<=n; i++){
//     for(let j=0; j<=i; j++){
//         msg= msg + ' ';
//     }

//     for(let k=2*(n-i); k>= 0; k--){
//         msg = msg + k;
//     }
//     msg = msg + '\n';
// }
// console.log(msg)


/**11. HourGlass star Pattern */
/** //Upward hourGlass (Reverse Pyramid) Pattern 
let n=5;
let msg = '';
for(let i=0; i<=n; i++){
    for(let j=0; j<=i; j++){
        msg= msg + ' ';
    }
  for(let k=2*(n-i); k>= 0; k--){
        msg = msg + k;
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
        msg = msg + k;
    }
    msg = msg + '\n';
}
console.log(msg)
*/


/**12 Right pascal number pattern */

// let n=5;
// let msg='';
// for(let i=0; i<=n; i++){
//     for(let j=0; j<=i; j++){
//         msg=msg + j
//     }
//     msg =msg + "\n";
// }
// console.log(msg)
// for(let i=0; i<=n; i++){
//     for(let j=n; j>=i; j--){
//         msg=msg + j;
//     }
//     msg = msg+'\n';
// }
// console.log(msg)



/**13 Heart shape star pattern */

var n = 6;
var msg = "";
for (let i = n / 2; i < n; i += 2) {
  // print first spaces
  for (let j = 1; j < n - i; j += 2) {
    msg += " ";
  }
  // print first stars
  for (let j = 1; j < i + 1; j++) {
    msg += j;
  }
  // print second spaces
  for (let j = 1; j < n - i + 1; j++) {
    msg += " ";
  }
  // print second stars
  for (let j = 1; j < i + 1; j++) {
    msg += j;
  }
  msg += "\n";
}
// lower part
// inverted pyramid
for (let i = n; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    msg += " ";
  }
  for (let j = 1; j < i * 2; j++) {
    msg += j;
  }
  msg += "\n";
}
console.log(msg);