

const Hero = ({children}) => {
    return (
        <section className="hero">
            <picture className="header-picture">
                <img src="images/logo-header.png" alt="" />
            </picture>
            {children}
        </section>
    );
}

export default Hero;