function minMaxSum(arr){
    let max = arr[0];
    let min = arr[0];
    let rez = 0;
for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === "number"){
        if(arr[i] > max){
            max = arr[i];
        }
    else if(arr[i] < min){
    min = arr[i];
        }
}
    else{
console.log(`This element is ${typeof arr[i]}`);
        }
    }
return rez = max + min;
}

let arri = [3, 5, 6, 8, 11,"Bojan",true,"1",[]];
console.log(`The sum of the max and min is ${minMaxSum(arri)}`);