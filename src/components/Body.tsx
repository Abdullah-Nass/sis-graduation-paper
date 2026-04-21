import { useState } from "react";
import Gauge from "./Gauge";
import { FormattedMessage } from "react-intl";

const Body = () => {
  const [notifCount, setNotifCount] = useState(0);

  return (
    <div className="t-Body-main">
      <div
        style={{
          padding: "16px 20px",
          background: "#f0f0f0",
          borderBottom: "1px solid #e0e0e0",
          fontSize: "1.1rem",
          fontWeight: "700",
          color: "#4c606c",
        }}
      >
        <FormattedMessage
          id="body.welcome"
          values={{ name: <FormattedMessage id="header.name" /> }}
        />
      </div>
      <div className="notif-bar">
        <div className="notif-title">
          <FormattedMessage id="body.notifTitle" />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="number"
            min={0}
            value={notifCount}
            onChange={(e) =>
              setNotifCount(Math.max(0, parseInt(e.target.value) || 0))
            }
            style={{
              width: "50px",
              textAlign: "center",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "2px 4px",
              fontWeight: "600",
              fontFamily: "Cairo, sans-serif",
            }}
          />
        </div>
      </div>
      <div className="notif-bar notif-list">
        <span className="notif-empty">
          <FormattedMessage
            id="body.notifCount"
            values={{ count: notifCount }}
          />
        </span>
      </div>

      <div className="t-Body-content">
        <div className="content-row">
          <div className="content-card" style={{ height: "fit-content" }}>
            <h5>
              <FormattedMessage id="body.guideTitle1" />
            </h5>
            <a href="#" className="guide-link">
              <img src="/pdf-icon.png" alt="" />
              <span>
                <FormattedMessage id="body.guideLink1" />
              </span>
            </a>
          </div>

          <div className="content-card" style={{ height: "fit-content" }}>
            <h5>
              <FormattedMessage id="body.guideTitle2" />
            </h5>
            <a href="#" className="guide-link">
              <img src="/pdf-icon.png" alt="" />
              <span>
                <FormattedMessage id="body.guideLink2" />
              </span>
            </a>
            <a href="#" className="guide-link">
              <img src="/youtube-s.png" alt="" />
              <span>
                <FormattedMessage id="body.guideLink3" />
              </span>
            </a>
            <a href="#" className="guide-link">
              <img src="/youtube-s.png" alt="" />
              <span>
                <FormattedMessage id="body.guideLink4" />
              </span>
            </a>
          </div>

          <div className="content-card" style={{ height: "500px" }}>
            <h5>
              <FormattedMessage id="body.gaugeTitle" />
            </h5>
            <Gauge value={89} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
