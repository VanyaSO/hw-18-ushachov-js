'use strict'

const arr = [1, 2, 3, -1, -2, -3];

function foo(arr){

    const exampleArr = [];

    if (arr.length === 0){
        return console.log('Масив пустой');
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            exampleArr.push(arr[i]);
        }
    }

    if(exampleArr.length >= 1){
        return console.log(exampleArr);
    }else{
        return console.log(null);
    }






}

foo(arr);


