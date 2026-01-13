import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";

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
      const emailData = {
        service_id: "service_whbu41x",
        template_id: "template_eemjtfo",
        user_id: "FQum9PTHvXCdcSIHv",
        template_params: {
          from_name: data.email,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
      };

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );

      if (response.ok) {
        setEmailSubmitted(true);
        e.target.reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setError("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 relative">
      <div className="container-custom">
        <div className="flex flex-col mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.5em] font-black text-white/20 mb-4"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black tracking-tighter"
          >
            Let's start <br />
            <span className="text-white/20">something new.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="text-2xl font-light text-white/40 leading-relaxed max-w-md mb-12">
              Currently accepting new projects and consulting opportunities.
              Usually responds within 24 hours.
            </p>

            <div className="space-y-12">
              <div className="flex flex-col gap-10">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-4">
                    Freelance
                  </h4>
                  <a
                    href="mailto:pra9v@proton.me"
                    className="text-xl md:text-2xl font-light hover:text-white transition-colors border-b border-white/5 pb-2 block w-fit"
                  >
                    pra9v@proton.me
                  </a>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-4">
                    Corporate
                  </h4>
                  <a
                    href="mailto:nagapranav.m@gmail.com"
                    className="text-xl md:text-2xl font-light hover:text-white transition-colors border-b border-white/5 pb-2 block w-fit"
                  >
                    nagapranav.m@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-6">
                  Socials
                </h4>
                <div className="flex gap-8">
                  {[
                    { icon: Github, url: "https://github.com/prannav225" },
                    {
                      icon: Linkedin,
                      url: "https://linkedin.com/in/prannav-m",
                    },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/40 hover:text-white transition-all transform hover:-translate-y-1"
                    >
                      <social.icon size={28} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {emailSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center p-12 bg-white/2 border border-white/5 rounded-3xl text-center">
                <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mb-8">
                  <Send size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-4">Message Sent</h3>
                <p className="text-white/40 mb-8">
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setEmailSubmitted(false)}
                  className="text-sm font-bold tracking-[0.2em] uppercase border-b border-white/20 pb-1 hover:border-white transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20 mb-4 block">
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-white/2 backdrop-blur-3xl border border-white/5 rounded-2xl p-6 text-xl font-light focus:outline-hidden focus:border-white/20 focus:bg-white/5 transition-all placeholder:text-white/10"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20 mb-4 block">
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      required
                      className="w-full bg-white/2 backdrop-blur-3xl border border-white/5 rounded-2xl p-6 text-xl font-light focus:outline-hidden focus:border-white/20 focus:bg-white/5 transition-all placeholder:text-white/10"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20 mb-4 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/2 backdrop-blur-3xl border border-white/5 rounded-2xl p-6 text-xl font-light focus:outline-hidden focus:border-white/20 focus:bg-white/5 transition-all resize-none placeholder:text-white/10"
                    placeholder="Describe your project"
                  />
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex items-center gap-6 disabled:opacity-50"
                  >
                    <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      {loading ? (
                        <Loader2 size={24} className="animate-spin" />
                      ) : (
                        <Send size={24} />
                      )}
                    </div>
                    <div>
                      <span className="text-sm font-bold tracking-[0.3em] uppercase block mb-1">
                        Send Inquiry
                      </span>
                      <span className="text-[10px] text-white/20 uppercase tracking-widest font-mono">
                        Response within 24h
                      </span>
                    </div>
                  </button>
                </div>
                {error && (
                  <p className="text-red-400 text-sm italic">{error}</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
