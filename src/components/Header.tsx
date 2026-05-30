import { FormattedMessage } from "react-intl";
import { useLocale } from "./UseLocale";
import { Link } from "react-router-dom";
import { clearAuthenticated } from "../auth";

const Header = () => {
  const { locale, switchLanguage } = useLocale();
  const toogleNav = () => {
    const nav = document.getElementById("t_Body_nav") as HTMLElement;
    const main = document.querySelector(".t-Body-main") as HTMLElement;

    if (window.innerWidth <= 600) {
      nav.classList.toggle("open");
    } else {
      nav.classList.toggle("collapsed");
      main.classList.toggle("collapsed");
    }
  };
  return (
    <header className="t-Header">
      <div className="t-Header-branding">
        <button
          className="t-Button--headerTree"
          id="navToggle"
          onClick={toogleNav}
        >
          <i className="fas fa-bars"></i>
        </button>
        <a href="#" className="t-Header-logo-link">
          <FormattedMessage id="header.title" />
        </a>
      </div>

      <nav className="t-Header-navBar">
        <ul className="t-NavigationBar">
          <li className="t-NavigationBar-item">
            <a href="#">
              <FormattedMessage id="header.name" />
            </a>
          </li>
          <li className="t-NavigationBar-item">
            <button
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-user"></i>
              <span>2022134052</span>
              <i className="fas fa-chevron-down"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-start">
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-lock"></i>
                  <FormattedMessage id="header.changePassword" />
                </a>
              </li>

              <li>
                <Link
                  to="/login"
                  className="dropdown-item "
                  onClick={() => clearAuthenticated()}
                >
                  <i className="fas fa-sign-out-alt"></i>
                  <FormattedMessage id="header.signOut" />
                </Link>
              </li>
            </ul>
          </li>
          <li className="t-NavigationBar-item">
            <button
              type="button"
              onClick={switchLanguage}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "4px 10px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "0.8rem",
                cursor: "pointer",
                fontFamily: "Cairo, sans-serif",
                fontWeight: "600",
                letterSpacing: "0.3px",
              }}
            >
              <i className="fas fa-globe" style={{ fontSize: "0.85rem" }}></i>
              <span>{locale === "ar" ? "EN" : "ع"}</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
