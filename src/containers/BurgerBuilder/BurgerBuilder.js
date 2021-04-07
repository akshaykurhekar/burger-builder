import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';

import Aux from "../../hoc/Auxiliary";
import Burger from "../../component/Burger/Burger";
import BurgerControls from "../../component/Burger/BuildControls/BuildControls";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary"; 
import axios from "../../axios-orders";
import Spinner from '../../component/UI/Spinner/Spinner';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionCreator from "../../store/action/index";

function BurgerBuilder(props){
   
    const [purchasing,setPurchasing] = useState(false);
    const [loading,setLoading] = useState(false);
    // const [error,setError] = useState(false);
         
     useEffect(() => {
        props.onInitIngredient();        

     },[]);

     const purchasingHandler = () => {
         setPurchasing(true);        
     }

    const purchaseCancelHandler=()=>{
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        
        const queryParams = [];

        for(let i in props.ing ) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(props.ing[i]) )
        }
        queryParams.push('price='+ props.price);
        const queryString = queryParams.join('&');
                
        props.history.push({
            pathname:'checkout',
            search: '?' + queryString
        });


    }

    const updatePurchaseState = (ingredient) => {
        const sum = Object.keys(ingredient)
            .map(igKey =>{
                return ingredient[igKey];
            }).reduce( (sum,el)=>{
                return sum + el;
            },0)
            return sum > 0;
    } 
          
        
       const disabledInfo = {...props.ing};
       
       for(let key in disabledInfo){
           disabledInfo[key] = disabledInfo[key] <= 0
       }
       // {"meat":true,"cheese": false, ...}

         let orderSummary = null;
         
         let burger = props.error ? <p style={{textAlign:"center",fontWeight:"bold" }}>burger Not Loading..</p> : <Spinner/>

         if(props.ing){
             burger = (
                 <Aux>
                        <Burger ingredient={props.ing} />        
                        <BurgerControls 
                        addIngredient={ props.onAddIngredient }
                        removeIngredient={ props.onRemoveIngredient }
                        disabled={disabledInfo}
                        ordered = {purchasingHandler} 
                        price={props.price} 
                        purchasable ={updatePurchaseState(props.ing)}
                        />
                 </Aux>
             );
             orderSummary = (
                <OrderSummary            
                ingredients={props.ing} 
                price={props.price}
                purchaseContinue={purchaseContinueHandler}
                purchaseCancel={purchaseCancelHandler}
                />);
         }
         
         if(loading){
            orderSummary = <Spinner/>
        }

    return(         
    <Aux>
        <Modal show={purchasing} closeModal={purchaseCancelHandler}>
            {orderSummary }
        </Modal>
        {burger}                
    </Aux>);
}

const mapStateToProps = state => {
    return {
        ing: state.Ingredient,
        price: state.totalPrices,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAddIngredient: (name) => dispatch(actionCreator.addIngredient(name)),
        onRemoveIngredient:(name) => dispatch(actionCreator.removeIngredient(name)),
        onInitIngredient: () => dispatch(actionCreator.initIngredient())
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(withErrorHandler( BurgerBuilder,axios ));