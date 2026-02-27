import React, { createContext, useReducer} from 'react'

type UserType = {
     username : string,
     password : string,
     isAuth : boolean
}

type ActionType = {
    type : "LOGIN" 
    user : UserType
} | {type : "LOGOUT"}

type userContextType = {
    state :  UserType,
    dispatch : React.Dispatch<ActionType>
}

const intialState : UserType = {
    username : "", 
    password : "" , 
    isAuth : false 
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<userContextType | null>(null);

const LoginContext = ({children} : React.PropsWithChildren) => {

    const reducer = (state : UserType, action : ActionType) : UserType=> {
        switch(action.type){
            case "LOGOUT" : return intialState;
            case "LOGIN" : 
                return action.user;
            default :
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, intialState);
    
  return (
    <UserContext.Provider value={{state, dispatch}}>
        {children}
    </UserContext.Provider>
  )
}

export default LoginContext