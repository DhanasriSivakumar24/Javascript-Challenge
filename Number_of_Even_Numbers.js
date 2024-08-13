function evenCount(){
    let count= 0;
    for( let element of arr){

        if( (element%2)==0){
            count+=1;
        }

    }
    
    console.log("Number of Even Numbers in an Array: "+ count);
}

let arr = [19,28,5,67,92];
evenCount(arr);