var firstName = "Michael"; //firstname is a word
var lastName = "Hammond";
var age = 18
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
// numbers are added
let a = 54
let b = 69
let result = `${a} + ${b} = ${a + b}`;
console.log(result);
if (age == 18) { console.log('welcome to xxx') }
else { console.log('this page is not for you!') }
if (age >= 18) { console.log("Happy to see you!") }

for (let i = 1; i == 8; i + 1) {
    console.log('The value of i is', i)
}


function isEligible() {
    if (age == 18) { 
        console.log('welcome to xxx')
        // return 'Welcome to XXX' 
        
    }else 
    { console.log('this page is not for you!')
        return 'This page is not for you!' 
        
    }
}
//function-invoking
alert(2isEligible());
