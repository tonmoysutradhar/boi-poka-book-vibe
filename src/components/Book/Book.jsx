import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const {bookId, bookName, author, image, tags, category, rating} = book ;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 border p-6">
                <figure className='py-8 bg-[#F3F3F3] rounded-2xl'>
                    <img
                    src={image}
                    className='h-[166px]'
                    alt={bookName} />
                </figure>
                <div className="card-body p-0 mt-6 gap-0">
                    <div className='card-actions'>
                        {
                            tags.map ((tag, index) => <div 
                            key={index}
                            className="py-1 px-4 rounded-full bg-red-600 font-medium text-[#23BE0A] bg-[#23be0a0d]"> {tag} </div>)
                        }
                    </div>
                    <h2 className="text-2xl my-4 font-bold">
                        {bookName}
                        <div className="badge badge-secondary ml-2">NEW</div>
                    </h2>
                    <p className='font-medium'>By: {author}</p>

                    <div className="divider"></div>
                    
                    <div className='flex justify-between'>
                        <p className='font-medium'>{category}</p>
                        <div className='flex gap-1'>
                            <p>{rating}</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Book;
