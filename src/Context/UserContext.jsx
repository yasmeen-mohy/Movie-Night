import React from 'react';
import { createContext,useState,useMemo ,useEffect} from 'react';

export const UContext = createContext();
const UserContext = ({children}) => {
    
   const [CurrentUser, setCurrentUser] = useState(null);
   const obj=useMemo(()=>({CurrentUser,setCurrentUser}),[CurrentUser,setCurrentUser]);
   useEffect(()=>{console.log("current user from context"+CurrentUser)},[CurrentUser])
   return (
       <UContext.Provider value={obj}>
        {children}
       </UContext.Provider>
    );
}

export default UserContext;
