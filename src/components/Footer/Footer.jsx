import { Link } from "react-router-dom";
import logoWhite from "../../images/logo-BBBS-white.svg";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logoWhite} alt="логотип BBBS" />
      <ul className="footer__list footer__list_content_navigation">
        <li className="footer__list-item">
          <Link className="footer__link" to="/about-project">
            о проекте
          </Link>
        </li>
        <li className="footer__list-item">
          <Link className="footer__link" to="/calendar">
            календарь
          </Link>
        </li>
        <li className="footer__list-item">
          <Link className="footer__link" to="/where_to_go">
            куда пойти
          </Link>
        </li>
        <li className="footer__list-item">
          <Link className="footer__link" to="/questions">
            вопросы
          </Link>
        </li>
        <li className="footer__list-item">
          <Link className="footer__link" to="/read_and_watch">
            читать и смотреть
          </Link>
        </li>
        <li className="footer__list-item">
          <Link className="footer__link" to="/child_rights">
            права детей
          </Link>
        </li>
        <li className="footer__list-item">
          <Link className="footer__link" to="/stories">
            истории
          </Link>
        </li>
      </ul>
      <ul className="footer__list footer__list_content_social">
        <li className="footer__list-item">
          <a className="footer__link" href="/">
            facebook
          </a>
        </li>
        <li className="footer__list-item">
          <a className="footer__link" href="/">
            vkontakte
          </a>
        </li>
        <li className="footer__list-item">
          <a className="footer__link" href="/">
            instagram
          </a>
        </li>
        <li className="footer__list-item">
          <a className="footer__link" href="/">
            youtube
          </a>
        </li>
      </ul>
      <a
        href="https://www.nastavniki.org/campaign/pomoch-dengami/"
        target="_blank"
        rel="noreferrer"
        type="button"
        className="donate-btn"
      >
        Помочь деньгами
      </a>
      <div className="footer__owners">
        <p className="footer__copyright">
          &copy; Старшие Братья Старшие Сестры
        </p>
        <div className="footer__authors">
          <p className="footer__author">
            Разработка – студенты{" "}
            <a href="/" className="footer__author-site">
              Яндекс.Практикум
            </a>
          </p>
          <p className="footer__author">
            Концепция и дизайн –{" "}
            <a href="/" className="footer__author-site">
              krkr.design
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
