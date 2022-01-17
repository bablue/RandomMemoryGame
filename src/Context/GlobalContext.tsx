import React, { Children, ReactElement, useState, useContext } from "react";

type ContextValueString = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
interface ContextValue {
    valueApair: ContextValueString;
    valueBpair: ContextValueString;
}

const useContextValueCreator = (): ContextValue => {

    const [valueA, setvalueA] = useState(false);
    const [valueB, setvalueB] = useState(false);
    const contextValue: ContextValue = {
        valueApair: [valueA, setvalueA],
        valueBpair: [valueB, setvalueB],
    };
    return contextValue
}
const useContextCreator = () => {
    return React.createContext(useContextValueCreator());
}
export const useGlobalState = () => {
    const context = useContext(useContextCreator());
    return context;
}
interface Props {
    children: React.ReactNode
}
export function GlobalContextProvider({ children }: Props): ReactElement {
    const GlobalContextMain = useContextCreator();
    return (
        <GlobalContextMain.Provider value={useContextValueCreator()}>
            {children}
        </GlobalContextMain.Provider>
    )
}
