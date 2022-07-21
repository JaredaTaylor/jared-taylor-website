import { useContext } from 'react';
import { PageContainer, Title, InfoContainer, InfoLeft, InfoRight } from './home.styles';
import { AboutContext } from '../../contexts/about.context';
import Biography from '../../components/biography/biography';
import ProfileImage from '../../components/profile-image/profile-image';

const Home = () => {

    const { aboutMap } = useContext(AboutContext);

    return (
        <PageContainer>
            <Title>Welcome!</Title>
            <InfoContainer>
                <InfoRight>
                    <ProfileImage />
                </InfoRight>
                <InfoLeft>
                    {aboutMap && <Biography aboutMap={aboutMap}/>}
                </InfoLeft>
            </InfoContainer>
        </PageContainer>
    );
};

export default Home;