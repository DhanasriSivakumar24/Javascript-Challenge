function vowelCount(){
    let vowel= "aeiou";
    count=0;
    for( let letter of wordString){
        count+=1;
    }
    
    console.log("Number of vowels in the string: "+ count);
}

let wordString = "hello";
vowelCount(wordString);