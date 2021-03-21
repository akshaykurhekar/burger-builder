import {useState} from 'react';

import CheckoutSummary from "../../component/Orders/CheckoutSummary/CheckoutSummary";

function Checkout(){

    const Ingredients = useState({
        salad:0,
        cheese:0,
        bacon:0,    
        meat:0
    })

    return(
        <CheckoutSummary ingredients = {Ingredients} />
    )
}

export default Checkout;