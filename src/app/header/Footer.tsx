"use client";

import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Style from "./Style.module.css";

const Footer = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <footer>
      <h1>KadaiX</h1>
      <div className={Style.footerStyle}>
        <p>Copyright all rights reserved</p>
        <GitHubIcon className={Style.gitHubIcon} />
      </div>
    </footer>
  );
};

export default Footer;
