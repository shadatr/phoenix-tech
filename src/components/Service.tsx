import { useParams } from "react-router-dom";
import Card from "./Card";
import Reveal from "./Reveal";

const information = [
  {
    id: "category-management",
    title: "Category Management",
    image: "category-management.jpeg",
    begginning:
      "Category optimization is a key driver in achieving success at retail -",
    explanations: [
      "Analyticsmart's proven approach to category management provides your business with the right tools to make informed decisions and drive sales at retail.",
      "Our customer-focused category strategies determine what triggers consumer behavior, maximizing your return on investment and ensuring sustained success at retail.",
      "The standard for insight development has significantly increased due to technological advancements, why settle for a generic tool when you can have best in class analytical software built to your specifications?",
    ],
    cards: [
      {
        logo: "happy_customer.png",
        name: "Learn what triggers your customers' behavior.",
      },
      {
        logo: "assort.png",
        name: "Manage merchandising and assortment efficiently.",
      },
      { logo: "cash.png", name: "Maximize return on investment." },
      {
        logo: "increase_sales.png",
        name: "Increase sales by driving category performance.",
      },
    ],
  },
  {
    id: "dashboards",
    title: "Dashboards",
    image: "dashboards.jpeg",
    begginning: "Empowering your data: real-time insights at your fingertips -",
    explanations: [
      "Our software uses the best data visualization tools and processes to handle large amounts of data and provide real-time insights.",
      "This software provides customizable dashboards and reports, so you can see the data that matters most to your business. Tailor your analytics to your specific needs, and get the insights most relevant to your business goals.",
    ],
    cards: [
      {
        logo: "happy_customer.png",
        name: "Real-time insights for agile decision-making.",
      },
      {
        logo: "assort.png",
        name: "Customizable dashboards and reports tailored to business needs.",
      },
      {
        logo: "cash.png",
        name: "Advanced analytics tools for actionable intelligence.",
      },
      {
        logo: "increase_sales.png",
        name: "Facilitates evidence-based decisions and optimized business operations.",
      },
    ],
  },
  {
    id: "data-modernization",
    title: "Data Modernization",
    image: "data-modernization.jpeg",
    begginning:
      "Convert complicated data into visually effective dashboards -  ",
    explanations: [
      "Technological advancements have led to an increase of available data but determining how to use this data is the challenge. Our industry leading reports allows your data to tell efficient stories through state-of-the-art reporting.",
      "Our industry experience and ability to customize detailed reports means that you are in control of what data you want to see, and how you want to see it.",
      "By leveraging the best industry algorithms and machine learning, we ensure that your customized reports not only provide a single source of truth but also deliver valuable insights that drive informed decision-making.",
    ],
    cards: [
      {
        logo: "happy_customer.png",
        name: "Learn what triggers your customer’s behaviour.",
      },
      {
        logo: "assort.png",
        name: "Visually effective dashboards prioritize crucial data.",
      },
      {
        logo: "cash.png",
        name: "State of the art reports that you can act on.",
      },
      {
        logo: "increase_sales.png",
        name: "Increase profit margins through actionable insights.",
      },
    ],
  },
  {
    id: "planograms",
    title: "Planograms",
    image: "Planograms.jpeg",
    begginning:
      "Drive sales & profitability by ensuring your product placement is optimized - ",
    explanations: [
      "Analyticsmart combines the latest planogram software with exclusive state-of-the-art reporting to ensure that every merchandising decision is optimized.",
      "Our space planning strategies personalize the in-store experience for your customers. Our proven methods provide a significant boost to consumer loyalty and an increase to sales.",
      "We create visual merchandising guidelines you can act on! Our planogram services are suitable for businesses of all sizes, with customized pricing plans available.",
    ],
    cards: [
      {
        logo: "happy_customer.png",
        name: "We build Planograms based on your customer's behaviour.",
      },
      {
        logo: "assort.png",
        name: "Industry leading merchandising software.",
      },
      {
        logo: "cash.png",
        name: "State of the art Planogram reports that you can act on.",
      },
      {
        logo: "increase_sales.png",
        name: "Make key retail decisions that drive performance and increase sales.",
      },
    ],
  },
];

const Servis = () => {
  const { serviceId } = useParams();
  const service = information.find((i) => i.id == serviceId);

  return (
    <div>
      <div className=" lg:h-[30vh] sm:h-[15vh] w-screen">
        <p className="flex absolute w-screen lg:h-[30vh] sm:h-[15vh] justify-center items-center lg:text-xxlg sm:text-xmd font-extrabold">
          {service?.title}
        </p>
        <img src="./../../background.webp" className="lg:h-[30vh] sm:h-[15vh] w-screen" />
      </div>
      <div className="lg:p-20 sm:p-8 grid gap-10">
        <img src={`./../../${service?.image}`} className="lg:max-h-[500px] sm:max-h-[300px] sm:max-w-[300px] lg:max-w-full"  />
        <Reveal className="lg:text-xlg sm:text-xmd font-bold">{service?.begginning}</Reveal>
        <Reveal className="flex flex-col gap-5 lg:text-sm sm:text-xsm">
          {service?.explanations.map((i) => (
            <p>{i}</p>
          ))}
        </Reveal>
        <span className="flex justify-center items-center lg:flex-row sm:flex-col gap-8">
            {service?.cards.map((i)=><Card className="w-[300px] h-[250px]">
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

export default Servis;
