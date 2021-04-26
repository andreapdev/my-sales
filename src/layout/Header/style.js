import styled from 'styled-components';
import Colors from '../../theme/Colors';

export const StyledHeader=styled.header`
  display: flex;
  width: 100%;
  height: 7vh;
  min-height: 75px;
  padding: 1rem 0;
  justify-content: space-between;
`;
export const StyledBtn=styled.a`
  color: white;
  text-decoration: none;
  border: none;
  padding: 0.5rem;
  margin: 0 0.5rem;
  display: flex;
  justify-content:center;
  align-items:center;
  &.logo{
    background-color: ${Colors.lavenderColor};
    flex:1;
    margin-left: 0;
  }
  &.search-btn{
    background-color:${Colors.greenColor};
    flex: 1;
    margin: 0;
  }
  &.new-btn{
    background-color: ${Colors.peachColor};
    flex:1;
    margin-right: 0;
  }
  &:hover{
    color: white;
    text-decoration: none;
    opacity: 0.7;
  }
  &:active{
    transform: scale(1.1);
  }
`;
export const StyledSearchBar=styled.input`
  border: solid 1px ${Colors.greenColor};
  flex: 3;
`;
export const StyledSearchParent=styled.div`
  flex: 4;
  margin: 0 10px;
  display: flex;
  justify-content: center;
`;