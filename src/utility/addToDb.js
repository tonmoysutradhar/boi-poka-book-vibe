import { toast } from 'react-toastify';

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
        toast.error("Already Exist in the Read List !");
        
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read_list', storedListStr);
        toast.success("Succesfully Added in the Read List !");
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
        toast.error("Already Exist in the Wish List !");
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish_list', storedWishListStr)
        toast.success("Succesfully Added in the Wish List !");
    }
}




export { addToStoredList, getStoredReadList , addToStoredWishList, getStoredWishList }