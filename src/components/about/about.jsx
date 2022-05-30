import "./about.css"
import CNJ from "../../img/c-nj.jpg"

const About = () =>{
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
                    alt =""
                    className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Namaste! I'm a final year student and I'm pursuing my undergraduation in Computer Science Engineering.
                </p>
                <div className="a-award">
                    <img src={CNJ} alt="" className="a-award-img" />        
                    <p className="a-award-texts">
                    <h4 className="a-award-title">Codekaze 2022</h4>
                    Among 94.35 percentile coders nationwide out of 200,000+ participants.
                    Scored 168/168 and ranked 1887th in the coding competition (CodeKaze 2022) organized by Coding Ninjas.
                    </p>
                </div>                                       
            </div>
        </div>
    )
}

export default About