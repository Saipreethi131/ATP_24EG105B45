/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.
Requirements:
  Create a Book class with the following:
  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)
  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise */
 
     class Book{
        title;
        author;
        pages;
        isAvailable;
         
        constructor(title,author,pages,isAvailable=true){
            this.title=title;
            this.author=author;
            this.pages=pages;
            this.isAvailable=isAvailable;
        }
        borrow(){
            if(this.isAvailable)
                return this.isAvailable=false;
        }
        returnbook(){
            return this.isAvailable=true;
        }
        getinfo(){
          return `${this.title} by ${this.author} (${this.pages} pages)`;
        }
        isLongBook(pages){
            return this.pages>300;
     
      }
    }
    //Create at least 5 book objects using the class
      const book1=new Book("Harry Potter","xyz",300);
      const book2=new Book("The 5AM Club","ABC",200);
      const book3=new Book("Atmomic Habits","DEF",150);
      const book4=new Book("The Alchemist","GHI",450);
      const book5=new Book("Fahreinheit 451","KLM",350,false);
      const books=[book1,book2,book3,book4,book5]

      //Display info of all books
      console.log("\nAll books:")
      for(let i of books)
      {
        console.log(i.getinfo())
      }
      
      //Borrow 2 books and show their availability status
      book1.borrow()
      book3.borrow()
      console.log("\nAfter Borrowing:")
      console.log(`${book1.title}-Available : ${book1.isAvailable}`)
      console.log(`${book3.title}-Available : ${book3.isAvailable}`)
    
      //Return 1 book and show updated statusisAvailable
      book1.returnbook(1)
      console.log("\nAfter Returning:")
      console.log(`${book1.title}-Available : ${book1.isAvailable}`)

      //Count how many books are "long books" (more than 300 pages)
      const longbooks= books.filter(book=>book.isLongBook())
      console.log("\nCount of Long Books: ",longbooks.length)

      //List all available books
      const availablebooks=books.filter(book=>book.isAvailable)
      console.log("\nAvailable books:",availablebooks)


      