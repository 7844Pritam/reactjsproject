import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Pritam kuamr sharma",
    age: null,
    gender: "Male",
    email: "pritam@gmail.com",
    mobile: 7800730968,
    country: "INDIA",
  };

  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex-col">
          <p className="text-white gap-1">{"{ "}</p>

          {Object.keys(user).map((key, index) => (
            <p className="ml-5" key={index}>
              <span className="text-white">{key} :</span>
              <span className="text-white">{user[key]}</span>
            </p>
          ))}

          <p className="text-white">{" }"}</p>
        </div>

        <div className=" flex-1 h-[400px] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/d1e45084-54bc-417a-9114-d8bb355c94de/tiDYQlzMtm.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
