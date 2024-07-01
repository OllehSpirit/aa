import { createContext, useState } from "react";

export const contextData = createContext();

export function Context(props) {

    const [a, setA] = useState('ljlknkl')
    return (
        <contextData.Provider value={[a, setA]}>
            {props.children}
        </contextData.Provider>
    )

}