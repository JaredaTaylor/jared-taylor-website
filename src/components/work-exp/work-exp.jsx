import { WorkExpContainer } from "./work-exp.styles";

const WorkExp = ({ workList }) => {
    return (
        <WorkExpContainer>
            <h3>Work Experience</h3>
            <ul>
            {workList.map((item) => (
                <li key={item.id}>
                    <div>
                        <span>{item.dateStart} - {item.dateEnd}</span>
                        <span> {item.jobTitle} @ {item.company}</span>
                    </div>
                </li>
            ))}
            </ul>
        </WorkExpContainer>
    )
}

export default WorkExp;