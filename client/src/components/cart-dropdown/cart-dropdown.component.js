import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import { useHistory } from 'react-router-dom';

function CartDropDown() {
    const history = useHistory()
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map(cartItem =>
                            <CartItem key={cartItem.id} cartItem={cartItem} />
                        ) :
                        <span className='empty-message'>Your cart is empty</span>
                }
                <CustomButton onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
}

export default CartDropDown;
