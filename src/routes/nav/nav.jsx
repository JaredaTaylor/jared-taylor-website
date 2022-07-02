import {} from './nav.styles';
import { Outlet } from 'react-router-dom';
import { NavContainer, NavLink, NavLinks, HomeLink } from './nav.styles';

const Nav = () => {
    return (
        <>
            <NavContainer>
                <HomeLink to='/'>
                    Jared Taylor
                </HomeLink>
                <NavLinks>
                    <NavLink to='/projects'>
                        PROJECTS
                    </NavLink>
                    <NavLink to='/playground'>
                        PLAYGROUND
                    </NavLink>
                </NavLinks>
            </NavContainer>
            <Outlet />
        </>
    );
};

export default Nav;