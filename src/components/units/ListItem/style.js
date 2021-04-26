import styled from 'styled-components';
import Colors from '../../../theme/Colors';

const StyledItem = styled.a`
    color: darkslategrey;
    &:hover{
        color: darkslategrey;
        text-decoration: none;
    }
    li{
        padding: 5px 0;
        border-bottom: 1px solid;
        border-color: ${Colors.whiteColor};
        background-color: ${Colors.blueColor};
        &:hover{
            opacity: 0.8;
        }
    }
    p{
        align-self: center;
    }
`;

export default StyledItem;