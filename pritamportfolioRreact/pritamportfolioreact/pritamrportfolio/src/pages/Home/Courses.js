import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses";

function Courses() {
  const [selectedItemIndex, setSelecteItemIndex] = React.useState(0);

  return (
    <div>
      <SectionTitle title="Courses" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-tertiary w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((courses, index) => (
            <div
              key={index}
              onClick={() => {
                setSelecteItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl  px-10
                            ${
                              selectedItemIndex === index
                                ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#014e4e] py-3"
                                : "text-white "
                            }`}
              >
                {courses.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <div className="flex-1 flex-col gap-5">
            <h1 className="text-secondary text-2xl">
              {courses[selectedItemIndex].title}
            </h1>

            {/* <p className="text-white pb-4">
              {courses[selectedItemIndex].description}
            </p> */}

            <p className="text-white ">
              Now is the winter of our discontent Made glorious summer by this
              sun of York; And all the clouds that lour'd upon our house In the
              deep bosom of the ocean buried. Now are our brows bound with
              victorious wreaths; Our bruised arms hung up for monuments; Our
              stern alarums changed to merry meetings, ...
            </p>
          </div>
          <img
            src={courses[selectedItemIndex].image}
            alt=""
            className="h-52 w-80"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Courses;
