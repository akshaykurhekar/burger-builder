import Aux from "../../../hoc/Auxiliary";

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
            <p>Continue to checkout..!</p>
        </Aux>
    );
}

export default orderSummary;