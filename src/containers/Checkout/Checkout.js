import {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from "../../component/Orders/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

function Checkout(props){

    const [Ingredients,setIngredients] = useState({
   
        salad:1,
        cheese:1,
        bacon:1,    
        meat:1
    });

    useEffect(() => {
        // console.log("useeffect calling...")
        const query = new URLSearchParams(props.location.search);
        const ingredients = {};

        for(let prams of query.entries() ) {
            // ["meet" :1 ]
            ingredients[prams[0]] = +prams[1];
        }
        setIngredients(ingredients);
    },[]);

    const checkoutCanceledHandler = () =>{
        props.history.goBack();
    }

    const checkoutContinuedHandler = () =>{
        props.history.replace('/checkout/contact-data');
    }

    return(
        <div>
            <CheckoutSummary 
            ingredients = { Ingredients } 
            checkoutCanceled = { checkoutCanceledHandler}
            checkoutContinued = { checkoutContinuedHandler}/>

            <Route 
              path={props.match.path + '/contact-data'} 
              component={ ContactData } />
        </div>
    )
}

export default Checkout;