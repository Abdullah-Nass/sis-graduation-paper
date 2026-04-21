import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocale } from "./UseLocale";
import { useIntl } from "react-intl";

const Login = () => {
  const navigate = useNavigate();
  const { locale, switchLanguage } = useLocale();
  const intl = useIntl();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      navigate("/home");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('public/login-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Cairo, sans-serif",
        direction: locale === "ar" ? "rtl" : "ltr",
      }}
    >
      <button
        onClick={switchLanguage}
        style={{
          position: "fixed",
          top: "12px",
          left: "12px",
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
          backdropFilter: "blur(4px)",
        }}
      >
        <i className="fas fa-globe" style={{ fontSize: "0.85rem" }} />
        <span>{locale === "ar" ? "EN" : "ع"}</span>
      </button>

      <div
        style={{
          background: "rgba(180,190,200,0.85)",
          backdropFilter: "blur(8px)",
          borderRadius: "12px",
          padding: "40px 48px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <img
          src="/yarmouk-logo.png"
          alt="logo"
          style={{
            width: "90px",
            height: "90px",
            objectFit: "contain",
            marginBottom: "8px",
          }}
          onError={(e) => (e.currentTarget.style.display = "none")}
        />

        <h2
          style={{
            fontSize: "1.4rem",
            fontWeight: "700",
            color: "#222",
            margin: 0,
          }}
        >
          {intl.formatMessage({ id: "login.title" })}
        </h2>

        <div style={{ width: "100%", position: "relative" }}>
          <input
            type="text"
            placeholder={intl.formatMessage({ id: "login.studentID" })}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 40px 10px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "0.95rem",
              outline: "none",
              background: "#fff",
              textAlign: locale === "ar" ? "right" : "left",
            }}
          />
          <i
            className="fa fa-user"
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#888",
            }}
          />
        </div>

        <div style={{ width: "100%", position: "relative" }}>
          <input
            type="password"
            placeholder={intl.formatMessage({ id: "login.password" })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            style={{
              width: "100%",
              padding: "10px 40px 10px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "0.95rem",
              outline: "none",
              background: "#fff",
              textAlign: locale === "ar" ? "right" : "left",
            }}
          />
          <i
            className="fa fa-lock"
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#888",
            }}
          />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            fontSize: "0.85rem",
            flexDirection: "column",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              color: "#333",
            }}
          >
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            {intl.formatMessage({ id: "login.rememberMe" })}
          </label>
          <a
            href="#"
            style={{
              color: "#1a6eb5",
              textDecoration: "none",
              marginTop: "20px",
            }}
          >
            {intl.formatMessage({ id: "login.forgotPassword" })}
          </a>
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "#4c606c",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            fontWeight: "700",
            cursor: "pointer",
            marginTop: "4px",
            fontFamily: "Cairo, sans-serif",
          }}
        >
          {intl.formatMessage({ id: "login.submit" })}
        </button>
      </div>
    </div>
  );
};

export default Login;
