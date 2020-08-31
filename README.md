# Readme 

> Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

## Solution 

Create an array to store differences between array values. 
Loop through the array and subtract adjacent elements. 
Pop off the last value, which will be Nan. 

```
    const diff = []
    for(let i = 0; i < inputArray.length; i++){
        diff.push(inputArray[i] - inputArray[i+1])
    }
    diff.pop()
```


Convert the differences array to their absolute values. Store the results in a new array.
```
    let abbys = []
    for(let i = 0; i < diff.length; i++){
        abbys.push(Math.abs(diff[i]))
    }
    
```

Return the maximum value of the absolute value array. 
    
```
    return Math.max(...abbys)

```
