import logo from './assets/logo.png';
import menu from './assets/menu.png';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" className="logo" />
            <img src={menu} alt="" className="menu" />
        </header>
    );

};

export default Header;