// Footer.jsx
import '../footer/Footer.css'
import githubLogo from '../../../Images/github-mark-white.png'; // Import the GitHub logo image

const Footer = () => {
    return (
        <footer className="footer">
            <p>Follow me on GitHub:</p>
            <a href="https://github.com/Chepit00" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub Profile" className='github-logo'/> {/* Insert GitHub logo */}
            </a>
        </footer>
    );
};

export default Footer;