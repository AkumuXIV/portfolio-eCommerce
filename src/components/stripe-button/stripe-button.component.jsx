import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //stripe wants price in cents
    const priceCents = price * 100;
    const publishableKey = 'pk_test_51JSB4aLhwoZfjq4xVp4NXcIMF21WhkB0anWLIa1PSQBY4Jpz5ED7yVjiR0oyHdYYFBNSuvAEW8hgSRwcC7zuUhnf004IPswD8i';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceCents}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;