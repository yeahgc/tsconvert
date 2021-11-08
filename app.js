var name = 'Gerald';
var states = 50;
var sum = 5 + 4;
function sayHello() {
    alert('Hello World!');
}
;
sayHello();
function checkAge(n, a) {
    if (a < 21) {
        alert('Sorry ' + n + ', you aren\'t old enough to view this page!');
    }
    ;
}
;
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
var veggies = ['Corn', 'potato', 'broccoli', 'squash'];
for (i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
;
var people = [
    { firstName: 'James', age: 24 },
    { firstName: 'Abby', age: 19 },
    { firstName: 'James', age: 20 },
    { firstName: 'John', age: 19 },
    { firstName: 'Gerald', age: 30 }
];
for (i = 0; i < people.length; i++) {
    checkAge(people[i].firstName, people[i].age);
}
;
n = 'Hello World!';
function getLength(n) {
    return n.length;
}
var hello = getLength(n);
if (hello % 2 == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
;
