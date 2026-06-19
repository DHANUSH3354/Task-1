const employeeName = "Dhanush V";
const employeeId = "EMP024";
const department = "Frontend Developer";
let salary = 30000;
const isPermanent = false;

console.log(`Employee Details
----------------
Name       : ${employeeName}
ID         : ${employeeId}
Department : ${department}
Salary     : ${salary}
Permanent  : ${isPermanent}`);

console.log("----------------------------------------------------------")


const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

console.log("First Skill:", skills[0]);
console.log("Third Skill:", skills[2]);
console.log("Last Skill:", skills[skills.length - 1]);
console.log("Total Skills:", skills.length);

console.log("----------------------------------------------------------")


const company = {
    companyName: "Stackly IT",
    location: "Chennai",
    employees: 50,
    technologies: ["JavaScript", "React", "Node.js", "Python"]
};

console.log("Company Name:", company.companyName);
console.log("Location:", company.location);
console.log("Second Technology:", company.technologies[1]);
console.log("Total Technologies:", company.technologies.length);


console.log("----------------------------------------------------------")


let basicSalary = 30000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let finalSalary = totalSalary - tax;

console.log("Total Salary:", totalSalary);
console.log("Tax (10%):", tax);
console.log("Final Salary:", finalSalary);


console.log("----------------------------------------------------------")


let attendance = 92;

let examStatus = (attendance >= 75) ? "Eligible for Exam" : "Not Eligible";

console.log(examStatus);


console.log("----------------------------------------------------------")

let username = "admin";
let password = "12345";

(username === "admin" && password === "12345") 
    ? console.log("Login Successful") 
    : console.log("Invalid Credentials");
console.log("----------------------------------------------------------")

const productName = "Laptop";
const productPrice = 45000;
let quantity = 2;

let totalBill = productPrice * quantity;

console.log(`Product : ${productName}
Price : ${productPrice}
Quantity : ${quantity}
Total : ${totalBill}`);

console.log("----------------------------------------------------------")

let visitors = 100;

console.log("Pre Increment:", ++visitors);
console.log("Post Increment:", visitors++);
console.log("Pre Decrement:", --visitors);
console.log("Post Decrement:", visitors--);

console.log("----------------------------------------------------------")

console.log(10 == "10");
console.log(10 === "10");
console.log(20 != "20");
console.log(20 !== "20");
console.log(5 < 10);
console.log(15 >= 20);
console.log(100 <= 100);

console.log("----------------------------------------------------------")

let empName = prompt("Enter Employee Name:");
let empAge = prompt("Enter Employee Age:");
let wantsToJoin = confirm("Do you want to join our company?");

(wantsToJoin) 
    ? alert(`Welcome ${empName}`) 
    : alert("Thank You");
console.log("----------------------------------------------------------")

let portalUsername = prompt("Enter Username to Access Portal:");
let portalPassword = prompt("Enter Password:");

let isLoginSuccess = (portalUsername === "admin" && portalPassword === "12345");

let inputName = isLoginSuccess ? prompt("Enter Employee Name:") : "Naveen";
let inputExperience = isLoginSuccess ? prompt("Enter Experience (e.g., 3 Years):") : "3 Years";
let inputAttendance = isLoginSuccess ? Number(prompt("Enter Attendance %:")) : 92;
let joinConfirm = isLoginSuccess ? confirm("Is the Employee details confirmed?") : true;

const employeePortalData = {
    empId: "EMP101",
    department: "Development",
    basic: 50000,
    skills: ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"],
    companyName: "Stackly IT",
    location: "Coimbatore"
};

let calculatedBonus = (inputAttendance >= 90) ? 5000 : 2000;
let finalEmpSalary = employeePortalData.basic + calculatedBonus;
let examEligibility = (inputAttendance >= 75) ? "Eligible" : "Not Eligible";
let loginStatusText = isLoginSuccess ? "Success" : "Failed (Showing Mock Data)";

console.log(`==============================
       EMPLOYEE PORTAL
==============================
Employee Name : ${inputName}
Employee ID   : ${employeePortalData.empId}
Department    : ${employeePortalData.department}
Experience    : ${inputExperience}
Salary        : ₹${employeePortalData.basic}
Bonus         : ₹${calculatedBonus}
Final Salary  : ₹${finalEmpSalary}
Skills        : ${employeePortalData.skills.join(", ")}
Attendance    : ${inputAttendance}%
Exam Status   : ${examEligibility}
Login Status  : ${loginStatusText}
Company       : ${employeePortalData.companyName}
Location      : ${employeePortalData.location}
==============================`);

