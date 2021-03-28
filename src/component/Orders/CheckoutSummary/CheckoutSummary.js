import Button from "../../UI/Button/Button";
import Burger from "../../Burger/Burger";

import "./CheckoutSummary.css";

const checkoutSummary = (props) => {
    return(
        <div className="CheckoutSummary">
            <h1>We hope it tastes Well!</h1>
            <div style={{width:"100%", margin:"auto" }}>
                <Burger ingredient = {props.ingredients} />
            </div>
            <Button btnType="Danger" clicked = {props.checkoutCanceled } > Cancel </Button>
            <Button btnType="Success" clicked = {props.checkoutContinued }> Continue </Button>
        </div>
    )
}

export default checkoutSummary;