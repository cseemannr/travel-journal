import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

const icon = <FontAwesomeIcon icon={faEarthAmericas} className="nav-icon" />;

export default function Navbar() {
  return (
    <nav>
      <h1>{icon}my travel journal</h1>
    </nav>
  );
}
