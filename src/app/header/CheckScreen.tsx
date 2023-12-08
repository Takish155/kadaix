"use client";

import React, { useEffect, useState } from "react";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

const CheckScreen = () => {
  const [windowSize, setWindowSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{windowSize! <= 600 ? <MobileNavBar /> : <DesktopNavBar />}</>;
};

export default CheckScreen;
