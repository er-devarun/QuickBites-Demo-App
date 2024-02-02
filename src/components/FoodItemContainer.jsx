import { useSelector } from "react-redux";
import FoodCard from "./FoodCard";
import { Toaster, toast } from 'react-hot-toast';

function FoodItemContainer(){

    const items = useSelector(store => store.homeItem);
    const activeCategory = useSelector(store => store.activeCategory);
    const searchItem = useSelector(store => store.searchItem);

    let handleHotToastSuccess = (itemName) => {
        toast.success(`Successfully added ${itemName}`);
    }

    let handleHotToastRemove = (itemName) => {
        toast.error(`Removed ${itemName}!!`);
    }
    
    return(
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="food-card-container">

                {items.map(item =>  item.category === activeCategory && item.name.toLowerCase().includes(searchItem.toLowerCase()) ? <FoodCard key={item.id} item={item} hotToastSuccess={handleHotToastSuccess} hotToastRemove={handleHotToastRemove}/> : activeCategory === 'All' && item.name.toLowerCase().includes(searchItem.toLowerCase()) && <FoodCard key={item.id} item={item} hotToastSuccess={handleHotToastSuccess} hotToastRemove={handleHotToastRemove}/>)}
                
            </div>
        </> 
    );
}


export default FoodItemContainer;