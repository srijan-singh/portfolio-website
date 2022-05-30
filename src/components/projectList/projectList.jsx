import "./projectList.css"
import { products } from "../../data"
import Project from "../project/project"

const ProjectList = () =>{
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects</h1>
                <p className="pl-desc">
                
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                <Project key={item.id} img={item.img} link={item.link} desc={item.desc} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList