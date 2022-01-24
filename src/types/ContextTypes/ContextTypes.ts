export type ContextValueBoolean = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
export type ContextValueString = [string, React.Dispatch<React.SetStateAction<string>>];
export type ContextValueNumber = [number, React.Dispatch<React.SetStateAction<number>>];

export interface ContextValue {
    valueApair: ContextValueBoolean;
    valueBpair: ContextValueBoolean;
    level_value: ContextValueNumber;
}