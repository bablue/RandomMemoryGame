import * as React from 'react';
import { ThemeInterface } from '../../types/ThemeType';

interface Props {
    secondary?: boolean;
    theme?: ThemeInterface;
}

const Button: React.FunctionComponent<Props> = ({ secondary, children }) => {
    return <button>{children}</button>;
};

export default Button;
