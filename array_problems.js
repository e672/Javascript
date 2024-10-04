//Problem: Learn how to reverse the order of elements in an array.
function reverseArray(arr){
    var rew_arr=[];
    for(var i=arr.length-1;i>=0;i--){//push() methpod add items to the end of an array
        rew_arr.push(arr[i]);//In javascript arrays dont support negative indexes
    }
    return rew_arr
}

//Calculate the sum of elements in an array.
function sumArray(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum
}

//Find the maximum value in an array.
function maxValueArray(arr){
    var comparisor=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>comparisor){
            comparisor=arr[i];
        }
    }
    return comparisor
}

//Create an array of only even numbers.
function evenNumsArray(arr){
    var evens=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evens.push(arr[i]);
        }
    }
    return evens
}

//Merge two arrays into one.
function mergeArrays(arr1,arr2){
    for(var i=0;i<arr2.length;i++){
        arr1.push(arr2[i]);
    }
    return arr1
}

//Count how many times an element appears in an array
function countOccurrences(arr,element){
    var count=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==element){
            count+=1;
        }
    }
    return count
}

//remove extra items from an array
function removeRemainItemArray(arr){
    var new_arr=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i] in new_arr){
            continue
        }
        else{
            new_arr.push(arr[i])
        }
    }
    return new_arr
}

//Multiply each element of an array by a number.
function multiplyElements(arr,multiplier){
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]*multiplier
    }
    return arr
}

//Find both the minimum and maximum values in an array.
function minmaxvalArray(arr){
    var min=arr[0];
    var max=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
        if(arr[i]>max){
            max=arr[i]
        }
        
    }
    return "max is: "+max+" min is: "+min
}

//Flatten an array of arrays into a single array.
function flattenArray(arr){
    var flat_arr=[];
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            for(var j=0;j<arr[i].length;j++){
                flat_arr.push(arr[i][j])
            }
        }
        else{
            flat_arr.push(arr[i])
        }
    }
    return flat_arr
}
