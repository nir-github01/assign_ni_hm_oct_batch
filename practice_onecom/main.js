//print 4 row and 5 column star.

//method 1
// for(let i=0; i<4; i++){
//     console.log('*****')
// }

//method 2


//Q2.
// let msg='*'
//  for(let i=1; i<5; i++){
//     msg=''
//     for(let j=1; j<=i; j++ ){
//   //console.log(message);
//   msg=msg + j;
//     }
//     console.log(msg)
//  }

//Q3

// let msg='*'
//  for(let i=1; i<5; i++){
//     msg=''
//     for(let j=1; j<=i; j++ ){
//   //console.log(message);
//   msg=msg + i;
//     }
//     console.log(msg)
//  }

// let msg='*'
// let row=1;
//  for(let i=1; i<5; i++){
//     msg=''
    
//     for(let j=1; j<=i; j++ ){
//   //console.log(message);
//   msg=msg + row + '';
//   row=row + 1;
//     }
//     console.log(row)
//  }

// let count='';
// for (i = 1; i < 6; i++) {

//             for (j = 1; j <= i; j++) {
    
//                count=count + 1
    
//           count=!count;
    
//             }
    
//             count = i % 2;
    
//             console.log(count)
    
//         }

//     let k=0;
// for(let i=1;i<=6;i++)
//       {
//        msg=""
//         for(let j=1;j<=i;j++)
//         {
//           k=!k
//           if(k==true)
//           {
//             msg=msg+"1"
//           }
//           else
//           {
//              msg=msg+"0"
//           }
//         }
//          k=i%2
//         console.log(msg);
        
        
//       }
// let count='';
// for(let i=1; i<6; i++){
//     for(j=0; j<2*i; j++){
//         count=j%2;

//         console.log(count)
//         //console.log('\n');
//     }
//    // console.log(count)
  
// }

// let msg='';
//  for(let i=0; i<4; i++){
//    msg='*'
//    for(let j=1; j<5; j++){
//      msg= msg + '*';
    
//    }
//    console.log(msg);
//  }

//merge two array alternatively 

// let arr1 = [1,2,3,4,5,6,7];
// let arr2 = ['a','b','c','d','e','f'];

// let combarr = [];
// let count =1;

// for(let i=0; i<arr1.length; i++){
//   for(let j=0; j<arr2.length; j++){
//     if(i == j ){
      
//       combarr.push(arr1[i], arr2[j] );
//       //combarr.push(arr1[i], arr2[j]+arr2[j+1]);
//     }

//     }

//   }
   
// console.log(count)
// console.log(combarr)

//sorted array with looping/selection sort

// let darr= [1,2,7,3,2,1,7,9,8,4,1,2];
// let temp;
// let sortarr=[];
// for(let i=0; i<darr.length; i++){
//   for(let j=i+1; j<darr.length; j++){
//     if(darr[i] > darr[j]){
//       temp=darr[i];
//       darr[i]=darr[j];
//       darr[j] = temp;
      
//     }
//   }
// }
//  console.log(darr)  

// let darr= [1,2,7,3,2,1,7,9,8,4,1,2, 8, 10, 11, 12, 20, 10];
// let temp;
// let sortarr=[];
// for(let i=0; i<darr.length; i++){
//   for(let j=i+1; j<darr.length; j++){
//     if(darr[i] > darr[j]){
//       temp=darr[i];
//       darr[i]=darr[j];
//       darr[j] = temp;
      
     
//     }
//     if(darr[i] == darr[j]){
//       sortarr.push(darr[i]);
//     }
   
//   }

// }
// console.log(sortarr)//find duplicate numbers
//  console.log(darr)  //find sorted array 

// let darr= [1,2,7,3,2,1,7,9,8,4,1,2, 8, 10, 11, 12, 20, 10];
// let temp;
// let sortarr=[];
// let n = darr.length;
// let m = n/2;
// let pivot=4;
//console.log(darr[9])
//console.log(n, m)
// for(let i=0; i<=m; i++){
//   for(let j=18; j>m; j--){
//     if(darr[i] > pivot ){
     
//     }
//     if(darr[i] == darr[j]){
//       sortarr.push(darr[i]);
//     }
   
//   }

// }
//console.log(sortarr)//find duplicate numbers
//  console.log(darr)  //find sorted array 


let row_num=6;
let msg;
console.log('hello');
for(let i=1; i<=row_num; i++){
     msg='';
    for(let j=1; j<=i; j++){
           msg=msg + " " + j; 
           //console.log(msg)
       for(let k=1; k<=j; k++){
           msg=k;
           console.log(msg)
        }
    }
   // console.log(msg)
}
//console.log(msg)