import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";


export default function About() {
  const getDate = () => {
    var dob = new Date("01/21/2003");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };
  return (
    <div
      id="about"
      className="min-h-screen bg-white max-md:mx-4 flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl max-md:text-3xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-row  max-md:flex-col max-md:justify-center max-md:items-center max-md:ml-0  gap-6 ml-8">
        <div className="flex-col  mt-14 max-md:mt-5 flex flex-auto max-md:w-[90%] w-64 gap-6">
          <h3 className="text-3xl max-md:text-2xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">Nitish Yadav,</span> a Web and Software
            Enthusiast
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
           Currently, I am a senior undergraduate at Gurukula Kangri University, Haridwar, pursuing Bachelor of Technology degree in Computer Science and Engineering with a CGPA of 8.8
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            I am currently looking for a Job. My proficiency with JavaScript, HTML, CSS, React.js, Next.js, Node.js, Express.js, and various database technologies like MySQL and MongoDB enabled me to build robust and scalable systems.
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
           My technical skills are complemented by a solid understanding of CI/CD pipelines, Docker, AWS-Cloud, and version control with Git & GitHub, ensuring that I can manage the complete lifecycle of web applications from development to deploymen
          </p>
        </div>

        <div
          class="relative flex-auto w-32 max-md:w-[24rem]   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          
          <button className="py-3 max-md:py-1 max-md:mb-4 max-md:px-4 mt-5 text-white  max-md:text-center mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
               href={require("../../assets/files/Nitish_Yadav_Resume.pdf")}
              download={"Nitish_Yadav_Resume.pdf"}
            >
              Download CV
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
