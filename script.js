// alert("test!!!");
//  console.log("test1!!!");
// prompt("請輸入姓名:");
// confirm("test");

// const myName = "Tai";
// myName = "fan"
// document.write("我的名字" + myName)
// let name = "Tai"
// let num6 = '10';
// let num7 = '10';
// console.log(Number(num6)+Number(nim7));

// console.log(num6 + num7 + name);

// let pi = 3.1415926535;
// console.log(pi.toFixed(3));

// console.log(typeof(num6));
// console.log(typeof(num6.toString()));

// let text1 = "Lorem ipsum dolor.";
// console.log(text1.length);

// let text2 = "Lorem";
// console.log(text2[0]);
// console.log(text2[1]);
// console.log(text2[2]);
// console.log(text2[3]);
// console.log(text2[4]);
// console.log(text2[5]);

// let text3 = "Lorem";
// console.log(text3.slice(1));

// let text4 = "Lorem"
// console.log(text4.toUpperCase().indexOf("ORE"));

// let text5 = "Lorem";
// console.log(text5.toUpperCase());

// let text6 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos recusandae officia nesciunt modi itaque placeat possimus fuga perferendis explicabo pariatur.";

// console.log(text6.split(""));

// let isTrue = true;
// let isStringTrue = true;
// console.log(isTrue,isStringTrue);

// let x = null;
// x = 123;
// console.log(x);

// console.log(5 + 2);
// console.log(5 - 2);
// console.log(5 * 2);
// console.log(5 / 2);
// console.log(5 % 2);

// let x =0;
// x--;
// x--;
// x--;
// x = x - 1;
// console.log(x);

// console.log(5 * 5 * 5 * 5);
// console.log(5**4);

// let x =1;
// let y = "1";
// x ===y;

// let x = 0;
// x = x + 5;
// x += 5;

// let a = prompt("請輸入數字","0");
// if (a >= 0) {
//       document.write("您輸入的值是正數!");
// }else{
//     document.write("您輸入的值是負數!");
// }

// let a = prompt("請輸入數字","0");
// (a >= 0) ? document.write("您輸入的值是正數") : document.write("您輸入的值是負數");

// let score = prompt("請輸入分數", "0");

// score = Number(score);
// console.log(score, typeof score);
// if (isNaN(score)) {
//     alert("請輸入阿拉伯數字");
// } else {
//     if (score > 100 || score < 0) {
//         document.write('請輸入正確的數字範圍(0-100)');
//     } else if (score >= 60 && score < 70) {
//         document.write('丙等');
//     } else if (score >= 70 && score < 80) {
//         document.write('乙等');
//     } else if (score >= 80 && score < 90) {
//         document.write("甲等");
//     } else if (score >= 90 && score <= 100) {
//         document.write('優等');
//     } else {
//         document.write('不及格');
//     }
// }

// let payway = prompt("請選擇付款方式: 1.ATM 2.刷卡 3.貨到付款",  "1");
// switch(payway){
//     case "1":
//         document.write("ATM");
//         break;
//     case "2":
//         document.write("刷卡");
//         break;
//     case "3":
//         document.write("貨到付款");
//         break;
// default:
//     document.write("請選擇付款方式");
// }
// let i = 0;
// while (i < 10){
//     i++;
//     document.write(i + "");
// }

// let i = 0;
// do{
//     i++;
//     document.write(i + "");
// }while(i < 0);

// let countI = 0;
// for (i = 1 ; i <= 10 ; i++){
//     countI += i;
//     // countI = countI + i;
//     document.write(countI + "<br>");
// }
// for (let i = 0; i <= 10; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }

// function convertDF(dc){
//     return dc * 1.8 + 32;
//   }
//   var dc = prompt("請輸入攝氏溫度:" ,"25"); 
//   document.write("華氏溫度為:" + convertDF(dc));

// function sort(nums) {
//     // 找出未排序中最小值
//     function minIndex(left, right) {
//         if(right === nums.length) {
//             return left;
//         } else if(nums[right] < nums[left]) {
//             return minIndex(right, right + 1);
//         }
//         else {
//             return minIndex(left, right + 1);
//         }
//     }
//     for(let i = 0; i < nums.length; i++) {
//         let selected = minIndex(i, i + 1);
//         if(i !== selected) {
//             // 交換i與selected 處的元素
//             let tmp = nums[i];
//             nums[i] = nums[selected];
//             nums[selected] = tmp;
//         }
//         console.log(nums);
//     }
// }
// let nums = [10, 3, 5, 2, 4];
// sort(nums);
// console.log(nums);

// let student = ["David" , "Lily", "Perry"];
// let student = new Array();
// student[0] = ["David","95","80"];       
// student[1] = ["Lily","82","85"];       
// student[2] = ["Perry","90","92"];       
// document.write("<table border='1'><tr><td>姓名</td><td>國文</td><td>英文</td></tr>");
//  for (let i = 0; i < student.length; i++) {
//    document.write("<tr>");
//      for(let j=0; j<student[i].length;j++){
//      document.write("<td>" + student[i][j] + "</td>")
//  }
//  document.write("</tr>");
//  }
//  document.write("</table>");

//  let student = ["David" , "Lily", "Perry"];

//  student.shift();

//  console.log(student);

// function Person(name, age, weight, height){
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//     this.height = height;
//     this.sayHello = function(){
//         return "您好，我是" + name +"，今年"+age+"歲，身高" + height+"公分，體重"+weight+"公斤。";
//     }
// }

// person1 = new Person("David",25,75,180);
// person2 = new Person("Ken",20,65,175);
// document.write(person1.sayHello()+"<br>"+person2.sayHello());

// console.log(window);
// window.alert("test");

// function sayHi(){
//     console.log("Hi");
// }
// let Interval = setInterval(sayHi,1000);

// function stop(){
//     clearInterval(Interval);
// }
// console.log("Hi");
// console.error("error");
// console.warn("warning");

// console.log(window.document);

// let myH1 = document.getElementById("first");
// let myP = document.getElementsByClassName("second");
// console.log(myH1);
// console.log(myP);

// let myH1 = document.createElement("h1");
// console.log(myH1);

// let second = document.querySelectorAll(".second");


// console.log(second);
// sayHi();
// function sayHi(){
//     console.log("Hi");
// }
// let sayHi = () =>{
//     console.log("Hi");
// }
// let TCNR = {
//     name:"中彰投分署",
//     myName(){
//         console.log("TCNR是" + this.name + ",");
//     },
//     address: () => {
//         console.log("TCNR的地址是台中市");
//     }
// }
// TCNR.myName();
// TCNR.address();

// let Numbers = [6, 25, 10, 26, 50, 15];

// // for (let i = 0; i < Numbers.length; i++){
// //     if(Numbers[i] > 20){
// //         console.log(Numbers[i]);
// //     }
// // }

// Numbers.forEach((n, index, arr) => {
//     if (n > 20){
//         console.log(n);
//         console.log(n + "index是:" + index);
//     }
// });

// array
let Numbers = [5, 15, 3, 10];
// length,index
// push,pop,shift,unshift

// HTMLCollection
let second = document.getElementsByClassName("second");
// console.log(second);
// second.forEach(tag =>{
//     console.log(tag);
// })

// NodeList
// let secondQuery = document.querySelectorAll(".second");
// secondQuery.forEach(tag =>{
//     console.log(tag);
// })
// let body = document.querySelector("body");
// console.log(body.children);
// console.log(body.ChildNodes);

// let h1 = document.querySelector("h1.myH1");

// h1.innerHTML = "";
// h1.innerHTML = "<mark>您好:Tai</mark>";
// console.log(h1); 
// let  body = document.querySelector("body");

// let myH1 = document.createElement("h1");
// myH1.innerText = "中彰投分署";
// let myP = document.createElement("P");
// myP.innerText = "test";

// body.appendChild(myH1);
// body.appendChild(myP);

// let myP =document.querySelector("P");

// console.log(myP.classList)
// myP.classList.add("red");
// myP.classList.add("bold");
// myP.classList.toggle("blue");
// console.log(myP.classList);
// console.log(myP.classList.contains("red"));
// let a = document.querySelector("a");

// console.log(a.getAttribute("title"));

// let redP = document.querySelectorAll("p.red");
// console.log(redP);

// let section = document.querySelector("section");
// let redP2 = section.querySelector("p.red");
// console.log(redP2);

// let myH1 = document.querySelector("h1");
// myH1.remove();
// console.log(myH1.style)
// myH1.style.backgroundColor = "black";
// myH1.style.color = "white";
// myH1.style = "background-color:black; color: blue;"
// myH1.style = ";"

// window.addEventListener("click", e =>{
//     console.log(e);
// })
// myH1.addEventListener("click",e =>{
//     console.log(e);
// })

// let button = document.querySelector("button");
// button.addEventListener("click", e =>{
//     e.preventDefault();
// })

// let a =document.querySelector("div.a");
// let b = document.querySelector("div.b");

// a.addEventListener("click",()=>{
//     alert("a的callback正在執行");
// });
// // b.addEventListener("click", () =>{
// //     alert("b的callback正在執行");
// // })
// b.addEventListener("click", e =>{
//     e.stopPropagation();
//     alert("b的callback正在執行");
// })
// localStorage.setItem("name","Thor");
// localStorage.setItem("age", 25);
// console.log(typeof localStorage);

// let myAge = localStorage.getItem("age");
// console.log(typeof myAge);
// localStorage.removeItem("age");
localStorage.clear();

// sessionStorage.setItem("name","Thor");
// sessionStorage.setItem("age","25");

// let myData = ["Thor", "25", "Taichung"];

// localStorage.setItem("data", myData);

// let myData = localStorage.getItem("data");
// console.log(typeof myData);

// localStorage.setItem("age", 25);

// let myAge = localStorage.getItem("Age");
// console.log(typeof Number(myAge));

// 1.JSON.stringify
// 2.localStorage.setItem
// 3.localStorage.getItem
// 4.JSON.parse

// let data = ["Thor", "25", "Taichung"];

// localStorage.setItem("data", JSON.stringify(data));

// localStorage.removeItem("myData");

// let myData = JSON.parse(localStorage.getItem("data"));
// console.log(myData);
