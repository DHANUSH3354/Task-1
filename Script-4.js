function calculateYearlySalary(monthlySalary) {
    return monthlySalary * 12;
}

const yearlySalary = calculateYearlySalary(45000);
console.log("Yearly Salary : ₹" + yearlySalary); 



function checkResult(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(checkResult(72));



function calculateBill(price, quantity) {
    return price * quantity;
}

const totalBill = calculateBill(180, 3);
console.log("Total Bill : ₹" + totalBill);



function welcomeEmployee(name, department) {
    console.log("Welcome " + name);
    console.log("Department : " + department);
}

welcomeEmployee("Dhanush", "Development");




function getFinalAmount(price, discount) {
    return price - discount;
}

const finalAmount = getFinalAmount(5000, 500);
console.log("Final Amount : ₹" + finalAmount);




function showDashboard() {
    console.log("Loading Dashboard...");
}

function loginCompany(username, callback) {
    console.log("Login Successful");
    callback(); 
}

loginCompany("Naveen", showDashboard);




function processDelivery(step, callback) {
    console.log(step);
    if(callback) callback();
}

processDelivery("Order Received", () => {
    processDelivery("Preparing Food", () => {
        processDelivery("Out for Delivery", () => {
            processDelivery("Delivered");
        });
    });
});




function* luckyDraw() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}

const coupon = luckyDraw();
console.log(coupon.next().value); 
console.log(coupon.next().value); 
console.log(coupon.next().value); 
console.log(coupon.next().value); 




function bonus(salary) {
    return function(bonusAmount) {
        console.log("Total Salary : " + (salary + bonusAmount));
    };
}

bonus(50000)(5000);



const employeePersonal = { name: "Naveen", city: "Chennai" };
const employeeOffice = { id: 101, dept: "Development" };

const employeeDetails = { ...employeePersonal, ...employeeOffice };
console.log(employeeDetails);




const cart1 = ["Mobile", "Laptop"];
const cart2 = ["Headphone", "Watch"];

const mergedCart = [...cart1, ...cart2];
console.log(mergedCart); 



function student(name, ...marks) {
    let totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    let average = totalMarks / marks.length;

    console.log("Student : " + name);
    console.log("Total Marks : " + totalMarks);
    console.log("Average : " + average.toFixed(2));
}

student("Naveen", 90, 85, 88, 95);


const product = { name: "Laptop", price: 65000, brand: "Dell", stock: 20 };

const { name, price } = product; 
console.log("Name : " + name);
console.log("Price : " + price);


const customer = [101, "Dhanush", "karur", 9876543210];

const [id, custName, city] = customer; 
console.log("ID : " + id);
console.log("Name : " + custName);
console.log("City : " + city);



let cart = ["Mobile", "Laptop"];
cart.push("Headphone");
console.log(cart); 




let cartItems = ["Mobile", "Laptop", "Headphone"];
cartItems.pop();
console.log(cartItems); 



let employees = ["Rahul", "Arun", "John", "David"];
employees.splice(2, 1, "Dhanush");
console.log(employees); 




let products = ["Mouse", "Keyboard", "Monitor", "Laptop"];
console.log(products.includes("Laptop"));




let salaries = [25000, 45000, 30000, 70000];
salaries.sort((a, b) => a - b);
console.log(salaries); 


let messages = ["Hi", "Hello", "How are you?", "Good Morning"];
messages.reverse();
console.log(messages); 




let employeeDB = [
    { id: 101, name: "Naveen", dept: "Development", salary: 50000 },
    { id: 102, name: "Arun", dept: "Design", salary: 40000 },
    { id: 103, name: "Rahul", dept: "Testing", salary: 30000 }
];

function addEmployee(id, name, dept, salary) {
    employeeDB.push({ id, name, dept, salary });
    console.log(`Employee ${name} added successfully!`);
}

function viewEmployees() {
    console.log("\n--- Employee List ---");
    employeeDB.forEach(emp => console.log(`ID: ${emp.id} | Name: ${emp.name} | Dept: ${emp.dept} | Salary: ₹${emp.salary}`));
}

function searchEmployeeById(id) {
    let emp = employeeDB.find(e => e.id === id);
    if(emp) {
        const { name, dept, salary } = emp;
        console.log(`\nFound! Name: ${name}, Dept: ${dept}, Salary: ₹${salary}`);
    } else {
        console.log("\nEmployee not found!");
    }
}

function calculateTotalPayout(salary) {
    return function(bonus) {
        return salary + bonus;
    };
}

function removeEmployee(id) {
    let index = employeeDB.findIndex(e => e.id === id);
    if(index !== -1) {
        employeeDB.splice(index, 1);
        console.log(`\nEmployee with ID ${id} removed.`);
    }
}

function sortBySalary() {
    employeeDB.sort((a, b) => a.salary - b.salary);
    console.log("\nSorted by Salary (Low to High)");
    viewEmployees();
}

function findEmployeeByName(name) {
    let result = employeeDB.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
    console.log(`\nSearch Results for "${name}":`, result);
}

viewEmployees();
addEmployee(104, "David", "HR", 45000);
searchEmployeeById(101);

const total = calculateTotalPayout(50000)(5000);
console.log(`\nTotal Salary with Bonus: ₹${total}`);

sortBySalary();
findEmployeeByName("Arun");
removeEmployee(103);
viewEmployees();




