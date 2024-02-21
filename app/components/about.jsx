"use client";

import Image from "next/image";
import { useScroll } from "./hooks/scrooll";

export default function About() {
  const { visibleSections } = useScroll();

  return (
    <>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#333"
          fillOpacity="1"
          d="M0,96L48,85.3C96,75,192,53,288,69.3C384,85,480,139,576,138.7C672,139,768,85,864,58.7C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <section id="seccion-2" className="seccion">
        <div className="container">
          <div
            className={
              visibleSections.includes("seccion-2") ? "about active" : "about"
            }
          >
            <div className="about_text">
              <h1>About</h1>
              <p>¡Hey there! Welcome to my Portfolio 🖐️ </p>
              <p>
                Passionate Full-stack Developer and aspiring Software
                Development Technician with a dynamic background encompassing
                over 2 years of thriving freelance ventures. A perpetual learner
                committed to staying at the forefront of technology trends.
                Eagerly pursuing exciting job opportunities to contribute
                innovative solutions and elevate projects to new heights.
              </p>
            </div>

            <Image
              src="/coding.svg"
              alt="svg for the about"
              className="svg"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      <svg
        className="waves2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#333"
          fillOpacity="1"
          d="M0,96L48,85.3C96,75,192,53,288,69.3C384,85,480,139,576,138.7C672,139,768,85,864,58.7C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
