// EmailSection.js
"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/gitHub-icon.svg";
import LinkedinIcon from "../../../public/linkedIn-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      // EmailJS configuration with your provided credentials
      const emailData = {
        service_id: 'service_whbu41x',
        template_id: 'template_eemjtfo',
        user_id: 'FQum9PTHvXCdcSIHv',
        template_params: {
          from_name: data.email,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        }
      };

      // Send email using EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        setEmailSubmitted(true);
        e.target.reset(); // Reset form
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setError("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-16 md:py-24"
      id="contact"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <div className="bg-gradient-to-r from-yellow-500 via-orange-300 to-sky-500 h-1 w-24 md:w-60 mx-auto rounded-full mb-6"></div>
          <p className="text-[#ADB7BE] max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="z-10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Get in Touch
            </h3>
            <p className="text-[#ADB7BE] mb-8 max-w-md">
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out using the contact form or connect with me through my social profiles.
            </p>
            <div className="flex flex-row gap-4">
              <Link href="https://github.com/prannav225" className="transition-transform duration-300 hover:scale-110">
                <Image src={GithubIcon} alt="github" width={40} height={40} />
              </Link>
              <Link href="https://www.linkedin.com/in/prannav-m/" className="transition-transform duration-300 hover:scale-110">
                <Image src={LinkedinIcon} alt="linkedIn" width={40} height={40} />
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="sample@example.com"
                  className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-4"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Enter your subject here..."
                  className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-4"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Leave your message here..."
                  className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-4"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-yellow-500 via-orange-300 to-sky-400 hover:from-yellow-600 hover:via-orange-400 hover:to-sky-500 text-white font-semibold py-4 px-6 rounded-lg w-full transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              
              {emailSubmitted && (
                <p className="text-green-400 text-center py-4 px-6 bg-green-900/30 rounded-lg border border-green-800">
                  Email sent successfully! I'll get back to you soon.
                </p>
              )}
              
              {error && (
                <p className="text-red-400 text-center py-4 px-6 bg-red-900/30 rounded-lg border border-red-800">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;