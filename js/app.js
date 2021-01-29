//alert('Hello from JS File');
// confirm('Hey this is confirm! So please confirm');
// prompt('Enter your name');

// let name = prompt('Enter the name');

let a = 5;
let b = 6;

var c;

let isActive = false;

let someFile = null;

let firstname = "Kartik";
// console.log(typeof a);

// console.log(typeof let);

// console.log(typeof firstname);

// console.log(typeof isActive);

// console.log(typeof someFile);

//let c = a + b;

let lastName = "Saxena";

let fulName = firstname + lastName;
//concatenation
//console.log(fulName);

// function add() {
//   let x = 6;
//   let y = 7;
//   let z = x + y;
//   console.log(z);

// }
// add();

// function add(x, y) {
//   return x + y;
// }

// console.log(add(2,4));

// function whoIsGreater(a,b){

//   if(a>b){
//     console.log('A is greater');
//   }
//   else {
//   console.log('B is greater'); }
// }

// whoIsGreater(10,20);

let arr = [
  1,
  2,
  "Kartik",
  true,
  undefined,
  null,
  {
    Courses: {
      1: "Java",
    },
  },
];

// console.log('----------For Loop-----------')
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log('----------For Loop End -----------')

// console.log('----------While Loop -----------')

// let j =0;
// while (j<5) {
//   console.log(arr[j]);
//   j++;
// }
console.log("length of Array is " + arr.length);

// console.log('----------While Loop End-----------')

// let k = 0;
// do{
// console.log(arr[k])
// k++;
// }while(k<5);

// console.log(add());

// arr.forEach((e) => console.log(e));

// let add = (x, y) => x + y;
let square = (x) => x * x;

arr.sort();

// console.log("Square of 4 is " + square(4));
// console.log(add(5, 6));

// let num = prompt('Enter a value' );

// document.write(square(num));

// let arr1 = [1,2,3,4,5,6];

// let sqArr = arr1.map(x => x*x);

// console.log(sqArr);

function alertify() {
  alert("Please signup!");
}

// function checkName(){
//   let ele = document.getElementById('err');
//   console.log(ele);
//   ele.innerHTML = 'Name as per PAN Card';
//   ele.classList.add('text-danger');
// }

// function checkAge(){
//   let ele = document.getElementById('age');
//   let infoEle = document.getElementById('ageinfo');
//   if(ele.value >= 18){
//     infoEle.innerHTML='Valid';
//     infoEle.classList.remove('text-danger');
//     infoEle.classList.add('text-success');
//   }
//   else {
//     infoEle.innerHTML = 'Age should be greater than or equal to 18';
//     infoEle.classList.add('text-danger');
//   }

// }

// function submitForm(){
//   window.location.href = 'first.html';
//   console.log('Form Submitted');
// }

// // function validate(){
// //   let username = document.getElementById('name');
// //   let password = document.getElementById('txtpwd');
// //   let cpassword = document.getElementById('txtcpwd');
// //   if(username.value == ""){
// //     document.getElementById('err').innerHTML = 'Blank Name not allowed'
// //     return false;
// //   }

// //   if(password.value !== cpassword.value){
// //     document.getElementById('cpwd').innerHTML = "Password dint match"
// //     return false;
// //   }

// // }

function validateForm() {
  let username = document.getElementById("name");
  let uError = document.getElementById("usernameError");
  let pwd = document.getElementById("txtpwd");
  let cpwd = document.getElementById("txtcpwd");
  let eCpwd = document.getElementById("cpwd");
  let ePwd = document.getElementById("pwd");

  if (username.value == "") {
    uError.innerHTML = "Name cannot be blank";
    uError.style.color = "red";
    username.style.border = "2px solid red";
    return false;
  } else if (pwd.value == "" || pwd.value.length < 6) {
    ePwd.innerHTML =
      "Password cannot be blank and should be more than 6 characters";
    ePwd.style.color = "red";
    pwd.style.border = "2px solid red";
    return false;
  } else if (cpwd.value == "" || cpwd.value.length < 6) {
    eCpwd.innerHTML = "Confirm Password cannot be blank and should be more than 6 Characters";
    eCpwd.style.color = "red";
    cpwd.style.border = "2px solid red";
    return false;
  } else if (pwd.value !== cpwd.value) {
    eCpwd.innerHTML = "Password are not same";
    eCpwd.style.color = "red";
    return false;
  } else {
    return true;
  }
}

function checkName() {
  let uError = document.getElementById("usernameError");
  let username = document.getElementById("name");
  if (uError.value !== "") {
    uError.innerHTML = "";
    username.style.border = "";
  }
}
