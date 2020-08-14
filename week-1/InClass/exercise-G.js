
let totalNumberOfStudents = 14; 
let totalNumberOfMentors = 3; 
let totalNumberOfStudentsAndMentors = totalNumberOfStudents + totalNumberOfMentors; 

let studentsPercentage = (totalNumberOfStudents / totalNumberOfStudentsAndMentors) * 100;
let mentorsPercentage = (totalNumberOfMentors / totalNumberOfStudentsAndMentors) * 100;

const studentsAproxPercentage = Math.round(studentsPercentage);
const mentorsAproxPercentage = Math.round(mentorsPercentage);

console.log("Students Percentage in Class: " + studentsAproxPercentage + "%");
console.log("Mentors Percentage in Class: " + mentorsAproxPercentage + "%");





