function Rectangle(a, b) {
    let length = a;
    let width = b;
   let perimeter, area;
   perimeter=2*(length + width)
   area= length * width;
   if(a !=undefined && b !=undefined){
        console.log(length);
   console.log(width);
   console.log(perimeter);
   console.log(area); 
   }
  
}
let a = 4;
let b = 5;
Rectangle(a, b)


// Object Class method

function RectangleObj(a, b){
     this.length=a;
     this.width = b;
     this.perimeter=2*(this.length + this.width);
     this.area = this.length * this.width;
     console.log(this.length);
     console.log(this.width);
     console.log(this.perimeter);
     console.log(this.area);
}
rectangle(4, 5)