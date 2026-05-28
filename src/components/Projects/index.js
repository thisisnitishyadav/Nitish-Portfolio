import Work from "./work";
import { projects } from "../../constants";
export default function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col justify-center text-center gap-10"
    >
      <div
        className="font-extrabold py-5 mt-10 text-5xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        data-aos={"slide-up"}
        data-aos-duration={"700"}
      >
        Projects
      </div>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg" data-aos={"fade-up"}>
        Explore my latest work including AI-powered solutions, full-stack applications, and innovative SaaS products
      </p>
      <div className="flex flex-wrap flex-row justify-center w-full p-4 gap-12">
        {projects.map((project, ind) => {
          return (
            <div
              key={ind}
              data-aos={"zoom-in-up"}
              data-aos-offset="-5"
              data-aos-delay={ind % 2 === 0 ? "0" : "700"}
              data-aos-duration="2000"
            >
              <Work
                title={project.title}
                desc={project.desc}
                img={project.img}
                link={project.link}
                code={project.code}
                tags={project.tags}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
