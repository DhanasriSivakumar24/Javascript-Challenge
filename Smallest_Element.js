function smallestElement(arr){
    
    var element= Infinity;

    for( let value of arr){
        if(element > value){
            element = value;
    }
}console.log("Smallest Element in an Array: ",element)
}

arr=[2,45,36,50,156,18];

smallestElement(arr);