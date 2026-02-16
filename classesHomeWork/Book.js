export default class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  //===========Getters===========//
  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  //===========Setters===========//
  set title(value) {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error('title must be a non-empty string');
    }
    this._title = value.trim();
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error('author must be a non-empty string');
    }
    this._author = value.trim();
  }

  set year(value) {
    const yearNumber = Number(value);
    const currentYear = new Date().getFullYear();

    if (!Number.isInteger(yearNumber)) {
      throw new Error('year must be an integer');
    }
    if (yearNumber < 0 || yearNumber > currentYear) {
      throw new Error(`year must be between 0 and ${currentYear}`);
    }

    this._year = yearNumber;
  }

  printInfo() {
    console.log('"%s" — %s, %s', this.title, this.author, this.year);
  }

  static findOldestBook(books) {
    return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
  }
}
