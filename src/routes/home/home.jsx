import { PageContainer, Title, InfoContainer, InfoLeft, InfoRight } from './home.styles';
import Biography from '../../components/biography/biography';
import ProfileImage from '../../components/profile-image/profile-image';

const Home = () => {
    return (
        <PageContainer>
            <Title>Welcome!</Title>
            <InfoContainer>
                <InfoRight>
                    <ProfileImage />
                </InfoRight>
                <InfoLeft>
                    <Biography />
                </InfoLeft>
            </InfoContainer>
        </PageContainer>
    );
};

export default Home;