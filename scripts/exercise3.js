 function arris(arr1, arr2){
     let newArr = [];
     let str = "";
     if(arr1.length === arr2.length){
         for(let i = 0; i < arr1.length; i++){
             str+= i+1 + "." + " " + arr1[i] + " " + arr2[i];
             newArr.push(str);
             str = "";
         }
     }
     else{
         console.log("The names and the Last Names dont add up");
     }
     return newArr;
}

let arr1 = ["Bojan", "Filip"];
let arr2 = ["Andreevski", "Andreevski"];

console.log(arris(arr1,arr2));