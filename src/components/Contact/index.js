import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import XIcon from '@mui/icons-material/X';



export default function Contact(){ 
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.user_name.trim() || !formData.user_email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...");

    emailjs.sendForm('service_qvlnbpy', 'template_ucjzzxi', form.current, 'qkNSW5PzKSbLZjXlC')
      .then((result) => {
        console.log(result.text);
        toast.dismiss(loadingToast);
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 4000,
          icon: '🚀',
        });
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error.text);
        toast.dismiss(loadingToast);
        toast.error("Failed to send message. Please try emailing directly.", {
          duration: 4000,
        });
      });
  };
  return (
    <div
      id="contact"
      className="flex text-center max-md:mb-10 flex-col gap-12 mt-10 min-h-screen overflow-hidden px-4"
    >
      <div data-aos={"fade-down"}>
        <div className="text-5xl max-md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Let's Connect
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Have a project in mind? Let's build something amazing together
        </p>
      </div>

      <div className="flex flex-row max-md:flex-col gap-8 max-w-7xl mx-auto w-full">
        <div className="flex-1 max-md:w-full" data-aos="fade-right">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="text-left mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>

              <div className="space-y-5">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <PersonIcon className="text-blue-400 text-sm" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <AlternateEmailIcon className="text-purple-400 text-sm" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    required
                    minLength={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <EmailIcon className="text-pink-400 text-sm" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    minLength={10}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hi..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02] font-semibold"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-white flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 max-md:w-full flex flex-col justify-center gap-8" data-aos="fade-left">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-left">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Contact Information
              </span>
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gray-900/30 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <EmailIcon className="text-white text-xl" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400 mb-1">Email me at</p>
                  <a href="mailto:nitishyadav@example.com" className="text-white hover:text-blue-400 transition-colors">
                    thisisnitishyadav@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-900/30 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400 mb-1">Based in</p>
                  <p className="text-white">Haridwar, Uttarakhand, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-900/30 rounded-xl border border-gray-700/30 hover:border-pink-500/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400 mb-1">Response time</p>
                  <p className="text-white">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700/50">
              <p className="text-sm text-gray-400 mb-4 text-left">Connect with me on social media</p>
              <div className="flex gap-4">
                <button
                  onClick={() => window.open("https://github.com/thisisnitishyadav", "_blank")}
                  className="flex-1 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-gray-600 hover:bg-gray-900/80 transition-all duration-300 group"
                >
                  <GitHubIcon className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
                </button>
                <button
                  onClick={() => window.open("https://www.linkedin.com/in/nitish-yadav-68073720b/", "_blank")}
                  className="flex-1 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group"
                >
                  <LinkedInIcon className="text-gray-400 group-hover:text-blue-400 group-hover:scale-110 transition-all" />
                </button>
                <button
                  onClick={() => window.open("https://x.com/thisisnitishydv", "_blank")}
                  className="flex-1 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-gray-600 hover:bg-gray-900/80 transition-all duration-300 group"
                >
                  <XIcon className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>by Nitish Yadav</span>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <CopyrightIcon className="inline text-xs" /> 2026 All rights reserved
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
 };