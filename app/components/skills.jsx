"use client";

import { useScroll } from "./hooks/scrooll";
import ImageSkill from "./subComponents/imageSkill";

export default function Skills() {
  const { visibleSections } = useScroll();

  return (
    <section className="seccion" id="seccion-3">
      <div className="container">
        <div className="skills">
          <h1>Skills</h1>
          <div className="iconos">
            <ImageSkill
              src={"/icon/bootstrap.svg"}
              alt={"bootstrap"}
              texto={"Bootstrap"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/css.svg"}
              alt={"css"}
              texto={"CSS"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/git.svg"}
              alt={"git"}
              texto={"GIT"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/html.svg"}
              alt={"HTML"}
              texto={"Html"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/js.svg"}
              alt={"Javascript"}
              texto={"Javascript"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/mongo.svg"}
              alt={"mongo"}
              texto={"MongoDB"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/next.svg"}
              alt={"Next"}
              texto={"Next js"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/node.svg"}
              alt={"Node"}
              texto={"Node js"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/python.svg"}
              alt={"Python"}
              texto={"Python"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/react.svg"}
              alt={"React"}
              texto={"React js"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/sass.svg"}
              alt={"sass"}
              texto={"Sass"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/sql.svg"}
              alt={"SQL"}
              texto={"MySQL"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/sharp.svg"}
              alt={"c"}
              texto={"C#"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/sqlserver.svg"}
              alt={"sqlserver"}
              texto={"SQl Server"}
              visibleSections={visibleSections}
            />
            <ImageSkill
              src={"/icon/net.svg"}
              alt={"net"}
              texto={".Net"}
              visibleSections={visibleSections}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
