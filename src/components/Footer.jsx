import githubMark from '../assets/github-mark.png';
import linkedinMark from '../assets/linkedin-mark.png';

function Footer() {
    return(
        <footer>
            <img id="gh-pic" src={githubMark}/>
            <img id="li-pic" src={linkedinMark}/>
        </footer> 
    );
}

export default Footer;