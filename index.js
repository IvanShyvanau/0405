/*let a = 10;
console.log(a);


const fun1 = function(){
  console.log('test');
};
const fun2 = fun1;
fun2();

if(true){
let a = 7;
}
console.log(a);


function count (number) {
  for(let i = 0; i < num; i++) {
  console.log(i);
  }
}
count(10);


function count (number) {
  if (number === 0) {
    return;
  }
  console.log(number);
  count(number - 1);
}
count(10);


function getAge(callCount) {
  let age = prompt('сколько тебе лет');
  if (age === '18'){
    console.log('success');
    return
  }
  if (!callCount){
    alert('test');
    return
  }
  getAge(callCount - 1);
}

const test = function fun1(){
  alert('text');
};

const test = function fun1(count){
  if(count === 0){
  return count;
  }
return count + fun1(count - 1);
};
console.log(test(7));

const user = {
  name: '123',
  showName: function(){
    alert( this.name);
  }
};
user.showName();

const sum = (a, b) => a + b;
const sum1 = (a, b) => {
  return a + b;
};
function test(a, b, c){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments[3]);
  console.log(arguments);
}
test(1, 2, 3, 4);




function calc() {
  let one = prompt('введите первое число:');
  one = parseInt(one);
  if (typeof one !== "number") {
    alert("бред");
    return;
  }
  let mathSymbol = prompt(' операция:');
  if (mathSymbol === '+' || mathSymbol === '-' || mathSymbol === '*' || mathSymbol === '/') {
    let two = prompt('введите третье число:');
    two = parseInt(two);
    if (typeof two !== "number") {
      alert("бред");
      return;
    }
    switch (mathSymbol) {
      case '+':
        alert(one + two);
        break;
      case '-':
        alert(one - two);
        break;
      case '*':
        alert(one * two);
        break;
      case '/':
        alert(one / two);
        break;
    }
  }

}
calc();
*/

const calc = (function () {

  let a = 1;
  let b = 2;
  
  return a + b;
  
  })();
  console.log(calc);