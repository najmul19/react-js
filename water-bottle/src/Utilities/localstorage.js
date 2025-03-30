// 1st
const getStoredCart =()=>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString);

    }
    return [];
}

// 3rd
const saveCartToLS = cart =>{
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify);
    
}
// 2nd
const addToLS = id=>{
    const cart = getStoredCart();
    cart.push(id);
    // save to local Storage
    saveCartToLS(cart);
}

const removeFromLocalStorage = id =>{
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter(idx => idx!==id);
    saveCartToLS(remaining);
}

export {addToLS, getStoredCart, removeFromLocalStorage}