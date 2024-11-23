import React, { ReactNode } from "react";
import { SlCalender } from "react-icons/sl";

interface EducationCardProps {
  date: string;
  title: string;
  children: ReactNode;
}
const EducationCard: React.FC<EducationCardProps> = ({
  date,
  title,
  children,
}) => {
  return (
    <>
      <div className="flex gap-4 mt-4">
        <div className="flex flex-col items-center">
          <div className="w-[23px] h-[24px] bg-text_color rounded-full" />
          <div className="h-full w-0.5 bg-text_color" />
        </div>
        <div className="p-4 border-2 h-fit border-text_color rounded-md">
          <div className="flex text-sm gap-x-2 text-text_color">
            <SlCalender />
            <span>{date}</span>
          </div>
          <h5 className="text-lg md:text-xl py-2 font-semibold">{title}</h5>
          {children}
        </div>
      </div>
    </>
  );
};

export default EducationCard;
