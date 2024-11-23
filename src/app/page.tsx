import React from "react";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectsCard";
import Heading from "@/components/Heading";
import EducationCard from "@/components/EducationCard";
import Button from "@/components/Button";
import SkillComp from "@/components/SkillComp";
import Contact from "./_partials/Contact";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* ----------- navbar --------- */}
      <div
        id="head_icons"
        className="bg-secondary_color sticky top-0 z-10 text-white"
      >
        <Container>
          <div className="flex justify-between py-3 items-center">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image fill alt="" src={"/assets/titleLogo.png"} />
              </div>
              <span>Nirmal S.M.</span>
            </div>
            <div className="hidden md:flex gap-12">
              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#education">Education</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>
              <span className="active-nav" />
            </div>
          </div>
        </Container>
      </div>

      {/* ---------- home section part --------------------- */}
      <Container>
        <div className="flex my-10 md:my-28">
          <div id="home" className="md:flex-1 w-[60rem]">
            <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-5xl">
              Hi, I&apos;m{" "}
              <span className="text-text_color">Nirmal Saru Magar</span>
            </h1>
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-text_color py-3 sm:py-4 lg:py-6">
              Front-end Developer
            </h1>
            <p className="max-w-[40rem] text-[15px] sm:text-base">
              With a strong foundation in React/Next.js, Tailwind CSS, and
              TypeScript, I build responsive and user-friendly web applications.
              I enjoy turning designs into fully functional digital experiences,
              focusing on clean, efficient code and smooth user interactions.
            </p>
            <div className="flex gap-12 my-8 md:my-10 lg:my-14">
              <Button theme="blue" className="bg-text_color px-10 rounded-md">
                <Link
                  href=""
                  className="font-bold text-lg text-secondary_color"
                >
                  Hire Me
                </Link>
              </Button>
              <Button
                theme="dark"
                className="border-2 border-text_color px-10 rounded-md"
              >
                <Link href="" className="font-bold text-lg text-text_color">
                  Let&apos;s Talk
                </Link>
              </Button>
            </div>
            <div className="flex text-text_color gap-x-4">
              <div className="border-2 border-text_color p-2 rounded-full">
                <Link href={""}>
                  <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
              <div className="border-2 border-text_color p-2 rounded-full">
                <Link href={""}>
                  <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
              <div className="border-2 border-text_color p-2 rounded-full">
                <Link href={""}>
                  <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex-1"></div>
        </div>
      </Container>

      {/* -----------------about me section --------------- */}
      <div className="bg-secondary_color">
        <Container>
          <section
            id="about"
            className="flex flex-col items-center py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 gap-4 md:gap-5 xl:gap-6"
          >
            <Heading text="About" span="Me" />
            <div className="relative h-[8rem] sm:h-[10rem] w-[8rem] sm:w-[10rem] md:h-[12rem] md:w-[12rem] xl:h-[14rem] xl:w-[14rem]">
              <Image
                fill
                src={"/assets/logo.jpeg"}
                alt="logo icons"
                className="rounded-full border-2 border-text_color"
              />
            </div>
            <h3 className="text-2xl font-semibold">
              Front-end <span className="text-text_color">developer</span>
            </h3>
            <p className="sm:text-[16px] text-[15px] text-center">
              Hello everyone, I&apos;m a developer with a passion for creating
              visually appealing and highly functional web applications. With a
              solid background in technologies such as React, Next.js, Tailwind
              CSS, and TypeScript, I thrive on transforming innovative ideas
              into seamless digital experiences.
            </p>
            <div>
              <p className="sm:text-[16px] text-[15px] text-center">
                I graduated with a Bachelor&apos;s degree in Computer Science
                and Information Technology (BSc.CSIT), which has equipped me
                with a strong technical foundation and problem-solving skills.
                During my year of professional experience, I have contributed to
                various projects, including a Training Management System and the
                Pace Infosys website, where I honed my skills in UI design and
                API integration.
              </p>
              <p className="sm:text-[16px] text-[15px] mt-5 text-center">
                I enjoy collaborating with cross-functional teams to deliver
                user-centric solutions. My goal is to write clean, maintainable
                code and continuously learn new technologies to improve my
                craft. When I&apos;m not coding, you can find me exploring new
                web trends, reading about the latest tech developments, or
                working on personal projects to further enhance my skills.
              </p>
              <p className="text-sm sm:text-base text-center text-text_color my-4">
                Feel free to reach out if you want to connect or discuss
                potential collaborations!
              </p>
            </div>
            <Button theme="blue">
              <a href="#" className="text-secondary_color font-bold text-lg">
                Read More
              </a>
            </Button>
          </section>
        </Container>
      </div>

      {/* --------------------- education section ------------ */}
      <Container>
        <section
          className="education py-6 sm:py-8 md:py-10 xl:py-12"
          id="education"
        >
          <Heading text="My" span="Journey" />
          <div className="flex flex-col sm:flex-row gap-12 mt-8">
            <div>
              <h2 className="text-center text-2xl font-semibold text-text_color">
                Education
              </h2>
              <EducationCard date="2020 - 2024" title="Undergraduate Education">
                <p className="text-[15px] sm:text-base">
                  I completed my Bachelor of Science in Computer Science and
                  Information Technology (BSc.CSIT) from Tribhuvan University,
                  achieving a 72% overall score. Offering a comprehensive
                  education in both theoretical and practical aspects of
                  computer science and IT.
                </p>
              </EducationCard>
              <EducationCard
                date="2018-2020"
                title="Higher Secondary Education"
              >
                <p className="text-[15px] sm:text-base">
                  I passout my higher secondary education (12th-grade) with an A
                  grade, achieving a GPA of 3.35 in Science Field. I also opted
                  for Extra Mathematics as an additional subject, further
                  enhancing my analytical abilities.
                </p>
              </EducationCard>
              <EducationCard date="2018" title="Secondary Education">
                <p className="text-[15px] sm:text-base">
                  I completed my secondary education (10th-grade) with an A+
                  grade, securing a GPA of 3.65. I chose Optional Mathematics as
                  a key subject, which helped strengthen my analytical skills.
                  This achievement reflects my dedication to academic excellence
                  and passion for learning.
                </p>
              </EducationCard>
            </div>
            {/*-------------------------------------Experience------------------------------------ */}
            <div>
              <h2 className="text-center text-2xl font-semibold text-text_color">
                Experience
              </h2>
              <EducationCard
                date="2023 - 2024"
                title="Pace Infosys Company (Kumari Job)"
              >
                <p className="text-[15px] sm:text-base">
                  I am employed as a Front-End Developer at Pace Infosys IT
                  Company. In this role, I focus on creating responsive and
                  user-friendly web applications using modern technologies. I
                  collaborate with cross-functional teams to enhance user
                  experience and ensure optimal performance.
                </p>
              </EducationCard>
              <EducationCard date="2021-2023" title="Metahorizon IT Solution">
                <p className="text-[15px] sm:text-base">
                  I work as a Front-End Developer focusing on developing
                  responsive and interactive web applications. My role involves
                  collaborating with designers and optimizing applications for
                  performance and functionality.
                </p>
              </EducationCard>
              <EducationCard date="2020-2021" title="Pytech IT Company">
                <p className="text-[15px] sm:text-base">
                  I learned web development over the course of three months,
                  which led to a six-month internship at Pytech IT Company.
                  During the internship, I gained hands-on experience and also
                  learned how to work effectively in a team environment,
                  collaborating on real-time projects.
                </p>
              </EducationCard>
            </div>
          </div>
        </section>
      </Container>

      {/* --------------------- skill section design --------------------- */}
      <div className="bg-secondary_color pt-6 sm:pt-10 md:pt-14  pb-12 sm:pb-14 lg:pb-20">
        <Container>
          <Heading text={"My"} span={"Skills"} />
          <div className="flex flex-col sm:flex-row justify-between gap-10 mt-6 sm:mt-10">
            <div className="flex-1">
              <span className="font-semibold text-xl sm:text-2xl text-text_color">
                Coding Skills
              </span>
              <div className=" border-2 border-text_color rounded-md p-4 mt-6">
                <SkillComp language="React Js" percentage="90%" />
                <SkillComp
                  className="my-8"
                  language="Next Js"
                  percentage="85%"
                />
                <SkillComp language="TypeScript" percentage="80%" />
                <SkillComp
                  className="mt-8 mb-3"
                  language="Tailwind css"
                  percentage="90%"
                />
              </div>
            </div>
            <div className="flex-1">
              <span className="font-semibold text-xl sm:text-2xl text-text_color">
                Professional Skills
              </span>
              <div className=" border-2 border-text_color rounded-md p-4 mt-6">
                <SkillComp language="Technical Skills" percentage="90%" />
                <SkillComp
                  className="my-8"
                  language="Collaboration and Communication"
                  percentage="80%"
                />
                <SkillComp language="Problem-Solving Skills" percentage="85%" />
                <SkillComp
                  className="mt-8 mb-3"
                  language="UI/UX Design Principles"
                  percentage="80%"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* -------------------projects------------------ */}
      <div className="project-page">
        <Container>
          <ProjectCard />
        </Container>
      </div>

      {/* ------------------ contact ----------------- */}
      <div className="bg-secondary_color">
        <Container>
          <Contact />
        </Container>
      </div>

      {/* -----------------------footer--------------------- */}
      <div className="pt-6 pb-4">
        <Container>
          <div className="flex justify-between">
            <p className="text-sm items-center sm:items-start sm:text-base">
              Copyright <span className="text-text_color">&copy;</span> 2023 by{" "}
              <span className="text-text_color">Nirmal Saru Magar</span> | All
              Rights Reserved.
            </p>
            <a
              href="#"
              className="bg-text_color p-2 rounded-md animate-bounce "
            >
              <FaArrowUp className="text-secondary_color" />
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
