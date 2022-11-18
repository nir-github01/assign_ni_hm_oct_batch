//Question 1

// let str= "abcdefgh abcdefgh abcdefgh";
// let arr=str.split(" ");
// console.log(arr.length);//3
// if(str.length > 10){
//     console.log("YES");
// }else{
//     console.log("No");
// }

//Question 2

// let str= "abcdefgh";

// for(let i=0; i<str.length; i++){
//     str=str[i];
//     console.log(str)
// }
// for(let char of str){
//     console.log(char);
// }
// let arr=str.split(" ");
// console.log(arr.length);//3
// if(str.length > 10){
//     console.log("YES");
// }else{
//     console.log("No");
// }


//Question 3  print vowels 

// let str = "ABCDEFGHI";

// let vowels=['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i','o', 'u'];

// for(let char of str){
//     if(vowels.includes(char)){
//         console.log(char);
//     }
// }     

//Question 4

// let str = "ABCDEFGHI";

// let vowels=['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i','o', 'u'];
// let arrCount=[];
// let count=0;
// for(let char of str){
//     if(vowels.includes(char)){
//        arrCount.push(char);
      
//        //or
//         count =count + 1;
//     }
//     // console.log(arrCount.length);
//    // console.log(count);
// } 
// console.log(arrCount.length);
// console.log(count);


//Question 5  change upper to lower or vice versa

// a-z   i.charCodeAt(0)>="a".charCodeAt(0) and i.charCodeAt(0)<="z".charCodeAt(0)
// A-Z   i.charCodeAt(0)>="A".charCodeAt(0) and i.charCodeAt(0)<="Z".charCodeAt(0)

//method 1

// let str = "AbcDeFghijl";

// for(let char of str){
//     if(char == char.toLowerCase()){
//         console.log(char.toUpperCase())
//     }else{
//         console.log(char.toLowerCase())
//     }
// }

//Method 2


// let str = "AbcDeFghijl";

// for(let char of str){
//     if( char.charCodeAt(0)>="a".charCodeAt(0) && char.charCodeAt(0)<="z".charCodeAt(0)){
//         console.log(char.toUpperCase())
//     }else{
//         console.log(char.toLowerCase())
//     }
// }

//Question 7  check duplicate strings;

// let str = "aaaBcccArdghram";
// let aarStr = str.split("");
// let arr=[];
// let key='ram';

// for(let i =0; i<aarStr.length; i++){
//     // if(aarStr[i] == 'ram'){
//     //     console.log('ram')
//     // }else{
//     //     console.log(aarStr);
//     // }

//     if(key.includes(aarStr)){
//         console.log('ram')
//     }else{
//         console.log(str)
//     }
// }

// const  input ="scramble"
// const result ="ram";
// if(result.substring(input)){
//     console.log("Yes")
// }
// else{
//     console.log("No")
// }

//Method 3 to get substring from string

// const indexofr=input.indexOf('r');
// const substr = input.substring(indexofr, indexofr+3);
// let key = 'ram';
// console.log(substr);
// if(substr == key){
//     console.log(substr);
// }

//Question 9. Read an inout string and print the last 4 characters of the input as a string.

let str9 = "adhjk";
let n = str9.length;
let m= n-4;
let newStr = '';
for(let i=m; i<str9.length; i++){
  newStr +=str9[i];
}
 console.log(newStr);