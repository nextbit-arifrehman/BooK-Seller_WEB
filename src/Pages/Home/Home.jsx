import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Books from '../Books/Books';

import Book from '../Book/Book';
import { useLoaderData } from 'react-router';


const Home = () => {
    const data = useLoaderData();
    console.log(data); 

    return (
        <div>
            <Banner></Banner> 
            <Books data={data}></Books>
        </div>
    );
};

export default Home;