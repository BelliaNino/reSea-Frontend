import { useState } from "react";
import { createContext, useContext } from "react";

const AppContext = createContext();
const [search, setSearch] = useState("");


function AppProvider({ children }) {
    return (
        <AppContext.Provider value={{ search, setSearch }}>
            {children}
        </AppContext.Provider>
    );
}
function useAppContext() {

    return useContext(AppContext);
}

export {
    useAppContext,
    AppProvider
};