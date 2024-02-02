import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { cartItemActions } from "../redux_store/cartItemSlice";

function QtyController({item}){

    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cartItem);

    let foodItem = cartItems.find((food) => food.id === item.id);

    let handleQtyDecrement = (item) => {
        dispatch(cartItemActions.decrementQty(item));
    }

    let handleQtyIncrement = (item) => {
        dispatch(cartItemActions.incrementQty(item));
    }

    return(
        <div className="controlls">
            <LuMinus className="qty-decrement" onClick={() => handleQtyDecrement(item)}/>
            <span>{item.qty}</span>
            <LuPlus className="qty-increment" onClick={() => handleQtyIncrement(item)}/>
        </div>
    );
}

export default QtyController;