import React,{useState, useEffect} from 'react';

import Aux from "../../hoc/Auxiliary";
import Burger from "../../component/Burger/Burger";
import BurgerControls from "../../component/Burger/BuildControls/BuildControls";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary"; 
import axios from "../../axios-orders";
import Spinner from '../../component/UI/Spinner/Spinner';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

function BurgerBuilder(props){
   const [Ingredient,setIngredient] = useState(null);

    const [Prices,setPrices] = useState(10);
    
    const [purchasable,setPurchasable] = useState(false);
    const [purchasing,setPurchasing] = useState(false);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
   const Ingredient_Prices ={
        salad:0.5,
        cheese:0.4,
        bacon:1.3,    
        meat:2
     } 
    
     useEffect(() => {

        console.log(props)

         axios.get('https://react-burger-app-87e69-default-rtdb.firebaseio.com/ingredient.json')
         .then(response => {
             setIngredient(response.data);
         }).catch(error => {
            setError(true);
         });

     },[]);

     const purchasingHandler = () => {
         setPurchasing(true);        
     }

    const purchaseCancelHandler=()=>{
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        // setLoading(true);
        // const order = {
        //     ingredient: Ingredient,
        //     price: Prices,
        //     customer:{
        //         name:'Akshay Kurhekar',
        //         address:{
        //             street:'Test street',
        //             zipCode: 444709,
        //             country: 'India'
        //         },
        //         email:'test@test.com'
        //     },
        //     deliveryMethod:'fastest'
        // }

        // axios.post('/orders.json', order)
        // .then(response => { 
        //     setLoading(false);
        //     setPurchasing(false);
        //     })
        // .catch(error => {
        //     setLoading(false);
        // });

        const queryParams = [];

        for(let i in Ingredient) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(Ingredient[i]) )
        }

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

            setPurchasable(sum > 0);
    } 
          
    const addIngredientHandler = (type) => {
        
    const oldCount = Ingredient[type]; 
    
    const newCount = oldCount + 1;  
    const updatedItem = {
        ...Ingredient
    };    
    updatedItem[type] = newCount;
    setIngredient(updatedItem);

    const pricesAddition = Ingredient_Prices[type];
    const oldPrice = Prices;
    setPrices(pricesAddition + oldPrice);
    updatePurchaseState(updatedItem);
    }

    const removeIngredientHandler = (type) => {
        
        const oldCount = Ingredient[type]; 
        if(oldCount <= 0){
            return ;  
        }else{
            const newCount = oldCount - 1;  
            const updatedItem = {
            ...Ingredient
          };    
          updatedItem[type] = newCount;
          setIngredient(updatedItem);
          updatePurchaseState(updatedItem);
        }

        const pricesAddition = Ingredient_Prices[type];
        const oldPrice = Prices;
        setPrices(oldPrice - pricesAddition);
    
        }

       const disabledInfo = {...Ingredient};
       
       for(let key in disabledInfo){
           disabledInfo[key] = disabledInfo[key] <= 0
       }
       // {"meat":true,"cheese": false, ...}

         let orderSummary = null;
         
         let burger = error ? <p style={{textAlign:"center",fontWeight:"bold" }}>burger Not Loding..</p> : <Spinner/>

         if(Ingredient){
             burger = (
                 <Aux>
                        <Burger ingredient={Ingredient} />        
                        <BurgerControls 
                        addIngredient={addIngredientHandler}
                        removeIngredient={removeIngredientHandler}
                        disabled={disabledInfo}
                        ordered = {purchasingHandler} 
                        price={Prices} 
                        purchasable ={purchasable}
                        />
                 </Aux>
             );
             orderSummary = (
                <OrderSummary            
                ingredients={Ingredient} 
                price={Prices}
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

export default withErrorHandler( BurgerBuilder,axios );