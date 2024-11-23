import React from "react";

interface HeadingProps {
  text: string;
  span: string;
}
const Heading: React.FC<HeadingProps> = ({ text, span }) => {
  return (
    <>
      <h2 className="text-3xl xl:text-4xl text-center font-semibold my-4">
        {text}<span className="text-text_color">{span}</span>
      </h2>
    </>
  );
};

export default Heading;
