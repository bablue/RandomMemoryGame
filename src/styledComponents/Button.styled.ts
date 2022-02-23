import styled, { css } from "styled-components";

interface Props {
    secondary?: boolean;
}

export const Button = styled.button<Props>`
    font-family:'Montserrat', sans-serif;
    padding: 0.4em 0.8em;
    margin: 1em;
    border-radius: 1em;
    background: ${({ theme }) => theme.backgrounds.button.primary.normal};
    border: none;
    color: ${({ theme }) => theme.colors.button};
    min-width: 8em;
    font-weight: 700;

    &:hover{
        background:${({ theme }) => theme.backgrounds.button.primary.hover};
        box-shadow: 0px 0px 7px 2px ${({ theme }) => theme.backgrounds.button.primary.normal};
    }
    &:active{
        opacity: .8;
        box-shadow: 0px 0px 7px 2px ${({ theme }) => theme.backgrounds.button.primary.normal};
    }
    ${({ secondary }) => secondary && css`
        background: ${({ theme }) => theme.backgrounds.button.secondary.normal};;
        color: ${({ theme }) => theme.backgrounds.button.primary.normal};
        border: 2px solid ${({ theme }) => theme.backgrounds.button.primary.normal};

        &:hover{
            background:${({ theme }) => theme.backgrounds.button.secondary.hover};;
        }
    `}

    @media (max-width:400px){
        min-width:7em;
    }
`