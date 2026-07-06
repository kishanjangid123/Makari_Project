import { ReportHandler } from "web-vitals";

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    import("web-vitals").then(
      ({ onCLS, onFCP, onLCP, onINP, onTTFB }:any) => {
        onCLS(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onINP(onPerfEntry);
        onTTFB(onPerfEntry);
      }
    );
  }
};

export default reportWebVitals;