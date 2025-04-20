import { FaRegStar } from "react-icons/fa";
import React, { use } from 'react';
import { Link } from "react-router";

const Book = ({singleBook}) => {

    const {publisher,bookId,bookName,category,image,yearOfPublishing,rating ,tags}= singleBook;

    // const data =use(bookPromise);   {bookPromise}
    // console.log(data)  
    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm border p-3  ">
        <figure className='pt-8 bg-gray-100 w-2/3 mx-auto'>
          <img
          className='h-[166px]'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body flex justify-center">
        <div className="card-actions flex justify-center">
            { 
             tags.map((tag,index) => <div key={index} className="badge badge-outline">{tag}</div>)   
            }
          
          </div>
          <h2 className="card-title">
              {bookName}
            <div className="badge badge-secondary ">{yearOfPublishing}</div>
          </h2>
          <p className="font-black"> Book By:  {publisher}</p>
            <div className="border-1 border-dashed">

            </div>
          <div className="card-actions justify-center ">
            <div className="badge font-black ">{category}</div>
            <div className="badge "> {rating}<FaRegStar /></div>
          </div>
        </div>
      </div>
        </Link>
    );
};

export default Book;