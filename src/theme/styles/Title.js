import color from "../color";
import styled from 'styled-components';

const Title = styled.h3`
    font-size: 16px;
    padding: 12px;
    background: ${color.black};
    color: ${color.white};
    text-transform: capitalize;
    font-weight: bold;
`;

export default Title;