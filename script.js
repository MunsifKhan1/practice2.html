
// const months = ["January","February","March","April","May","June","July","August","September","October","Npvember","December"];

// const uppercase= months.map((month) => {
//     console.log(month); // Log the original months name
//     return month.toUpperCase();
//  });
// console.log(months);

// Filter months that start with "J"
// const filteredMonths = months.filter(month => month.startsWith('J'));
// console.log(filteredMonths);
//  Output: ["january", "june", "july"]

// const filtere = months.filter(month => month.length > 5);
// filtere.forEach((filter)=>{
//     console.log(filtere)
// });
// console.log(filtere)


// function filter(months) {
//     return months.filter(month => month.includes('m')
// )};
// const result =filter(months);
// console.log(result);

// const number =[1,2,3,4,5];
// number.forEach((number)=>{
// console.log(number*number)
// });

// function filteredMonths(months) {
//  return months.filter(month => month.toUpperCase().includes('M')
// )};
// const result = (months());
// console.log(result);

// const marks=[56,76,97,99,58,87,47,99,43,23,64];
// let topper= marks.filter((val)=>{
// return val>90;
// });
// console.log(topper)

// let n=prompt("enter a number :");
// let arr = []
// for(let i=1 ; i<=n ; i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// // let sum= arr.reduce((resu,curr) => {
// //     return resu + curr;
// // })
// // console.log(sum) 
// let mul = arr.reduce((result,curr)=>{
// return result*curr;
// });
// console.log(mul)
// let n=prompt("enter a number");
// let arr=[];
// for(let i=1; i < n; i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum= arr.reduce((result,curr)=>{
//     return result+curr;
// })
// console.log(sum);
// let mul = arr.reduce((result,curr)=>{
//     return result*curr;
// })
// console.log(mul)
// const num=[1,2,3,4,5,6];
// // let calcsquare=(num)=>{
// //     console.log(num*num);
// // }
// // num.forEach(calcsquare);
// const Output= num.reduce((resu,curr)=>{
//     return resu* curr;

// })
// const Output2=num.reduce((vel,curr)=>{
//     return vel+curr;
// })
// console.log(Output2)
// console.log(Output)
// DOM elements
const signupSection = document.getElementById('signup-section');
const signinSection = document.getElementById('signin-section');
const goToSignInBtn = document.getElementById('go-to-signin');
const goToSignUpBtn = document.getElementById('go-to-signup');

// Event listeners for switching between forms
goToSignInBtn.addEventListener('click', () => {
    signupSection.classList.add('hidden');
    signinSection.classList.remove('hidden');
});

goToSignUpBtn.addEventListener('click', () => {
    signinSection.classList.add('hidden');
    signupSection.classList.remove('hidden');
});

// Handle form submissions (dummy logic for now)
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    
    // You can add AJAX here to send data to the server
    alert(`Sign Up successful for ${username}`);
});

document.getElementById('signin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;
    
    // You can add AJAX here to send data to the server
    alert(`Sign In successful for ${username}`);
});
