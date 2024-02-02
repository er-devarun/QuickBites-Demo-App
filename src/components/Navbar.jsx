import { useDispatch } from "react-redux";
import { searchItemActions } from "../redux_store/searchItemSlice";

function Navbar(){

    const dispatch = useDispatch(store => store.searchItem);

    let handleSearchBox = (event) => {
        dispatch(searchItemActions.setSearch(event.target.value));
    };

    return(
        <nav className="nav-bar">
            <div className="logo-container">
                <h3>{new Date().toUTCString().slice(0, 16)}</h3>
                <a href="/"><img className="logo" src="/logo.svg" alt="logo" /></a>
            </div>
            <div className="input-container">
                <input type="text" placeholder="Search here" onChange={(event) => handleSearchBox(event)}/>
            </div>
        </nav>
    );
}

export default Navbar;