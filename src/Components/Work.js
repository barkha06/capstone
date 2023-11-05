import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: ChooseMeals,
      title: "Pick an IP address",
      text: "Enter the IP address against which pentest has to be performed.",
    },
    {
      image: PickMeals,
      title: "Click on perform Exploitation",
      text: "Here it redirects to the AI agents which performs penetration testing. ",
    },
    {
      image: DeliveryMeals,
      title: "Download Report",
      text: "Here a report is produced which tells about the kinds of tools used and exploit found",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Here an IP address of host to be exploited is entered. And the Perform 
          Exploit Icon is clicked to perform exploitation against the host. And 
          a report is generated that tells us about the kinds of tools used and 
          vulnerability found.


        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
