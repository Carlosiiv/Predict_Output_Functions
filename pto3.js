function addingPositions(numbers){
    console.log("Starting array:" + numbers);
    for(var i=0; i<numbers.length-1; i++){
        numbers[i+1] = numbers[i] + numbers[i+1];    
    }
    return numbers;
}
var arr = [7,3,8,4,2,0,1];
var changedArr = addingPositions(arr);
console.log(changedArr);