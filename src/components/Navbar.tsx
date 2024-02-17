import { useEffect, useState } from "react";
import logo from "./../../public/PhoenixTech.png";
import { Link, useLocation } from "react-router-dom";
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
        <Link className={`transtion-text hover:text-babyBlue ${isActive("/") ? scroll ? "text-primary" : "text-babyBlue":""}`} to="/">Home</Link>
        <Link className={`transtion-text hover:text-babyBlue ${isActive("/about-us") ?scroll ? "text-primary" : "text-babyBlue":""}`} to="/#about-us">About Us</Link>
        <Link className={`transtion-text hover:text-babyBlue ${isActive("/services")?scroll ? "text-primary" : "text-babyBlue":""}`} to="#services">Services</Link>
        <Link className={`transtion-text hover:text-babyBlue ${isActive("/software")?scroll ? "text-primary" : "text-babyBlue":""}`} to="#software">Software</Link>
        <Link className={`transtion-text hover:text-babyBlue ${isActive("/Blog")?scroll ? "text-primary" : "text-babyBlue":""}`} to="#Blog">Blog</Link>
        <Link className={`transtion-text hover:text-babyBlue ${isActive("/case-studies") ?scroll ? "text-primary" : "text-babyBlue":""}`} to="#case-studies">Case Studies</Link>
        <Link className={`transtion-text hover:text-babyBlue ${isActive("/contact-us") ?scroll ? "text-primary" : "text-babyBlue":""}`} to="#contact-us">Contact Us</Link>
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
