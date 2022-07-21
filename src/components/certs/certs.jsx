import { CertContainer } from "./certs.styles";

const Certs = ({ certList }) => {
    return (
        <CertContainer>
            <h3>Certifications</h3>
            <ul>
            {certList.map((item) => (
                <li key={item.id}>
                    <div>
                        <span>{item.date} -</span>
                        <span> {item.certName} From {item.organization}</span>
                    </div>
                </li>
            ))}
            </ul>
        </CertContainer>
    )
};

export default Certs;