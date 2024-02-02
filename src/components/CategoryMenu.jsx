import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../redux_store/categorySlice";
import { useEffect, useState } from "react";

function CategoryMenu(){

    const items = useSelector(store => store.homeItem);
    const activeCategory = useSelector(store => store.activeCategory);
    const dispatch = useDispatch();
    const [categoryList, setCategoryList] = useState([]);



    let getCategoryList = () => {
        const categoryArr = items.map((item) => item.category).reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], ["All"]);
        setCategoryList(categoryArr);
    }

    useEffect(() => {
        getCategoryList();
    }, [items]);

    let handleCategoryBtn = (category) => {
        dispatch(categoryActions.setCategory(category));
    }
    
    return(
        <div className="category-menu-container">
            <h3>Find the best food</h3>
            <div className="category-btn-container">
                {categoryList.map((category) => <button className={`${category === activeCategory && "active-btn"}`} key={category} onClick={() => handleCategoryBtn(category)}>{category}</button>)}
            </div>
        </div>
    );
}

export default CategoryMenu;