import {Route, Redirect} from 'react-router-dom';
import {connect } from 'react-redux';

import CheckoutSummary from "../../component/Orders/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

function Checkout(props){

    // const [Ingredients,setIngredients] = useState({
   
    //     salad:0,
    //     cheese:0,
    //     bacon:0,    
    //     meat:0
    // });
    // const [Price, setPrice] = useState(0);

    // useEffect(() => {
    //     // console.log("useEffect calling...")
    //     const query = new URLSearchParams( props.location.search );
    //     const ingredients = {};
    //     let prices = 0;
    //     for(let prams of query.entries() ) {
    //         // ["meet" :1 ]
    //         if(prams[0] === 'price'){
    //             prices = prams[1];
    //             setPrice(prices);
    //         }else{
    //             ingredients[prams[0]] = +prams[1];
    //         }            
    //     }
    //     setIngredients(ingredients);
        
        
    // }, []) ;

    const checkoutCanceledHandler = () => {
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data');
    }

    let summary = <Redirect to="/" />
    if(props.ing){
        const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null;
        summary = (
            <div>
                {purchasedRedirect}
            <CheckoutSummary 
            ingredients = { props.ing } 
            checkoutCanceled = { checkoutCanceledHandler}
            checkoutContinued = { checkoutContinuedHandler}/>

            <Route 
              path={props.match.path + '/contact-data'} 
             component={ ContactData } />
        </div>
        );
    }

    return summary
}

const mapStateToProps = state => {
    return{
        ing: state.burgerBuilder.Ingredient,
        purchased: state.order.purchased
    };
};

export default connect(mapStateToProps)(Checkout);