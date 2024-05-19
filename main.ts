
//                  Part 1: Basic Arrays - Product Inventory
//                               Challenge:
//  You are tasked with creating a Product Inventory system. Implement functions and logic to
//  manage object manipulation effectively.


// Define the type alias Product
type Product = {
    name: string;
    price: number;
    inventory: {
        stock: number;
        colorOptions: string[];
    };
};

// Create an array named products containing at least three product objects
let products: Product[] = [
    {
        name: "T-Shirt",
        price: 900,
        inventory: {
            stock: 100,
            colorOptions: ["red", "blue", "green"]
        }
    },
    {
        name: "Sneakers",
        price: 1400,
        inventory: {
            stock: 200,
            colorOptions: ["black", "white", "blue"]
        }
    },
    {
        name: "Hat",
        price: 500,
        inventory: {
            stock: 50,
            colorOptions: ["yellow", "blue", "red"]
        }
    }
];

// Implement the changeColor function
function changeColor(product: Product, newColor: string): void {
    if (!product.inventory.colorOptions.includes(newColor)) {
        console.log(`Color ${newColor} is not available for ${product.name}`);
        return;
    }

    let priceAdjustment = 0;
    switch (newColor) {
        case "red":
            priceAdjustment = 0.10; // Increase by 10%
            break;
        case "blue":
            priceAdjustment = -0.05; // Decrease by 5%
            break;
        // Add more cases as needed
        default:
            priceAdjustment = 0; // No adjustment
    }

    product.price += product.price * priceAdjustment;
    console.log(`The new price of ${product.name} after changing color to ${newColor} is $${product.price.toFixed(2)}`);
}

// Display each product's name, price, stock, and available colors
function displayProducts(products: Product[]): void {
    products.forEach(product => {
        console.log(`Name: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Stock: ${product.inventory.stock}`);
        console.log(`Available Colors: ${product.inventory.colorOptions.join(", ")}`);
        console.log('-----------------------------------');
    });
}


console.log("Initial product details:");
displayProducts(products);

// Change color of a product
changeColor(products[0], "red"); // Change color to red for the first product

console.log("\nUpdated product details:");
displayProducts(products);

//---------------------------------------------------------------------------------------------------------------//


//                  Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
//                                      Challenge:
// You are tasked with creating a student grading system. Implement functions and logic to
// manage student grades effectively.

// Define the Student type alias
type Student = {
    name: string;
    grades: number[];
};

// Create an array named students containing at least three student objects
const students: Student[] = [
    {
        name: "Fatima",
        grades: [85, 92, 78]
    },
    {
        name: "Sakina",
        grades: [89, 76, 91]
    },
    {
        name: "Zainab",
        grades: [95, 88, 84]
    }
];

// Implement the function named calculateAverageGrade
function calculateAverageGrade(grades: number[]): number {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

// Function to display each student's name and average grade
function displayStudentAverages(students: Student[]): void {
    students.forEach(student => {
        const averageGrade = calculateAverageGrade(student.grades);
        console.log(`Name: ${student.name}, Average Grade: ${averageGrade.toFixed(2)}`);
    });
}
console.log(`\n`);
console.log(`STUDENT NAME AND AVERAGE GRADE:`);
console.log(`---------------------------------------`);
displayStudentAverages(students);

//---------------------------------------------------------------------------------------------------------//


//                      Part 3: Array with Types and Indexing - Employee Salaries
//                                            Challenge:
// You are managing employee salaries for a company. Implement logic to calculate salaries and
// handle bonuses.


// Define the Employee type alias
type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
};

// Define an array named employees containing employee objects
const employees: Employee[] = [
    {
        name: "Taha",
        hoursWorked: 21,
        hourlyRate: 50,
        salary: 1050
    },
    {
        name: "Hamza",
        hoursWorked: 19,
        hourlyRate: 50,
        salary: 950
    },
    {
        name: "Mansoor",
        hoursWorked: 24,
        hourlyRate: 50,
        salary: 1200
    }
];

// Implement the function named calculateSalary
function calculateSalary(employee: Employee): number {
    let calculatedSalary = employee.hoursWorked * employee.hourlyRate + employee.salary;
    
    if (employee.hoursWorked >= 20) {
        calculatedSalary *= 1.10; // Apply a 10% bonus
    }

    return calculatedSalary;
}

// Display each employee's name and calculated salary
function displayEmployeeSalaries(employees: Employee[]): void {
    employees.forEach(employee => {
        const finalSalary = calculateSalary(employee);
        console.log(`Name: ${employee.name}, Final Salary: $${finalSalary.toFixed(2)}`);
    });
}
console.log(`\n`);
console.log(`EMPLOYEE NAME AND FINAL SALARY:`);
console.log(`--------------------------------------------`);
displayEmployeeSalaries(employees);
