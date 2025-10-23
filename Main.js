

//HELLO WORLD

function hello(){
    alert('hello world')
}

//POSTIFIX

function postfix1(){
    let x = 5;
    let y = x++;
    alert(`y =${y}`)
    alert(`x = ${x}`)
}

function postfix2(){
    let x = 8;
    let y = x--;
    alert(`y = ${y}`)
    alert(`x = ${x}`)
}

//PREFIX

function prefix1(){
    let x = 10;
    let y = ++x;
    alert(`y = ${y}`)
    alert(`x = ${x}`)
}

function prefix2(){
    let x = 15;
    let y = --x;
    alert(`y = ${y}`)
    alert(`x = ${x}`)
}

//STRING CONCATINATION

function concatination(){
    let age = 30;

    let message = ("i am " + age + " years old ")
    alert(message)
}

//NUMERIC OPERATION

function numeric(){
    let numStr = '45'
    let result = numStr * 2;
    alert(result)
}

//COMPARISON OPERATOR

function comparison(){
    let num = 10;
    let strNum = '5';
    alert(num > strNum)
}

//CHAPTER 3

function noconcatination(){
    const age = 30;
    const message = (`my age is ${age} years. i live in mogadishu;`)
    alert(message);
}

//TEMPERORY VARIABLE

function temperory(){
    let a = 5;
    let b = 10;
    let temp = a;
    a=b
    b = temp;
    alert("after swapping: a = " + a + ", b = " + b)
}

//ARITMETIC

function arithmetic(){
    let a = 5;
    let b = 10;
    a = a + b;
    b = a - b;
    a = a - b;
    alert("after swapping: a = " + a + ", b = " + b)
    }

    //IF AND ELSE

    function if_else(){
    let age = 15;
    if (age>=15){
    alert('you are adult')}
    else{
    alert("you are junior")
    }
}

//ELSE IF

function elseif(){
    let grade = parseFloat(prompt('enter number'));
    if(isNaN(grade)){
        alert("valid number")
    }
    else if((grade >= 90)){
        alert("A")
    }
    else if((grade >= 80)){
        alert("B")
    }
    else if(grade >= 70){
        alert("C")
    }
    else{
        alert("you fail.... i am sorry!")
    }
}

//SWICTH

function switch_statement(){
    let my_name = "Abdikaadir" || "Abdikaadir";
    switch(my_name){
        case 'ali':
            alert("its not your nmae")
            break;
            case "ahmed":
                alert('its your father');
                break;
                default:
                    alert('this is your name')
    }
}

//FOR LOOP

function for_loop(){
    for (let i = 1; i <=5; i++){
        alert(i)}
}

//WHILE LOOP

function while_loop(){
    let i = 1;
    while(i <=5){
   alert(i)
    i++} //output: 1,2,3,4,5
}

//DO WHILE LOOP

function do_loop(){
    let i = 1
    do{
    alert(i)
    i++
    }while (i <= 5) //output: 1,2,3,4,5
}

//NESTED LOOP

function nested_loop(){
    for(let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
        alert(`(${i},${j})`)
        }
        }
}

//CALLING FUNCTION

function Abdikaadir(){
    alert("hello Abdikaadir")
}

//paramiter
function greet(name){
    alert(`hello ${name}`)
}
    
//GLOBAL SCOPE

var globalvariable = "i am in globalvariable"
function sayhello(){
alert(globalvariable)
}


//MULTIPLICATION TABLE


const table = 20;
function multiplicationtable(){
    for(let i = 1; i <= table; i++){
        for(let j = 1; j <= table; j++){
            let product = i * j;
            console.log(`${i} * ${j} = ${product}`)
        }
    }
}


//ternary


function ternary_operator(){
    let age = prompt("enter age")
    if(isNaN(age)){
        alert('valid')
    }
    age >= 15 ? alert('adult') : alert("young");
}

let sum = 0;
let user_input = 0;


//Chapter 5
    // ✅ Example 1: Add Two Numbers
    function addNumbersFunc() {
      let sum = addNumbers(5, 3);
      document.getElementById("output").innerHTML = "Sum = " + sum;
      alert(sum)
    }
    function addNumbers(a, b) {
      return a + b;
    }

    // ✅ Example 2: Greet User
    function greetFunc() {
      let message = greet("AbdiKaadir");
      document.getElementById("output").innerHTML = message;
      alert(message)
    }
    function greet(name) {
      return "Hello, " + name + "!";
    }

    // ✅ Example 3: Find Square
    function squareFunc() {
      let num = 6;
      let result = square(num);
      document.getElementById("output").innerHTML = "Square of " + num + " = " + result;
      alert(result)
    }
    function square(num) {
      return num * num;
    }
