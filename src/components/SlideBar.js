import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import XIcon from '@mui/icons-material/X';

export default function Slidebar() {
  const [select, setSelect] = useState(0);
  return (
    <div className="flex-none  bg-black h-screen max-md:h-auto max-md:py-7 min-w-[25%] max-md:relative max-md:min-w-[100%]  max fixed ">
      <div className="nav flex text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-5 overflow-hidden">
        <div data-aos="slide-down">
          <img
            src={require("../assets/images/image-2.png")}
            alt="Nitish Yadav"
            className="rounded-full border-solid cursor-pointer border-[8px] border-stone-600 min-h-fit  mx-auto max-md:w-[140px]  max-w-[190px]"
          />
          <h3 className="text-white name py-4 font-medium ">
            Nitish Yadav
          </h3>
        </div>
        <p
          onClick={() => setSelect(0)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 0 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="200"
        >
          <a href="/#">Home</a>
        </p>
        <p
          onClick={() => setSelect(1)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 1 ? "text-blue-600 " : ""
          }`}
          data-aos-delay="600"
          data-aos="slide-left"
        >
          <a href="#about"> About Me</a>
        </p>
        <p
          onClick={() => setSelect(2)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 2 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="1000"
        >
          <a href="#resume">Resume</a>
        </p>
        <p
          onClick={() => setSelect(3)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 3 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-left"
          data-aos-delay="1400"
        >
          <a href="#projects">Projects</a>
        </p>
        <p
          onClick={() => setSelect(4)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 4 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="1800"
        >
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div
        className="text-white flex flex-row gap-5 w-fit mx-auto pt-7"
        data-aos="slide-up"
        data-aos-delay="2300"
      >
        <div
                onClick={() =>
                  window.open("https://github.com/thisisnitishyadav", "_blank")
                }
              >
                <GitHubIcon className="cursor-pointer hover:scale-105" />
              </div>
              <div
                onClick={() =>
                  window.open("https://www.linkedin.com/in/nitish-yadav-68073720b/", "_blank")
                }
              >
                <LinkedInIcon className="cursor-pointer hover:scale-105" />
              </div>
              <div
                onClick={() =>
                  window.open("https://x.com/iamny_05", "_blank")
                }
              >
                <XIcon className="cursor-pointer hover:scale-105" />
              </div>
            
      </div>
    </div>
  );
}
