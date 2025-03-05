import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <a className="header-logo" href="/">
        <img src={Logo} alt="Logo" />
      </a>
      <div className="header-menu">
        <Link to="/">HOME</Link>
        <Link to="/cardapio">CARDÁPIO</Link>
        <Link to="/gerenciamento">GERENCIAMENTO</Link>
        <Link to="/localizacao">LOCALIZAÇÃO</Link>
        <Link to="/sobre">SOBRE</Link>
      </div>
    </div>
  );
};

export default Header;
