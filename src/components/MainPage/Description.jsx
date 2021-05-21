import bbbsLogo from "../../images/logo-BBBS-blue.svg";

function Description() {
  return (
    <a className="describe-box" href="/">
      <div className="describe-box__figure" />
      <img
        src={bbbsLogo}
        alt="Логотип Big Brothers Big Sisters"
        className="describe-box__logo"
      />
      <div className="describe-box__ellips">
        <p className="describe-box__text">
          Наставники.про – цифоровая информационная платформа огрганизации
          «Старшие Братья Старшие Сестры». Созданная для поддержки наставников
          программы.
        </p>
      </div>
    </a>
  );
}

export default Description;
