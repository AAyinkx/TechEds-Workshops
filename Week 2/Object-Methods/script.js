const car = {
  make: "Toyota",
  model: "Yaris",
  colour: "Red",
  advert: () => {
    console.log(`I have a ${car.colour} car. It is a ${car.make} ${car.model}`);
  },
};

// console.log(`I have a ${car.colour} car. It is a ${car.make} ${car.model}`);

const book = {
  name: "Hanifah",
  title: "Frankenstein",
  author: "Mary Shelley",
  edition: 1818,
  pages: 258,
  rating: "5*",
  //Creating Methods
  sayHello: function (name) {
    console.log(`Hello ${name}`);
  },
  getBook: () => {
    return book.title;
  },
  bookAdvert: () => {
    console.log(
      `My favourite book is ${book.title} by ${book.author}. It is the ${book.edition} edition. It is ${book.pages} pages long and I gave it ${book.rating}s`
    );
  },
};

const bookTitle = book.getBook();
console.log(book.sayHello(book.name));
//Will return 'Hanifah' and 'Undefined'
//In Javascript, a method that does not return a value will do the task and return 'Undefined' as well
console.log(bookTitle);
console.log(car.advert());
console.log(book.bookAdvert());
