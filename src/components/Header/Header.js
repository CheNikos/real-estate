import "./Header.css";
import logo from "../../images/header/header-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип" />
      <h2 className="header__title">Краснодар</h2>
      <ul className="header__navigation">
        <li><a href="/#" className="header__text">Все новостройки</a><p className="header__number">586</p></li>
        <li><a href="/#" className="header__text">Все застройщики</a><p className="header__number">32</p></li>
        <li><a href="/#" className="header__text">Все квартиры</a><p className="header__number">1784</p></li>
      </ul>
    </header>
  );
}
