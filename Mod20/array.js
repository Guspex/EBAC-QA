let array = [18,5,6,8,4,32,48,9,19,46,75,15,20,35]
let indiceMaior = 0
let indiceMenor = 0
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
        let temp
        if (array[i] > array[j]) {
            temp = i
            if (array[indiceMaior] < array[temp]){
                indiceMaior = temp
            }
        }
        if (array[i] < array[j]) {
            temp = i
            if (array[indiceMenor] > array[temp]){
                indiceMenor = temp
            }
        }
    }
}

console.log(indiceMaior)
console.log(indiceMenor)
let indices = [indiceMaior, indiceMenor]
export default indices