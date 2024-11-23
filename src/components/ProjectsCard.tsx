import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";

const ProjectCard = () => {
  return (
    <>
      <section id="projects" className=" pt-12 sm:pt-16 md:pt-20">
      <Heading text="My" span="Projetcs"/>
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-14 mb-20 sm:mb-24 md:mb-28 lg:mb-32 xl:mb-40 mt-12">
          <Link
            href={"https://www.thepaceinfosys.com/"}
            target="_blank"
            className="relative group w-[300px] h-[170px] sm:w-[240px] sm:h-[140px] md:w-[300px] md:h-[170px] "
          >
            <Image
              className="rounded-lg group-hover:brightness-50"
              fill
              src={"/assets/projects/paceInfosys/1.png"}
              alt="pace-infosys-image"
            />
            <button
              className="absolute top-0 bg-[#2081a7] left-1/2 transform  
              -translate-x-1/2 translate-y-20 hidden group-hover:block px-4 py-2 rounded-md 
              text-white font-nunito font-medium text-sm"
            >
              Live Demo
            </button>
          </Link>
          <Link
            href={"https://www.thepaceinfosys.com/solutions"}
            id="portfolio-img"
            className="relative group w-[300px] h-[170px] sm:w-[240px] sm:h-[140px] md:w-[300px] md:h-[170px]"
          >
            <Image
              className="rounded-lg"
              fill
              src={"/assets/projects/paceInfosys/2.png"}
              alt="pace-infosys-image"
            />
            <button
              className="absolute top-0 bg-[#2081a7] left-1/2 transform  
              -translate-x-1/2 translate-y-20 hidden group-hover:block px-4 py-2 rounded-md 
              text-white font-nunito font-medium text-sm"
            >
              Live Demo
            </button>
          </Link>
          <Link
            href={"https://www.thepaceinfosys.com/about-us"}
            id="portfolio-img"
            className="relative group w-[300px] h-[170px] sm:w-[240px] sm:h-[140px] md:w-[300px] md:h-[170px]"
          >
            <Image
              className="rounded-lg"
              fill
              src={"/assets/projects/paceInfosys/3.png"}
              alt="pace-infosys-image"
            />
            <button
              className="absolute top-0 bg-[#2081a7] left-1/2 transform  
              -translate-x-1/2 translate-y-20 hidden group-hover:block px-4 py-2 rounded-md 
              text-white font-nunito font-medium text-sm"
            >
              Live Demo
            </button>
          </Link>
          <Link
            href={"https://master-class.kumarijob.com/"}
            id="portfolio-img"
            className="relative group w-[300px] h-[170px] sm:w-[240px] sm:h-[140px] md:w-[300px] md:h-[170px]"
          >
            <Image
              className="rounded-lg"
              fill
              src={"/assets/projects/masterClass/4.png"}
              alt="pace-infosys-image"
            />
            <button
              className="absolute top-0 bg-[#2081a7] left-1/2 transform  
              -translate-x-1/2 translate-y-20 hidden group-hover:block px-4 py-2 rounded-md 
              text-white font-nunito font-medium text-sm"
            >
              Live Demo
            </button>
          </Link>
          <Link
            href={"https://master-class.kumarijob.com/"}
            id="portfolio-img"
            className="relative group w-[300px] h-[170px] sm:w-[240px] sm:h-[140px] md:w-[300px] md:h-[170px]"
          >
            <Image
              className="rounded-lg"
              fill
              src={"/assets/projects/masterClass/5.png"}
              alt="pace-infosys-image"
            />
            <button
              className="absolute top-0 bg-[#2081a7] left-1/2 transform  
              -translate-x-1/2 translate-y-20 hidden group-hover:block px-4 py-2 rounded-md 
              text-white font-nunito font-medium text-sm"
            >
              Live Demo
            </button>
          </Link>
          <Link
            href={"https://master-class.kumarijob.com/enroll"}
            id="portfolio-img"
            className="relative group w-[300px] h-[170px] sm:w-[240px] sm:h-[140px] md:w-[300px] md:h-[170px]"
          >
            <Image
              className="rounded-lg"
              fill
              src={"/assets/projects/masterClass/6.png"}
              alt="pace-infosys-image"
            />
            <button
              className="absolute top-0 bg-[#2081a7] left-1/2 transform  
              -translate-x-1/2 translate-y-20 hidden group-hover:block px-4 py-2 rounded-md 
              text-white font-nunito font-medium text-sm"
            >
              Live Demo
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProjectCard;
