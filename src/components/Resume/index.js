import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Resume
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:mx-4 gap-7 mt-7">
        <ol class="relative border-l  border-gray-700 ml-9 mb-6">
        <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300" className="mt-8">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
            Education
            </h3>
            <time class="block mb-2 text-sm font-mono leading-none text-white">
              B.Tech in Computer Science and Enginnering
            </time>
            <p class="text-base max-md:text-[14px] font-normal text-gray-400">
            <ul class="">
  <li>Senior undergraduate at Gurukula Kangri University, Haridwar</li>
  <li>Maintained GPA of 8.8 through my academic career.</li>
  <li></li>
</ul>

            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/15yV3X1rAcQVqSDcoH7g4RvieD4EYpEXI/view?google_abuse=GOOGLE_ABUSE_EXEMPTION%3DID%3Db7713712b1b126a1:TM%3D1694001629:C%3Dr:IP%3D2409:4085:809e:9820:95df:7550:2dbe:d67c-:S%3D6KBlF5dM4z9XY8ok4xfou9c%3B+path%3D/%3B+domain%3Dgoogle.com%3B+expires%3DWed,+06-Sep-2023+15:00:29+GMT"
              class="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a>
          </li>
          <li class="mb-10" data-aos="zoom-in" className="mt-8">
            <span class="absolute flex items-center justify-center w-6 h-6   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3  text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns=""
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="flex text-center items-center mb-1 text-lg font-semibold  text-white max-md:ml-14 ml-28">
            Data Structures and Algorithms
            </h3>
            <time class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
              Completed on July 7th, 2023
            </time>
            <p class="mb-4 text-base max-md:text-[14px] font-normal  text-gray-400">
            I possess exceptional problem-solving skills, demonstrated through my ability to tackle complex challenges efficiently. With a strong analytical mindset and a track record of innovative solutions, I thrive in finding effective answers to diverse problems..
            </p>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns=""
              >
               <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                ></path> 
              </svg>{" "}
              Download Certificate
            </a>
          </li>
         
          <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300" className="mt-8">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            
            <h3 class="mb-1 text-lg font-semibold text-white" className="">
            Internship at Techpyro
            </h3>
            <time class="block mb-2 text-sm font-mono leading-none text-white">
              Trainee-Web Developer
            </time>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on May 28th, 2024
            </time>
            <p class="text-base max-md:text-[14px] font-normal text-gray-400">
            Worked on Front-end development of multiple projects like E-Commerce, Hotel, School Websites.</p>
            <p class="text-base max-md:text-[14px] font-normal text-gray-400">
              Crafted the UI and UX to ensure a visually appealing and responsive design and built the backend APIs </p>
              <p class="text-base max-md:text-[14px] font-normal text-gray-400">
              Working on Back-end development Building robust and scalable backend systems that power your applications with efficiency</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/15yV3X1rAcQVqSDcoH7g4RvieD4EYpEXI/view?google_abuse=GOOGLE_ABUSE_EXEMPTION%3DID%3Db7713712b1b126a1:TM%3D1694001629:C%3Dr:IP%3D2409:4085:809e:9820:95df:7550:2dbe:d67c-:S%3D6KBlF5dM4z9XY8ok4xfou9c%3B+path%3D/%3B+domain%3Dgoogle.com%3B+expires%3DWed,+06-Sep-2023+15:00:29+GMT"
              class="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a>
          </li>
          <li class="mb-10" data-aos="zoom-out" data-aos-delay="700" className="mt-12">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns=""
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
            MERN Stack Developer
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on  28th, 2024
            </time>
            <p class="text-base max-md:text-[14px] font-normal text-gray-400">
            I'm actively engaged in expanding my skill set in frontend development by exploring various libraries. I'm proficient in JavaScript, React.js, and Next.js, and I specialize in API integration. On the backend, I'm honing my expertise in Node.js, Express, and MongoDB, consistently creating diverse projects to enhance my knowledge.
            </p>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a>
          </li>
          {/* <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300" className="mt-8">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
            Working On Techpyro
            </h3>
            <time class="block mb-2 text-sm font-mono leading-none text-white">
              Web Developer
            </time>
            <p class="text-base max-md:text-[14px] font-normal text-gray-400">
            As a Web Developer at TechPyro, I craft dynamic and visually engaging websites using cutting-edge technologies. I collaborate with cross-functional teams, ensuring seamless integration and delivering high-quality web experiences.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/15yV3X1rAcQVqSDcoH7g4RvieD4EYpEXI/view?google_abuse=GOOGLE_ABUSE_EXEMPTION%3DID%3Db7713712b1b126a1:TM%3D1694001629:C%3Dr:IP%3D2409:4085:809e:9820:95df:7550:2dbe:d67c-:S%3D6KBlF5dM4z9XY8ok4xfou9c%3B+path%3D/%3B+domain%3Dgoogle.com%3B+expires%3DWed,+06-Sep-2023+15:00:29+GMT"
              class="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a>
          </li> */}
         
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">My Skills</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <BarGraph name={"JavaScript"} percent={85} />
            <BarGraph name={"React"} percent={80} />
            <BarGraph name={"Tailwind-CSS"} percent={90} />
            <BarGraph name={"Java"} percent={75} />
            <BarGraph name={"C++"} percent={70} />
            <BarGraph name={"NextJs"} percent={80} />
            <BarGraph name={"MangoDB"} percent={85} />
            <BarGraph name={"ExpressJs"} percent={70} />
            <BarGraph name={"HTML/CSS"} percent={85} />
            <BarGraph name={"SQL"} percent={65} />
            <BarGraph name={"DBMS"} percent={60} />
          </div>

          <a
            //  href={require("../../assets/files/Nitish_Yadav_Resume")}
            download={"Nitish_Yadav_Resume"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
