import "./project.css";

const Project = ({img,link,desc}) => {
    return (
      <div className="p">
        <div className="p-browser">
          <div className="p-circle-red"></div>
          <div className="p-circle-yellow"></div>
          <div className="p-circle-green"></div>          
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
          <p className = "p-desc">{desc}</p>
        </a>
      </div>
    );
  };

export default Project;