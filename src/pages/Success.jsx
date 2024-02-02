import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { cartItemActions } from '../redux_store/cartItemSlice';

function Success(){

    let [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);

        setTimeout(() => {
            navigate("/");
            dispatch(cartItemActions.clearCart());
        }, 7000);

    }, []);

    return(
        <div className="order-success-container">
            { loading ? <PropagateLoader color="#22c55e" /> : <>
                <h2 className="order-success-heading">Order Successful!</h2>
                <p>Your order has been placed successfully</p>
            </> }
        </div>
    );
}

export default Success;