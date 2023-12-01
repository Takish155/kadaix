import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer>
      <h1>KadaiX</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <p>Copyright all rights reserved</p>
        <GitHubIcon sx={{ fontSize: "4rem" }} />
      </div>
    </footer>
  );
};

export default Footer;
