import { useParams } from "react-router-dom";
import Card from "./Card";
import Reveal from "./Reveal";

const information = [
  {
    id: "merchandising-app",
    title: "Merchandising App",
    image: "merchandising-app.jpeg",
    begginning:
      "An industry-leading tool: Your solution for compliance, speed, savings, and sustainability - ",
    explanations: [
        "Dive into the future of retail with our all-inclusive interactive Merchandising app, a game-changer that works flawlessly even offline. Unveiling a transformative toolkit for merchandisers and store staff, it not only ensures laser-precise results but also redefines cost-effectiveness and environmental responsibility. ",
      "Imagine a merchandising solution that’s not just fully interactive, but also empowers your team with in-app ordering capabilities, and available offline across multiple platforms. Our app takes it a step further by offering the ability to divide planograms, intuitively color-coded for clarity, and most importantly, boasting lightning-fast UPC scanning for streamlined efficiency. ",
    ],
    cards: [
      {
        logo: "happy_customer.png",
        name: "Planogram repository: All stores in one place.",
      },
      {
        logo: "expert_analysis.png",
        name: "Order/Sell Sheets for relevant stores.",
      },
      { logo: "market_share.png", name: "Ability to create product and fixture libraries." },
      {
        logo: "increase_sales.png",
        name: "Efficient, fast, and accurate at the retail level.",
      },
    ],
  },
  {
    id: "crm-for-cpg",
    title: "CRM for CPG",
    image: "crm-for-cpg.jpeg",
    begginning: "Strengthen growth by identifying and focusing on opportunities to drive sales and profitability -  ",
    explanations: [
        "Our industry leading BI tools allow for a seamless flow of customer retention through informed decision making. Determining what your consumers need is critical to the success of your current and potential customer relationships. ",
        "Go beyond CRM with our wide variety of SMART solutions, highlighting opportunities for you to build stronger relationships while increasing sales and profitability.  ",
        "Implementing a tailored workflow, alongside leveraging merchandising tracker insights, and harnessing the power of dashboards, will not only empower your sales team but also drive a positive customer experience – increased efficiency, data-driven decisions, and enhanced customer satisfaction. Imagine the capabilities of having billions of records of data at your disposition to influence retail opportunities.        "
    ],
    cards: [
        {
          logo: "happy_customer.png",
          name: "Optimize the results of your sales team.",
        },
        {
          logo: "expert_analysis.png",
          name: "Optimize the results of your sales team.",
        },
        { logo: "market_share.png", name: "Carve out your piece of the market." },
        {
          logo: "increase_sales.png",
          name: "Increase sales and drive profitability.",
        },
      ],
  },
  {
    id: "hris",
    title: "HRIS",
    image: "hris.jpeg",
    begginning:
      "Boost productivity, reduce workload, and foster team collaboration with our all-in-one HR solution -  ",
    explanations: [
        "Our Human Resource Information System (HRIS) is designed to simplify and enhance your HR operations. Our system is a comprehensive solution that tackles key aspects such as timesheets, training, and payroll reports. Eliminate manual data entry, scattered information, and the complexities of HR administration with our enhanced system.        "
    ],
    cards: [
        {
          logo: "happy_customer.png",
          name: "Streamline onboarding and offboarding.",
        },
        {
          logo: "expert_analysis.png",
          name: "Efficient Payroll integration and reporting.",
        },
        { logo: "market_share.png", name: "User-friendly management dashboards" },
        {
          logo: "increase_sales.png",
          name: "Simplified timesheets and expense reporting.",
        },
      ],
  },
];

const Softwares = () => {
  const { softwaresId } = useParams();
  const software = information.find((i) => i.id == softwaresId);

  return (
    <div>
      <div className=" lg:h-[30vh] sm:h-[15vh] w-screen">
      <p className="flex absolute text-secondary  w-screen lg:h-[30vh] sm:h-[15vh] justify-center items-center lg:text-xxlg sm:text-xmd font-extrabold">
          {software?.title}
        </p>
        <img src="./../../background.webp" className="lg:h-[30vh] sm:h-[15vh] w-screen" />
      </div>
      <div className="lg:p-20 sm:p-8 grid gap-10">
        <img src={`./../../${software?.image}`}  className="lg:max-h-[500px] sm:max-h-[300px] sm:max-w-[300px] lg:max-w-full" />
        <Reveal className="lg:text-xlg sm:text-xmd font-bold">{software?.begginning}</Reveal>
        <Reveal className="flex flex-col gap-5 lg:text-sm sm:text-xsm">
          {software?.explanations.map((i) => (
            <p>{i}</p>
          ))}
        </Reveal>
        <span className="flex justify-center items-center lg:flex-row sm:flex-col gap-8">
            {software?.cards.map((i)=><Card className="w-[300px] h-[250px]">
                <span className="flex flex-col justify-center items-center text-center gap-3 w-full">
                 <img className="w-[100px]" src={`./../../${i.logo}`}/>   
                <p>{i.name}</p>
                </span>
            </Card>)}
        </span>
      </div>
    </div>
  );
};

export default Softwares;
