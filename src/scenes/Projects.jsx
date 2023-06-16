import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">

        </p>
      </div>
      <img src={require(`../assets/${projectTitle}.png`)} alt={projectTitle} />
    </motion.div>
  );
};
{require('./devanshi.jpg')}
const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-purple">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Currently,my projects are based on Frontend Development, UI/UX Design and Graphic design.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <a href=""><div
            className=" image-wrapper flex justify-center text-center items-center p-10 bg-
              max-w-[1200px] max-h-[1200px] text-2xl font-playfair font-semibold bg-darkpurple" 

          >
           <a href="https://github.com/devanshiprasad/react_portfolio" target="blank"> <img src={require("./react.png")}/></a>
           
          </div>
          </a>
          <a href="https://www.behance.net/gallery/162752369/LAUKI-A-UIUX-Case-Study" target="blank"><Project title="Project 1" /></a>
          <a href="https://drive.google.com/drive/folders/1z3ncBWZ8EG5q5uBfPdn5A_DlXorc83A2?usp=sharing" target="blank"><Project title="Project 2" /></a>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
