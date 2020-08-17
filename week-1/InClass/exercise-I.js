function YOB(age) {
    let YearOfBirth = 2020 - age;
    return YearOfBirth;
}

console.log(YOB());

function meetPerson (name, age) {
    calculateAge = YOB(age);
    return "Meet " + name + ", she was born in " + calculateAge;
}

console.log(meetPerson("Lola" , 38));
console.log(meetPerson("Rina", 14));









// function YOB(age) {
//     age = 38;
//     let YearOfBirth = 2020 - age;
//     return YearOfBirth;
// }

// YOB();
// console.log(YOB());

// function meetPerson (name, age) {
//     name = "Lola";
//     age = YOB();
//     return "Meet " + name + ", she was born in " + age;
// }

// meetPerson();
// console.log(meetPerson());


