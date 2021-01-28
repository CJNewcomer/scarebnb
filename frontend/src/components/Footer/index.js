
function Footer() {
    return (
        <div className='footer'>
            <div className='footer__developer'>
                <p>Created by Courtney J. Newcomer {new Date().getFullYear()}</p>
                <div className='footer_developer-container'>
                    <a className='github' href="https://github.com/CJNewcomer">
                        <i className="fab fa-github-square"></i>
                    </a>
                    <a className='linkedin' href="https://linkedin.com/in/courtney-newcomer-gray-474b0923">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer;


