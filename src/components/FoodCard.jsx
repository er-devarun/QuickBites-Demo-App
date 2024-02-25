import { useDispatch, useSelector } from "react-redux";
import { cartItemActions } from "../redux_store/cartItemSlice";


function FoodCard({item, hotToastSuccess, hotToastRemove}){

    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cartItem);

    let handleAddToCartBtn = (item) => {
        dispatch(cartItemActions.addToCart({...item, qty: 1}));
        hotToastSuccess(item.name);
    }

    let handleCartItemRemoveBtn = (item) => {
        dispatch(cartItemActions.removeFromCart(item.id));
        hotToastRemove(item.name);
    }

    return(
        <div className="food-card">
            <img className="food-img" src={item.img} alt={item.name} />
            <div className="food-info">
                <p>{item.name}</p>
                <span>₹ {item.price}</span>
            </div>
            <p className="food-desc">{item.desc.slice(0, 50)}...</p>
            <div className="food-responce">
                <span className="rating">⭐ {item.rating}</span>
                {!cartItems.some((food) => food.id === item.id) ? <button className="add-to-cart-btn" onClick={() => handleAddToCartBtn(item)}>Add to cart</button> : <button className="remove-from-cart-btn" onClick={() => handleCartItemRemoveBtn(item)}>Remove</button>}
            </div>
        </div>
    );
}

export default FoodCard;