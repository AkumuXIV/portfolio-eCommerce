export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    //cart item exists. increment quantity.
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem);
    }

    //item doesn't exist in the list.  add it with quantity of 1.
    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem) {
        if (existingCartItem.quantity === 1) {
            return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
        }
        else {
            return cartItems.map(
                cartItem => cartItem.id === cartItemToRemove.id ?
                            {...cartItem, quantity: cartItem.quantity - 1} :
                            cartItem
                );
        }
    }

    return cartItems;
};