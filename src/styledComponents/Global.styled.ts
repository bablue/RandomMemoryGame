import styled, { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "./../types/ThemeType";
export const GlobalStyles = createGlobalStyle<{ theme: ThemeInterface }>`
*{
    box-sizing:border-box;
}
body{
    background: ${({ theme }) => theme.backgrounds.body};
    color: ${({ theme }) => theme.colors.body};
    transition: all linear 1s;
    font-family: ${({ theme }) => theme.fonts.body};
}
`