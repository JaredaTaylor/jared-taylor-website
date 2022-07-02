import {} from './nav.styles';
import { Outlet } from 'react-router-dom';
import { NavContainer, NavLink, NavLinks, LogoContainer } from './nav.styles';

const Nav = () => {
    return (
        <>
            <NavContainer>
                <LogoContainer to='/'>
                    Home
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/projects'>
                        PROJECTS
                    </NavLink>
                </NavLinks>
            </NavContainer>
            <Outlet />
        </>
    );
};

export default Nav;