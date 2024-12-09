const getStoredReadList = ()=> {
    const storedListStr = localStorage.getItem('read_list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList ;
    }
    else {
        return [] ;
    }
}
const addToStoredList = (id)=> {
    const storedList  = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id, 'already exist in the read list');
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read_list', storedListStr);
    }
}
// ------------------
const getStoredWishList = ()=> {
    const storedWishListStr = localStorage.getItem('wish_list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [] ;
    }
}
const addToStoredWishList = id => {
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        console.log(id, 'already exist in the wish list');
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish_list', storedWishListStr)
    }
}




export { addToStoredList, getStoredReadList , addToStoredWishList, getStoredWishList }