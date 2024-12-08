import React from 'react';

const Book = ({ book }) => {

    const {bookName, author, image} = book ;

    return (
        <div className="card bg-base-100 border p-6">
            <figure className='py-8 bg-[#F3F3F3] rounded-2xl'>
                <img
                src={image}
                className='h-[166px]'
                alt={bookName} />
            </figure>
            <div className="card-body p-0 mt-6 gap-0">
                <div className='card-actions'>
                    <div className="py-1 px-4 rounded-full bg-red-600 font-medium text-[#23BE0A] bg-[#23be0a0d]">Young Adult</div>
                    <div className="py-1 px-4 rounded-full bg-red-600 font-medium text-[#23BE0A] bg-[#23be0a0d]">Identity</div>
                </div>
                <h2 className="text-2xl my-4 font-bold">
                    {bookName}
                </h2>
                <p className='font-medium'>By: {author}</p>



                <div className="card-actions justify-end">
                
                </div>
            </div>
        </div>
    );
}

export default Book;
