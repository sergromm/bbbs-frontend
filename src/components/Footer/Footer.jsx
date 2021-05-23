import "./Footer.css";
import logoWhite from "../../images/logo-BBBS-white.svg";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logoWhite} alt="логотип BBBS" />
      <ul className="footer__list footer__list_content_navigation">
        <li className="footer__list-item">
          <a className="footer__link" href="/">
            о проекте
          </a>
        </li>
        <li className="footer__list-item">
          <a className="footer__link" href="./calendar">
            календарь
          </a>
        </li>
        <li className="footer__list-item">
          <a className="footer__link" href="./where_to_go">
            куда пойти
          </a>
        </li>
        <li className="footer__list-item">
          <a className="footer__link" href="./answers">
            вопросы
          </a>
        </li>
        <li className="footer__list-item">
          <a className="footer__link" href="./read">
            читать и смотреть
          </a>
        </li>
        <li className="footer__list-item">
          <a className="footer__link" href="/">
            права детей
          </a>
        </li>
        <li className="footer__list-item">
          <a className="footer__link" href="/">
            истории
          </a>
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
      <button type="button" className="donate-btn">
        Помочь деньгами
      </button>
      <div className="footer__owners">
        <p className="footer__copyright">
          {" "}
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
