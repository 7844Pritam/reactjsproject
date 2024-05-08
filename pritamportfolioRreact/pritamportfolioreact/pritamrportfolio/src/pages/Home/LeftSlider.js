import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function LeftSlider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col sm:flex-row sm:pb-5 gap-3">
          <i className="text-gray-400 text-xl">
            {" "}
            <FaInstagram />{" "}
          </i>
          <i className="text-gray-400 text-xl">
            {" "}
            <FaWhatsapp />{" "}
          </i>
          <i className="text-gray-400 text-xl">
            {" "}
            <FaLinkedin />{" "}
          </i>
          <i className="text-gray-400 text-xl">
            {" "}
            <FaGithub />{" "}
          </i>
          <i className="text-gray-400 text-xl">
            {" "}
            <FaFacebook />{" "}
          </i>
        </div>
        <div className="w-[1px] h-52 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSlider;
