import { createSelector } from 'reselect';

//input selector
const selectCart = state => state.cart;
//memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumQuant, cartItem) => accumQuant + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((totalCost, cartItem) => totalCost + (cartItem.price * cartItem.quantity), 0)
);