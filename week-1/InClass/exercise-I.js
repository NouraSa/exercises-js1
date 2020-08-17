
function YOB(age) {
    age = 38;
    let YearOfBirth = 2020 - age;
    return YearOfBirth;
}

YOB();
console.log(YOB());

function meetPerson (name, age) {
    name = "Lola";
    age = YOB();
    return "Meet " + name + ", she was born in " + age;
}

meetPerson();
console.log(meetPerson());


