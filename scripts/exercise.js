function arr(arr){
    let rez = "";
     for(i = 0; i < arr.length; i++){
        rez += arr[i]
        if(i === arr.length -1){
            rez+= "!";
        }
        else{
            rez += " "
        }
    }
    return rez;
}


let n = prompt("Enter how many strings you waant to enter in the array: ");
n = parseInt(n);
let arri = [];
for(let i = 0; i < n; i++){
    if(!isNaN(n)){
        arri[i] = prompt("Enter strings: ");
    }
    else{
        console.log("You didnt enter a number");
    }
}

console.log(arr(arri));