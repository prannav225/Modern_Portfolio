// EmailSection.js
"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/gitHub-icon.svg";
import LinkedinIcon from "../../../public/linkedIn-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      if (response.status === 200) {
        console.log("Message Sent");
        setEmailSubmitted(true);
      } else {
        console.error("Server error:", response.status);
      }
    } catch (error) {
      // Handle network or fetch error
      console.error("Network or fetch error:", error);
    }
  };
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-12 gap-4"
      id="contact"
    >
      <div className="z-10">
        <h5 className="text-4xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <div className="bg-gradient-to-r  from-yellow-500 via-orange-300 to-sky-500 h-1 w-60 mb-4 rounded-3xl"></div>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
          consequatur sunt blanditiis cupiditate, quia unde saepe distinctio rem
          numquam eius dolore
        </p>
        <div className="social flex flex-row gap-2">
          <Link href="https://github.com/prannav225">
            <Image src={GithubIcon} alt="github" width={30} height={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/prannav-m/">
            <Image src={LinkedinIcon} alt="linkedIn" width={30} height={30} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="mb-6 w-full">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="sample@example.com"
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg p-2.5 w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-1 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Enter your subject here..."
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg p-2.5 w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-1 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Leave your message here..."
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg p-2.5 w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-300">Email sent successfully</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
