
const Header = ({children}) => {
    return(
        <header className="header">
            { children }
            <div className="chat">
                <a href="https://api.whatsapp.com/send?phone=51955269142" 
                target="_blank" rel="noreferrer">
                <img src="../images/whatsapp.png" alt='whatsapp' />
                </a>
            </div>
        </header>
    );
}

export default Header;