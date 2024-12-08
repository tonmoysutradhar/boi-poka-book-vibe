import React, { useEffect, useState } from 'react';

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect ( ()=> {
        fetch('./booksData.json')
        .then(response => response.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Books</h1>
            <p>{books.length}</p>
        </div>
    );
}

export default Books;
