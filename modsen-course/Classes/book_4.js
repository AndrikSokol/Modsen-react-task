class Book {
  constructor(name, authorName, publishDate) {
    this.name = name;
    this.authorName = authorName;
    this.publishDate = publishDate;
  }

  getInfo() {
    return `${this.name} - ${this.authorName} , publish - ${this.publishDate}`;
  }
}

class EBook extends Book {
  constructor(price, name, authorName, publishDate) {
    super(name, authorName, publishDate);
    this.price = price;
  }

  getInfo() {
    return `${this.price}$ - ${this.name} - ${this.authorName} , publish - ${this.publishDate}`;
  }
}

const eBook = new EBook(4, "Summer", "Andrei", new Date());

console.log(eBook.getInfo());
