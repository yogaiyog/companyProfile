import React from "react";

export default function Overview() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-violet-600 to-indigo-600 text-white w-full py-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row items-center md:items-start px-5">
          <div className="flex-1 md:pr-10">
            <h1 className="text-3xl font-bold py-5 md:py-10">Gaming LevelUp!</h1>
            <p>
              GameCourse is a premier online platform dedicated to enhancing
              gaming skills through comprehensive courses led by professional
              esports coaches. Our mission is to empower gamers of all levels to
              reach their full potential in various gaming genres, including
              FPS, MOBA, and many others.
            </p>
            <br />
            <p>
              Founded in 2024, GameCourse was born out of a passion for gaming
              and a vision to provide structured, high-quality training to
              gamers worldwide. Recognizing the gap in formal gaming education,
              our founders, Sir Yoga, who themselves are seasoned gamers and
              industry experts, established GameCourse to bridge this gap and
              elevate the gaming community's skills and knowledge.
            </p>
          </div>
          <img
            src="1.jpg"
            alt=""
            className="w-full md:w-1/2 object-cover shadow-xl rounded-lg"
          />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row-reverse items-center md:items-start px-5 mt-10">
          <img
            src="2.jpg"
            alt=""
            className="w-full md:w-1/2 object-cover shadow-xl rounded-lg"
          />
          <div className="">
            <p>
              Our team comprises experienced esports coaches, gaming enthusiasts,
              and industry professionals who share a common goal: to nurture and
              develop the next generation of gaming talent. Each coach at
              GameCourse brings a wealth of experience and expertise, having
              competed at the highest levels of esports. Their insights and
              personalized coaching techniques ensure that our students receive
              the best possible training tailored to their individual needs.
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
