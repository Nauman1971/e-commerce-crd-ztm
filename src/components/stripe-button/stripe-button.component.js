import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51J93PIBdc6mYgdmOkCTfVhHHGAJ9NTw3v6zvYv0Mma8V4X28nyCbThhWhYNMEQJ4943xTYun75767cbaTJuPD1zs00GbaF0QuW'

    const onToken = token => {
        console.log(token);
        alert('Payment successfull')
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
