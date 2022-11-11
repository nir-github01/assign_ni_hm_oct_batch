function pattern(){
    let row_num =parseInt(prompt("Enter number"));
   
    for(let row=1; row<=row_num; row++){
        let msg='';
        for(let column=1; column<=row; column++){
          
                msg=msg + " &nbsp" + column; 
               // document.writeln(msg + '<br>')
           for(let k=1; k<=column; column++){
               msg=k;
           }
        }
        document.writeln(msg + '<br>')
       // console.log(msg)
       // document.getElementById('pattern').innerHTML=" " + msg;
    }
}
function printNum()
{
    let n =parseInt(prompt('Enter value of n'));
    for(let i=1; i<=n; i++){
      
       document.writeln(i+'<br>')
        //document.getElementById('numseries').innerHTML= i;
    }
}
 

