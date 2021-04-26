import styled from 'styled-components';
import Colors from '../../theme/Colors';

 const StyledFooter = styled.footer`
    font-style: italic;
    position: fixed;
    bottom: 0;

    a{
        color: ${Colors.pinkColor};
        &:hover{
            color: ${Colors.purpleColor};
            text-decoration: none;
        }
    }
    
`;

export default StyledFooter;