/*var day = Number(prompt('year'));
var month = Number(prompt ('month'));
var year= Number(prompt ('day'));
var sum= add(day,year)+month;
document.write(sum);

function add (a,b) {
    return a+b;
}*/

function getAge(age) {
    if (age > 18) {
        return 'Adult';
    }
    else {
        return 'child';
    }
}
var age=Number(prompt('Enter your age'));
var result=getAge(age);
document.write(result);