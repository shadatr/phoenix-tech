import { useEffect, useState } from "react";
import logo from "./../../public/PhoenixTech.png";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { IoMenu, IoClose } from "react-icons/io5";

const menuItems = [
  {title:"Home", link:"/"},
  {title:"About Us", link:"/#about-us"},
  {title:"Services", link:"/#services"},
  {title:"Software", link:"/#software"},
  {title:"Blog", link:"/#blog"},
  {title:"Case Studies", link:"/#case-studies"},
  {title:"Contact us", link:"/#contact-us"},
];

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div >
      <div
        className={`transtion-bg z-40 fixed w-full lg:flex sm:hidden justify-between items-center p-8 text-xsm ${
          scroll ? "bg-babyBlue" : ""
        }`}
      >
        <img className="" src={logo} />
        <span className="flex gap-10 font-bold">
          <a className={`transtion-text`} href="/">
            Home
          </a>
          <a className={`transtion-text`} href="#about-us">
            About Us
          </a>
          <a className={`transtion-text`} href="#services">
            Services
          </a>
          <a className={`transtion-text`} href="#software">
            Software
          </a>
          <a className={`transtion-text`} href="#blog">
            Blog
          </a>
          <a className={`transtion-text`} href="#case-studies">
            Case Studies
          </a>
          <a className={`transtion-text`} href="#contact-us">
            Contact Us
          </a>
        </span>
        <Switch
          defaultSelected
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
      <div className=" fixed z-50  ">
        {!isMenuOpen && <IoMenu size={50} className="fixed  bg-darkBlue rounded-full p-2 m-2 transition-opacity duration-300 hover:opacity-80" onClick={() => setIsMenuOpen(true)} />}
        {isMenuOpen && (
          <div className="fixed w-screen h-screen bg-darkBlue opacity-100 transition-opacity duration-300">
            <IoClose className="fixed m-2 transition-opacity duration-300 hover:opacity-80" size={50} onClick={() => setIsMenuOpen(false)}/>
            <span className="flex h-[75vh] gap-5 flex-col justify-center items-center font-black text-md">
            {menuItems.map((item)=> <a onClick={() => setIsMenuOpen(false)} href={item.link} className="transition-opacity duration-300 hover:opacity-80">{item.title}</a>)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
