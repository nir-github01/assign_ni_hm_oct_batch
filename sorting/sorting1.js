// step 1:start;
// step 2:variable declaration;
// step 3:looping for each element;
// step 4:compare and swap element;
// step N:end;

function sortElem() {
var arr=[5, 7, 4, 9, 2, 8];
// var inputValue=document.getElementById('sortnum').value;
// var arr =new Array(inputValue);
for(let i=0; i<arr.length; i++){
    for(j=i+1; j<=arr.length; j++){
        if(arr[i] > arr[j]){
            var temp=arr[i];
            arr[i] =arr[j];
            arr[j] = temp;
        }
    }
}
document.writeln(arr)
//console.log(arr);
}


//Duplicate value

//step 1:start;
//step 2:declare variable;
//step 3:looping for each element;
//step 4:condition/compare each element;
//step N:end;

function duplicateNum(){
    var arr=[6, 9, 6, 7, 9, 8, 7];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<=arr.length; j++){
            if(arr[i] == arr[j]){
                document.writeln(arr[i]);

            }
        }
    }
}