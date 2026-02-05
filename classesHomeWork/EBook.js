import Book from "./Book.js";

export default class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    //===========Getters===========//
    get fileFormat() {
        return this._fileFormat;
    }

    //===========Setters===========//
    set fileFormat(value) {
        if (typeof value !== "string" || value.trim().length === 0) {
            throw new Error("fileFormat must be a non-empty string");
        }
        this._fileFormat = value.trim().toLowerCase();
    }

    printInfo() {
        console.log('"%s" — %s, %s (format: %s)', this.title, this.author, this.year, this.fileFormat);
    }

    static fromBook(bookInstance, fileFormat) {
        if (!(bookInstance instanceof Book)) {
            throw new Error("First argument must be an instance of Book");
        }
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}
