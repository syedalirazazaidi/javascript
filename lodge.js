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
// problem 27
// const data = ["aa", "bb", "cc"];
// data.reverse("");
// console.log(data);
// console.log(data.map((data) => data.split(" ").reverse().join("")));

// problem 28 ---------------------
// function greet(name) {
//   if (name === "johnny") {
//     return name;
//   } else if (name === "johnny") {
//     return "Hello,my love!";
//   }
// }
// const newJenny = greet("johnny");
// console.log(newJenny);
// problem 29--------------------
// function inDivisible(n, x, y) {
//   if (n % x == 0 && n % y == 0) {
//     return true;
//   } else return false;
// }
// const newDivisible = inDivisible(3, 3, 4);
// console.log(newDivisible);
// problem 25 make negative
// function makeNagitive(num) {
//   return num < 0 ? false : -num;
// }
// const newNef = makeNagitive(5);
// console.log(newNef);

// problem 26 find smallest integer

// var array = [2, 3, 1, 9, 8];
// var minvalue = array[0];
// for (var i = 0; i < array.length; i++) {
//   if (array[i] < minvalue) {
//     minvalue = array[i];
//   }
// }
// console.log(minvalue);
// var array = [9, 3, 90, -9, 8];
// var minvalue = array[0];
// for (var i = 0; i < array.length; i++) {
//   if (array[i] < minvalue) {
//     minvalue = array[i];
//   }
// }
// console.log(minvalue);
// function smallestInteger() {
//   const arr = [510, 10, 8, 9];
//   var currentarr = arr[0];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] < currentarr) {
//       currentarr = arr[i];
//     }
//   }
//   return currentarr;
// }
// const cyp = smallestInteger();
// console.log(cyp);

// problem 27 ==============

// const addNumber = (num) => {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// };
// const newNumber = addNumber(1);
// console.log(newNumber);
// problem 28-----------
// const sta = "aliraza";
// console.log(sta.slice(1, -1));

// problem 28/////

// const str = "ali raza";
// console.log(str.replace(/a/g, "ali"));

// problem 29 find first consecutive number

// const numarr = [1, 2, 3, 4];

// for (let i = 0; i <= numarr.length; i++) {
//   currenynum = numarr[i];
//   nextnum = numarr[i + 1];
//   if (currenynum + 1 !== nextnum) {
//     console.log(nextnum);
//   } else {
//     console.log("first");
//   }
// }
// console.log("null");

// problem 30 ------==========

// function arrfunc(arr) {
// var newarr = [];
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     newarr.push(arr[i]);
//   }
// }
// return newarr;
// return arr.filter((val) => val % 2 === 0);
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }
// }

// const arrfunction = arrfunc([3, 4, 8, 43, 67, 123]);
// console.log(arrfunction);

// problem 31 object function
// const str = "aliraza";
// // console.log(str.slice(0, 2));
// const str1 = str.substring(0, 2);
// console.log(str1);
// console.log(str);

// function makeObj(obj) {
//   const newObj = Object.entries(obj).forEach((key) =>
//     console.log(key[0]["name"])
//   );
// }
// makeObj({ name: "ali", id: 1 });

// problem 32
// function capit(str) {
//   const newStr = str
//     .split("")
//     .map((word, index) => {
//       if (index % 2 === 0) {
//         return word.toLowerCase();
//       } else {
//         return word.toUpperCase();
//       }
//     })
//     .join("");
//   return newStr;
// }
// const newarr = capit("aliraza");
// console.log(newarr);
// *********************************************XXXX
// problem 33
// given an array of integers reeturn indices of the two number such that they add up to a specific target
// function twoSum(arr, nums) {
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = 0; j <= arr.length; j++) {
//       if (arr[i] + arr[j] == nums) {
//         return [i, j];
//       }
//     }
//   }
// }
// const newTarget = twoSum([2, 7, 9, 15], 9);
// console.log(newTarget);
// problem 34 reverse intgers
// const inte = 123456789;

// console.log(typeof inte.toString());
// const newSolution = inte.toString();
// console.log(newSolution.split("").reverse().join(""));
// problem 35==================== convert minute into second
// function convert(minutes) {
// 	const second=60
// 	const converttosecond = minutes* second;
// 	return converttosecond;

// }
//  problem 36 swap the number
// function largestSwap(num) {
//   const newnum = num.toString();
//   const checknumber = newnum.split("").reverse().join("");
//   if (checknumber < num) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const newValue = largestSwap(14);
// const newVlue2 = largestSwap(53);
// const newVlue3 = largestSwap(99);

// console.log(newValue);
// console.log(newVlue2);
// console.log(newVlue3);
// problem 37 object to array

// function toArray(obj) {
//   return Object.entries(obj);
// }
// toArray({ a: 1, b: 2 });

// problem 38
// var getMax = function (str) {
//   var max = 0,
//     maxChar = "";
//   str.split("").forEach(function (char) {
//     if (str.split(char).length > max) {
//       max = str.split(char).length;
//       maxChar = char;
//     }
//   });
//   return maxChar;
// };
// const newarr = getMax("35566660909000385");
// console.log(newarr);

// problem 39

// function valuesInObject(value) {
//   const character = value;
//   let obj = {};
//   for (let char of character) {
//     !obj[char] ? (obj[char] = 1) : obj[char]++;
//   }
//   return obj;
// }
// const newVal = valuesInObject("asdsadasd");
// console.log(newVal);
// var myArray = [
//   { name: "deepak", place: "bangalore" },
//   { name: "chirag", place: "bangalore" },
//   { name: "alok", place: "berhampur" },
//   { name: "chandan", place: "mumbai" },
// ];
// var toRemove = [
//   { name: "deepak", place: "bangalore" },
//   { name: "alok", place: "berhampur" },
// ];

// myArray = myArray.filter(
//   (ar) => !toRemove.find((rm) => rm.name === ar.name && ar.place === rm.place)
// );
// console.log(myArray);
// var myArray = [
//   { name: "deepak", place: "bangalore" },
//   { name: "chirag", place: "bangalore" },
//   { name: "alok", place: "berhampur" },
//   { name: "chandan", place: "mumbai" },
// ];
// var toRemove = [
//   { name: "deepak", place: "bangalore" },
//   { name: "alok", place: "berhampur" },
// ];

// for (var i = myArray.length - 1; i >= 0; i--) {
//   for (var j = 0; j < toRemove.length; j++) {
//     if (myArray[i] && myArray[i].name === toRemove[j].name) {
//       myArray.splice(i, 1);
//     }
//   }
// }
// console.log(myArray);
// const obj = {
//   name: "ali",
//   id: 1,
// };

// console.log(obj["name"]);

// function makearray(myArray, toRemove) {
//   return myArray.filter((ar) => !toRemove.find((rm) => rm === ar));
// }
// const newArray = makearray([1, 10, 3, 2], [2, 3]);
// console.log(newArray);

// problem 40
// function list(arr) {
//   let newString = "";
//   arr.forEach((values, index) => {
//     if (index === arr.length - 1) {
//       newString = newString + "&" + values.name;
//     } else if (index === arr.length - 2) {
//       newString = newString + values.name;
//     } else if (arr.length === 1) {
//       return arr[0].name;
//     } else {
//       newString = newString + values.name + ",";
//     }
//   });
//   return newString;
// }
// const newarr = list([{ name: "ali" }, { name: "zaidi" }, { name: "kashif" }]);
// console.log(newarr);

// problem 41 RECURRSION FUNCTION
// numbers.reduce(function (previousValue, currentValue) {
//   return previousValue + currentValue;
// });
// function persistance(numb) {
//   if (numb < 10) {
//     return 0;
//   }
//   const newnumb = numb.toString();
//   const addnew = newnumb.split("");
//   const addfew = addnew.reduce((acc, numb) => (acc *= numb));
//   console.log(addfew);
//   if (addfew >= 10) {
//     return 1 + persistance(addfew);
//   } else {
//     return 1;
//   }
// }
// const newper = persistance(89);
// console.log(newper);
// problem 42 REGULAR  EXPRESSION
