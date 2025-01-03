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
  <li>Graduated at Gurukula Kangri University (GFTI), Haridwar</li>
  <li>With GPA of 8.8 through my academic career.</li>
  <li></li>
</ul>

            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1nb4J5d9jIw8hEEzCzDEQhAaW20dC-6j6/view?usp=sharing"
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
              Programming in Java & JS
            </time>
            <p class="mb-4 text-base max-md:text-[14px] font-normal  text-gray-400">
            I possess exceptional problem-solving skills, demonstrated through my ability to tackle complex challenges efficiently. With a strong analytical mindset and a track record of innovative solutions, I thrive in finding effective answers to diverse problems..
            </p>
            <a
              href="https://leetcode.com/u/thisisnitishyadav/"
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
            
            <h3 class="mb-1 text-lg font-bold text-white" className="">
               Backend Developer  
            </h3>
            <time class="block mb-2 text-sm font-mono leading-none text-white">
             Internship at SharpCareer Technologies
            </time>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on Jul 5th, 2024
            </time>
            <p class="text-base max-md:text-[14px] font-normal text-gray-400">
            Team Leader of Full Stack Project and Developed & maintained Backend with MVC architecture using Express Framework.</p>
            <p class="text-base max-md:text-[14px] font-normal text-gray-400">
            Implemented OAuth for authentication and authorization ensuring secure access control ,used FastAPI for building APIs.</p>
              <p class="text-base max-md:text-[14px] font-normal text-gray-400">
            Tools & Techonologies : Node.js, Express.js, MVC, Fast-APIs, OAuth2, MongoDB, Docker, Kubernetes, Jenkins, AWS.</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1RwAPWBlmYVgSN0SGBXgCErb8_FdwkHy2/view?usp=sharing"
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
            Full Stack Web Developer
            </h3>
            <time class="block mb-2 text-sm font-mono leading-none text-white">
             Internship at TechPyro
            </time>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on May 30th, 2024
            </time>
            <p class="text-base max-md:text-[14px] font-normal text-gray-400">
            Worked on Front-end development of multiple projects like E-Commerce, Hotel, School Websites.
            </p>
            <p class="text-base max-md:text-[14px] font-normal text-gray-400">
            Worked on Back-end development Building robust and scalable backend systems that power your applications with efficiency.
            </p>
            <p class="text-base max-md:text-[14px] font-normal text-gray-400">
            Frontend Technologies : HTML, CSS, Tailwind-CSS, Material-UI, JavaScript, TypeScript, React.js, Redux, Next.js .
            </p>
            <p class="text-base max-md:text-[14px] font-normal text-gray-400">
            Backend Technologies: Node.js, Express.js, RESTful-API, GraphQL, JWT, SQL(MySQL), NoSQL(MongoDB), Kubernetes.
            </p>
            <p class="text-base max-md:text-[14px] font-normal text-gray-400">
            DevOps Knowledge : CI/CD pipelines, containerization (Docker), AWS-Cloud and version control (Git & Github).
            </p>
            <a
              href="https://drive.google.com/file/d/12O-iJpnghzuYPOsHMEvMqU_BFmg8Y4Nt/view?usp=sharing"
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
          
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">My Skills</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <BarGraph name={"Java"} percent={75} />
            <BarGraph name={"JavaScript"} percent={85} />
            <BarGraph name={"Python"} percent={75} />
            <BarGraph name={"ReactJs"} percent={90} />
            <BarGraph name={"NextJs"} percent={90} />
            <BarGraph name={"NodeJs"} percent={80} />
            <BarGraph name={"ExpressJs"} percent={80} />
            <BarGraph name={"HTML/CSS"} percent={95} />
            <BarGraph name={"MangoDB"} percent={85} />
            <BarGraph name={"mySQL"} percent={65} />
            <BarGraph name={"AWS"} percent={70} />
          </div>

          <a
            href='https://drive.google.com/file/d/1kSHa5Fz6HUmWqewyKxAxm3zb0ws3uCsp/view'
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
