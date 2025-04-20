import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Utilites/AddtoDB';

const BookDetails = () => {
    const {id} =useParams();
    const bookId =parseInt(id)
    const data =useLoaderData();

    const singleBook =data.find(book => book.bookId===bookId);
  const {bookName,image}=singleBook;

//   store with id
// store as arraw or collection 
// store in data base but now local storage
// if book already  exist  the show a alart
// if book not exist then push in the collection or array
  const handleMarkasRead = id =>{

    addToStoreDB(id)
  }
  
    return (
        <div className='w-2/3 mx-auto'>
            <img src={image} alt="" />
             <h5>{bookName}</h5>
             <button onClick={()=>handleMarkasRead(id)} className='btn btn-accent m-2'> Mark as Read</button>
             <button className='btn btn-info m-2'>Add to Wishlist</button>
        </div>
    );
};

export default BookDetails;