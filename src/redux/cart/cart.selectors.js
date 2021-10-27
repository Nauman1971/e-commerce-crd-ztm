import { createSelector } from 'reselect';

const selectCart = state => state.cart;

// const selectUser = state => state.user

export const selectCartItems = createSelector(
    [selectCart],
    // (cart, user) => 
    // getting output from reducer
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (acc, cartItem) =>
                acc + cartItem.quantity,
            0
        )
)