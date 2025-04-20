const getStoreBook = ()=> {
const getStoreBookstr = localStorage.getItem("readList");
if(getStoreBookstr) {
    const getStoredBookData = JSON.parse(getStoreBookstr);
     return getStoredBookData;
}
else{
    return [];
}

}

const addToStoreDB = (id) => {

    const getStoreBookData =getStoreBook();
    
    if(getStoreBookData.includes(id)) {
      alert("id exist")
    }
    else{
        getStoreBookData.push(id);
               
       const data =JSON.stringify(getStoreBookData);
       localStorage.setItem('readList',data);
    }
}

export {addToStoreDB};