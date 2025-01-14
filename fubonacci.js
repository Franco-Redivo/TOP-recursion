function fibs(n){
    let array = [];

    for(let i = 0; i < n; i++){
        if(i === 0){
            array[i] = 0; 
        }else if(i === 1){
            array[i] = 1;
        }else{
            array[i] = array[i-1] + array[i-2];
        }

        
    }

    return array;
}


function fibsRec(n){
    if(n === 0){
        return [0];
    }else if(n ===1){
        return [0,1];
    }else{
        let array = fibsRec(n-1);
        array.push(array[array.length-1] + array[array.length - 2]);
        return array;
    } 
}