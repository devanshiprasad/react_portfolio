import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rectangle-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-purple before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-[10] w-full max-w-[200px] md:max-w-[400px]"
              src={require('./devanshi.jpg')}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-[10] w-full max-w-[200px] md:max-w-[400px]"
            src="./devanshi.jpg"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-{10} text-center md:text-start">
            Devanshi {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-{-2} xs:before:content-brush 
              before:absolute before:-left-[250px] before:-top-[150px] before:z-[-3] max-w-[200px] md:max-w-[400px] "
              
            >
              Prasad
            </span>
          </p>

          <p className="mt-10 mb-7 text-md text-center md:text-start xs:text-white">
            <b>Hey! I'm an aspiring CSE student who is passionate about bringing her creative ideas to life through coding. I'm a firm believer in a project-based learning approach, which means that I love to apply what I've learned to real-world projects as soon as possible.</b>
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainpurple text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-purple transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          
            <section className="rounded-r-sm bg-gradient-rainpurple py-0.5 pr-0.5">
            <div className="bg-deep-blue hover:text-yellow transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
             <a href="https://drive.google.com/file/d/19omRqn-xCwBpb0umW6AH7_M4QGUXND_V/view?usp=sharing" target="blank"> Resume</a>
            </div>
            </section>
  
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
