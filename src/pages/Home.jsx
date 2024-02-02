import { useEffect } from "react";
import CartBox from "../components/CartBox";
import CategoryMenu from "../components/CategoryMenu";
import FoodItemContainer from "../components/FoodItemContainer";
import Navbar from "../components/Navbar";
import foodData from "../data/foodData";
import {useDispatch} from 'react-redux';
import { homeItemActions } from "../redux_store/homeItemSlice";
import Footer from "../components/Footer";

function Home(){

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(homeItemActions.addInitialItem(foodData));
    }, []);

    return(
        <>
            <Navbar/>
            <CategoryMenu/>
            <FoodItemContainer/>
            <CartBox/>
            <Footer/>
        </>
    );
}

export default Home;
