import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utilites/AddtoDB';
import Book from '../Book/Book';

const ReadList = () => {
const [readList,setreadList]= useState([]);
const data = useLoaderData();
const [sort ,setSort]=useState('');


useEffect(() => {

    const storeBookData =getStoreBook();
    const convertedStoreBook = storeBookData.map(id => parseInt(id));
    const myReadList =data.filter(book => convertedStoreBook.includes(book.bookId)); 
     setreadList(myReadList)
},[])

const handlesort = (type)=>{
    setSort(type)
    if(type === "pages"){
        const sortedbyPage 
        =[...readList].sort((a,b)=>a.totalPages-b.totalPages);
        setreadList(sortedbyPage)
    }
    if(type === "rating"){
        const sortbyRating =
        [...readList].sort((a,b) => a.rating-b.rating);
        setreadList(sortbyRating)

    }
}
    return (
// worst case
        <div>
<details className="dropdown">
  <summary className="btn m-1">sort by:{sort?sort :""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=> handlesort("pages")}>Pages</a></li>
    <li><a onClick={()=> handlesort("rating")}>Rating</a></li>
  </ul>
</details>

             <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>ReadList: {readList.length}</h2>
      {
        readList.map(bok => <Book key={bok.bookId} singleBook={bok}></Book> )
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;