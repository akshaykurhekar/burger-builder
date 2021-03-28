import React, {useState} from "react";
import "./ContactData.css";

import Button from "../../../component/UI/Button/Button";

function ContactData() {

    const [data, setData] = useState({
        name:'',
        email:'',
        address: {
            street:'',
            postalCode: ''
        }
    })

    return(
        <div className="ContactData">
            <h4>Your Contact Data</h4>
            <form>
                <input className="Input" type="text" name="name" placeholder="Your Name" />
                <input className="Input" type="email" name="email" placeholder="Your Mail" />
                <input className="Input"  type="text" name="street" placeholder="Street" />
                <input className="Input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" >ORDER</Button>
            </form>
        </div>
    );
}

export default ContactData;