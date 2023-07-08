const cartToDb = id => {
    let shoppingCart;
    const savedCart = localStorage.getItem('Shopping-Cart');
    if (savedCart) {
        shoppingCart = JSON.parse(savedCart);
    }
    else {
        shoppingCart = {};
    }

    const value = shoppingCart[id];
    if (value) {
        const newValue = value + 1;
        shoppingCart[id] = newValue;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('Shopping-Cart', JSON.stringify(shoppingCart));

}


const removeToDb = id => {
    const shoppingCart = JSON.parse(localStorage.getItem('Shopping-Cart'));
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('Shopping-Cart', JSON.stringify(shoppingCart));

    }


}
const removeShoppingCart = () => {
    localStorage.removeItem('Shopping-Cart');
}

export {
    cartToDb,
    removeToDb,
    removeShoppingCart
}