class Book{
    constructor(name, author){
        this.name = name;
        this.author = author;
        this.isRead = false
    }
    getBookName(){
        return this.name
    }
    
    markAsRead(){
        this.isRead = true
    }
}