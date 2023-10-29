// EXERCISE 3.1

// . Create an array to use as your shopping list with 3 items: "Milk," "Bread," and 
// "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console.

// let arr = ["Milk", "Bread", "Apples"];
// console.log(arr.length);
// arr[1]="Banana";
// console.log(arr);

// EXERCISE 3.2

// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to console.

// let arr2=[];
// arr2[0]="Milk";
// arr2[1]="Bread";
// arr2[2]="Apples";
// console.log(arr2);
// arr2.splice(1,1,"Bananas", "Eggs");
// arr2.pop();
// console.log(arr2);
// arr2.sort();
// console.log(`Index of milk :${arr2.indexOf("Milk")}`);
// arr2.splice(1,0, "Carrots","Lettuce");
// console.log(arr2);
// let arr3= ["Juices","Pops"];
// let arr= arr2.concat(arr3);
// let arr_final=arr.concat(arr3);
// console.log(arr_final);
// console.log(arr_final.lastIndexOf("Pops"));

// EXERCISE 3.3

// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console.

// let arr= [1,2,3];
// let new_arr=[arr,arr,arr];
// console.log(new_arr);
// console.log(new_arr[0][1]);

// EXERCISE 3.4
// 1. Create a new myCar object for a car. Add some properties, including, but not 
// limited to, make and model, and values for a typical car or your car. Feel free 
// to use booleans, strings, or numbers.
// 2. Create a variable that can hold the string value color. This variable 
// containing a string value color can now be used to reference the property 
// name within myCar. Then, use the variable within the square bracket notation 
// to assign a new value to the color property in myCar.
// 3. Use that same variable and assign a new property string value to it, such as 
// forSale. Use the bracket notation once again to assign a new value to the 
// forSale property to indicate whether the car is available for purchase.
// 4. Output make and model into the console.
// 5. Output the value of forSale into the console

// const myCar = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022,
//     color: "Blue",
//     forSale: true
// };
// let propertyName = 'color';
// myCar[propertyName] = "Red";
// propertyName = 'forSale';
// myCar[propertyName] = false;
// console.log("Make: " + myCar.make);
// console.log("Model: " + myCar.model);
// console.log("For Sale: " + myCar.forSale);

// EXCERSICE 3.5
// 1. Create an object named people that contains an empty array that is called 
// friends.
// 2. Create three variables, each containing an object, that contain one of your 
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console

// let people = {
//     friends: []
// };
// let friend1 = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 1
// };
// let friend2 = {
//     firstName: "Jane",
//     lastName: "Smith",
//     id: 2
// };
// let friend3 = {
//     firstName: "Bob",
//     lastName: "Johnson",
//     id: 3
// };
// people.friends.push(friend1, friend2, friend3);
// console.log(people);

// Chapter projects

// Manipulating an array

// Take the following array: 
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
// {test: 'one', score: 55}, ['one', 'two']];
// Manipulate your array using various methods, such as pop(), push(), shift(), and 
// unshift(), and transform it into the following:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
// You can take the following steps, or adopt your own approach:
// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console

// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }, ['one', 'two']];
// theList.shift();
// theList.pop();
// theList.unshift("FIRST");
// theList[3] = "hello World";
// theList[2] = "MIDDLE";
// theList.push("LAST");
// console.log(theList);

// Company product catalog

// In this project, you will implement a data structure for a product catalog and create 
// queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and 
// quantity.
// 3. Add all three objects to the main array using an array method, and then log 
// the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console. 
// Experiment by adding and accessing more elements within your data 
// structure

// const productCatalog = [];
// const item1 = {
//     name: "Laptop",
//     model: "ABC123",
//     cost: 800,
//     quantity: 10
// };
// const item2 = {
//     name: "Smartphone",
//     model: "XYZ456",
//     cost: 500,
//     quantity: 20
// };
// const item3 = {
//     name: "Tablet",
//     model: "123XYZ",
//     cost: 300,
//     quantity: 15
// };
// productCatalog.push(item1, item2, item3);
// console.log("Quantity of the third item: " + productCatalog[2].quantity);

