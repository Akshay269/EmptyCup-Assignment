import React,{useState} from "react";
import details from "./assets/details.svg";
import report from "./assets/report.svg";
// import shortlist2 from "./assets/shortlist2.svg";
import hide from "./assets/hide.svg";
import star from "./assets/star.svg";
import shortlist1tog from "./assets/shortlistTog1.svg";
import shortlist2tog from "./assets/shortlistTog2.svg";


const Card = ({
  id,
  title,
  description,
  projects,
  years,
  price,
  contactNumbers,
  onShortlistToggle
}) => {
  const [isShortlisted, setIsShortlisted] = useState(false);

  const handleShortlistClick = () => {
    setIsShortlisted(!isShortlisted);
    console.log("Shortlist clicked");
    onShortlistToggle(id); 
    // window.location.reload();
  };

  return (
    <div className="bg-[#FFFCF2] p-4 flex">
      {/* Main Content */}
      <div className="p-6">
        <h2 className="text-black text-2xl font-bold mb-2 font-chivo">
          {title}
        </h2>

        {/* Star Rating Icons */}
        <div className="flex mb-2">
          {/* Assuming the rating variable is an image source */}
          <img src={star} alt="Star Icon" />
        </div>

        {/* Small Description */}
        <p className="text-black mb-2 text-[0.7rem] font-chivo">
          {description}
        </p>

        {/* Metrics */}
        <div className="flex justify-between text-black mb-4">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{projects}</span>
            <span className="text-sm">Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{years}</span>
            <span className="text-sm">Years</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{price}</span>
            <span className="text-sm">Price</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex flex-col font-chivo">
          {contactNumbers.map((number, index) => (
            <div key={index}>{number}</div>
          ))}
        </div>
      </div>

      {/* Side Pane with 4 Icons on the Right */}
      <div className="flex flex-col items-center p-4 ml-4 border-l border-gray-300">
        {/* Icon 1 */}
        <img src={details} alt="Details Icon" className="mb-4" />

        {/* Icon 2 */}
        <img src={hide} alt="Hide Icon" className="mb-4" />

        {/* Icon 3 */}
        <img
          src={isShortlisted ? shortlist2tog : shortlist1tog}
          alt="Shortlist Icon"
          className={`mb-4 ${isShortlisted ? 'shortlisted' : ''}`}
          onClick={handleShortlistClick}
        />

        {/* Icon 4 */}
        <img src={report} alt="Report Icon" className="mb-4" />
      </div>
    </div>
  );
};

export default Card;
