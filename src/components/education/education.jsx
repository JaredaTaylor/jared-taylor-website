import { EducationContainer } from "./education.styles";

const Education = ({ educationList }) => {
    return (
        <EducationContainer>
            <h3>Education</h3>
            <ul>
            {educationList.map((item) => (
                <li key={item.id}>
                    <div>
                        <span>{item.yearStart} - {item.yearEnd}</span>
                        <span> {item.degree}, {item.school}</span>
                    </div>
                </li>
            ))}
            </ul>
        </EducationContainer>
    );
}

export default Education;