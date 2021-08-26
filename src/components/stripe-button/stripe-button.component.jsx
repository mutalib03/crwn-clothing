import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;

  const Publishablekey =
    "pk_test_51JSgFxAAsRFGiyZgVpd1KN3fIzylqUepChYlRTLRw6k63v8XMo4DhIq88JByxayH4vJsDRRwCMAx0vDyQijbXZFf00qxPniCZO";
 
  const onToken = token => {
       console.log(token)
       alert("payment successful")
    }

return (
  <StripeCheckout
    label="Pay Now"
    name="CRWN Clothing Ltd."
    billingAddress
    shippingAddress
    image="https://svgshare.com/i/CUz.svg"
    description= {`Your total is $${price}`}
    amount= {priceForStripe}
    panelLabel = "Pay Now"
    token= {onToken}
    stripeKey= {Publishablekey}
  />
);

}

export default StripeCheckoutButton