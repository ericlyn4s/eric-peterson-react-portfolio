import githubMark from '../assets/github-mark.png';
import linkedinMark from '../assets/linkedin-mark.png';

function Footer() {
    return(
        <footer>
            <a href="https://github.com/ericlyn4s">
                <img id="gh-pic" src={githubMark}/>
            </a>
            <a href="https://www.linkedin.com/in/eric-peterson-08/">
                <img id="li-pic" src={linkedinMark}/>
            </a>
        </footer> 
    );
}

export default Footer;

