import { createSelector } from 'reselect';

const selectCart = state => state.cart;

// const selectUser = state => state.user

export const selectCartItems = createSelector(
    // brackets are optional
    [selectCart],
    // (cart, user) => 
    // getting output from reducer
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (acc, cartItem) =>
                acc + cartItem.quantity,
            0
        )
);

export const selectCartTotoal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (acc, cartItem) =>
                acc + cartItem.quantity * cartItem.price,
            0
        )
)