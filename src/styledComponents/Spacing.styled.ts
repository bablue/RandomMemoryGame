import styled from "styled-components";
interface Props {
    size?: string;
}
const Spacing = styled.div<Props>`
    width:100%;
    height:${({ size = 1 }) => size}em;
`
export default Spacing;