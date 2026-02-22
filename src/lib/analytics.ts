import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-5N68Q9REBD");
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
