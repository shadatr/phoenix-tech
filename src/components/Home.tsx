import ImageSlider from "./ImageSlider";
import Reveal from "./Reveal";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { HoverEffect } from "./ui/card-hover-effect";
import Card from "./Card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "../redux/darkModeSlice";

const card = [
  {
    title: "",
    logo: "./../../programmer.png",
    link: "",
    description:
      "Our vision is to become the leading provider of innovative software services, recognized for our unwavering dedication to quality, creativity, and customer success. ",
    width: "500",
  },
  {
    title: "",
    logo: "./../../cms.png",
    link: "",
    description:
      "Guided by a mission to deliver exceptional value through technology, we strive to exceed expectations at every turn, leveraging our expertise, experience,  and passion for innovation to drive meaningful results for our clients and partners alike.",
    width: "500",
  },
];

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const blogs = [
  {
    title: "The importance of store layout optimization",
    quote:
      "Exciting News! Store Layout Optimization - A Key to Retail Success - In the ever-evolving world of retail, the layout of your store plays a pivotal role in shaping customer experiences and driving business growth.",
    image: "./../../layout-optimization.png",
    link: "layout-optimization",
  },
  {
    title: "How to Use Analytics to gain a competitive advantage.",
    quote:
      "Retailers can achieve a #competitive #advantage through analytics by leveraging data-driven insights to make more informed decisions, optimize various aspects of their operations, and enhance the overall customer experience.",
    image: "./../../analytics.jpeg",
    link: "analytics",
  },
  {
    title: "Key strategies for optimizing shelf space.",
    quote:
      "Attention all retailers! Optimizing shelf space is crucial for you and your team as it directly impacts product visibility, customer experience, and sales performance. ",
    image: "./../../strategies.jpeg",
    link: "strategies",
  },
  {
    title: "Curated careers at Analyticsmart.",
    quote:
      "Curated careers refer to career paths that have been intentionally designed and customized to align with an individual's strengths, interests, values, and goals.",
    image: "./../../analyticsmart.jpeg",
    link: "analyticsmart",
  },
];

const Home = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <div className="w-screen">
      <ImageSlider />
      <div id="about-us" className="lg:p-20 sm:p-5">
        <Reveal className="text-babyBlue lg:text-md sm:text-xsm">•About Us•</Reveal>
        <Reveal className="lg:text-xxlg sm:text-xmd font-bold">Our Vision and Mission</Reveal>
        <Reveal>
          <HoverEffect
            items={card}
            className="lg:flex items-center justify-center lg:h-[400px] w-full"
          />
        </Reveal>
        <Reveal className="lg:text-xxlg sm:text-xmd  font-bold ">Engaging Content</Reveal>
        <Reveal className="py-10 lg:text-sm sm:text-xsm">
          Embark on a journey of discovery as you explore our website and
          uncover the endless possibilities of software-driven transformation.
          From thought-provoking insights to inspiring success stories, we
          invite you to immerse yourself in our world of innovation, creativity,
          and collaboration. Whether you're a startup with big dreams or an
          established enterprise seeking a competitive edge, we have the
          solutions and expertise to help you thrive in today's digital economy.
        </Reveal>
        <Reveal className="lg:text-xxlg sm:text-xmd font-bold ">Meet Our Team</Reveal>
        <div className="flex sm:flex-col lg:flex-row lg:py-10 items-center justify-center lg:gap-40 sm:gap-10">
          <Reveal>
            <div className="flex flex-row items-center justify-center lg:mb-10 w-full ">
              <AnimatedTooltip items={people} />
            </div>
          </Reveal>
          <Card className="lg:w-[600px] sm:w-full lg:text-sm sm:text-xsm">
            Behind every successful project is a team of dedicated professionals
            committed to excellence. Meet the talented individuals who make up
            our team, each bringing a unique blend of skills, expertise, and
            creativity to the table. From developers and designers to project
            managers and strategists, our team is united by a shared passion for
            technology and a relentless commitment to delivering exceptional
            results for our clients.
          </Card>
        </div>
      </div>
      <div id="services" className="lg:p-20 sm:p-5 ">
        <Reveal className="text-babyBlue  lg:text-md sm:text-xsm">•Services•</Reveal>
        <Reveal className="lg:text-xxlg sm:text-xmd  font-bold">Services we offer</Reveal>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 pt-5">
          <Link to="/services/category-management">
            <Card className="gap-3 flex flex-col items-center justify-center">
              <img src="./../../categories.png" width={"80px"} />
              <p className="lg:text-lg sm:text-md font-bold">Category Management</p>
              <p className="lg:text-sm sm:text-xsm">Increase sales by defining category.</p>
              <p className="font-medium">Learn more →</p>
            </Card>
          </Link>
          <Link to="/services/dashboards">
            <Card className="gap-3 flex flex-col items-center justify-center">
              <img src="./../../monitor.png" width={"80px"} />
              <p className="lg:text-lg sm:text-md font-bold">Dashboards</p>
              <p className="lg:text-sm sm:text-xsm">Interactive insights in real-time.</p>
              <p className="font-medium">Learn more →</p>
            </Card>
          </Link>
          <Link to="/services/data-modernization">
            <Card className="gap-3 flex flex-col items-center justify-center">
              <img src="./../../data-analytics.png" width={"80px"} />
              <p className="lg:text-lg sm:text-md font-bold">Data Modernization</p>
              <p className="lg:text-sm sm:text-xsm">Cloud-based data processing at lightning speed.</p>
              <p className="font-medium">Learn more →</p>
            </Card>
          </Link>
          <Link to="/services/planograms">
            <Card className="gap-3 flex flex-col items-center justify-center">
              <img src="./../../planogram.png" width={"80px"} />
              <p className="lg:text-lg sm:text-md font-bold">Planograms</p>
              <p className="lg:text-sm sm:text-xsm">End-to-end automated planograms execution.</p>
              <p className="font-medium">Learn more →</p>
            </Card>
          </Link>
        </div>
      </div>
      <div id="software" className="lg:p-20 sm:p-5">
        <Reveal className="text-babyBlue lg:text-md sm:text-xsm">•SOFTWARE•</Reveal>
        <Reveal className="lg:text-xxlg sm:text-xmd font-bold">Software we offer</Reveal>
        <div className="flex sm:flex-col lg:flex-row gap-3 pt-10">
          <Reveal className="">
            <img src="./../../software-chart.png" className="lg:w-[600px] sm:w-[350px]" />
          </Reveal>
          <div className="flex flex-col gap-4 lg:w-[600px] sm:w-full">
            <Link to="/software/merchandising-app">
              <Card className="gap-3 flex flex-col ">
                <img src="./../../shopping-cart.png" className="lg:w-[80px] sm:w-[50px]"/>
                <p className="lg:text-lg sm:text-xmd font-bold">Merchandising App</p>
                <p className="lg:text-sm sm:text-xsm">Digital planogram application with AI.</p>
                <p className="font-medium">Learn more →</p>
              </Card>
            </Link>
            <Link to="/software/crm-for-cpg">
              <Card className="gap-3 flex flex-col ">
                <img src="./../../group.png" className="lg:w-[80px] sm:w-[50px]"/>
                <p className="lg:text-lg sm:text-xmd font-bold">CRM For CPG</p>
                <p className="lg:text-sm sm:text-xsm">Mobile app to drive sales in realtime.</p>
                <p className="font-medium">Learn more →</p>
              </Card>
            </Link>
            <Link to="/software/hris">
              <Card className="gap-3 flex flex-col ">
                <img src="./../../software.png" className="lg:w-[80px] sm:w-[50px]"/>
                <p className="lg:text-lg sm:text-xmd font-bold">HRIS</p>
                <p className="lg:text-sm sm:text-xsm">Simolify and enhance yout HR operations.</p>
                <p className="font-medium">Learn more →</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
      <div id="case-studies" className="lg:p-20 sm:p-10">
        <Reveal className="text-babyBlue text-md">•CASE STUDIES•</Reveal>
        <Reveal className="lg:text-xxlg sm:text-xmd  font-bold">Buisness Cases</Reveal>
        <div className="flex w-full justify-between pt-5">
          <div className="flex lg:flex-row sm:flex-col gap-5">
            <Reveal>
              <motion.div whileHover={{ y: 10 }} transition={{ duration: 0.5 }}>
                <Link
                  to="./case-studies/grocer"
                  className={`lg:w-[450px] lg:h-[370px] sm:w-[350px] sm:h-[300px] flex flex-col rounded-lg overflow-hidden ${isDarkMode?"bg-medBlue text-secondary":"bg-secondary text-primary shadow-lg"}`}
                >
                  <img
                    src="./../../canadian_banner.jpeg"
                    className="rounded-t-lg w-full h-full transition-transform duration-500 transform-gpu hover:scale-110"
                  />
                  <div className="py-4 px-6 flex flex-col gap-2 ">
                    <p className="lg:text-md sm:text-sm font-black hover:text-babyBlue">
                      Case-study | Canadian Grocer
                    </p>
                    <p className="lg:text-sm sm:text-xxsm">
                      The Canadian grocer has been increasing its store count
                      across Canada using older technology. As new stores were
                      added and growth continued, ...
                    </p> 
                    <p className="font-medium hover:text-babyBlue lg:text-sm sm:text-xsm">
                      Learn more →
                    </p>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
            <Reveal>
              <motion.div whileHover={{ y: 10 }} transition={{ duration: 0.5 }}>
                <Link
                  to="./case-studies/alcohol"
                  className={`lg:w-[450px] lg:h-[370px] sm:w-[350px] sm:h-[300px] flex flex-col rounded-lg overflow-hidden ${isDarkMode?"bg-medBlue text-secondary":"bg-secondary text-primary shadow-lg"}`}
                >
                  <img
                    src="./../../alcohol_banner.jpeg"
                    className="rounded-t-lg w-full h-full transition-transform duration-500 transform-gpu hover:scale-110"
                  />
                  <div className="py-4 px-6 flex flex-col gap-2 ">
                  <p className="lg:text-md sm:text-sm font-black hover:text-babyBlue">
                      Case Study | Client in the alcohol beverage industry.
                    </p>
                    <p className="lg:text-sm sm:text-xxsm">
                      The client is mandated to enhance revenue and
                      profitability at the retail level, ...
                    </p>
                    <p className="font-medium hover:text-babyBlue lg:text-sm sm:text-xsm">
                      Learn more →
                    </p>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          </div>
          
        </div>
      </div>
        <div id="blog" className="lg:p-20 sm:p-10">
        <Reveal className="text-babyBlue text-md">•BLOG•</Reveal>
        <Reveal className="lg:text-xxlg sm:text-xmd font-bold">Latest news</Reveal>
        <Reveal>
          <div className=" rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards items={blogs} direction="right" speed="slow"  />
          </div>
        </Reveal>
        </div>
        <div className="flex w-full items-center justify-center lg:p-20 sm:p-10 lg:text-xxlg sm:text-md font-extrabold bg-babyBlue text-secondary">
        Drive Growth and Profitability
        </div>
    </div>
  );
};

export default Home;
