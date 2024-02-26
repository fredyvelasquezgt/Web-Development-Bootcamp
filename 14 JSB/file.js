function test() {
    var a = "3";
    var b = "8";
  
    /***********Do not change the code above 👆*******/
    //Write your code on lines 7 - 9:
   
    var c = a;
    a = b;
    b = c;
    /***********Do not change the code below 👇*******/
  
    console.log("a is " + a);
    console.log("b is " + b);
  }
  
  test()
  
  var tweetw = prompt('Insert your tweet: ');
var extension = 260;
var total = extension - tweetw.length;
console.log('Your tweet has ' + tweetw.length + ' caracters' + ' with ' + total + 
           ' caracters left');


           name = prompt("Enter your name: ")
           nameSlice = name.slice(0,1)
           nameUpper = nameSlice.toUpperCase()
           restName = name.slice(1, name.length)
           alert('Hello,  ' + nameUpper+restName)

           var dogAge = prompt("Enter your name: ")
           var humanAge = (dogAge - 2) * 4 + 21;
           console.log(humanAge)

           function main(){
            move();
            move();
            move();
            move();
            turnLeft();
            move();
            move();
            move();
            move();
         }
         
         /**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
  
  putBeeper();
  movement();
  putBeeper();
  movement();
  putBeeper();
  movement();
  putBeeper();
  movement();
  putBeeper();
  

}

function movement() {
  move();
  turnLeft();
  move();
  turnLeft();
  turnLeft();
  turnLeft();
}

function getMilk () {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}