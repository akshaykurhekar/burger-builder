import Button from "../../UI/Button/Button";
import Burger from "../../Burger/Burger";

import "./CheckoutSummary.css";

const checkoutSummary = (props) => {
    return(
        <div className="CheckoutSummary">
            <h1>We hope it tastes Well!</h1>
            <div style={{width:"300px", height:"300px", margin:"auto" }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger">CANCEL</Button>
            <Button btnType="Success">DANGER</Button>
        </div>
    )
}

export default checkoutSummary;