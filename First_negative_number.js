function firstNegative(arr){

    let minIndex = Infinity;
    
    for (let num of arr){
        if(minIndex > num ){
            minIndex= num;
        }
    }
    console.log("First Negative Number is: " ,minIndex );
}

arr=[-10,2,45,-25,36,50];

firstNegative(arr);