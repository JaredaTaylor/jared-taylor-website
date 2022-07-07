import { FooterContainer, InfoContainer, CopyrightIcon, CopyrightText, LinksContainer, GitLink, GithubIcon, LinkedinLink, LinkedinIcon } from './footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <InfoContainer>
                <CopyrightIcon />
                <CopyrightText>2022 Jared Taylor</CopyrightText>
            </InfoContainer>
            <LinksContainer>
                <GitLink href='https://github.com/JaredaTaylor'><GithubIcon/></GitLink>
                <LinkedinLink href='https://www.linkedin.com/in/jaredalextaylor/'><LinkedinIcon/></LinkedinLink>
            </LinksContainer>
        </FooterContainer>
    );
};

export default Footer;