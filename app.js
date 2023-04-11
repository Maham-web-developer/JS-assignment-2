//==========Answer 1======
// function createAdder(num) {
//     return function(x) {
//       return num + x;
//     }
//   }
//    let addFive = createAdder (5) ;
//  let result = addFive (10) ;
//  console.log (result) ;  // Output: 15

//============Answer 2=======
// function searchArray(arr, val) {
//     if (arr.length === 0) {
//       return false;
//     }
//      if (arr[0] === val) {
//        return true;
//     }
//      return searchArray(arr.slice(1), val);
//   }
//    let myArray = [1, 2, 3, 4, 5];
//       const value = 3;
  
//    if (searchArray(myArray, value)) {
//     console.log ("Value defined !");
//    }
//     else {
//      console.log("Value not defined !");
//    }
  
//==========Answer 3======
// function addPara(text) {
//     let newPara = document.createElement("p");
//     newPara.textContent = text;
//     document.body.appendChild(newPara);

//     addPara("This is a new para!");
//   }
  
//===========Answer 4========
// function addListItem(text) {
//     let newListItem = document.createElement("li");

//     newListItem.textContent = text;

//     let unorderedList = document.querySelector("ul");
//     unorderedList.appendChild(newListItem);
//   }
//   addListItem("This is a new list item!");

//=========Answer 5=======
// function changeBackgroundColor(mypara, color) {
//     mypara.style.backgroundColor = "aqua";

//     let myPara = document.getElementById('my-para');
//  changeBackgroundColor(myPara, 'aqua');
//   }

//=========Answer 6===
// function saveObjectToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
  
// let myObj = { name: "maham", class :"javascript", };
// saveObjectToLocalStorage("name", myObj);



//==========Answer 7=====
// function getObjectFromLocalStorage(key) {
//     let objStr = localStorage.getItem(key);
//     if (objStr === null) {
//       return null;
//     }
//     return JSON.parse(objStr);
//   }
//   let myObj = { name: "Maham", age: 17 };
// localStorage.setItem("myKey", JSON.stringify(myObj));

// let retrievedObj = getObjectFromLocalStorage("myKey");
// console.log(retrievedObj); // Output: {name: "Maham", age: 17}

  
 // ===========Answer 8===
//  function saveObjectToLocalStorage(obj) {
//     for (const prop in obj) {
//       if (obj.hasOwnProperty(prop)) {
//         localStorage.setItem(prop, JSON.stringify(obj[prop]));
//       }
//     }
//     let newObj = {};
//     for (let prop in obj) {
//       if (obj.hasOwnProperty(prop)) {
//         newObj[prop] = JSON.parse(localStorage.getItem(prop));
//       }
//     }
//     return newObj;
//   }
//   const myObj = { name: "maham", class:11, };
// const newObj = saveObjectToLocalStorage(myObj);
// console.log(newObj);

//=============assignment 2=============


  
