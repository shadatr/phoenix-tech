import logo from "./../../public/PhoenixTech.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="lg:px-20 lg:py-40 sm:px-8 sm:py-8 flex gap-2 sm:flex-col lg:flex-row justify-between" id="contact-us">
      <span className="flex flex-col gap-5">
        <img src={logo} className="lg:w-[200px] sm:w-[100px]"/>
        <span>
          <input
            placeholder="Email Address"
            className="lg:p-5 sm:p-2 lg:w-[300px] sm:w-[150px] rounded-l-lg"
          />
          <button className="bg-babyBlue text-secondary lg:p-5 sm:p-2 rounded-r-lg focus:outline-none">
            Subscribe
          </button>
        </span>
      </span>
      <span className="lg:text-xsm sm:text-xxsm flex flex-col gap-2">
        <h1 className="font-bold text-md">Software</h1>
        <Link to="/software/merchandising-app">
          <motion.p whileHover={{ x: 10 }} transition={{ duration: 0.5 }}>
            → Merchandising App
          </motion.p>
        </Link>
        <Link to="/software/hris">
          <motion.p whileHover={{ x: 10 }} transition={{ duration: 0.5 }}>
            → HRIS
          </motion.p>
        </Link>
        <Link to="/software/crm-for-cpg">
          <motion.p whileHover={{ x: 10 }} transition={{ duration: 0.5 }}>
            → CRM For CPG
          </motion.p>
        </Link>
      </span>
      <span className="lg:text-xsm sm:text-xxsm  flex flex-col gap-2">
        <h1 className="font-bold text-md">Services</h1>
        <Link to="/services/dashboards">
          <motion.p whileHover={{ x: 10 }} transition={{ duration: 0.5 }}>
            → Dashboards
          </motion.p>
        </Link>
        <Link to="/services/data-modernization">
          <motion.p whileHover={{ x: 10 }} transition={{ duration: 0.5 }}>
            → Data Modernization
          </motion.p>
        </Link>
        <Link to="/services/planograms">
          <motion.p whileHover={{ x: 10 }} transition={{ duration: 0.5 }}>
            → Planograms
          </motion.p>
        </Link>
        <Link to="/services/category-management">
          <motion.p whileHover={{ x: 10 }} transition={{ duration: 0.5 }}>
            → Category Management
          </motion.p>
        </Link>
      </span>
      <span className="lg:text-xsm sm:text-xxsm  flex flex-col gap-2">
        <h1 className="font-bold text-md">Contact Information</h1>
        <p>171 East Liberty Street, Unit 301, Toronto, ON M6K 3P6</p>
        <p>360 St Jacques St, Montreal, Quebec H2Y 1P5</p>
        <p>136 Madison Ave, New York, NY 10016, USA</p>
        <p>(+1) 677-768-7874</p>
      </span>
    </div>
  );
};

export default Footer;
