import color from "../color";
import styled from 'styled-components';

const ProductStyle = styled.div`
    .prd-list {
        .prd {
            border: 1px dotted ${color.black};
            margin-bottom: 20px;

            .prd-img {
                width: 50%;
            }

            .prd-name {
                font-weight: bold;
            }

            .prd-price {
                background: ${color.gray};
                padding: 5px;
                border-radius: 30px;
                color: ${color.red};
                font-weight: bold;
            }
        }
    }
`;

export default ProductStyle;
