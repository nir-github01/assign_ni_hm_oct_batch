function pattern(){
    var row_num =parseInt(prompt("Enter number"));
   
    for(let row=1; row<row_num; row++){
        let msg='';
        for(let column=1; column<=row; column++){
            msg=msg +"&nbsp" + column;
            //   console.log(""+ '*');
        }
       // console.log(msg)
       document.writeln(msg + '<br>')
    }
}

function starPattern(){
    var row_num =parseInt(prompt("Enter number"));
   
    for(let row=1; row<row_num; row++){
        let msg='';
        for(let column=1; column<=row; column++){
            msg=msg +"&nbsp" + '*';
            //   console.log(""+ '*');
        }
       // console.log(msg)
       document.writeln(msg + '<br>')
    }
}

