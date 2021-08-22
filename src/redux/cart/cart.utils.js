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
}