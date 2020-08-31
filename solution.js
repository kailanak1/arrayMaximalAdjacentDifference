function arrayMaximalAdjacentDifference(inputArray) {
    const diff = []
    for(let i = 0; i < inputArray.length; i++){
        diff.push(inputArray[i] - inputArray[i+1])
    }
    diff.pop()
    let abbys = []

    for(let i = 0; i < diff.length; i++){
        abbys.push(Math.abs(diff[i]))
    }
    
    return Math.max(...abbys)
}
