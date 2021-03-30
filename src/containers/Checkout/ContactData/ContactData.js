import React, {useState} from "react";
import "./ContactData.css";
import axios from "../../../axios-orders";

import Button from "../../../component/UI/Button/Button";
import Spinner from "../../../component/UI/Spinner/Spinner";
import Input from "../../../component/UI/input/input";

function ContactData (props) {

    const [data, setData] = useState({
        name:'',
        email:'',
        address: {
            street:'',
            postalCode: ''
        }
    }, [ ]);

    const [loading,setLoading] = useState(false);

const orderHandler = (event) => {
    event.preventDefault();
    console.log(props.ingredients);
    
    setLoading(true);
    
    const order = {
            ingredient: props.ingredients,
            price: props.price,
            customer:{
                name:'Akshay Kurhekar',
                address:{
                    street:'Test street',
                    zipCode: 444709,
                    country: 'India'
                },
                email:'test@test.com'
            },
            deliveryMethod:'fastest'
        }

        axios.post('/orders.json', order)
        .then(response => { 
            setLoading(false);
            props.history.push('/');
            })
        .catch(error => {
            setLoading(false);
        });
}

    let form = (
        <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
                <Input inputtype="input" type="email" name="email" placeholder="Your Mail" />
                <Input inputtype="input" type="text" name="street" placeholder="Street" />
                <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={ orderHandler } >ORDER</Button>
            </form>
    );

    if(loading){
        form = <Spinner/>
    }

    return(
        <div className="ContactData">
            <h4>Your Contact Data</h4>
            { form }            
        </div>
    );
}

export default ContactData;