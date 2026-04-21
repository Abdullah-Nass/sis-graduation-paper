import { FormattedMessage } from "react-intl";

const SideNavItem = () => {
  return (
    <div id="t_Body_nav" role="navigation">
      <a href="#" className="nav-row is-current">
        <span className="nav-icon">
          <i className="fas fa-home"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.home" />
        </span>
      </a>

      <a href="#" className="nav-row">
        <span className="nav-icon">
          <i className="far fa-bell"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.notification" />
        </span>
      </a>

      <button
        className="nav-row"
        data-bs-toggle="collapse"
        data-bs-target="#regSub"
        aria-expanded="false"
      >
        <span className="nav-icon">
          <i className="far fa-file-alt"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.registerService" />
        </span>
        <i className="fas fa-chevron-left chevron"></i>
      </button>
      <div className="collapse sub-nav" id="regSub">
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa-solid fa-list-check"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.courseRegister" />
          </span>
        </a>
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa-regular fa-file"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.viewRegistered" />
          </span>
        </a>
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa-solid fa-clipboard-list"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.viewGrades" />
          </span>
        </a>
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa-solid fa-question"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.evaluation" />
          </span>
        </a>
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa-solid fa-table"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.viewExamsTable" />
          </span>
        </a>
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa-regular fa-clock"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.pseudoRegistration" />
          </span>
        </a>
      </div>

      <a href="#" className="nav-row">
        <span className="nav-icon">
          <i className="far fa-id-card"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.basicInfo" />
        </span>
      </a>

      <a href="#" className="nav-row">
        <span className="nav-icon">
          <i className="fa fa-table"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.studySchedule" />
        </span>
      </a>

      <button
        className="nav-row"
        data-bs-toggle="collapse"
        data-bs-target="#planSub"
        aria-expanded="false"
      >
        <span className="nav-icon">
          <i className="far fa-newspaper"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.studyPlan" />
        </span>
        <i className="fas fa-chevron-left chevron"></i>
      </button>
      <div className="collapse sub-nav" id="planSub">
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa fa-clipboard-list"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.planSurvey" />
          </span>
        </a>
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fas fa-tools"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.rebuildPlan" />
          </span>
        </a>
      </div>

      <a href="#" className="nav-row">
        <span className="nav-icon">
          <i className="fas fa-chart-bar"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.academicRecord" />
        </span>
      </a>

      <a href="#" className="nav-row">
        <span className="nav-icon">
          <i className="fas fa-pills"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.healthInsurance" />
        </span>
      </a>

      <a href="#" className="nav-row">
        <span className="nav-icon">
          <i className="fas fa-map-marker-alt"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.studentAddress" />
        </span>
      </a>

      <button
        className="nav-row"
        data-bs-toggle="collapse"
        data-bs-target="#finSub"
        aria-expanded="false"
      >
        <span className="nav-icon">
          <i className="fas fa-dollar-sign"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.financialServices" />
        </span>
        <i className="fas fa-chevron-left chevron"></i>
      </button>
      <div className="collapse sub-nav" id="finSub">
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fas fa-receipt"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.paymentGateway" />
          </span>
        </a>
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa-solid fa-calculator"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.paymentInquiry" />
          </span>
        </a>
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa-solid fa-file-lines"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.userGuide" />
          </span>
        </a>
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fas fa-money-bill"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.paidFeesInquiry" />
          </span>
        </a>
      </div>

      <a href="#" className="nav-row">
        <span className="nav-icon">
          <i className="fa-solid fa-arrow-down-1-9"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.clearance" />
        </span>
      </a>

      <button
        className="nav-row"
        data-bs-toggle="collapse"
        data-bs-target="#reqSub"
        aria-expanded="false"
      >
        <span className="nav-icon">
          <i className="fa-solid fa-pen-ruler"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.requests" />
        </span>
        <i className="fas fa-chevron-left chevron"></i>
      </button>
      <div className="collapse sub-nav" id="reqSub">
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa-solid fa-newspaper"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.extractDocument" />
          </span>
        </a>
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa-regular fa-hourglass-half"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.deferralRequests" />
          </span>
        </a>
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa-regular fa-calendar-check"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.incompleteRequests" />
          </span>
        </a>
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa-regular fa-file"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.transferRequests" />
          </span>
        </a>
        <a href="#" className="nav-row">
          <span className="nav-icon">
            <i className="fa-solid fa-align-center"></i>
          </span>
          <span className="nav-text">
            <FormattedMessage id="sideNav.levelExemption" />
          </span>
        </a>
      </div>

      <a href="#" className="nav-row">
        <span className="nav-icon">
          <i className="fa-solid fa-book-open"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.library" />
        </span>
      </a>

      <a href="#" className="nav-row">
        <span className="nav-icon">
          <i className="fa-regular fa-file"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.researchSupport" />
        </span>
      </a>

      <a href="#" className="nav-row">
        <span className="nav-icon">
          <i className="fa-regular fa-file"></i>
        </span>
        <span className="nav-text">
          <FormattedMessage id="sideNav.levelExamBooking" />
        </span>
      </a>
    </div>
  );
};

export default SideNavItem;
