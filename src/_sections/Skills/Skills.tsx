import { SiHtml5 } from "react-icons/si";
import { BsCss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Skill & Tecnologie
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-gray-200 p-2 rounded flex items-center gap-3">
          <SiHtml5 />
          HTML5
        </div>
        <div className="bg-gray-200 p-4 rounded flex items-center gap-3">
          <BsCss />
          CSS3
        </div>
        <div className="bg-gray-200 p-4 rounded  flex items-center gap-3">
          <IoLogoJavascript />
          JavaScript
        </div>
        <div className="bg-gray-200 p-4 rounded  flex items-center gap-3">
          <SiTypescript />
          TypeScript
        </div>
        <div className="bg-gray-200 p-4 rounded  flex items-center gap-3">
          <FaReact />
          React
        </div>
        <div className="bg-gray-200 p-4 rounded flex items-center gap-3">
          <RiNextjsFill />
          Next.js
        </div>
        <div className="bg-gray-200 p-4 rounded  flex items-center gap-3">
          <FaNodeJs />
          Node.js
        </div>

        <div className="bg-gray-200 p-4 rounded  flex items-center gap-3">
          <FaGithub />
          Git
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div>Frontend</div>
        <div>Tool</div>
        <div>Soft skills</div>
      </div>
    </section>
  );
}
