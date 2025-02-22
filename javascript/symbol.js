// Define a Symbol for the "read" status
const readStatusSymbol = Symbol("readStatus");

// Book constructor function
function Book(title, author) {
    this.title = title;
    this.author = author;
    this[readStatusSymbol] = false; // Default to unread
}

// Method to mark a book as read
Book.prototype.markAsRead = function() {
    this[readStatusSymbol] = true;
};

// Method to check if a book is read
Book.prototype.isRead = function() {
    return this[readStatusSymbol];
};

// Creating book instances
const book1 = new Book("1984", "George Orwell");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

// Mark book1 as read
book1.markAsRead();

console.log(book1.isRead()); // Output: true
console.log(book2.isRead()); // Output: false

// Adding a new property to book1 without affecting the Symbol property
book1.readStatusSymbol = "I'm just a regular property";
console.log(book1[readStatusSymbol]); // Output: true
console.log(book1.readStatusSymbol);  // Output: "I'm just a regular property"

/*
Explanation
We define a Symbol called readStatusSymbol to uniquely identify the "read" status of a book.

The Book constructor function initializes each book object with a title, author, and the readStatusSymbol property.

We add methods to the Book prototype to mark a book as read and to check if a book is read.

By using Symbol, we ensure that the readStatusSymbol property is unique and doesn't conflict with any other properties that might be added to the book objects.

This way, Symbol helps us avoid property name collisions and keeps our code more robust and maintainable.

*/