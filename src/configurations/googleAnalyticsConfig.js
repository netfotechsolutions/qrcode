import ReactGA from "react-ga";

const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

export const googleAnalytics = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};
