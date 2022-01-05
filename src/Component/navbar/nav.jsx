
import '../navbar/nav.css'
import logo from '../../assets/pixer-logo.png'
import HeaderPic from '../../assets/maxresdefault 1.png'
import YouTube from '../../assets/youtube-play-button.png'


function Nav() {
    return(
        <header className="header-section">
        <div className="container wrapper-heading">
            <ul className="wrapper">
                <li className="link-navbar ">
                    <img className='logo' src={logo} alt=""/>
                </li>
                <li className="link-navbar">
                    <a className="points" href="#">Boshsahifa</a>
                </li>
                <li className="link-navbar">
                    <a className="points" href="#">Xizmatlar</a>
                </li>
                <li className="link-navbar">
                    <a className="points" href="#">Portfolio</a>
                </li>
                <li className="link-navbar">
                    <a className="points" href="#">Jamoa</a>
                </li>
                <li className="link-navbar">
                    <a className="points" href="#">Blog</a>
                </li>
                <li className="link-navbar">
                    <a className="points" href="#">Kontaktlar</a>
                </li>
                <li className="link-navbar">
                    <button className="btnn" type="button">+998 90 921 37 11</button>
                </li>
            </ul>
            <div className="header-section">
                <div className="left-section-header">
                    <h1 className="header-title">
                        Biznesingizni keyingi bosqichga 
                        olib chiqing
                    </h1>
                    <p className="header-text">
                        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget
                        sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
                    </p>
                    <button className="btn2 " type="button ">Xizmatlar bilan tanishish</button>
                </div>
                <div className="right-section-header">
                   <img className='header-pic' src={HeaderPic} alt="" />
                    <img className='youtube' src={YouTube} alt="" />
                </div>
            </div>
        </div>
    </header>
    )
}


export default Nav;