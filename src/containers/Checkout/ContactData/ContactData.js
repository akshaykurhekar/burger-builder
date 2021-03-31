import React, {useState} from "react";
import "./ContactData.css";
import axios from "../../../axios-orders";

import Button from "../../../component/UI/Button/Button";
import Spinner from "../../../component/UI/Spinner/Spinner";
import Input from "../../../component/UI/input/input";

function ContactData (props) {

    const [orderForm, setOrderForm] = useState({
        name:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Your Name'
            },
            value:'',
            validation:{
                 required: true   
            },
            valid: false,
            touched: false
        },
        street:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Street'
            },
            value:'',
            validation:{
                required:true   
           },
           valid: false,
           touched: false
        },
        zipCode: {
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Zip Code'
            },
            value:'',
            validation: {
                required:true,
                minLength:'5',
                maxLength:'5'   
           },
           valid: false,
           touched: false
        },
        country:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Country'
            },
            value:'',
            validation:{
                required:true   
           },
           valid: false,
           touched: false
        },
        email:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Your Email'
            },
            value:'',
            validation:{
                required:true   
           },
           valid: false,
           touched: false
        },
        deliveryMethod:{
            elementType:'select',
            elementConfig:{
                options:[
                    {value:'fastest', displayValue:'Fastest'},
                    {value:'cheapest', displayValue:'Cheapest'}

                ]
            },
            value:''
        }
        
    });

    const [loading,setLoading] = useState(false);

    const orderHandler = (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = {};

        for(let id in orderForm){
            formData[id] = orderForm[id].value;
        }

        const order = {
                ingredient: props.ingredients,
                price: props.price,
                orderData: formData            
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
   const inputChangeHandler = (event, id) => {
        const updatedOrderForm = { ...orderForm };
        const updatedFormElement = { ...updatedOrderForm[id] }
        
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation );
        updatedFormElement.touched = true;
        // console.log(updatedFormElement);
        updatedOrderForm[id] = updatedFormElement;
        
        setOrderForm(updatedOrderForm);
    }
   
    const checkValidity = (value, rules) => {
        
        let isValid = true;
        
        if(rules.required){
            isValid = value.trim() !== '' && isValid; 
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid ;
        }
        
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    const formElement = [];

    for(let key in orderForm){
        formElement.push({
            id:key,
            config: orderForm[key]
        });
    }

    let form = (
        <form onSubmit={orderHandler} >
                
                {formElement.map(formElement => (
                    <Input 
                           key={formElement.id}     
                           elementType={formElement.config.elementType } 
                           elementConfig={formElement.config.elementConfig } 
                           value={formElement.config.value } 
                           invalid = { !formElement.config.valid}
                           shouldValidate = {formElement.config.validation }
                           touched = {formElement.config.touched }
                           changed={ (event) => inputChangeHandler(event,formElement.id) } />
                ) )}
                <Button btnType="Success">ORDER</Button>
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