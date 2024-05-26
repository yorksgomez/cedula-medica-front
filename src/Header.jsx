import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import menu from './assets/menu.png';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <img src={logo} alt="" className="logo" />
            <img src={menu} alt="" className="menu" onClick={() => navigate("/user")} />
        </header>
    );

};

export default Header;