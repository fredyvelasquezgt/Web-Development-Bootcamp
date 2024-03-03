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

getMilk(5);

function lifeInWeeks(age) {
    
  /************Don't change the code above************/    
      
      //Write your code here.
      //Write your code here.
    var yearR = 90 - age;
    var days = yearR * 365;
    var weeks =  yearR * 52;
    var months = yearR * 12;
  
  
    console.log('You have ' + days + ' days, ' + weeks+ ' weeks, and ' + months + ' months ' + 'left.');
  
      
  /*************Don't change the code below**********/
  }
  
  
  lifeInWeeks(56)
  

  //Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {
  var bmi = weight / height ** 2;
  return Math.floor(bmi)
}

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi)


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:


bmi should equal 20 when it's rounded to the nearest whole number.

*/


var name1 = prompt('Ingresa tu nombre: ')
var name2 = prompt('Ingresa el otro nombre: ')
n = Math.random();
n = n * 100 + 1;
console.log('Tu probabilidad de amor es: ' +  Math.floor(n) + '%');

function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  if (bmi < 18.5) {
      return "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
      return "Your BMI is " + bmi + ", so you are overweight.";
  }
}

function isLeap(year) {

  if(year % 4 === 0) {
      if(year % 100 === 0) {
          if(year % 400 === 0) {
              return "Leap year.";
          } else {
              return "Not leap year.";
          }
      } else {
          return "Leap year.";
      }
  } else {
      return "Not leap year.";
  }
}

var name = prompt('Enter your name: ')
names = ['Fredy', 'Juan', 'Pedro']

if(names.includes(name)) {
    console.log('welcome')
} else {
    console.log('not welcome')
}

var number = [];
var n = 1;


function FizzBuzz() {
    if(n % 3 == 0) {
        number.push('Fizz')
    } else if (n % 5 == 0) {
        number.push('Buzz')
    } else if (n % 3 == 0 && n % 5 == 0) {
        number.push('FizzBuzz')
    } else {
            number.push(n);
    }
    n++;
    console.log(number)
}

FizzBuzz();

function whosPaying(names) {

  /******Don't change the code above*******/
    var namesLength = names.length;
    var randomNumber = Math.floor(Math.random() * namesLength)
    var position = names[randomNumber];
    return position +' is going to buy lunch today!';
  
  
  /******Don't change the code below*******/    
  }
  
  whosPaying(['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe'])


  function beer() {
    b = 100;
    while (b > 0) {
      console.log('I have ' + b + ' beers')
      b--;
    }
  
  }
  
  beer()

  function add(x,y) {
    return x + y;
}
undefined
function substract(x,y) {
    return x - y;
}
undefined
function multiply(x,y) {
    return x * y;
}
undefined
function divide(x,y) {
    return x / y;
}
undefined
function calculator(x,y,operator) {
    return operator(x,y)
}
undefined
calculator(2,3,add)
5
calculator(2,3,multiply)
6
calculator(4,2,divide)
2
calculator(4,2,substract)
2