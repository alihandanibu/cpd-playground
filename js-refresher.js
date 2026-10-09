const students = [
  {
    id: 1,
    name: "Amina",
    year: 3,
    grades: [9, 8, 10],
    contact: { github: "amina-dev" },
  },
  {
    id: 2,
    name: "Emir",
    year: 2,
    grades: [6, 7, 7],
  },
  {
    id: 3,
    name: "Lejla",
    year: 3,
    grades: [10, 9, 9],
    contact: { github: "lejla-codes" },
  },
  {
    id: 4,
    name: "Tarik",
    year: 3,
    grades: [7, 6, 8],
  },
];

// Task 5: Greeting function
const greet = (student) =>
  `Hi ${student.name}, you are in year ${student.year}`;

// Alternative version using destructuring:
// const greet = ({ name, year }) =>
//   `Hi ${name}, you are in year ${year}`;

students.forEach((student) => {
  console.log(greet(student));
});
// Task 6: List of names
const names = students.map((student) => student.name);

console.log(names);

// Task 7: Third-year students
const thirdYearNames = students
  .filter((student) => student.year === 3)
  .map((student) => student.name);

console.log(thirdYearNames);

// Task 8: Average grades
const average = (grades) => {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
};

const studentsWithAverage = students.map((student) => ({
  ...student,
  average: average(student.grades),
}));

studentsWithAverage.forEach((student) => {
  console.log(`${student.name}: ${student.average.toFixed(2)}`);
});

// Task 9: Promote Emir without changing the original
const updatedStudents = students.map((student) =>
  student.id === 2
    ? { ...student, year: 3 }
    : student
);

const originalEmir = students.find((student) => student.id === 2);
const updatedEmir = updatedStudents.find((student) => student.id === 2);

console.log(`Original: Emir is in year ${originalEmir.year}`);
console.log(`Updated: Emir is in year ${updatedEmir.year}`);

// Task 10: GitHub usernames
students.forEach((student) => {
  const github = student.contact?.github ?? "no GitHub";
  console.log(`${student.name}: ${github}`);
});