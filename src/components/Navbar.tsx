import { useEffect, useState } from "react";
import logo from "./../../public/PhoenixTech.png";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { IoMenu, IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkMode, toggleDarkMode } from "../redux/darkModeSlice";
import { motion } from "framer-motion";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/#about-us" },
  { title: "Services", link: "/#services" },
  { title: "Software", link: "/#software" },
  { title: "Blog", link: "/#blog" },
  { title: "Case Studies", link: "/#case-studies" },
  { title: "Contact us", link: "/#contact-us" },
];

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={` transtion-bg z-40 fixed w-full lg:flex sm:hidden justify-between items-center p-8 text-xsm text-secondary ${
          scroll ? "bg-babyBlue" : ""
        }`}
      >
        <img className="" src={logo} />
        <span className="flex gap-10 font-bold">
          <motion.a
            whileHover={{ x: 5 }}
            transition={{ duration: 0.5 }}
            className={`transtion-text ${scroll? "hover:text-darkBlue":"hover:text-babyBlue"}`}
            href="/"
          >
            Home
          </motion.a>
          <motion.a
            whileHover={{ x: 5 }}
            transition={{ duration: 0.5 }}
            className={`transtion-text ${scroll? "hover:text-darkBlue":"hover:text-babyBlue"}`}
            href="#about-us"
          >
            About Us
          </motion.a>
          <motion.a
            whileHover={{ x: 5 }}
            transition={{ duration: 0.5 }}
            className={`transtion-text ${scroll? "hover:text-darkBlue":"hover:text-babyBlue"}`}
            href="#services"
          >
            Services
          </motion.a>
          <motion.a
            whileHover={{ x: 5 }}
            transition={{ duration: 0.5 }}
            className={`transtion-text ${scroll? "hover:text-darkBlue":"hover:text-babyBlue"}`}
            href="#software"
          >
            Software
          </motion.a>
          <motion.a
            whileHover={{ x: 5 }}
            transition={{ duration: 0.5 }}
            className={`transtion-text ${scroll? "hover:text-darkBlue":"hover:text-babyBlue"}`}
            href="#blog"
          >
            Blog
          </motion.a>
          <motion.a
            whileHover={{ x: 5 }}
            transition={{ duration: 0.5 }}
            className={`transtion-text ${scroll? "hover:text-darkBlue":"hover:text-babyBlue"}`}
            href="#case-studies"
          >
            Case Studies
          </motion.a>
          <motion.a
            whileHover={{ x: 5 }}
            transition={{ duration: 0.5 }}
            className={`transtion-text ${scroll? "hover:text-darkBlue":"hover:text-babyBlue"}`}
            href="#contact-us"
          >
            Contact Us
          </motion.a>
        </span>
        <Switch
          defaultSelected={isDarkMode ? true : false}
          onClick={handleClick}
          size="lg"
          color="secondary"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <SunIcon className={className} />
            ) : (
              <MoonIcon className={className} />
            )
          }
        />
      </div>
      <div className=" fixed z-50 lg:hidden ">
        {!isMenuOpen && (
          <div>
            <IoMenu
              size={50}
              className="fixed top-0 bg-babyBlue rounded-full p-2 m-2 transition-opacity duration-300 hover:opacity-80"
              onClick={() => setIsMenuOpen(true)}
            />
            <Switch
              className="right-0 m-5 fixed"
              defaultSelected={isDarkMode ? true : false}
              onClick={handleClick}
              size="lg"
              color="secondary"
              thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                  <SunIcon className={className} />
                ) : (
                  <MoonIcon className={className} />
                )
              }
            />
          </div>
        )}
        {isMenuOpen && (
          <div
            className={`fixed w-screen h-screen opacity-100 transition-opacity duration-300 ${
              isDarkMode ? "bg-darkBlue" : "bg-secondary"
            }`}
          >
            <IoClose
              className="fixed m-2 right-0 transition-opacity duration-300 hover:opacity-80"
              size={50}
              onClick={() => setIsMenuOpen(false)}
            />
            <span className="flex h-[75vh] gap-5 flex-col justify-center items-center font-black text-md">
              {menuItems.map((item) => (
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href={item.link}
                  className="transition-opacity duration-300 hover:opacity-80"
                >
                  {item.title}
                </a>
              ))}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
