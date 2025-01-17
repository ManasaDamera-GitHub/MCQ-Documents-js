// Question 1:
// You are given an object book with the properties title, author, and yearPublished. Perform the following operations:
// 1.	Access the author property and print it.
// 2.	Modify the yearPublished property to 2022.
// 3.	Add a new property genre to the book object with the value “Fiction”.
// 4.	Delete the title property from the book object.

var book = {
    'title': 'manifest',
    'author': 'Jeff Rake',
    'yearPublished': 2018
}
console.log(book);
console.log(book['author']);//accessing the author property
book['yearPublished'] = 2022;//modifying the yearpublished
console.log(book['yearPublished']);
book['genre'] = 'Fiction'// adding new property
console.log(book);
delete book.title;// deleting the title property
console.log(book);
console.log("-----------------------------------------------------------");
// Question 2:
// You are given an object employee with the properties name, age, position, and salary. Perform the following operations:
// 1.	Access the position property and print it.
// 2.	Modify the salary property to 50000.
// 3.	Add a new property department to the employee object with the value “HR”.
// 4.	Delete the age property from the employee object.

var employee = {
    name: "Manasa",
    age: 22,
    position: 'Software Engineer',
    salary: 45000
}
console.log(employee);
console.log(employee['position']);//accessing position
employee['salary'] = 50000; //modifying salary
console.log(employee['salary']);
employee['department'] = 'HR'; // adding new property
console.log(employee);
delete employee.age; // deleting age property
console.log(employee);
console.log("-----------------------------------------------------------");
// Question 3:
// You are given an object product with the properties id, name, price, and category. Perform the following operations:
// 1.	Access the price property and print it.
// 2.	Modify the category property to “Electronics”.
// 3.	Add a new property inStock to the product object with the value true.
// 4.	Delete the id property from the product object.

var product = {
    id: "123456",
    name: "Refrigirator",
    price: 45000,
    category: "xyz"
}
console.log(product);
console.log(product['price']);//accessing price
product['category'] = 'Electronics';//modifying category
console.log(product);
product['inStock to the product'] = true;
console.log(product);
delete product.id;
console.log(product);

console.log("-----------------------------------------------------------");
// Question 4:
// You are given an object car with the properties make, model, year, and color. Perform the following operations:
// 1.	Access the make property and print it.
// 2.	Modify the color property to “Black”.
// 3.	Add a new property engineType to the car object with the value “V6”.
// 4.	Delete the year property from the car object.

var car = {
    "make": "metal",
    "model": "BMW",
    "year": "2020",
    "color": "ash"
}
console.log(car);
console.log(car['make']);
car['color'] = 'Black';
console.log(car);
car['engineType'] = 'V6';
console.log(car);
delete car['year'];
console.log(car);
console.log("-----------------------------------------------------------");

// Question 5:
// You are given an object student with the properties name, age, grade, and school. Perform the following operations:
// 1.	Access the school property and print it.
// 2.	Modify the grade property to 95.
// 3.	Add a new property hobbies to the student object with the value ["reading", "sports"].
// 4.	Delete the age property from the student object.

var student = {
    'name': 'Ashish',
    age: 9,
    grade: 85,
    school: 'Lilly Model'
}
console.log(student);
console.log(student['school']);
student['grade'] = 95;
console.log(student);
student['hobbies'] = 'reading,sports';
console.log(student);
delete student['age'];
console.log(student);
console.log("-----------------------------------------------------------");

// Perform the following operations:
// 1.	Access the city property from the address object and print it.
// 2.	Modify the theme property in the preferences object to “light”.
// 3.	Add a new property phone to the profile object with the value “555-9876”.
// 4.	Delete the zip property from the address object.

const user = {
    username: "john_doe",
    profile: {
        firstName: "John",
        lastName: "Doe",
        age: 28,
        address: {
            street: "456 Elm St",
            city: "Gotham",
            zip: "54321"
        }
    },
    preferences: {
        theme: "dark",
        notifications: true
    }
}

