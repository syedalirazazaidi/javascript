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
// problem 42 FInd the character that appear the most
// function findChar(chr) {
// const splitchar = chr.split("");
// const arr = [];
// for (const element of splitchar) {
//   console.log(element);
// }
// }
// function findChar(str) {
//   let obj = {};
//   for (let char of str) !obj[char] ? (obj[char] = 1) : obj[char]++;

//   let maxvalue = 0;
//   let maxcharac = "";
//   for (let char in obj) {
//     if (obj[char] >= maxvalue) {
//       maxvalue = obj[char];
//       maxcharac = char;
//     }
//   }
//   return {
//     maxvalue,
//     maxcharac,
//   };
// }
// const newChar = findChar("aliraza zaidi");
// console.log(newChar);

// problem 43 chunked  array

// function chunkedArray(array, size) {
//   const chunkedArnode = [];
//   for (var i = 0; i < array.length; i += size) {
//     chunkedArray.push(array.slice(i, i + size));
//   }
//   console.log(chunkedArray);
// }
// chunkedArray([3, 4, 1, 5, 2, 4, 34, 234, 42423, 1], 2);

// -----------------------problem 44 MAP METHOD
// return new array ,does not change the size of orignal array

// const array1 = [1, 4, 9, 16];

// const map1 = array1.map((x) => x + 2);

// console.log(map1);
// let users = [
//   { firstName: "Susan", lastName: "Steward", age: 32 },
//   { firstName: "Daniel", lastName: "Longbottom", age: 32 },
//   { firstName: "Jacob", lastName: "Black", age: 32 },
// ];

// let userFullnames = users.map(function (element) {
//   return `${element.firstName} ${element.lastName}`;
// });

// console.log(userFullnames);
// const myUsers = [
//   { name: "shark", likes: "ocean" },
//   { name: "turtle", likes: "pond" },
//   { name: "otter", likes: "fish biscuits" },
// ];

// const usersByLikes = myUsers.map((item) => {
//   const container = {};

//   container[item.name] = item.likes;
//   container.age = item.name.length * 10;

//   return container;
// });

// console.log(usersByLikes);

// -----------PROBLEM 45 GET UNIQUE VALUE---------
// let uniqueArray = [...new Set([5, 5, 1, 2, 2, 2, 4, 2])];
// console.log(uniqueArray);
// const data = [
//   { group: "A", name: "SD" },
//   { group: "B", name: "FI" },
//   { group: "A", name: "FI" },
//   { group: "B", name: "CO" },
// ];
// const unique = ["all", ...new Set(data.map((item) => item.name))];
// console.log(unique);

// -----------PROBLEM 46 Dynamic Object Keys---------
// function isPalindrome(s) {
//   //var rev = s.replace(/\s/g,"").split('').reverse().join('');  //to remove space
//   var rev = s.split("").reverse().join("");
//   return s == rev;
// }

// function longestPalind(s) {
//   var maxp_length = 0,
//     maxp = "";
//   for (var i = 0; i < s.length; i++) {
//     var subs = s.substr(i, s.length);
//     if (subs.length <= maxp_length) break; //Stop Loop for smaller strings
//     for (var j = subs.length; j >= 0; j--) {
//       var sub_subs = subs.substr(0, j);
//       if (sub_subs.length <= maxp_length) break; // Stop loop for smaller strings
//       if (isPalindrome(sub_subs)) {
//         maxp_length = sub_subs.length;
//         maxp = sub_subs;
//       }
//     }
//   }
//   return maxp;
// }
// const newpari = isPalindrome("eye");
// console.log(newpari);

// const objects = {};

// for (let x = 0; x < 5; x++) {
//   objects[x] = {
//     name: "foo",
//   };
// }

// console.log(Object.values(objects));
// function is_Palindrome(str1) {
//   var rev = str1.split("").reverse().join("");
//   return str1 == rev;
// }

// function longest_palindrome(str1) {
//   var max_length = 0,
//     maxp = "";
//   for (var i = 0; i < str1.length; i++) {
//     var subs = str1.substr(i, str1.length);
//     for (var j = subs.length; j >= 0; j--) {
//       var sub_subs_str = subs.substr(0, j);
//       if (sub_subs_str.length <= 1) continue;
//       if (is_Palindrome(sub_subs_str)) {
//         if (sub_subs_str.length > max_length) {
//           max_length = sub_subs_str.length;
//           maxp = sub_subs_str;
//         }
//       }
//     }
//   }

//   return maxp;
// }
// console.log(longest_palindrome("takmadamtbi mmadamm"));

// console.log(
//   longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")

// );

// -----------PROBLEM 47 FILTER AND FIND METHOD---------

// let cities = [
//   { name: "Los Angeles", population: 3792621 },
//   { name: "Chicago", population: 8175133 },
//   { name: "Chicago", population: 2695598 },
//   { name: "Houston", population: 2099451 },
//   { name: "Philadelphia", population: 1526006 },
// ];

// // let bigCities = cities.filter(function (e) {
// //   return e.population === 2695598;
// // });

// let bigCities = cities.find(function (e) {
//   return e.population > 300000;
// });
// console.log(bigCities);

// -----------PROBLEM 48 REDUCE METHOD---------
// let shoppingCart = [
//   {
//     product: "phone",
//     qty: 2,
//     price: 500,
//   },
//   {
//     product: "Screen Protector",
//     qty: 2,
//     price: 10,
//   },
//   {
//     product: "Memory Card",
//     qty: 2,
//     price: 20,
//   },
//   {
//     product: "SSD Card",
//     qty: 4,
//     price: 320,
//   },
// ];
// const newshoppingCart = shoppingCart.reduce(
//   (total, currentItem) => {
//     const { qty, price } = currentItem;
//     total.cartItem += price * qty;
//     total.totalItem += qty;
//     return total;
//   },
//   {
//     totalItem: 0,
//     cartItem: 0,
//   }
// );
// console.log(newshoppingCart);
// const obj = {
//   a: 6,
//   b: 5,
//   c: 5,
// };
// console.log(Object.values(obj).reduce((a, b) => a * b));

// PROBLEM 49 DESTRUCTURE--------------

// const fruits = ["apple", "orange", "mango"];
// const vegetable = ["onion", "tomatto", "chilli"];
// const addall = [...fruits, ...vegetable];
// const [apple] = fruits;
// // console.log(addall);
// console.log(fruits);

// PROBLEM 50
// Print numbers from 1 to 10
// for (let i = 0; i <= 10; i++) console.log(i);

// PROBLEM 51
// Print the odd numbers less than 100
// for (let i = 1; i < 100; i += 2) {
//   console.log(i);
//   //   if (i % 2 !== 0) {
//   //     console.log(i);
//   //   }
// }

// PROBLEM 52
// Print the multiplication table with 7
// for (let i = 1; i <= 10; i++) {
//   console.log(`7 * ${i}=${7 * i}`);
// }
// PROBLEM 53
// Print all the multiplication tables with numbers from 1 to 10
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i}*${j} =${j * i}`);
//   }
// }

// PROBLEM 54
// Calculate the sum of numbers from 1 to 10
// 1+2+3+4+5+6+7+8+9+10
// var j = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log((j += i));
// }

// PROBLEM 55
// Calculate 10!
// var j = 1;
// for (let i = 1; i <= 3; i++) {
//   j *= i;
// }
// console.log(j);

// PROBLEM 56
// Calculate the sum of even numbers greater than 10 and less than 30
// var j = 0;
// for (let i = 10; i <= 30; i += 2) {
//   j += i;
// }
// console.log(j);

// PROBLEM 57
// Create a function that will convert from Celsius to Fahrenheit
// function convertFerhan(cel) {
//   const newCel = (cel * 9) / 5 + 32;

//   console.log(`${newCel}°C `);
// }
// convertFerhan(32);
// PROBLEM 57
// Create a function that will convert from Fahrenheit to Celsius
// function convertCelcius(cel) {
//   const newFah = ((cel - 32) * 5) / 9;

//   console.log(`${newFah}°F `);
// }
// convertCelcius(89);

// / PROBLEM 58
// Calculate the sum of numbers in an array of numbers
// const arr = [2, 3, 4, -1];
// var sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// PROBLEM 59

// Calculate the average of the numbers in an array of numbers
// const arr = [2, 3, 4, -1];
// var sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// const average = sum / arr.length;
// console.log(sum);
// console.log(average);

// PROBLEM 59
// Create a function that receives an array of numbers as argument and returns an
// array containing only the positive numbers

// function posiNumber(arr) {
//   var arr2 = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] <= 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   console.log(arr2);
// }
// posiNumber([3, -4, 4, 2, -8, 0]);

// PROBLEM 59
// Find the maximum number in an array of numbers
// function maxNumber(arr) {
//   var maxnum = arr[0];
//   for (let i = 0; i <= arr.length; i++) {
//     if (maxnum <= arr[i]) {
//       maxnum = arr[i];
//     }
//   }
//   console.log(maxnum);
// }
// maxNumber([3, -4, 4, 2, 8, 10, 10]);

// PROBLEM 60
// Print the first 10 Fibonacci numbers without recursion
// var i;
// var fib = []; // Initialize array!

// fib[0] = 0;
// fib[1] = 1;
// for (var i = 2; i <= 6; i++) {
//   fib[i] = fib[i - 2] + fib[i - 1];
// }
// console.log(fib);

// PROBLEM 61
// Create a function that will find the nth Fibonacci number using recursion
// function fibon(n) {
//   var fab = [];
//   fab[0] = 0;
//   fab[1] = 1;
//   for (var i = 2; i <= n; i++) {
//     fab[i] = fab[i - 2] + fab[i - 1];
//     console.log(fab[i]);
//   }
// }
// fibon(100);
// PROBLEM 62
//  sum of the positive number
// function sumPositive(pos) {
//   const cntStr = pos.toString();
//   var sum = 0;
//   for (var char of cntStr) {
//     sum += parseInt(char);
//   }
//   console.log(sum);
// }
// sumPositive(12345);

// PROBLEM 63
// Print the first 100 prime numbers
// const pri = 10;
// for (let i = 1; i <= pri; i++) {
//   if (pri % i == 0) {
//     console.log(false, "", i);
//   } else {
//   }
// }
// console.log(true, "");

// PROBLEM 64
// printPrimes(100);

// // Function prints the first nPrimes numbers
// function printPrimes(nPrimes) {
//   let n = 0;
//   let i = 2;

//   while (n < nPrimes) {
//     if (isPrime(i)) {
//       console.log(n, " --> ", i);
//       n++;
//     }

//     i++;
//   }
// }

// // Returns true if a number is prime
// function isPrime(n) {
//   if (n < 2) return false;

//   if (n == 2) return true;

//   let maxDiv = Math.sqrt(n);

//   for (let i = 2; i <= maxDiv; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }

//   return true;
// }

// PROBLEM 65
// getPrimes(10, 100);

// function getPrimes(nPrimes, startAt) {
//   let ar = [];

//   let i = startAt;

//   while (ar.length < nPrimes) {
//     if (isPrime(i)) {
//       ar.push(i);
//     }

//     i++;
//   }
//   console.log(ar);
//   return ar;
// }

// Returns true if a number is prime
// function isPrime(n) {
//   if (n < 2) return false;

//   if (n == 2) return true;

//   let maxDiv = Math.sqrt(n);

//   for (let i = 2; i <= maxDiv; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }

//   return true;
// }

// PROBLEM 66
// Rotate an array to the left 1 position

// let ar = [1, 2, 3];
// rotateLeft(ar);
// console.log(ar);

// function rotateLeft(ar) {
//   let first = ar.shift();
//   console.log(first, " shift");
//   ar.push(first);
// }

// PROBLEM 67
// Rotate an array to the RIGHT 1 position

// function rotateLeft() {
//   arr = [3, 4, 5];
//   //     [ 5, 3, 4]
//   const last = arr.pop();
//   console.log(last);
//   arr.unshift(last);
//   console.log(arr);
// }
// rotateLeft();
// PROBLEM 68
// Reverse an array
// function reverseArray() {
//   arr = [3, 4, 5];
//   //     [ 5, 4, 3]
//   arr.reverse();
//   console.log(arr);
// }
// reverseArray();

// PROBLEM 69
// Reverse an string
// function reverseArray() {
//   arr = "abc";
//   //    cba
//   console.log(arr.split("").reverse().join(""));
// }
// reverseArray();
// PROBLEM 70

// Create a function that will merge
// two arrays and return the result as
// a new array

// var varA = [1, 2, 3];
// var arrB = [4, 5, 6];
// console.log([...varA, ...arrB]);

// PROBLEM 70

// Create a function that will receive
// two arrays of numbers as arguments
// and return an array composed of
// all the numbers that are either
// in the first array or second array
// but not in both

// let ar1 = [1, 2, 3, 10, 5, 3, 14];
// let ar2 = [-1, -4, 5, 6, 14];

// let ar = mergeLeft(ar1, ar2);
// console.log(ar);

// function mergeLeft(ar1, ar2) {
//   let ar = [];

//   for (let el of ar1) {
//     if (!ar2.includes(el)) {
//       ar.push(el);
//     }
//   }
//   for (let el of ar2) {
//     if (!ar1.includes(el)) {
//       ar.push(el);
//     }
//   }

//   return ar;
// }

// PROBLEM 71

// Create a function that will receive an array of
// numbers as argument and will return a new
// array with distinct elements

// function arrOfNumber(arr) {
//   const newArr = [...new Set(arr)];
//   console.log(newArr);
// }
// arrOfNumber([1, 2, -2, 4, 4, 4, 5]);

// PROBLEM 72
// : Calculate the sum of first 100 prime numbers

// function sumPrimes(num) {
//   let sum = 0;
//   const isPrime = (n) => {
//     for (let i = 2; i < n; i++) if (n % i === 0) return false;
//     return n !== 1;
//   };
//   for (i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       sum += i;
//       console.log(i);
//       console.log(isPrime(i));
//     }
//   }
//   console.log(sum);
//   return sum;
// }

// // test here
// sumPrimes(10);

// const arr = [3, 6, 7];
// const arrr = arr.map((ar) => ar + 2);
// console.log(arrr);
// console.log(arr);
// const arr = [3, 6, 7];
// const arrr = arr.forEach((ar) => console.log(ar));
// console.log(arrr);
// console.log(arr);

// let val = "ali";
// val = "raza";
// console.log(val);

// for (var i = 1; i <= 5; i++) {
//   console.log(i, "inner");
// }
// console.log(i, "outer");
// function greeting() {
//   let message = "Hi";

//   function sayHi() {
//     console.log(message);
//   }

//   sayHi();
// }

// function myFunction(a) {
//   var newarr = "";
//   for (let i = 0; i < a.length / 2; i++) {
//     newarr += a[i];
//   }
//   console.log(newarr);
// }

// myFunction("abcdefgh");

// function myFunction(a, n) {
//   console.log(a[n - 1]);
// }

// myFunction([1, 2, 3, 4, 5], 3);

// function myFunction(a, b) {
//   if (a === b) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// myFunction(1, "1");
// function myFunction(a) {
//   let person = {
//     key: a,
//   };

//   console.log(Object.keys(JSON.stringify(person)));
// }
// myFunction("b");
// const json = '{ "fruit": "pineapple", "fingers": 10 }';
// const obj = JSON.parse(json);
// console.log(obj.fruit, obj.fingers);
// function myFunction(a) {
//   console.log(a.slice(0, a.length - 3));
// }
// myFunction("abcdefg");
// function myFunction(arr) {
//   console.log(arr.sort());
// }

// myFunction(["b", "c", "d", "a"]);

// function myFunction(a) {
//   console.log(a.slice(3, a.length));
// }
// myFunction("1234");
// function myFunction(a) {
//   console.log(a.slice(-3));
// }
// myFunction([1, 2, 3, 4]);
// function myFunction(a) {
//   var count = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] < 0) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// myFunction([1, -2, 2, -4]);

// function myFunction(a, b) {
//   console.log(a / 100) * 50;
// }
// myFunction(100, 50);
// function myFunction(obj, b) {
//   var newObj = Object.keys(obj == b) && obj[b];
//   console.log(newObj);
// for (var key in obj) {
//   key == b ? obj["country"] : obj["continent"];
//   console.log(`${key}: ${obj[key]}`);
//   // key == key ? obj[key] : "";
//   if (key == keys) {
//     console.log(obj[key], "ko");
//   }
// }
// console.log(key);
// }
// myFunction({ country: "Sweden", continent: "Europe" }, "country");

// function myFunction(set, val) {
//   console.log(set);
// }
// myFunction(new Set([1, 2, 3]), 2);

// function myFunction(a, b) {
//   myObj = { [a]: b };
//   console.log(myObj);
// }
// myFunction("z", "x");
// function myFunction(a, b) {
//   var newarr = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b) {
//       newarr.push(a[i]);
//     }
//   }
//   return newarr;
// }
// myFunction([false, "2", 1], false);

// function myFunction(a, b) {
//   var result = {};
//   a.forEach((key, i) => (result[key] = b[i]));
//   console.log(result);
// }
// myFunction(["w", "x", "y", "z"], [10, 9, 5, 2]);
// function myFunction(a, n) {
//   console.log(a.slice(-n));
// }
// myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3);
// function myFunction(a, b, c, d, e, f) {
//   z = a + b - c;

//   y = z * d;

//   g = y / e;
//   console.log(Math.pow(g, f));
// }
// myFunction(6, 5, 4, 3, 2, 1);
// function myFunction(a) {
//   newcal = Object.values(a);

//   sum = newcal.reduce((a, b) => a + b, 0);
//   console.log(sum);
// }
// myFunction({ a: 1, b: 2, c: 3 });
// function myFunction(a, b) {
//   console.log(a + b);
// }
// myFunction(" think, therefore I am", "I");
// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// console.log(result);
// function myFunction(a) {
//   console.log(a % 2 == 0 ? true : false);
// }
// myFunction(-4);
// function myFunction(set, val) {
//   console.log(set.delete(val));
// console.log(set);
// var newval = [...set];
// newarr = [];
// // console.log(newval.indexOf(val));
// for (let i = 0; i < newval.length; i++) {
//   newval[i] !== val && newarr.remove(val);
// }
// console.log(newarr);
// }
// myFunction(new Set([1, 2, 3]), 4);

// function myFunction(set, val) {
//   set.forEach((point) => {
//     if (point === val) {
//       set.delete(point);
//     }
//   });
//   console.log(set, "set1");

// }
// myFunction(new Set([1, 2, 3]), 4);

// const set1 = new Set();
// set1.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

// // Delete any point with `x > 10`.
// set1.forEach((point) => {
//   if (point.x > 10) {
//     set1.delete(point);
//   }
// });

// console.log(set1);

// function myFunction(set, val) {
//   set.delete(val);
//   console.log([...set]);
// }
// myFunction(new Set([1, 2, 3]), 1);
// myFunction(new Set("12345"), "3");
// myFunction(new Set([1, 2, 3]), 4);
// const set = new Set(["a", "b"]);
// console.log(set);
// const values = set.values();
// console.log(values);
// const array = Array.from(values);
// console.log(array);

// const set1 = new Set([{ id: 1 }, { id: 2 }]);

// console.log(set1); // 👉️ {{id: 1}, {id: 2}}

// set1.forEach((obj) => {
//   if (obj.id === 2) {
//     set1.delete(obj);
//   }
// });

// console.log([...set1]);

// function myFunction(set, val) {
//   console.log(set);
//   set.forEach((obj) => {
//     if (obj === val) {
//       set.delete(obj);
//     }
//   });
//   return set;
// }
// console.log(myFunction(new Set([1, 2, 3]), 1));
// function myFunction(a, b, c) {
//   // const newval = new Set(a, b, c);
//   // console.log(newval);
//   var set1 = new Set();

//   set1.add(a);

//   set1.add(b);

//   set1.add(c);

//   set1;
// }
// myFunction(1, "b", 3);
function myFunction(obj) {
  // console.log(obj.hasOwnProperty("b")); // true
  // delete obj.b;
  // console.log(obj.hasOwnProperty("b"));
  // console.log(obj);

  const { a, ...rest } = obj;
  console.log(rest);

  // for (const key in obj) {
  //   console.log(key === "b");
  //   if (key !== "b") {
  //     console.log("hi");
  //   }
  // if (Object.hasOwnProperty.call(obj, key)) {
  //   var element = obj[key];
  // }
  // console.log(element);
}
myFunction({ a: 1, b: 7, c: 3 });
