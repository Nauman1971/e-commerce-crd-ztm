import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function StripeCheckoutButton({ price }) {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51J93PIBdc6mYgdmOkCTfVhHHGAJ9NTw3v6zvYv0Mma8V4X28nyCbThhWhYNMEQJ4943xTYun75767cbaTJuPD1zs00GbaF0QuW'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please sure you use the provided credit card.'
            )
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton
