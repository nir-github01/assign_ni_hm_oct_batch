function pattern(){
    let row_num =parseInt(prompt("Enter number"));
   
for(let row=1; row<row_num; row++){
    let msg ='';
    for(let space=row_num; space>row; space--){
      msg = msg +'&nbsp';
    }
    for(let column=1; column<=row; column++){
       // msg=msg +"" + column;
        msg=msg +"&nbsp" + '*';
        //   console.log(msg);
       // document.write(msg + '<br>')
    }
    //console.log(msg)
     document.writeln(msg + '<br>')
}
}


function num_Pattern(){
    let row_num =parseInt(prompt("Enter number"));
   
for(let row=1; row<row_num; row++){
    let msg ='';
    for(let space=row_num; space>row; space--){
      msg = msg +'&nbsp';
    }
    for(let column=1; column<=row; column++){
       // msg=msg +"" + column;
        msg=msg +"&nbsp" + column;
        //   console.log(msg);
       // document.write(msg + '<br>')
    }
    //console.log(msg)
     document.writeln(msg + '<br>')
}
}

   