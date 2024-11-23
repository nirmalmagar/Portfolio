"use client";
import React from "react";
import { MdOutgoingMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Button from "@/components/Button";

const Contact = () => {
  const [result, setResult] = React.useState("");
  console.log("result",result)
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "a41d5751-219f-46a7-b11f-76b46897a7dd");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget?.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center md:items-start md:flex-row py-14 md:py-24 gap-20 md:gap-24 lg:gap-44"
    >
      <div className="flex flex-col gap-y-8 items-center md:items-start ">
        <h1 className="text-3xl xl:text-4xl font-semibold">
          Contact <span className="text-text_color">Me</span>
        </h1>
        <div className="flex flex-row gap-4 md:flex-col">
          <div className="flex gap-1 md:gap-4">
            <MdOutgoingMail className="text-xl sm:text-2xl md:text-3xl text-text_color" />
            <span className="sm:mt-0.5 text-[15px] md:text-base">nirmalmagar.5599@gmail.com</span>
          </div>
          <div className="flex gap-1 md:gap-4">
            <IoMdCall className="text-xl sm:text-2xl md:text-3xl text-text_color" />
            <span className="sm:mt-0.5 text-[15px] md:text-base">9863185599</span>
          </div>
        </div>
        <div className="inline-flex gap-8 text-text_color">
          <FaFacebookF className="text-2xl" />
          <FaTwitter className="text-2xl" />
          <FaLinkedinIn className="text-2xl" />
          <IoLogoWhatsapp className="text-2xl" />
        </div>
        <Button theme="blue" className="text-black font-bold text-xl w-fit">
          <a href="assets/CCV.pdf" download>Download CV</a>
        </Button>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-8 w-full">
        <input
          className="p-3 md:p-4 bg-[#1f4d73] border-none rounded-lg text-xl text-[#bdc2c2]"
          type="hidden"
          name="access_key"
          value="a41d5751-219f-46a7-b11f-76b46897a7dd"
        />
        <input
          className="p-3 md:p-4 bg-[#1f4d73] border-none rounded-lg text-xl text-[#bdc2c2]"
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Your Name"
          required
        />
        <input
          className="p-3 md:p-4 bg-[#1f4d73] border-none rounded-lg text-xl text-[#bdc2c2]"
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Your Email"
        />
        <textarea
          className="p-3 md:p-4 bg-[#1f4d73] border-none rounded-lg text-xl text-[#bdc2c2] min-h-20"
          name="message"
          rows={8}
          autoComplete="off"
          placeholder="Your Message"
          required
        />
        <button
          type="submit"
          className="bg-text_color text-black font-semibold text-xl w-fit py-2 px-8 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
