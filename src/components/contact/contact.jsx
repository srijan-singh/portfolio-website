import "./contact.css"

const Contact = () =>{
    return(
        <div className="c">
          <div className="c-left">
            <h1 className="c-title">Find Me</h1>
            </div>
            <div className="c-right">
                <div className="c-card bg"></div>
                <div className="c-card">
                  <div className="social-tag">  
                  <div className="social-title"> 
                      <a href="https://github.com/srijan-singh/">GitHub <i class="bi-github"></i></a>                                            
                    </div>                                    
                    <div className="social-title">                
                      <a href="https://www.linkedin.com/in/srijanverse/">Linkedin <i class="bi-linkedin"></i>                                         </a>                      
                    </div>                 
                  </div>  
                  <a href="https://www.buymeacoffee.com/srijansingh"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-black.png" alt="Buy Me A Coffee" className="icon"/></a>              
                </div>
            </div>
        </div>
    )
}

export default Contact