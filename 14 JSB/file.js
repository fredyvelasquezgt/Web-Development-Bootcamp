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