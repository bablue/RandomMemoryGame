import styled from "styled-components";

export const Image = styled.div`
width: 90%;
border: 3px solid ${({ theme }) => theme.backgrounds.button.primary.normal};
max-height:50em;
transition: all linear 1s;
margin: 2em auto;
min-height: 20em;
display: flex;
justify-content: center;
align-items: center;
padding: .5em;
        &:hover{
            box-shadow: 0px 0px 7px 2px ${({ theme }) => theme.backgrounds.button.primary.normal};
        }

@media screen and (min-width: 768px){
    width: 50%;
}
`