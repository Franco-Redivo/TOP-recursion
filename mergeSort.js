function mergeSort(array){
    if(array.length === 1){
        return array;
    }

    let middle = array.length / 2;
    let left = mergeSort(array.slice(0,middle));
    let right = mergeSort(array.slice(middle));

    return merge(left,right)

     
}

function merge(leftAr, rightAr){
    let sortedAr = [];

    while(leftAr.length && rightAr.length){
        if(leftAr[0] < rightAr[0]){
            sortedAr.push(leftAr.shift());
        } else {
            sortedAr.push(rightAr.shift());
        }
    }

    return sortedAr.concat(leftAr,rightAr);
}