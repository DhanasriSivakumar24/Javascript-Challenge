function digitCount(arr){
    let count = 0;

    for (let digit of arr){
        count+=1;
    }
    
    console.log("Number of digits: ",count)
}

arr = [1,2,3,4,5,6,7,8,9]
digitCount(arr);