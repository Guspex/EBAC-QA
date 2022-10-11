var mdc = function(num1, num2) {

    var resto;

    do {
        resto = num1 % num2;

        num1 = num2;
        num2 = resto;

    } while (resto != 0);

    return num1;
}
console.log(mdc(682,1650))
export default mdc(a,b)