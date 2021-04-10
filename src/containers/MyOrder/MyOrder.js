import { useEffect, useState} from 'react'; 
import {connect} from 'react-redux'
import "./MyOrder.css";

import Order from "../../component/Orders/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from '../../component/UI/Spinner/Spinner';
import * as action from '../../store/action/index'

function MyOrder (props) {

   // const [orders,setOrders] = useState([]);
    //const [loading,setLoading] = useState(true);

    

    useEffect( () => {
       props.onFetchOrders();       
    }, []);

    let order = <Spinner/>

    if(!props.loading){
        order = (
            props.orders.map(order =>(
                <Order key={order.id}
                 ingredients = {order.ingredient}
                 price = { +order.price} 
                />
            ) )
        );
    }

    return (
        <div>
            {order}
        </div>
    );
}

const mapStateToProps = state =>{
    return{
        orders: state.order.orders,
        loading: state.order.loading
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onFetchOrders: () => dispatch(action.fetchOrder())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler( MyOrder, axios));