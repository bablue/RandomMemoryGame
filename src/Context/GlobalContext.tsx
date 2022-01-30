import React, { Children, ReactElement, useState, useContext } from "react";
import { ContextValue } from "../types/ContextTypes/ContextTypes";
import { defaultState } from "./../Constants/DefaultState";


const { levelDefault } = defaultState;

const defaultContextValue:ContextValue ={
    valueApair: [false, () => { }],
    valueBpair: [false, () => { }],
    level_value: [levelDefault, () => { }],
}

const useContextValueCreator = (): ContextValue => {
    const [valueA, setvalueA] = useState(false);
    const [valueB, setvalueB] = useState(false);
    const [level, setLevel] = useState(levelDefault);
    const contextValue: ContextValue = {
        valueApair: [valueA, setvalueA],
        valueBpair: [valueB, setvalueB],
        level_value: [level, setLevel],
    };
    return contextValue
}

const globalContext = React.createContext(defaultContextValue);
const useContextCreator = () => {
    return React.createContext(useContextValueCreator());
}
export const useGlobalState = () => {
    // const context = useContext(useContextCreator());
    const context = useContext(globalContext);
    return context;
}
interface Props {
    children: React.ReactNode
}
export function GlobalContextProvider({ children }: Props): ReactElement {
    // const GlobalContextMain = useContextCreator();
    const GlobalContextMain = globalContext;
    return (
        <GlobalContextMain.Provider value={useContextValueCreator()}>
            {children}
        </GlobalContextMain.Provider>
    )
}
