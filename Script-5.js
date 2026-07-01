let employees = [
    { name: "Naveen", id: 101, salary: 30000,experience: 2 },
    { name: "John", id: 102, salary: 60000,experience: 7 },
    { name: "Arun", id: 103, salary: 45000,experience: 5 }
];
console.log("---------Task 1-----------");

let highest = employees.reduce((max, emp) => emp.salary > max.salary ? emp : max, employees[0]);
console.log(`Highest Salary : ${highest.salary}\nEmployee Name : ${highest.name}`);

console.log("---------Task 2-----------");

let searchId = 103;
let foundEmp = employees.find(emp => emp.id === searchId);
if (foundEmp) {
    console.log(`Employee Found\n\nName : ${foundEmp.name}\n\nSalary : ${foundEmp.salary}`);
} else {
    console.log("Employee Not Found");
}

console.log("---------Task 3-----------");

let bonus = 5000;
employees.forEach(emp => {
    console.log(`${emp.name} : ${emp.salary + bonus}\n`);
});

console.log("---------Task 4-----------");

employees.forEach(emp => {
    let status = emp.experience >= 5 ? "Senior Employee" : "Junior Employee";
    console.log(`${emp.name} - ${status}`);
});

console.log("---------Task 5-----------");

employees.forEach(emp => console.log(emp.name));

console.log("---------Task 6-----------");

employees.forEach(emp => console.log(emp.id));

console.log("---------Task 7-----------");

let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(`Total Salary : ${totalSalary}`);

console.log("---------Task 8-----------");

employees.filter(emp => emp.salary > 40000).forEach(emp => console.log(emp.name));

console.log("---------Task 9-----------");

employees.forEach(emp => {
    console.log(`${emp.name} : ${emp.salary + 5000}\n`);
});

console.log("---------Task 10-----------");

employees.forEach(emp => {
    console.log(`Employee Name : ${emp.name}\nEmployee ID : ${emp.id}\nSalary : ${emp.salary}\n`);
});

console.log("------------------------Challenge Task -----------------------");


let Employees_1 = [
    { name: "Naveen", id: 101, salary: 30000 },
    { name: "John", id: 102, salary: 60000 },
    { name: "Arun", id: 103, salary: 45000 }
];

console.log(`Total number of employees: ${Employees_1.length}`);

let maxSalary = Math.max(...Employees_1.map(e => e.salary));
console.log(`Highest salary: ${maxSalary}`);

let minSalary = Math.min(...Employees_1.map(e => e.salary));
console.log(`Lowest salary: ${minSalary}`);

let sumSalary = Employees_1.reduce((sum, e) => sum + e.salary, 0);
console.log(`Total salary of all employees: ${sumSalary}`);

let highestEmp = Employees_1.find(e => e.salary === maxSalary);
console.log(`Employee earning the highest salary: ${highestEmp.name}`);

let lowestEmp = Employees_1.find(e => e.salary === minSalary);
console.log(`Employee earning the lowest salary: ${lowestEmp.name}`);

console.log("Employees whose salary is greater than ₹40,000:");
Employees_1.filter(e => e.salary > 40000).forEach(e => console.log(`- ${e.name}`));

let searchId_1 = 103;
let found = Employees_1.find(e => e.id === searchId_1);
if (found) {
    console.log(`Search result for ID ${searchId_1}: Found ${found.name}`);
} else {
    console.log(`Search result for ID ${searchId_1}: Not Found`);
}

console.log("New salaries with ₹5,000 bonus:");
Employees_1.forEach(e => {
    console.log(`${e.name} : ${e.salary + 5000}`);
});

console.log("\nProfessional Employee Report:");
Employees_1.forEach(e => {
    console.log(`Employee Name : ${e.name}\nEmployee ID : ${e.id}\nSalary : ${e.salary}\n`);
});