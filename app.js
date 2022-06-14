
// Question1======================================================

var firstName = prompt("Enter your first name");
var lastName = prompt ("Enter Your last name");

var fullName= firstName + " " + lastName;
document.write("<h2>Answer : 1</h2>")
document.write(" <h3> Welcome : " + fullName + "</h3>")

document.write( "</br>")



// Question 2===================================================

var mobileModel=prompt("Write your s favorite mobile phone model");

document.write("<h2>Answer : 2</h2>")


document.write("<h3>"+ "My favourite phone is : " + mobileModel + "</h3>");
document.write( "<h3>" + "Length of string: " + mobileModel.length + "</h3>");
document.write( "</br>")



// Question 3===========================================================

var string = "Pakistani";
var index=string.indexOf("n");
// console.log(index);

document.write("<h2>Answer : 3</h2>")

document.write("<h3>"+"String : " + string + "</h3>");
document.write("<h3>"+"index of 'n' : " + index + "</h3>" );
document.write( "</br>")


// Question 4========================================================

var word = "Hello world";
var find =word.lastIndexOf("l");
// console.log(find);

document.write("<h2>Answer : 4</h2>")


document.write("<h3>"+"String : " + word + "</h3>");
document.write("<h3>"+"Last index of letter 'L' : " + find + "</h3>" );
document.write( "</br>")


// Question 5========================================================
var string1 = "Pakistani";
var find1 =string1.slice(3,4)
// console.log (find1);

document.write("<h2>Answer : 5</h2>")

document.write("<h3>"+"String : " + string1+ "</h3>");
document.write("<h3>"+"Character at index 3 : " + find1 + "</h3>" );
document.write( "</br>")


// Question 6=====================================================

// var firstName1 = prompt("Enter your first name");
// var lastName1 = prompt ("Enter Your last name");

// var fullName= firstName1  . concat(lastName1);

// document.write("<h2>Answer : 6</h2>")

// document.write(" <h3> Welcome : " + fullName + "</h3>")
document.write( "</br>")


// Question 7==================================================

var city="Hyderabad";
var final = city.replace("Hyder","Islam");
// console.log(final)

 document.write("<h2>Answer : 7</h2>")

document.write("<h3>"+"String : " + city+ "</h3>");
document.write("<h3>"+"After Replacement : " + final+ "</h3>");
document.write( "</br>")


// Question 8===================================================

var message = "Ali and Sami are best friends. They play cricket and football together.";
var result = message.replace(/and/g, "&");
// console.log(result);


document.write("<h2>Answer : 8</h2>")

document.write("<h3>"+"String : " +message+ "</h3>");
document.write("<h3>"+"After Replacement : " + result+ "</h3>");
document.write( "</br>")


// Question 9==================================================================

var string3 = "472";
var num = Number(string3);
// console.log(string3);
// console.log(num);


document.write("<h2>Answer : 9</h2>")

document.write("<h3>"+"Value : " +string3+ "</h3>");
document.write("<h3>"+"Type : " +typeof(string3)+ "</h3>");

document.write("<h3>"+"Value : " +string3+ "</h3>");
document.write("<h3>"+"Type : " +typeof(num)+ "</h3>");
document.write( "</br>")

// Question 10============================================================================


// Question 11=============================================================================

var word1=prompt("Write any word but in lowercase so i can convert into uppercase");
var x = word1.toUpperCase();


document.write("<h2>Answer : 11</h2>")

document.write("<h3> User input : " + word1 + "</h3>");
document.write("<h3> Upper Case : " + x + "</h3>");
document.write( "</br>")

// Question 12========================================================================

var word2=prompt("Write any word but in uppercase so i can convert into lowercase");
var y = word1.toLowerCase();


document.write("<h2>Answer : 12</h2>")

document.write("<h3> User input : " + word2 + "</h3>");
document.write("<h3> Lower Case : " + y + "</h3>");
document.write( "</br>")

// Question 13========================================================================

var anyWord= prompt("Write any word to convert into title case");

var v = anyWord.slice(0,1);
var other = anyWord.slice(1);
v=v.toUpperCase();
other=other.toLowerCase();
var join = v + other;
// console.log(join);

document.write("<h2>Answer : 13</h2>")

document.write("<h3> User input : " + anyWord + "</h3>");
document.write("<h3> Title Case : " + join + "</h3>");
document.write( "</br>")


 // Question 14========================================================================


//  Question 15==========================================================================

var a="3";
var b="3";
var x=a+b;


document.write("<h2>Answer : 15</h2>")


document.write("<h3> Value of a is "+ a +"</h3>");
document.write("<h3> Value of b is "+ b +"</h3>");
document.write("<h3> Value of a + b is "+ x +"</h3>");
document.write( "</br>")


// Question 16============================================================================

var y = a-b;

document.write("<h2>Answer : 16</h2>")

document.write("<h3> Value of a is "+ a +"</h3>");
document.write("<h3> Value of b is "+ b +"</h3>");
document.write("<h3> Value of a - b is "+ y +"</h3>");
document.write( "</br>")

// Question 17=====================================================================


// Question 18======================================================================

// var bakery=["cake","apple pie","cookie","chips","patties"];
// var ask = prompt("What do you want to order? ").toLowerCase();

// // for (b=0; b <bakery.length ; b++) { 
//     if (bakery === ask) {
        
        
//         // document.write (ask + " is available at index " + [b] ); break;
        
//         alert(ask + " is available at index " + [b])
        
        
//     }

//     else{
//         alert("We are sorry "+ ask + " Not available at our bakery");
//         // break;
        
//     }

//     console.log(bakery[0,4])

    

// // }


// Question 19===============================================================

// var stringOne = "car"
// var strinTwo ="cab"
// var finalResult= stringOne.localeCompare(strinTwo);
// console.log(finalResult);

// Question 20==============================================================


// Question 21==============================================================

var text = "University of Karachi";
var split = text.split("") ;
console.log(split);

document.write("<h2>Answer : 21</h2>")

document.write("<h3> After split string :"+ split + "</h3>");
document.write( "</br>")


// Question 22====================================================

var take = prompt("Input any word of your choice to get its last character");
var show = take.slice(-1);
// console.log(show);


document.write("<h2>Answer : 22</h2>")

document.write("<h3> User input : " + take + "</h3>");
document.write("<h3> Last character of input : " + show + "</h3>");
document.write( "</br>")

// Question 23================================================

var someText= "The quick brown fox jumps over the lazy dog.";

// Question 24====================================================

// var vowel=["a","e","i","o","u"]
// var random = "Pakistan"

// for (var i=0; i<vowel.length;i++) {
//     if (random.slice(1) === vowel[i]) {
       

//     }

//     console.log(vowel[i])
    
    
// }







































