import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-purple">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          A third year undergrad in Vellore Institute of Technology, Bhopal, pursuing B.Tech in Computer Science with specialization in Cloud computing and Automation. 
          </p>
        </motion.div>
        
        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border- before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src={require("./banner.png")}
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="./banner.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Languages/Frameworks
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-purple absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            1.Java <br/> 2.Javascript <br/>3.ReactJS <br/> 4.Python <br/>5.MySQL
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Certifications
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-purple absolute right-0 top-0 z-[-1]"
             img src='./' />
          </div>
          <p className="mt-5">
           1. <a className="azure"href="https://www.credly.com/badges/aa32367f-d172-4adc-9249-097f6174a108/linked_in_profile" target="blank">Microsoft Certified: Azure Fundamentals</a> <br/>
           2. <a className="ux" href="https://www.coursera.org/account/accomplishments/verify/MJEXBUCX8JB6" target="blank"> Foundations of User Experience (UX) Design (Google)</a> <br/>
           3. <a className="design" href="https://www.freecodecamp.org/certification/devanshi_yuh/responsive-web-design"> Responsive Web Design Certification</a>
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Additional Skills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-purple absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          1. Figma <br/>
          2. AWS <br/>
          3. Wireframing <br/>
          4. User Research <br/>
          5. Linux 

          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
