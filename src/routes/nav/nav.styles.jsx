import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: black;
`;

export const HomeLink = styled(Link)`
  color: white;
  font-size: x-large;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: medium;
  padding: 10px 15px;
  cursor: pointer;
`;