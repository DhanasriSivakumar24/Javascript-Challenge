function multiple(){

    for( let arrElement of arr){
        if( arrElement % 7 == 0 ){
            console.log("First Multiple of 7 is: "+ arrElement);
        }
    }   
}

let arr = [19,28,5,67,92];
multiple(arr);
