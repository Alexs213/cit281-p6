function perfunc(total,num){
    return total + num
}
class Shape {
    constructor(sides = []) {
      this.sides = sides;
      this.perimeter = () => (this.sides != 0 ? this.sides.reduce(perfunc) : 0);
    }
    //perimeter = () => (this.sides!= null ? this.sides.reduce(perfunc):0)
}

/*console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0*/

class Rectangle extends Shape{
    constructor(
        length = 0,
        width = 0
        ) {
      super ([length, width, length, width])
      //super = () => (length, width,length,width)
      this.length = length
      this.width = width
      //this.perimeter = () => (this.sides!= null ? this.sides.reduce(perfunc):0)
    }
   area = () => {
    return this.length * this.width
   }
}
/*console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0*/

class Triangle extends Shape{
    constructor(
        sideA = 0,
        sideB = 0,
        sideC = 0
        ) {
      super ([sideA,sideB,sideC])
      this.sideA = sideA
      this.sideB = sideB
      this.sideC = sideC
      //this.perimeter = () => (this.sides!= null ? this.sides.reduce(perfunc):0)
    }
    area = () => {
   let perm=(this.sideA + this.sideB+ this.sideC)/2
   let area = Math.sqrt(perm*(perm-this.sideA)*(perm-this.sideB)*(perm-this.sideC))
   return area
    }
}
/*console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0 */

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
for(x of data){
    let one = null;
switch(x.length) {
    case 2:
        
        one = new Rectangle(x[0],x[1]) 
    if(x[0] != x[1]){
    console.log(`Rectangle with sides ${x} has perimiter of ${one.perimeter()} and area of ${one.area()}`)
    //console.log(`Rectangle with sides ${x} has perimiter of ${new Rectangle(x).perimeter()} and area of ${new Rectangle(x).area()}`)
    }else{ 
        console.log(`Square with sides ${x} has perimiter of ${one.perimeter()} and area of ${one.area()}`)
    }
    
    break;

    case 3: 
    one = new Triangle(...x)
    //let ran = new Triangle(...x)
    console.log(`Triangle with sides ${x} has perimiter of ${one.perimeter()} and area of ${one.area()}`)
    //console.log(`Triangle with sides ${x} has perimiter of ${new Triangle(...x).perimeter()} and area of ${new Triangle(...x).area()}`)
    //console.log(`Triangle with sides ${x} has perimiter of ${ran.perimeter()} and area of ${ran.area()}`)
    break;

    //case 1: 
    //console.log(`Shape with ${x} side unsupported`)
    //break;

    default: 
    console.log(`Shape with ${x.length} side unsupported`)
    break;
}
}