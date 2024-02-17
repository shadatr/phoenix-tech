import { useParams } from "react-router-dom";
import Reveal from "./Reveal";

const information = [
  {
    id: "layout-optimization",
    title: "The importance of store layout optimization    ",
    image: "layout-optimization.png",
    begginning:
      "The importance of store layout optimization ",
    explanations: [
        "Exciting News! Store Layout Optimization - A Key to Retail Success - In the ever-evolving world of retail, the layout of your store plays a pivotal role in shaping customer experiences and driving business growth. ",
        "Why does it matter?        ",
        "1️: Maximizes Sales: A well-thought-out layout can guide customers through your store, increasing the likelihood of making unplanned purchases.        ",
        "2: Enhances Customer Experience: A seamless and visually appealing store layout creates a positive and memorable shopping experience.        ",
        "3: Efficient Space Utilization: It ensures you make the most of your store's space, reducing waste and costs.        ",
        "4: Reflects Your Brand: Your store layout communicates your brand's identity and values.        ",
        "5: Data-Driven Decisions: Utilizing data analytics and customer behavior insights can further refine your layout for better results.        ",
        "As we embrace new retail technologies and changing consumer behaviors, optimizing your store layout becomes even more critical. Let's spark a conversation about the strategies and insights that are transforming the retail landscape.        "
    ],
  },{
    id: "analytics",
    title: "How to Use Analytics to gain a competitive advantage.",
    image: "analytics.jpeg",
    begginning:
      "How to use analytics to gain a competitive advantage -",
    explanations: [
        "Retailers can achieve a #competitive #advantage through analytics by leveraging data-driven insights to make more informed decisions, optimize various aspects of their operations, and enhance the overall customer experience. Here are some key takeaways #retailers can use analytics to gain a competitive edge:        ",
        "Assortment Planning: Analyze sales data to identify top-performing products and trends. Retailers can use this information to optimize their product assortment, focusing on high-demand items and aligning offerings with customer preferences.        ",
        "Market Basket Analysis: Use analytics to understand which products are frequently purchased together. This information can help retailers create targeted promotions, cross-selling opportunities, and strategic product placements to increase sales.",
        "Real-time Analytics: Implement real-time data analytics to monitor and respond to customer behaviour, market trends, and supply chain disruptions promptly. Agility in decision-making allows retailers to capitalize on emerging opportunities and mitigate risks effectively.        ",
        "Fraud Detection and Risk Management: Leverage analytics to detect and prevent fraudulent activities, minimizing financial losses and protecting the reputation of the retail brand.        ",
        "Overall, adopting a data-driven approach through analytics empowers #retailers to stay ahead of the competition, respond to market changes swiftly, and meet evolving customer demands. The ability to make better decisions based on data insights can lead to increased #profitability, improved operational #efficiency, and a stronger position in the retail industry.        "
    ],
  },
  {
    id: "analyticsmart",
    title: "The importance of store layout optimization    ",
    image: "analyticsmart.jpeg",
    begginning:
      " ",
    explanations: [
        "Curated careers refer to career paths that have been intentionally designed and customized to align with an individual's strengths, interests, values, and goals. Unlike traditional career paths that are often pre-determined or dictated by external factors, curated careers are more intentional and personalized, allowing individuals to pursue work that aligns with their unique needs and aspirations.        ",
"One of the key benefits of a curated career is that it allows individuals to align their work with their values and passions, which can lead to a greater sense of fulfillment and purpose in their work. This can also result in greater job satisfaction and higher levels of engagement and productivity.",
"Curated careers also offer individuals greater control over their career paths, allowing them to make intentional decisions about the types of projects they take on, and the skills they develop. This can lead to a greater sense of autonomy and ownership over one's career, which can be especially beneficial for those who value independence and flexibility in their work. Another benefit of a curated career is that it allows individuals to build a unique set of skills and experiences that can set them apart from others in their field. By intentionally selecting projects and opportunities that align with their interests and strengths, individuals can develop a more specialized skill set that can be valuable in their current role and future career pursuits.",
"3: Efficient Space Utilization: It ensures you make the most of your store's space, reducing waste and costs.        ",
"At Analyticsmart, we believe that our employees are the foundation of our success. That's why we offer a variety of career options to help our team members grow and thrive in their professional lives. One of the unique aspects of our career development program is the ability to choose a curated career path. Our team members have the opportunity to explore different roles within the company and select the path that aligns best with their strengths, interests, and long-term goals. We believe that a fulfilling career is about more than just a job – it's about finding a path that aligns with your passions and goals. Our curated career options provide the flexibility and support you need to build a rewarding career with us."
],
  },
  {
    id: "strategies",
    title: "Key strategies for optimizing shelf space.    ",
    image: "strategies.jpeg",
    begginning:
      "The importance of store layout optimization ",
    explanations: [
        "Attention all retailers! Optimizing shelf space is crucial for you and your team as it directly impacts product visibility, customer experience, and sales performance. Here are some key strategies that you have probably NOT thought of:        ",
"1. Monitor and Adjust: Continuously monitor sales data, customer feedback, and product performance to make data-driven decisions. Regularly update planograms and shelf allocations to adapt to changing market trends and customer preferences.",
        "2. Partner with Suppliers: Work closely with suppliers to ensure optimal shelf placement for their products. Collaborate on promotions and displays to attract more attention and drive sales.        ",
"3. Test and Measure: Conduct A/B testing or pilot projects to assess the impact of changes in shelf space allocation. Use data-driven insights to refine strategies and identify what works best for your specific store and customer base.",
"An optimized shelf space not only enhances the shopping experience for customers but also boosts sales and overall store performance."
],
  },
  
];

const Blog = () => {
  const { blogId } = useParams();
  const blog = information.find((i) => i.id == blogId);

  return (
    <div>
      <div className=" pt-40 p-20 w-screen">
        <p className="flex absolute  w-screen  text-xxlg font-extrabold">
          {blog?.title}
        </p>
      </div>
      <div className="grid p-20 gap-10">
        <img src={`./../../${blog?.image}`} className="max-h-[500px]"/>
        <Reveal className="text-xlg font-bold">{blog?.begginning}</Reveal>
        <Reveal >
            <span className="flex flex-col gap-5">

          {blog?.explanations.map((i) => (
            <p>{i}</p>
          ))}
            </span>
        </Reveal>
      </div>
    </div>
  );
};

export default Blog;
