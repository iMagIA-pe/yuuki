"use client";
import Script from "next/script";

export default function Metricool() {
  return (
    <Script id="metricool-script" strategy="afterInteractive">
      {`
        function loadMetricool() {
          var script = document.createElement("script");
          script.src = "https://tracker.metricool.com/resources/be.js";
          script.async = true;
          script.onload = function () {
            beTracker.t({ hash: "f2f7bb1686e9cc8eb42a0e1be49b15ff" });
          };
          document.head.appendChild(script);
        }
        if (document.readyState === "complete") {
          loadMetricool();
        } else {
          window.addEventListener("load", loadMetricool);
        }
      `}
    </Script>
  );
}
