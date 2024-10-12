function greet (name){
    return "Hello " +name;
}

console.log(greet("Davinder"));

function addNumbers(num1, num2){
    return num2+num1;
}

let x = 10;

function changeValue(){
    let x = "local";
    console.log(x);
}

console.log(x);
changeValue();
console.log(x);

function outerFunction(){
    let count = 0;
    return function(){
        count = count +1;
        console.log(count);
    }

}