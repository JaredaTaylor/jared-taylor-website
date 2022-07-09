import { PageContainer, Title } from './home.styles';
import Biography from '../../components/biography/biography';

const Home = () => {
    return (
        <PageContainer>
            <Title>Welcome!</Title>
            <Biography />
        </PageContainer>
    );
};

export default Home;