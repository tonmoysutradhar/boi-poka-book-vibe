import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect ( ()=> {
        fetch('./booksData.json')
        .then(response => response.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className='text-4xl font-bold text-center mb-8'>Books</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }   
            </div>
            
        </div>
    );
}

export default Books;
