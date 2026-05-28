import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center py-16">
      <div className="text-5xl max-md:text-4xl font-bold py-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-aos={"slide-down"}>
        Resume
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:mx-4 gap-7 mt-7">
        <ol className="relative border-l border-gray-700 ml-9 mb-6">
        <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="100" className="mt-8">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-gradient-to-r from-purple-600 to-blue-600">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              AI & ML Engineer
            </h3>
            <time className="block mb-2 text-sm font-mono leading-none text-white">
              BeonicX - SaaS & AI Startup
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
              Present
            </time>
            <p className="text-base max-md:text-[14px] font-normal text-gray-400">
              Building innovative AI and ML solutions for BeonicX, a cutting-edge SaaS startup focused on intelligent automation.
            </p>
            <p className="text-base max-md:text-[14px] font-normal text-gray-400">
              Developing and deploying machine learning models, natural language processing systems, and AI-powered features.
            </p>
            <p className="text-base max-md:text-[14px] font-normal text-gray-400">
              <span className="text-purple-400 font-semibold">Tech Stack:</span> Python, TensorFlow, PyTorch, Scikit-learn, OpenAI API, LangChain, Next.js, Node.js, AWS, Docker, Kubernetes.
            </p>
          </li>

        <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300" className="mt-8">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
            Education
            </h3>
            <time className="block mb-2 text-sm font-mono leading-none text-white">
              B.Tech in Computer Science and Engineering
            </time>
            <p className="text-base max-md:text-[14px] font-normal text-gray-400">
              Graduated from Gurukula Kangri University (GFTI), Haridwar with a CGPA of 8.8 through my academic career.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1nb4J5d9jIw8hEEzCzDEQhAaW20dC-6j6/view?usp=sharing"
              className="inline-flex items-center gap-2 px-4 py-2 mt-5 text-sm font-medium border rounded-xl bg-gray-800/50 text-gray-300 border-gray-600 hover:text-white hover:bg-gray-700 hover:border-gray-500 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a>
          </li>
          <li className="mb-10" data-aos="zoom-in" className="mt-8">
            <span className="absolute flex items-center justify-center w-6 h-6   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3  text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns=""
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex text-center items-center mb-1 text-lg font-semibold  text-white max-md:ml-14 ml-28">
            Data Structures and Algorithms
            </h3>
            <time className="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
              Programming in Java & JS
            </time>
            <p className="mb-4 text-base max-md:text-[14px] font-normal  text-gray-400">
            I possess exceptional problem-solving skills, demonstrated through my ability to tackle complex challenges efficiently. With a strong analytical mindset and a track record of innovative solutions, I thrive in finding effective answers to diverse problems..
            </p>
            <a
              href="https://leetcode.com/u/thisisnitishyadav/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-sm font-medium border rounded-xl bg-gray-800/50 text-gray-300 border-gray-600 hover:text-white hover:bg-gray-700 hover:border-gray-500 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns=""
              >
               <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path> 
              </svg>{" "}
              Download Certificate
            </a>
          </li>
         
          <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300" className="mt-8">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            
            <h3 className="mb-1 text-lg font-bold text-white">
               Backend Developer
            </h3>
            <time className="block mb-2 text-sm font-mono leading-none text-white">
             Internship at SharpCareer Technologies
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on Jul 5th, 2024
            </time>
            <p className="text-base max-md:text-[14px] font-normal text-gray-400">
            Team Leader of Full Stack Project and Developed & maintained Backend with MVC architecture using Express Framework.</p>
            <p className="text-base max-md:text-[14px] font-normal text-gray-400">
            Implemented OAuth for authentication and authorization ensuring secure access control ,used FastAPI for building APIs.</p>
              <p className="text-base max-md:text-[14px] font-normal text-gray-400">
            Tools & Techonologies : Node.js, Express.js, MVC, Fast-APIs, OAuth2, MongoDB, Docker, Kubernetes, Jenkins, AWS.</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1RwAPWBlmYVgSN0SGBXgCErb8_FdwkHy2/view?usp=sharing"
              className="inline-flex items-center gap-2 px-4 py-2 mt-5 text-sm font-medium border rounded-xl bg-gray-800/50 text-gray-300 border-gray-600 hover:text-white hover:bg-gray-700 hover:border-gray-500 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a>
          </li>
          <li className="mb-10" data-aos="zoom-out" data-aos-delay="700" className="mt-12">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns=""
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>

            <h3 className="mb-1 text-lg font-semibold text-white">
            Full Stack Web Developer
            </h3>
            <time className="block mb-2 text-sm font-mono leading-none text-white">
             Internship at TechPyro
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on May 30th, 2024
            </time>
            <p className="text-base max-md:text-[14px] font-normal text-gray-400">
            Worked on Front-end development of multiple projects like E-Commerce, Hotel, School Websites.
            </p>
            <p className="text-base max-md:text-[14px] font-normal text-gray-400">
            Worked on Back-end development Building robust and scalable backend systems that power your applications with efficiency.
            </p>
            <p className="text-base max-md:text-[14px] font-normal text-gray-400">
            Frontend Technologies : HTML, CSS, Tailwind-CSS, Material-UI, JavaScript, TypeScript, React.js, Redux, Next.js .
            </p>
            <p className="text-base max-md:text-[14px] font-normal text-gray-400">
            Backend Technologies: Node.js, Express.js, RESTful-API, GraphQL, JWT, SQL(MySQL), NoSQL(MongoDB), Kubernetes.
            </p>
            <p className="text-base max-md:text-[14px] font-normal text-gray-400">
            DevOps Knowledge : CI/CD pipelines, containerization (Docker), AWS-Cloud and version control (Git & Github).
            </p>
            <a
              href="https://drive.google.com/file/d/12O-iJpnghzuYPOsHMEvMqU_BFmg8Y4Nt/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 mt-5 text-sm font-medium border rounded-xl bg-gray-800/50 text-gray-300 border-gray-600 hover:text-white hover:bg-gray-700 hover:border-gray-500 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a>
          </li>
          
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">My Skills</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-purple-400 mb-4 text-left">AI & ML</h4>
              <div className="flex flex-col gap-4">
                <BarGraph name={"Python"} percent={85} />
                <BarGraph name={"TensorFlow"} percent={80} />
                <BarGraph name={"PyTorch"} percent={75} />
                <BarGraph name={"Machine Learning"} percent={85} />
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-blue-400 mb-4 text-left">Full Stack Development</h4>
              <div className="flex flex-col gap-4">
                <BarGraph name={"JavaScript"} percent={90} />
                <BarGraph name={"ReactJs"} percent={90} />
                <BarGraph name={"NextJs"} percent={90} />
                <BarGraph name={"NodeJs"} percent={85} />
                <BarGraph name={"ExpressJs"} percent={85} />
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-green-400 mb-4 text-left">Database & Cloud</h4>
              <div className="flex flex-col gap-4">
                <BarGraph name={"MongoDB"} percent={85} />
                <BarGraph name={"MySQL"} percent={70} />
                <BarGraph name={"AWS"} percent={75} />
                <BarGraph name={"Docker"} percent={80} />
              </div>
            </div>
          </div>

          <a
            href='https://drive.google.com/file/d/1kSHa5Fz6HUmWqewyKxAxm3zb0ws3uCsp/view'
            download={"Nitish_Yadav_Resume"}
            className="group relative inline-flex items-center gap-2 px-8 py-3 mt-12 mx-auto w-fit text-base font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 text-white"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Download CV
              <DownloadIcon className="group-hover:animate-bounce" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
