import { PageContainer, Title, PlaygroundContainer } from './playground.styles';
import Spinner from '../../components/spinner/spinner';

const Playground = () => {
    return (
        <PageContainer>
            <Title>Playground</Title>
            <PlaygroundContainer>
                <h3>Uh oh... it won't stop loading...</h3>
                <Spinner />
                <h3>Must be a work in progress still...</h3>
            </PlaygroundContainer>
        </PageContainer>
    );
};

export default Playground;