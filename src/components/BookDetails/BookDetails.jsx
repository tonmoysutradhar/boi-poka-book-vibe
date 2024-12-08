import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  // const {bookId} = useParams();
  // const data = useLoaderData();
  // const book  = data.find(book => book.bookId == bookId)
  // console.log(book);

  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);

  const { bookName, author, image, tags, category, rating , review, totalPages, publisher, yearOfPublishing} = book;

  return (
    <div className="p-4 ">
      <div className="hero rounded-2xl">
        <div className="hero-content lg:gap-8 flex-col md:flex-row-reverse">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold">{bookName}</h2>
            <p className="my-3 font-medium">By: {author}</p>
            <hr />
            <p className="font-medium my-3">{category}</p>
            <hr />
            <p><span className="font-bold">Review: </span>{review}</p>
            <div className="flex gap-3 my-3 items-center">
                <span className="font-bold">Tag</span>
                {
                    tags.map ((tag, index) => <div 
                    key={index}
                    className="py-1 px-4 rounded-full bg-red-600 font-medium text-[#23BE0A] bg-[#23be0a0d]"> #{tag} </div>)
                }
            </div>
            <hr />
            <div className="my-3">
                <p>Number of Pages: {totalPages}</p>
                <p>Publisher: {publisher}</p>
                <p>Year of Publish: {yearOfPublishing}</p>
                <p>Rating: {rating}</p>
            </div>
            <div>
                <button className="btn btn-outline mr-3">Read</button>
                <button className="btn btn-info">Whislist</button>
            </div>
          </div>
          <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
            <div>
              <img src={image} className="p-6 md:p-10" alt={bookName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
