import React from "react";

import cinnamonRoll from "../assets/cinnamon-roll.svg";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Footer = () => {
  return (
    <div
      id="Footer"
      className="w-full h-16 bg-gray-700 text-gray-100 flex justify-center px-10 items-center space-x-1 text-sm sm:text-base"
    >
      <a
        className="hover:text-logo focus:underline focus:outline-none"
        href={`${BASE_URL}/impressum`}
      >
        Impressum
      </a>
      <p>&#8226; Made with </p>
      <img
        src={cinnamonRoll}
        alt="cinnamon-roll"
        className="w-4 h-4"
        title="I'm a Cinnamon Roll!"
      />
      <p>by Busch &amp; Busch</p>
    </div>
  );
};

export default Footer;
