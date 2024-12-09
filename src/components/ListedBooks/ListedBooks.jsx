import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../../utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const [sort, setSort] = useState('');

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

    const handleSortRating = sortType => {
        setSort(sortType);

        if(sortType ='Rating'){
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedReadList);
        }
        if(sortType ='Rating'){
            const sortedWishList = [...wishList].sort((a, b) => a.rating - b.rating);
            setWishList(sortedWishList);
        }
    }
    const handleSortPages = sortType => {
        setSort(sortType);

        if(sortType ='Number of pages'){
            const sortedReadList = [...readList].sort((a, b) => a.totalPages -b.totalPages);
            setReadList(sortedReadList);
        }
        if(sortType ='Number of pages'){
            const sortedWishList = [...wishList].sort((a, b) => a.totalPages -b.totalPages);
            setWishList(sortedWishList);
        }
    }

    return (
        <div className='p-2'>
            <h2 className='font-bold text-3xl py-7 rounded-2xl bg-base-200 text-center'>Books</h2>
            <div className='mt-7 mb-10 text-center'>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-500">
                    {
                        sort ? `Short By: ${sort}` : 'Sort By'
                    }
                </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={()=> handleSortRating('Rating')}><a>Rating</a></li>
                        <li onClick={()=> handleSortPages('Number of pages')}><a>Number of pages</a></li>
                    </ul>
                </div>
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
