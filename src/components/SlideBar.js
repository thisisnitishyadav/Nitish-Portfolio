import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import XIcon from '@mui/icons-material/X';

export default function Slidebar() {
  const [select, setSelect] = useState(0);

  const navItems = [
    { id: 0, label: "Home", href: "/#", icon: "🏠" },
    { id: 1, label: "About", href: "#about", icon: "👤" },
    { id: 2, label: "Resume", href: "#resume", icon: "📄" },
    { id: 3, label: "Projects", href: "#projects", icon: "💼" },
    { id: 4, label: "Contact", href: "#contact", icon: "📧" },
  ];

  return (
    <div className="flex-none bg-gradient-to-br from-gray-900 via-black to-gray-900 h-screen max-md:h-auto max-md:py-7 min-w-[25%] max-md:relative max-md:min-w-[100%] fixed left-0 top-0 border-r border-gray-800 backdrop-blur-sm overflow-y-auto z-50">
      <div className="nav flex text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-2 overflow-hidden px-6">
        <div data-aos="slide-down" className="mb-8">
          <div className="relative w-fit mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <img
              src={require("../assets/images/image-2.png")}
              alt="Nitish Yadav"
              className="relative rounded-full border-4 border-gray-700 cursor-pointer hover:border-purple-500 transition-all duration-300 min-h-fit mx-auto max-md:w-[140px] max-w-[190px] hover:scale-105"
            />
          </div>
          <h3 className="text-white name py-4 font-semibold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Nitish Yadav
          </h3>
          <p className="text-sm text-gray-400">AI & ML Engineer</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">Available for work</span>
          </div>
        </div>

        <div className="space-y-2">
          {navItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelect(item.id)}
              className={`group relative cursor-pointer transition-all duration-300 ${
                select === item.id ? "" : ""
              }`}
              data-aos={index % 2 === 0 ? "slide-right" : "slide-left"}
              data-aos-delay={200 + index * 400}
            >
              <a href={item.href}>
                <div
                  className={`relative px-6 py-3 rounded-xl transition-all duration-300 ${
                    select === item.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-500/50"
                      : "hover:bg-gray-800/50"
                  }`}
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span
                      className={`font-medium ${
                        select === item.id ? "text-white" : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {select === item.id && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 px-6">
        <div
          className="flex flex-row gap-4 w-fit mx-auto"
          data-aos="slide-up"
          data-aos-delay="2300"
        >
          <button
            onClick={() => window.open("https://github.com/thisisnitishyadav", "_blank")}
            className="p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 group"
          >
            <GitHubIcon className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
          </button>
          <button
            onClick={() => window.open("https://www.linkedin.com/in/nitish-yadav-68073720b/", "_blank")}
            className="p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group"
          >
            <LinkedInIcon className="text-gray-400 group-hover:text-blue-400 group-hover:scale-110 transition-all" />
          </button>
          <button
            onClick={() => window.open("https://x.com/iamny_05", "_blank")}
            className="p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 group"
          >
            <XIcon className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
}
