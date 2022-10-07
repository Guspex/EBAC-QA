let totalDaSoma = 0
for (var i = 0; i < 1000; i++) {
    if (i % 5 == 0 || i % 7 == 0) {
        totalDaSoma += i;
    }
}
console.log(totalDaSoma)