import React from "react";
import { AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

import {
  GITHUB_REPO_URL,
  LINKEDIN_URL,
  PORTFOLIO_URL,
  TWITTER_URL,
} from "../utils/Constants";
import { useSelector } from "react-redux";

function AboutMe() {
  const { showBox } = useSelector((state) => state.sideBarBox);

  return showBox === "about" ? (
    <div className="absolute top-[20%] right-[8%]">
      <div
        className="space-y-5 w-[350px] h-[450px] bg-black/50
    overflow-auto no-scrollbar px-4 py-5 rounded-2xl">
        <div className="text-white font-medium text-2xl pl-2">About Me🙋</div>
        <div className="text-white space-y-2">
          <div>Hey👋 Thank you visiting here, Hope you find peace☮️ here.</div>
          <div>
            I'm <span className="text-cyan-400">Ardhendu</span>, a Fullstack Developer, with a passion for developing web apps.
          </div>
          <div>
            This app I created with a intention of learning Frontend
            technologies, and sometimes I use it while coding🧑‍💻.
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AboutMe;
