import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "JavaScript",
    "React",
    "Node",
    "Express",
    "Mongodb",
    "Firebase",
  ];

  return (
    <div className="text-white pb-8">
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/d1e45084-54bc-417a-9114-d8bb355c94de/tiDYQlzMtm.json"
            background="transparent"
            speed="1"
            // style="width:300px; height:300px;"
            loop
            controls
            autoplay
          ></dotlottie-player>
        </div>

        <div className=" flex-1  gap-5 w-1/2 sm:w-full">
          <p className="text-white mb-16">
            Another interesting feature introduced ... about the properties in
            different versions of browsers. Overall, it’s the most feature-rich
            solution for the JS developer as of now, and it is actively
            maintained and updated. WebStorm offers a 30-day free trial. After
            that, you can buy the app. The license price varies depending on how
            long you use the service - the first year will cost $129, the second
            year is $103, and then the
          </p>

          <p className="text-white">
            Another interesting feature introduced ... about the properties in
            different versions of browsers. Overall, it’s the most feature-rich
            solution for the JS developer as of now, and it is actively
            maintained and updated. WebStorm offers a 30-day free trial. After
            that, you can buy the app. The license price varies depending on how
            long you use the service - the first year will cost $129, the second
            year is $103, and then the
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few techonologis I've been working with recently
        </h1>

        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
