import styled, { css } from "styled-components";

interface Props {
    heading?: boolean;
    subHeading?: boolean;
}
export const Typography = styled.div<Props>`
    font-family:'Montserrat', sans-serif;
    color:${({ theme }) => theme.colors.body};
    margin: 0.5em 0;
    line-height: 1.4em;
    ${({ heading }) => heading && css`
        font-size: 32px;
        margin: 1em 0;
    `}
    ${({ subHeading }) => subHeading && css`
        font-size: 24px;
    `}

`