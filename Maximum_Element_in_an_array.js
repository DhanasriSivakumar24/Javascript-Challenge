function maxValue(){

    let maxValue = -Infinity;
    for( let arrElement of arr){

        if( arrElement > maxValue)
            maxValue = arrElement;

    }
    
    console.log("Maximum Value is:"+ maxValue)
}

let arr = [19,28,5,67,92];
maxValue(arr);