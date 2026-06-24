import { useState } from "react";
import { createContext, useContext } from "react";

const AppContext = createContext();


function AppProvider({ children }) {
    const [search, setSearch] = useState("");
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);

    //btn carrello e wishlist
    const toggleWishlist = (id) => {
        setWishlist(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const toggleCart = (id) => {
        setCart(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    return (
        <AppContext.Provider value={{ 
            search, setSearch,
            wishlist, toggleWishlist,
            cart, toggleCart
        }}>
            {children}
        </AppContext.Provider>
    );
}

function useAppContext() {
    return useContext(AppContext);
}

export { useAppContext, AppProvider };