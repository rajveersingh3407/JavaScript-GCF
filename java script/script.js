// var name ="Rajveer Singh";
// let age = 18;
// const country = "India";
// console.log("Name: " + name);
// console.log("Age: " + age);
// console.log("Country: " + country);

// const pi=3.14;
// try{
//     pi=3.14159; 
// }catch(e){
//     console.error("Error: " + e.message);
// }

// let name = "Rajveer Singh";
// let age = 18;
// let isStudent = true;
// let emptyValue = null;
// let notAssigned; //undefined
// let uniqueId = Symbol("id");
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof emptyValue);
// console.log(typeof notAssigned);
// console.log(typeof uniqueId);

// let fruits = ["mango","apple","banana"];
// console.log(Array.isArray(fruits));
// console.log(fruits);
// console.log(fruits[0]);
// let obj1={value:10};
// let obj2=obj1; //both point to the same object
// obj2.value=20;
// console.log(obj1.value);

//console.log(typeof null); // this is a object
//console.log(typeof []); // this is a object

// let result1="5"+2;
// console.log(result1);
// console.log(typeof result1);

// let result2="5"-2;  //  - always forces numeric output
// console.log(result2);
// console.log(typeof result2);

// try{
//     let result=10/0;
//     console.log(result);
// }catch(error){
//     console.log("Something went wrong:",error.message);
// }finally{
//     console.log("this always runs");
// }

// function checkage(age){
//     try{
//         if(age<18){
//             throw new Error("you are underage");
//         }
//         console.log("access granted");
//     }catch(error){
//         console.log("blocked:",error.message);
//     }
// }
// checkage(16);
// checkage(21);

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// function add(a, b) {
//     console.log(a + b);
// }
// add(5, 3);
// add(10, 20);

// console.log(typeof window); // o/p -> object

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);}

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }

// let text="Rajveer Singh";
// console.log(text.length);
// console.log("hello".length);
// console.log("".length);
// console.log(text.charAt(0));
// console.log(text.charAt(text.length - 1));
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// let text="JavaScript";
// console.log(text.slice(0,4));
// console.log(text.slice(4));
// console.log(text.slice(-6));
// console.log(text.slice(-6,-2));
// console.log(text.slice(-1));
// console.log(text.slice(0));

// let text="Hello World";
// let newtext=text.replace("World","JavaScript");
// console.log(newtext);
// console.log(text);
// let repeared="cat and cat";
// console.log(repeared.replace("cat","dog"));
// console.log(repeared.replaceAll("cat","dog"));
// console.log(repeared);

// let text="   Hello World javaScript   ";
// console.log(text);
// console.log(text.trim());
// console.log(text.trimStart());
// console.log(text.trimEnd());
// console.log(text.trim().length);
// console.log(text.includes("javaScript"));
// console.log(text.indexOf("java"));
// let result=text.replace(/\s/g,"");
// console.log(result);

// let numberstudent=[35,37,33,34];
// numberstudent.push(36);
// console.log(numberstudent);
// numberstudent.pop();
// console.log(numberstudent);
// numberstudent.unshift(32);
// console.log(numberstudent);
// numberstudent.shift();
// console.log(numberstudent);
// console.log(numberstudent.indexOf(34));
// console.log(numberstudent.includes(37));

// let colors=["red","green","blue"];
// for(let i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }
// for (let color of colors){
//     console.log(color);
// }

// let lab={
//     number:505,
//     strength:35,
//     location:"CV Raman"
// };
// console.log(lab.location);
// console.log(lab["number"]);
// console.log(lab["strength"]);

