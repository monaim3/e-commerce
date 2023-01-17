import { createContext, useState } from "react";

export const CartContext = createContext([])
export const CountContext = createContext([])
const Context = ({children}) => {
    const [cart, setCart] = useState([])
    const [count,setCount]=useState(1)
    return (
        <CountContext.Provider value={[count, setCount]}>
        <CartContext.Provider value={[cart, setCart]}> 
             {children}
        </CartContext.Provider>
        </CountContext.Provider>
    );
};

export default Context;