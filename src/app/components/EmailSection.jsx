import React, { useState } from "react";

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
    <section className="py-16 md:py-24 relative" id="contact">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] -z-10"></div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="z-10">
            <h5 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
              Let&apos;s Connect
            </h5>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-[#ADB7BE] mb-8 max-w-md text-lg leading-relaxed">
              I&apos;m currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className="flex flex-row gap-6">
              <a href="https://github.com/prannav225" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/50 group">
                <img src="/gitHub-icon.svg" alt="github" width={24} height={24} className="opacity-70 group-hover:opacity-100" />
              </a>
              <a href="https://www.linkedin.com/in/prannav-m/" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/50 group">
                <img src="/linkedIn-icon.svg" alt="linkedIn" width={24} height={24} className="opacity-70 group-hover:opacity-100" />
              </a>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white ml-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="name@example.com"
                  className="bg-black/40 border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-4 transition-all duration-300 focus:bg-black/60"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Just saying hi!"
                  className="bg-black/40 border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-4 transition-all duration-300 focus:bg-black/60"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Let's talk about..."
                  className="bg-black/40 border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-4 transition-all duration-300 focus:bg-black/60 min-h-[120px]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg w-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              
              {emailSubmitted && (
                <p className="text-green-400 text-sm font-medium animate-pulse">
                  Email sent successfully!
                </p>
              )}
              
              {error && (
                <p className="text-red-400 text-sm font-medium">
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