import { useParams } from "react-router-dom";
import Reveal from "./Reveal";

const information = [
  {
    id: "grocer",
    title: "Case-study | Canadian Grocer.    ",
    image: "canadian_banner.jpeg",
    begginning: "",
    explanations: [
      "Issue - The Canadian grocer has been increasing its store count across Canada using older technology. As new stores were added and growth continued, the client felt their process was outpacing their need. Recognizing the need for a technology upgrade, they optimized processes that could scale with growth and implemented segmentation to better understand their clientele in each neighborhood.",
      "Solution -Analyticsmart built a planogram repository and established a portal, enabling all new and existing stores to access planograms more quickly and efficiently. After rebuilding their planogram process, Analyticsmart was able to implement Category Management principles, which improved customer and product segmentation across provinces and neighborhoods.1️: Maximizes Sales: A well-thought-out layout can guide customers through your store, increasing the likelihood of making unplanned purchases.        ",
      "Analysis -The client's merchandising team was thrilled with the planogram repository as it allowed them to easily view previous planograms and compare them to new product additions. Stores experienced an 87% increase in planogram adoption within six months. The client's merchandising team was highly satisfied with the planogram repository, as it enabled them to easily access and compare previous planograms with new product additions. Stores experienced an 87% increase in planogram adoption within six months.",
    ],
  },
  {
    id: "alcohol",
    title: "Case Study | Client in the alcohol beverage industry.    ",
    image: "alcohol_banner.jpeg",
    begginning: "",
    explanations: [
      "Issue - The client is mandated to enhance revenue and profitability at the retail level.",
      "Solution - After implementing our CRM system, the client established improved relationships with its retail stores. Sales representatives could swiftly access retailer data, including purchase history, delivery times, and feedback, enabling them to gain a deeper understanding of their customers.",
      "Analysis - Same SKU sales increased by 23% within the first year. The CRM system helped the client identify out-of-stock (OOS) items, new listing opportunities, and store-suggested minimums for promotions. Automated follow-up reminders and real-time data access while in-store streamlined processes, reducing time wasted searching for relevant store information. This resulted in a 14% decrease in time spent in-store. When compounded weekly, Territory Managers (TMs) experienced increased productivity and more in-store visits. We achieved a 94% overall satisfaction rate on our client survey six months after the company-wide launch.",
    ],
  },
];

const CaseStudies = () => {
  const { caseStudiesId } = useParams();
  const caseStudies = information.find((i) => i.id == caseStudiesId);

  return (
    <div>
      <div className=" pt-40 p-20 w-screen">
        <p className="flex absolute  w-screen  text-xxlg font-extrabold">
          {caseStudies?.title}
        </p>
      </div>
      <div className="grid p-20 gap-10">
        <img src={`./../../${caseStudies?.image}`} className="max-h-[500px]" />
        <Reveal className="text-xlg font-bold">
          {caseStudies?.begginning}
        </Reveal>
        <Reveal>
          <span className="flex flex-col gap-5">
            {caseStudies?.explanations.map((i) => (
              <p>{i}</p>
            ))}
          </span>
        </Reveal>
      </div>
    </div>
  );
};

export default CaseStudies;
