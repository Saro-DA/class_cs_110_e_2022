const gradeUtil = require('./grade-util');

const students = [
    {
        name: "Poghos",
        grade: 76
    },
    {
        name: "Petros",
        grade: 86
    },
    {
        name: "Martiros",
        grade: 54
    },
    {
        name: "Kirakos",
        grade: 100
    },
    {
        name: "Tadevos",
        grade: 30
    }
];

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    student.gradeLetter = gradeUtil.returnLetter(student.grade);
    student.isPassing = gradeUtil.isPassing(student.gradeLetter);
}

console.log(students);