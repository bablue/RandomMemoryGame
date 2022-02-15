import styled from "styled-components";

export const Image = styled.img`
width: 90%;
border: 3px solid ${({ theme }) => theme.backgrounds.button.primary.normal};
max-height:50em;
transition: all linear 1s;
padding: .5em;
        &:hover{
            box-shadow: 0px 0px 7px 2px ${({ theme }) => theme.backgrounds.button.primary.normal};
        }

@media screen and (min-width: 768px){
    width: 50%;
}
`