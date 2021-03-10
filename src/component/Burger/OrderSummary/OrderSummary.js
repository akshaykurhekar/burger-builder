import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
            .map(igKey =>{
                return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>
                     : 
                     {props.ingredients[igKey]} 
                </li>);
            });

    return(
        <Aux>
            <h3>Order Summary</h3>
            <p>A delicious burger with the fellowing items:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)} </strong> </p>
            <p>Continue to checkout..!</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>Close</Button>
            <Button btnType="Success" clicked={props.purchaseContinue }>Continue</Button>

        </Aux>
    );
}

export default orderSummary;