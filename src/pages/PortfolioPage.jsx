import githubMark from '../assets/github-mark.png';


// Portfolio Page code
function PortfolioPage() {
    return (
        // Creating three rows of two boxes, each containing a snippet of my project
    <>
    <div className="portfolio-row" style={{display: 'flex', flexDirection: 'row'}}>
        
        <a id="tech-blog" className="projects" href="https://aqueous-springs-68236-b5e4d5df42c9.herokuapp.com/">
            <h3>Tech Blog</h3>
            <div className="popup-link" >
                <a href="https://github.com/ericlyn4s/tech-blog">
                    <img className="gh-icon" src={githubMark}/>
                </a>
            </div>
        </a>

        <a id="tale-spin" className="projects" href="https://afternoon-taiga-74070-303988fd2de4.herokuapp.com/">
            <h3>Tale Spin</h3>  
            <div className="popup-link" >
                <a href="https://github.com/ericlyn4s/tale-spin">
                    <img className="gh-icon" src={githubMark}/>
                </a>
            </div>
        </a>
            
    </div>

    <div className="portfolio-row" style={{display: 'flex', flexDirection: 'row'}}>

        <a id="peer-prep" className="projects" href="https://peer-prep.onrender.com/">
            <h3>Peer Prep</h3>   
            <div className="popup-link" >
                <a href="https://github.com/dymoy/peer-prep">
                    <img className="gh-icon" src={githubMark}/>
                </a>
            </div>
        </a>

        <a id="weather-forecaster" className="projects" href="https://ericlyn4s.github.io/weather-forecaster/">
            <h3>Weather Forecaster</h3>
            <div className="popup-link" >
                <a href="https://github.com/ericlyn4s/weather-forecaster">
                    <img className="gh-icon" src={githubMark}/>
                </a>
            </div>
        </a>

    </div>

    <div className="portfolio-row" style={{display: 'flex', flexDirection: 'row'}}>

        <a id="coding-quiz" className="projects" href="https://ericlyn4s.github.io/totally-rad-coding-quiz/" >
            <h3>Coding Quiz</h3>
            <div className="popup-link" >
                <a href="https://github.com/ericlyn4s/totally-rad-coding-quiz">
                    <img className="gh-icon" src={githubMark}/>
                </a>
            </div>
        </a>    

        <a id="password-generator" className="projects" href="https://ericlyn4s.github.io/js-password-generator/">
            <h3>Password Generator</h3>
            <div className="popup-link" >
                <a href="https://github.com/ericlyn4s/js-password-generator">
                    <img className="gh-icon" src={githubMark}/>
                </a>
            </div>
        </a>


    </div>


    </>
    )
}

export default PortfolioPage;