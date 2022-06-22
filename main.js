function armstrongNumber(x){
    let sum =0;
    let rem = 0;
    let temp = x;

    while(x > 0){
        rem = x % 10;
        sum = sum + (rem * rem * rem);
        x = Math.floor(x / 10);
    }

    if (sum == temp ){
        return true;
    }
    else{
        return false;
    }

}

// console.log(armstrongNumber(153));

if(armstrongNumber(154)){
    console.log("it is a armstrong number");
}
else{
    console.log("it is not a armstrong number");
}