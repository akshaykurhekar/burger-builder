import React,{useState, useEffect} from 'react';

import Aux from "../../hoc/Auxiliary";
import Burger from "../../component/Burger/Burger";
import BurgerControls from "../../component/Burger/BuildControls/BuildControls";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary"; 
import axios from "../../axios-orders";
import Spinner from '../../component/UI/Spinner/Spinner';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from "../../store/action";
import { connect } from 'react-redux';

function BurgerBuilder(props){
   
    const [purchasing,setPurchasing] = useState(false);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
         
    //  useEffect(() => {

    //     console.log(props)

    //      axios.get('https://react-burger-app-87e69-default-rtdb.firebaseio.com/ingredient.json')
    //      .then(response => {
    //          setIngredient(response.data);
    //      }).catch(error => {
    //         setError(true);
    //      });

    //  },[]);

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
         
         let burger = error ? <p style={{textAlign:"center",fontWeight:"bold" }}>burger Not Loading..</p> : <Spinner/>

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
        price: state.totalPrices
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAddIngredient: (name) => dispatch({type: actionTypes.ADD_INGREDIENT, IngredientName: name}),
        onRemoveIngredient:(name) => dispatch({type: actionTypes.REMOVE_INGREDIENT, IngredientName:name})

    }
}

export default connect(mapStateToProps, mapDispatchToProps )(withErrorHandler( BurgerBuilder,axios ));