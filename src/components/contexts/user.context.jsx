import { createContext, useState } from "react";

//as the acyual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({childern}) => {
    // debugger;
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{childern}</UserContext.Provider>;
}