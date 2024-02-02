import { MdOutlinePlaylistRemove } from "react-icons/md";
import { useDispatch } from "react-redux";
import { cartItemActions } from "../redux_store/cartItemSlice";
import QtyController from "./QtyController";
import toast from "react-hot-toast";

const CartItemCard = ({item}) => {

    const dispatch = useDispatch();

    let handleCartItemRemoveBtn = (item) => {
        dispatch(cartItemActions.removeFromCart(item.id));
        toast.error(`Removed ${item.name}!!`);
    }

    return(
        <div className="cart-item-card">
            <img className="cart-item-img" src={item.img} alt="food item" />

            <div className="cart-item-info-container">
                <div className="cart-item-info">
                    <p>{item.name}</p>
                    <MdOutlinePlaylistRemove className="cart-item-remove-icon" onClick={() => handleCartItemRemoveBtn(item)}/>
                </div>
                <div className="cart-item-controlls">
                    <p>₹ {item.price}</p>
                    <QtyController item={item}/>
                </div>
            </div>
            
        </div>
    );
}

export default CartItemCard;