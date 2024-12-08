import React from "react";
import bannerImg from "../../assets/books.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-20 rounded-3xl mb-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="sm:max-w-[500px] rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className=" text-3xl  sm:text-5xl font-bold mb-4 sm:mb-8">Books to freshen up your bookshelf</h1>
          <button className="btn btn-primary">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
