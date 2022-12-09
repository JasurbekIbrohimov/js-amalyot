// masala shati; kiritilayotgan sonlarni birbiriga qoshsin...

// let num1 = Number(prompt(`1-son`));
// let amal = prompt(`Amal`);
// let num2 = Number(prompt(`2-son`));

// let nat1 = num1 + num2;
// let nat2 = num1 - num2;
// let nat3 = num1 * num2;
// let nat4 = num1 / num2;

// if (amal == "+") {
//   alert(nat1);
// } else if (amal == "-") {
//   alert(nat2);
// } else if (amal == "*") {
//   alert(nat3);
// } else if (amal == "/") {
//   alert(nat4);
// }else{
//   alert(`Qiymatlar kiritilmadi`)
// }
// if (amal === "+") {
//   alert(`${num1} + ${num2}`);
// } else if (amal === "-") {
//   alert(`${num1} - ${num2}`);
// } else if (amal === "*") {
//   alert(`${num1} * ${num2}`);
// } else if (amal === "/") {
//   alert(`${num1} / ${num2}`);
// } else {
//   alert(`Boshidan`);
// }

// let num1 = Number(prompt(`1-son`));
// let amal = prompt(`Amal`);
// let num2 = Number(prompt(`2-son`));

// let nat1 = num1 + num2;
// let nat2 = num1 - num2;
// let nat3 = num1 * num2;
// let nat4 = num1 / num2;

// switch (amal) {
//   case "+":
//     alert(nat1);
//     break;
//   case "-":
//     alert(nat2);
//     break;
//   case "*":
//     alert(nat3);
//     break;
//   case "/":
//     alert(nat4);
//     break;
//   default:
//     alert(`Qiymat kiritilmadi`);
// }

//--------------------------------------------------------

getMax();

let num = getMax(2, 5);
console.log(num);

function getMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
