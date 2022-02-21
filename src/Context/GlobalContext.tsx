import React, { ReactElement, useState, useContext } from "react";
import { ContextValue } from "../types/ContextTypes/ContextTypes";
import defaultState from "./../Constants/DefaultState";


const { levelDefault } = defaultState;

const defaultContextValue: ContextValue = {
    valueApair: [false, () => { // This is intentional
    }],
    valueBpair: [false, () => { // This is intentional
    }],
    level_value: [levelDefault, () => { // This is intentional
    }],
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
    return useContext(globalContext);
}
interface Props {
    children: React.ReactNode
}
export function GlobalContextProvider({ children }: Props): ReactElement {
    const GlobalContextMain = globalContext;
    return (
        <GlobalContextMain.Provider value={useContextValueCreator()}>
            {children}
        </GlobalContextMain.Provider>
    )
}
