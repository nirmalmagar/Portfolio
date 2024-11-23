import React from "react";

interface SkillCompProps {
  language: string;
  percentage: string;
  className?: string;
}
const SkillComp: React.FC<SkillCompProps> = ({
  language,
  percentage,
  className,
}) => {
  return (
    <>
      <div className={`${className}`}>
        <div className="flex justify-between my-2 text-[17px]">
          <span>{language}</span>
          <span>{percentage}</span>
        </div>
        <div className="border-2 border-text_color rounded-md p-[5px]">
          <div className={`h-3 bg-text_color rounded-sm`} style={{width:`${percentage}`}} />
        </div>
      </div>
    </>
  );
};

export default SkillComp;
