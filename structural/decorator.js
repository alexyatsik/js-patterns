class Book {
    constructor(title, author, price) {
        this._title = title;
        this._author = author;
        this.price = price;
    }

    getDetails() {
        return `${this._title} by ${this._author}`;
    }
}

function giftWrap(book) {
    book.isGiftWrapped = true;
    book.unwrap = function() {
        return `Unwrapped ${book.getDetails()}`;
    };

    return book;
}

function hardbindBook(book) {
    book.isHardbound = true;
    book.price += 5;
    return book;
}

//const alchemist = giftWrap(new Book('The Alchimist', 'Paulo Coelho', 10));
//console.log(alchemist.isGiftWrapped);
//console.log(alchemist.unwrap());

const inferno = new Book('Inferno', 'Dan Brown', 15);
console.log(inferno.price);

hardbindBook(inferno);
console.log(inferno.isHardbound);
console.log(inferno.price);