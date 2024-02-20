import Image from "next/image";
import React from "react";

function ImageSkill({ src, alt, texto, visibleSections }) {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        className={
          visibleSections.includes("seccion-3") ? "icon active " : "icon"
        }
        style={alt === "Next" ? { backgroundColor: "white" } : {}}
        width={80}
        height={80}
      />
      <p>{texto}</p>
    </div>
  );
}

export default ImageSkill;
