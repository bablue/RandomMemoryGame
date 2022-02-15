import styled from "styled-components";

export const LinkTag = styled.a`
color:${({ theme }) => theme.colors.link};
text-decoration: none;
&:hover{
    text-decoration: underline;
    cursor: pointer;
}
&:active {
    color: #40b975;
}
&:visited{
    // color: #40b975;
}

`