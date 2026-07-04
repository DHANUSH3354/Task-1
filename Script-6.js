let students = [
    { name: "Naveen", id: 101, mark: 85 },
    { name: "John", id: 102, mark: 45 },
    { name: "Arun", id: 103, mark: 25 }
];

console.log("--- All Students ---");
console.log(students);

console.log("\n--- Student Names ---");
students.forEach(s => console.log(s.name));

console.log("\n--- Find Student ID 102 ---");
let student102 = students.find(s => s.id === 102);
console.log(student102);

console.log("\n--- Passed Students ---");
students.forEach(s => {
    if (s.mark >= 35) {
        console.log(`${s.name} Passed`);
    }
});

console.log("\n--- Total Students Count ---");
console.log(students.length);




let employees = [
    { name: "Naveen", salary: 30000 },
    { name: "John", salary: 45000 },
    { name: "Arun", salary: 60000 }
];

let salaries = employees.map(e => e.salary);
let maxSalary = Math.max(...salaries);
console.log("Highest Salary:", maxSalary);

let minSalary = Math.min(...salaries);
console.log("Lowest Salary:", minSalary);

console.log("\n--- After Adding ₹5000 Bonus ---");
employees.forEach(e => {
    e.salary += 5000;
    console.log(`${e.name}: ₹${e.salary}`);
});

let totalSalary = employees.reduce((sum, e) => sum + e.salary, 0);
console.log("\nTotal Salary:", totalSalary);

console.log("\n--- Salary Above ₹40,000 ---");
employees.forEach(e => {
    if (e.salary > 40000) {
        console.log(`${e.name}: ₹${e.salary}`);
    }
});




let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];

console.log("Product Names:");
products.forEach(p => console.log(p.name));

let totalBill = products.reduce((sum, p) => sum + p.price, 0);
console.log("\nTotal Bill:", totalBill);

let searchProduct = products.find(p => p.name === "Mouse");
console.log("\nSearch Result:", searchProduct);

console.log("\n--- Final Bill after 10% Discount ---");
let finalBill = 0;
products.forEach(p => {
    let discount = p.price * 0.10;
    let finalPrice = p.price - discount;
    finalBill += finalPrice;
    console.log(`${p.name}: Original: ₹${p.price} | Discounted: ₹${finalPrice}`);
});
console.log("Total Final Payable Amount: ₹" + finalBill);




let account = {
    name: "Naveen",
    balance: 50000
};

account.balance += 10000;
console.log("Deposited ₹10,000. Current Balance:", account.balance);

account.balance -= 5000;
console.log("Withdrew ₹5,000. Current Balance:", account.balance);

console.log("Balance Check:", account.balance);

if (account.balance < 20000) {
    console.log("Alert: Balance is below ₹20,000!");
} else {
    console.log("Balance is safe (Above ₹20,000).");
}

console.log("\n--- Account Details ---");
console.log(account);




let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "1234") {
    alert("Welcome to the system!");
} else {
    alert("Invalid Username or Password");
}




let signal = "Yellow";
switch (signal) {
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Ready");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}




let balance = 25000;
let choice = 1; 
switch (choice) {
    case 1:
        console.log("Your Balance is: ₹" + balance);
        break;
    case 2:
        let depositAmount = 5000;
        balance += depositAmount;
        console.log(`₹${depositAmount} Deposited. New Balance: ₹${balance}`);
        break;
    case 3:
        let withdrawAmount = 2000;
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            console.log(`₹${withdrawAmount} Withdrawn. Remaining Balance: ₹${balance}`);
        } else {
            console.log("Insufficient Balance!");
        }
        break;
    case 4:
        console.log("Thank you for using our ATM. Goodbye!");
        break;
    default:
        console.log("Invalid Choice!");
}




let score = [10, 25, 40, 60, 80, 100];

console.log("Highest Score:", Math.max(...score));

console.log("Lowest Score:", Math.min(...score));

let totalScore = score.reduce((sum, s) => sum + s, 0);
console.log("Total Score:", totalScore);

let averageScore = totalScore / score.length;
console.log("Average Score:", averageScore.toFixed(2));




let wantToBook = confirm("Do you want to book a movie ticket?");

if (wantToBook) {
    let age = parseInt(prompt("Please enter your age:"));
    
    if (age >= 18) {
        alert("Booking Allowed. Enjoy your movie!");
    } else {
        alert("Not Allowed. You must be 18 or older.");
    }
} else {
    alert("Thank you. Session closed.");
}




let token = 2; 
switch (token) {
    case 1:
        console.log("Please visit Doctor A.");
        break;
    case 2:
        console.log("Please visit Doctor B.");
        break;
    case 3:
        console.log("Please visit Doctor C.");
        break;
    default:
        console.log("Invalid Token. Please check at the reception.");
}




let fruits = ["Apple", "Orange", "Banana"];
console.log("Original Array:", fruits);

fruits.push("Mango");
console.log("After push():", fruits);

fruits.pop();
console.log("After pop():", fruits);

fruits.shift();
console.log("After shift():", fruits);

fruits.unshift("Grapes");
console.log("After unshift():", fruits);

fruits.splice(1, 1, "Kiwi");
console.log("After splice():", fruits);

let newFruits = fruits.slice(0, 2);
console.log("Result of slice(0, 2):", newFruits);




let employeesList = [
    { name: "A", salary: 20000 },
    { name: "B", salary: 35000 },
    { name: "C", salary: 50000 },
    { name: "D", salary: 70000 }
];

let updatedSalaries = employeesList.map(e => ({ ...e, salary: e.salary + 5000 }));
console.log("1. Map (Updated Salaries):", updatedSalaries);

let filteredEmployees = employeesList.filter(e => e.salary > 30000);
console.log("2. Filter (>30k):", filteredEmployees);

let foundEmployee = employeesList.find(e => e.salary === 50000);
console.log("3. Find (50k):", foundEmployee);

let total = employeesList.reduce((sum, e) => sum + e.salary, 0);
console.log("4. Reduce (Total Salary):", total);

let hasHighEarner = employeesList.some(e => e.salary > 60000);
console.log("5. Some (>60k?):", hasHighEarner);

let allEarnAbove15k = employeesList.every(e => e.salary > 15000);
console.log("6. Every (>15k?):", allEarnAbove15k);




let company = " Stackly IT ";

console.log("Uppercase:", company.toUpperCase());

console.log("Lowercase:", company.toLowerCase());

let trimmed = company.trim();
console.log("Trimmed:", `'${trimmed}'`);

console.log("Replaced:", company.replace("IT", "Software"));

console.log("Contains 'Stackly'?:", company.includes("Stackly"));

console.log("Split Array:", company.trim().split(" "));




let count = 0;

let clockInterval = setInterval(() => {
    let now = new Date();
    console.log(`Time: ${now.toLocaleTimeString()}`);
    count++;

    if (count === 10) {
        clearInterval(clockInterval);
        console.log("Clock Stopped after 10 seconds.");
    }
}, 1000);




fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        console.log("--- 1. All Product Titles ---");
        products.forEach(p => console.log(p.title));

        console.log("\n--- 2. Only Prices ---");
        products.forEach(p => console.log(`$${p.price}`));

        console.log("\n--- 3. Products Costing More than $100 ---");
        products.filter(p => p.price > 100).forEach(p => console.log(`${p.title} - $${p.price}`));

        console.log("\n--- 4. Count Total Products ---");
        console.log(`Total Products: ${products.length}`);

        console.log("\n--- 5. Print Category Names ---");
        let categories = [...new Set(products.map(p => p.category))]; // Unique பிரிவுகள்
        console.log(categories);
    })
    .catch(err => console.error("Error fetching data:", err));




const fetchEmployeeData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 101, name: "Naveen", salary: 35000, dept: "IT" },
                { id: 102, name: "John", salary: 45000, dept: "HR" },
                { id: 103, name: "Arun", salary: 65000, dept: "Finance" },
                { id: 104, name: "Divya", salary: 28000, dept: "IT" }
            ]);
        }, 1000);
    });
};

async function startPayrollSystem() {
    console.log(`===================================================`);
    console.log(`        EMPLOYEE PAYROLL SYSTEM STARTED           `);
    console.log(`        Date & Time: ${new Date().toLocaleString()} `);
    console.log(`===================================================`);

    let employees = await fetchEmployeeData();
    console.log(`✔ [System Log]: Data successfully fetched from API.\n`);

    function processAction(actionName, callback) {
        console.log(`\n--- Action: ${actionName} ---`);
        callback();
    }

    processAction("View Employees", () => {
        employees.forEach(e => console.log(`ID: ${e.id} | Name: ${e.name} | Dept: ${e.dept} | Salary: ₹${e.salary}`));
    });

    processAction("Search Employee by ID (102)", () => {
        let searchId = 102;
        let emp = employees.find(e => e.id === searchId);
        if (emp) {
            console.log(`Found: ${emp.name} working in ${emp.dept} department.`);
        } else {
            console.log("Employee Not Found.");
        }
    });

    processAction("Add ₹5000 Bonus", () => {
        let updatedList = employees.map(e => ({ ...e, salary: e.salary + 5000 }));
        updatedList.forEach(e => console.log(`${e.name} New Salary: ₹${e.salary}`));
    });

    processAction("Salary Analytics (Max & Min)", () => {
        let salaries = employees.map(e => e.salary);
        let max = Math.max(...salaries);
        let min = Math.min(...salaries);
        console.log(`Highest Salary in Company: ₹${max}`);
        console.log(`Lowest Salary in Company: ₹${min}`);
    });

    processAction("Total Salary Payout", () => {
        let totalPayout = employees.reduce((sum, e) => sum + e.salary, 0);
        console.log(`Total monthly expense for salaries: ₹${totalPayout}`);
    });

    processAction("Filter High Earners (> ₹40,000)", () => {
        let highEarners = employees.filter(e => e.salary > 40000);
        highEarners.forEach(e => console.log(`${e.name} earns ₹${e.salary}`));
    });

    processAction("Generate Department Tax Reports", () => {
        employees.forEach(e => {
            switch (e.dept) {
                case "IT":
                    console.log(`Report: ${e.name} (IT) - Subject to Professional Tax Type A.`);
                    break;
                case "Finance":
                    console.log(`Report: ${e.name} (Finance) - Subject to Professional Tax Type B.`);
                    break;
                default:
                    console.log(`Report: ${e.name} (${e.dept}) - Standard Tax Bracket.`);
            }
        });
    });
    
    console.log(`\n✔ [System Log]: Application successfully closed.`);
}

startPayrollSystem();  