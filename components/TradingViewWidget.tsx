"use client";

import { useEffect, useRef } from "react";

export default function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    const config = {
      autosize: true,
      symbol: "FX:EURUSD",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com"
    };

    script.innerHTML = JSON.stringify(config);

    const cleanContainer = document.createElement("div");
    cleanContainer.className = "tradingview-widget-container";
    cleanContainer.style.height = "100%";
    cleanContainer.appendChild(script);

    container.current.innerHTML = "";
    container.current.appendChild(cleanContainer);

    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div ref={container} className="h-full w-full" />
  );
}