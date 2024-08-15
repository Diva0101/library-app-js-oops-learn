const lib = new Library();

document.addEventListener('submit',(e)=>{
    e.preventDefault()
    const title = document.getElementById('title').value
    const name =document.getElementById('name').value
    const book = new Book(title,name)
    lib.addBook(book)
    
    this.renderLib()
    document.getElementById('title').value = ''
    document.getElementById('name').value = ''
})

function markAsRead(index){
    lib.getBooks()[index].markAsRead()
    this.renderLib()
    
}

function removeBook(index){
    lib.removeBook(index)
    this.renderLib()
}

function renderLib(){
    document.getElementById('totalBooks').innerHTML = `(${lib.booksCount()})`
    document.getElementById('bookList').innerHTML = ''
    lib.getBooks().forEach((book,index) => {
        document.getElementById('bookList').innerHTML += `
        
            <li class="p-0 bg-orange-100 rounded flex justify-between mt-1">
                <div class="flex">
                <h5 class="text-xs ${book.isRead==true?'line-through':''}">${book.name} by ${book.author} </h5>
                </div>
                <div>
                    <button class="bg-green-700 px-2 py-0 rounded uppercase font-semibold text-xs text-white" onClick="markAsRead(${index})">Mark as Read</button>
                    <button class="bg-red-500 px-2 py-0 rounded uppercase font-semibold text-xs text-white" onClick="removeBook(${index})">Delete</button>
                </div> 
            </li>         
            `
    });
}