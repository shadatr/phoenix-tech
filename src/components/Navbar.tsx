import { useEffect, useState } from "react";
import logo from "./../../public/PhoenixTech.png";
import {  useLocation } from "react-router-dom";
import { Switch } from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import { SunIcon } from "./SunIcon";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

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
    <div className={`transtion-bg z-40 fixed w-full flex justify-between items-center p-8 text-xsm ${scroll ? "bg-babyBlue" : ""}`}>
      <img className="" src={logo} />
      <span className="flex gap-10 font-bold">
        <a className={`transtion-text hover:text-babyBlue ${isActive("/") ? scroll ? "text-primary" : "text-babyBlue":""}`} href="/">Home</a>
        <a className={`transtion-text ${isActive("/#about-us") ?scroll ? "text-primary" : "text-babyBlue ":""}`} href="/#about-us">About Us</a>
        <a className={`transtion-text ${isActive("/#services")?scroll ? "text-primary" : "text-babyBlue":""}`} href="#services">Services</a>
        <a className={`transtion-text ${isActive("/#software")?scroll ? "text-primary" : "text-babyBlue":""}`} href="#software">Software</a>
        <a className={`transtion-text ${isActive("/#blog")?scroll ? "text-primary" : "text-babyBlue":""}`} href="#Blog">Blog</a>
        <a className={`transtion-text ${isActive("/#case-studies") ?scroll ? "text-primary" : "text-babyBlue":""}`} href="#case-studies">Case Studies</a>
        <a className={`transtion-text ${isActive("/#contact-us") ?scroll ? "text-primary" : "text-babyBlue":""}`} href="#contact-us">Contact Us</a>
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
  );
};

export default Navbar;
