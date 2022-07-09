import { FooterContainer, FooterContentsContainer, CopyrightIcon, CopyrightText, GitLink, GithubIcon, LinkedinLink, LinkedinIcon } from './footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContentsContainer>
                <CopyrightIcon />
                <CopyrightText>2022 Jared Taylor</CopyrightText>
                <GitLink href='https://github.com/JaredaTaylor'><GithubIcon/></GitLink>
                <LinkedinLink href='https://www.linkedin.com/in/jaredalextaylor/'><LinkedinIcon/></LinkedinLink>
            </FooterContentsContainer>
        </FooterContainer>
    );
};

export default Footer;