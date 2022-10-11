let totalDaSoma = 0
function getTotalDaSoma() {
for (var i = 0; i < 1000; i++) {
    if (i % 5 == 0 || i % 7 == 0) {
        totalDaSoma += i;
    }
}

return totalDaSoma
}
console.log(getTotalDaSoma())
export default totalDaSoma