function postiveSum(arr){
    let sum = 0;
    maxValue = -Infinity;
    for ( let element of arr ){
        if(element> maxValue) {
            maxValue = element;
            sum += maxValue;
        }
    }
    console.log( "Sum of Positive Numbers: ", sum);
}

let arr = [17,54,-3,-21,71];
postiveSum(arr);