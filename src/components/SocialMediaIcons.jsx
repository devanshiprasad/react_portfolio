const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/devanshi-prasad/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="mailto: devanshiprasad@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="gmail-link" src={require("./gmail.png")} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/devanshiprasad/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={require('./icons8-github-30.png')}></img>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/wild_rose102/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
