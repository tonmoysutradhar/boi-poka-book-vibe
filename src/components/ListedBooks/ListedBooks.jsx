import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../../utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const allReadBooks = useLoaderData();
    useEffect ( ()=> {
        const storedReadBooks = getStoredReadList();
        const storedReadBooksInt = storedReadBooks.map(id => parseInt(id))

        const readBookList = allReadBooks.filter(book => storedReadBooksInt.includes(book.bookId));
        setReadList(readBookList);
    }, [])
    useEffect ( ()=> {
        const storedWishBooks = getStoredWishList();
        const storedWishBooksInt = storedWishBooks.map(id => parseInt(id))

        const wishBookList = allReadBooks.filter(book => storedWishBooksInt.includes(book.bookId));
        setWishList(wishBookList);
    }, [])

    return (
        <div className='p-2'>
            <h2 className='font-bold text-3xl py-7 rounded-2xl bg-base-200 text-center'>Books</h2>
            <div className='mt-7 mb-10 text-center'>
                <button className='btn btn-outline'>Sort By</button>
            </div>
            {/* react tab */}
            <div>
            <Tabs>
                <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            wishList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
            </div>
            
        </div>
        
            

    );
}

export default ListedBooks;
