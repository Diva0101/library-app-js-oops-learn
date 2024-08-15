class Library{
    constructor(){
        this.books = []
    }

    addBook(book){
        this.books.push(book)
    }
    getBooks(){
        return this.books
    }
    booksCount(){
        return this.books.length
    }
    removeBook(index){
        this.books.splice(index,1)
    }
}