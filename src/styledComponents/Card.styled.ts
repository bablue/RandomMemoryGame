import styled from "styled-components";

export const Card = styled.div`
    background:${({ theme }) => theme.backgrounds.card};
    border-radius: 1em;
    padding: 2em 1.5em;
    // box-shadow:-0.3em 0.3em 0.2em #464643;
    max-width: 80vw;
    margin: 1em auto;
    text-align: center;
`