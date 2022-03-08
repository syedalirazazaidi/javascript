//   problem 01====reverse the string
// function revString(str) {
//   console.log(str.split("").reverse().join(""));
//   var revStr = "";
//   for (let i = str.length; i >= 1; i--) {
//     revStr = revStr + str[i];
//   }
//   console.log(revStr);
//   let revString = "";
//   for (let char of str) {
//     revString = char + revString;
//   }
//   console.log(revString);
// }
// revString("hello");

//   problem 02====check the palindrome
// function palindrome(str) {
//   const value = str.split("").reverse().join("");
//   if (value === str) return true;
//   let len = str.length;
//   for (let i = 0; i <= len / 2; i++) {
//     if (str[0] !== str[len - 1 - i]) {
//       return "It is not a palindrome";
//     } else {
//       return "it is palindrome";
//     }
//   }
// }
// const newparindrome = palindrome("sdsaldjsdasodjasodjsao");
// console.log(newparindrome);

// problem 03====reverse intergers
// function revInt(num) {
//   console.log(num);
//   let text = num.toString();
//   console.log(text);
//   const conder = text.split("").reverse().join("");
//   return parseInt(conder);
// }
// const rev = revInt(123);
// console.log(rev);

// problem 03====capitalize first letter
// function capital(str) {
//   const arr = str.split(" ");

//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }
//   const str2 = arr.join(" ");
//   return str2;
// }
// const capi = capital("i love pakistan");
// console.log(capi);

// problem 04====MAX CHARACTER
// const names = ["alibb", "bbb", "cccc", "dddad"];

// names.map((name) => {
//   const newName = name.slice(-2);
//   console.log(newName.lastIndexOf("cc"));
// });

// for (let i = 0; i <= names.length; i++) {
//   console.log(names[i].);
// }
// function maxXhara(str){
//   var objchar={}

// }
// setTimeout(function () {
//   console.log("Hello World!");
// }, 1000);
// console.log(" World!");
// problem 05====FIND module

// function printNumnb() {
//   for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0) {
//       console.log("FIZZ");
//     } else if (i % 5 === 0) {
//       console.log("BUZZ");
//     } else {
//       console.log("FIZZ BUZZ");
//     }
//   }
// }
// printNumnb();
// problem 06====check number
// function sumNumber(a, b) {
//   if (a === 100 || a + b === 100 || b === 100) {
//     return true;
//   } else return false;
// }
// const nber = sumNumber(100, 100);
// console.log(nber);
// problem 07====extension file name

// const fileExte = (str) => {
//   return str.slice(str.lastIndexOf("."));
// };
// const nber = fileExte("index.html");
// console.log(nber);

// problem 08====replace character by other char to following it
// function charFollow(str) {

//   return str
//     .split("")
//     .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
//     .join("");
// }
// const forward = charFollow("aliraza");
// console.log(forward);

// problem 09====adding string new!

// const func = (str) => {
//   console.log(str.lastIndexOf("New!") === 0 ? str : "New!" + str);
// };
// const funct = func("ali");

// problem 10====create the string

// const proFunc = (a, b) => {
//   if (a.length >= 3 && b.length >= 3) {
//     const str = a.slice(0, 2) + b.slice(-3);
//     console.log(str);
//   } else console.log("string length must be 3");
// };
// proFunc("za", "zaidi");
// problem 11====create the string
// const extFunc = (str) => {
//   if (str.length % 2 === 0) {
//     const newStr = str.length / 2;
//     console.log(str.slice(0, str.length));
//   } else {
//     console.log("your length not even");
//   }
// };
// extFunc("alirsdoal");

// problem 12====concetenate string except first character
// function conce(stra, strb) {
//   const sro = stra.slice(1, stra.length) + " " + strb.slice(1, strb.length);
//   console.log(sro);
// }
// conce("ali", "zaidid");

// problem 13====find nearest value
// function nearest(numb1, numb2) {
//   const num1 = numb1 - 100;
//   const num2 = numb2 - 100;
//   return num1 > num2 ? numb1 : numb2;
// }
// const rest = nearest(99, 1);
// console.log(rest);

// problem 14====check the occarence in the string..

// function checkCh(s, a) {
//   let numb = 0;
//   for (let i = 0; i <= s.length; i++) {
//     if (s.charAt(i) === a) {
//       numb++;
//     }
//   }
//   console.log(numb);
// }
// const ho = checkCh("aliraza", "i");
// console.log(ho);

// problem 15====find the even digit in the array of integer
// function arr(arr1) {
//   const arr = [];
//   for (let i = 0; i <= arr1.length; i++) {
//     if (arr1[i] % 2 === 0) {
//       const len = arr1[i];
//       arr.push(len);
//     }
//   }
//   console.log(arr.length);
// }
// arr([2, 19, 60]);

// / problem 16====find the even digit in the array of integer
// function evenDigit(arr1) {
//   const len = arr1.length;

//   for (let i = 0; i <= arr1.length; i++) {
//     // if (arr1[i] <= i + 1) {
//     //   return true;
//     // } else {
//     //   return false;
//     // }
//   //   if (arr1[i + 1] < arr1[i]) {
//   //     return false;
//   //   }
//   //   return true;
//   // }
// }

// const getarr = evenDigit([1, 2, 3, 3]);
// console.log(getarr);

// problem 17  find largest even number in the integer
// function evenNumber(arr) {
//   const len = arr.length;
//   for (let i = 0; i <= len; i++) {
//     if (arr[0] < arr[i]) {
//       // DRY RUN
//       // 100<100
//       // 100<2
//       // 100<30000
//       arr[0] = arr[i];
//     } else {
//       console.log("nothing");
//     }
//   }
//   if (arr[0] % 2 === 0 || arr[0] % 2 !== 0) {
//     return arr[0];
//   }
// }
// const bok = evenNumber([100, 2, 911]);
// console.log(bok);

// / problem 17  leap year
// function leapYear(year) {
//   if (year % 4 === 0) {
//     console.log("leap");
//   }
// }
// leapYear(2009);

// / problem 18  object
// const obj1 = {
//   a: 1,
//   b: "ali",
//   c: "zaidi",
// };
// const obj2 = {
//   a: 2,
//   b: "raza",
//   c: "haji",
// };
// function obj(obja, objb) {
//   const obja_length = Object.keys(obja).length;
//   const objb_length = Object.keys(objb).length;
//   if (obja_length == objb_length) {
//     return Object.entries(obja).every((key) => objb[key]);
//   }
// }
// const data = obj(obj1, obj2);
// console.log(data);

// proble 19 CSV STRING INTO ARRAY
// const newarr = (strofarr) => {
//   strofarr.split("\n").map((item) => item.split(","));
// };
// newarr(`aaa,bbb,bbb
// ddd,eee,fff,
// ggg,hhh,iii`);

// problem 20 random numbe
// const gerRandomNumebr = () => {
//   const rand = Math.floor(Math.random() * 16);
//   console.log(rand);
// };
// gerRandomNumebr();

// problem 21
// const names = ["ali", "zaidi", "sara", "amir", "pinger"];
// const newarr = [];
// const allname = names.map((name) => {
//   return name.slice(-2) === "er" ? newarr.push(name) : name;
// });
// console.log(newarr);
// problem 22

// function alph(str) {
//   // console.log(str.split("").reverse("").join(""));
//   const revStr = "";
//   for (let i = str.length; i >= 1; i--) {
//     revStr = revStr + str[i];
//   }
//   return revStr;
// }
// const newarr = alph("websote");
// console.log(newarr);

// problem 23
// const countCoins = (money, coins = [25, 10, 5, 2, 1]) => {
//   const totalCoins = [];
//   for (let i = 0; i < coins.length; i++) {
//     const thisCoinsNum = Math.floor(money / coins[i]);
//     // i=0  => 1

//     for (let y = 0; y < thisCoinsNum; y++) {
//       totalCoins.push(coins[i]);
//       // totalCoins=25
//     }
//     money -= coins[i] * thisCoinsNum;
//     // money=26-25*25
//   }
//   return totalCoins;
// };
// console.log(countCoins(26));
// function convertCoins(money, coins = [25, 10, 5, 2, 1]) {
// let coins = [25, 10, 5, 2, 1];
// let result = [];
// for (let i = 0; i < coins.length; i++) {
//   while (money >= coins[i]) {
//     result.push(coins[i]);
//     money -= coins[i];
//   }
// }
// return result;
// let totalCoins = [];
// let j = 0;
// while (amount > 0) {
//   if (amount >= coins[j]) {
//     amount -= coins[j];
//     totalCoins.push(coins[j]);
//   }
//   if (amount < coins[j]) {
//     j++;
//   }
// }
// return totalCoins;
// }
// console.log(convertCoins(86));
// problem 24
// const uniqueStr = (str) => {
//   const stri = [...new Set(str.split(""))];
//   console.log(stri);
// };
// uniqueStr("sdsffertrssdd");

// Problem 26 some array method array of object
// const data = [
//   {
//     employee: { name: "John", age: 30, city: "New York" },
//   },
//   {
//     name: "ali",
//     age: 30,
//     city: "karachi",
//   },
//   {
//     name: "raza",
//     age: 30,
//     city: "sindh",
//     value: false,
//   },
//   {
//     name: "zaidi",
//     age: 30,
//     city: "lahore",
//     value: false,
//   },
// ];
// // const newData = data.filter((data) => {
// //   return data.name === "raza" && data.value;
// // });
// const dat = data.map((data) => ({
//   ...data,
//   totalvalu: 56,
// }));
// console.log(dat);
