let empName = prompt("Enter Employee Name:");
let empAge = Number(prompt("Enter Employee Age:"));
let empDept = prompt("Enter Employee Department:");
let empSalary = Number(prompt("Enter Employee Salary:"));

let employee = {
    name: empName,
    age: empAge,
    department: empDept,
    salary: empSalary
};

console.log("--- Employee Details ---");
console.log("Name:", employee.name);
console.log("Age:", employee.age);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);

if (employee.salary > 30000) {
    console.log("Status: Eligible for Bonus");
} else {
    console.log("Status: Not Eligible");
}





let productName = prompt("Enter Product Name:");
let productPrice = Number(prompt("Enter Product Price:"));
let quantity = Number(prompt("Enter Quantity:"));

let totalBill = productPrice * quantity;
console.log("Product:", productName);
console.log("Initial Bill:", totalBill);

if (totalBill > 5000) {
    let discount = totalBill * 0.10; 
    totalBill = totalBill - discount;
    console.log("10% Discount Applied!");
}

console.log("Final Amount to Pay:", totalBill);



if (totalBill > 5000) {
    let discount = totalBill * 0.10; 
    totalBill = totalBill - discount;
    console.log("10% Discount Applied!");
}

console.log("Final Amount to Pay:", totalBill);





let studentName = prompt("Enter Student Name:");
let marks = Number(prompt("Enter Marks:"));

console.log("Student Name:", studentName);
console.log("Marks:", marks);

if (marks >= 90) {
    console.log("Grade: Grade A");
} else if (marks >= 75) {
    console.log("Grade: Grade B");
} else if (marks >= 50) {
    console.log("Grade: Grade C");
} else {
    console.log("Grade: Fail");
}






let userName = prompt("Enter User Name:");
let accountBalance = Number(prompt("Enter Account Balance:"));
let withdrawalAmount = Number(prompt("Enter Withdrawal Amount:"));

console.log("User:", userName);

if (withdrawalAmount <= accountBalance) {
    console.log("Status: Transaction Successful");
} else {
    console.log("Status: Insufficient Balance");
}




let username = "admin";
let password = "12345";

let inputUsername = prompt("Enter Username:");
let inputPassword = prompt("Enter Password:");

if (inputUsername === username && inputPassword === password) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}





let foodItems = ["Biryani", "Pizza", "Burger", "Fried Rice", "Parotta", "Dosa", "Noodles", "Ice Cream"];

console.log("First Item:", foodItems[0]);
console.log("Last Item:", foodItems[foodItems.length - 1]);
console.log("Total Number of Items:", foodItems.length);

console.log("--- Menu List ---");
for (let item of foodItems) {
    console.log(item);
}



let companyEmployee = {
    name: "Suresh Kumar",
    age: 28,
    department: "Development",
    salary: 45000,
    experience: "4 Years"
};

console.log("--- Employee Profile ---");
for (let key in companyEmployee) {
    console.log(key + ": " + companyEmployee[key]);
}




let signalColor = prompt("Enter signal color (Red/Yellow/Green):").toLowerCase();

switch (signalColor) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}





let age = Number(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
    console.log("Category: Child");
} else if (age >= 13 && age <= 19) {
    console.log("Category: Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Category: Adult");
} else if (age >= 60) {
    console.log("Category: Senior Citizen");
} else {
    console.log("Invalid Age entered!");
}






let employeeName = prompt("Enter Employee Name:");
let attendanceInput = prompt("Enter Attendance (Present/Absent):");

let attendanceStatus = (attendanceInput.toLowerCase() === "present") ? "Present" : "Absent";

console.log("Welcome " + employeeName);
console.log("Attendance: " + attendanceStatus);



