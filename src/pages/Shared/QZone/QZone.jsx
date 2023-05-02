import React from "react";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="text-center">
      <h4>Q-Zone</h4>
      <div className="my-4 p-3">
        <img src={qZone1} alt="Q-Zone 1" />
        <img src={qZone2} alt="Q-Zone 2" />
        <img src={qZone3} alt="Q-Zone 3" />
      </div>
    </div>
  );
};

export default QZone;
