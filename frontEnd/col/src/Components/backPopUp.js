import React, { useState } from "react";
import { Link } from "react-router-dom";

function ConfirmPopup() {
  const [isConfirmPopupVisible, setIsConfirmPopupVisible] = useState(false);

  const handleProceed = () => {
    setIsConfirmPopupVisible(true);
  };

  const handleConfirm = () => {
    console.log("Proceeding...");
    setIsConfirmPopupVisible(false);
  };

  const handleCancel = () => {
    console.log("Cancelling...");
    setIsConfirmPopupVisible(false);
  };

  return (
    <div>
      <button onClick={handleProceed}>Back</button>
      {isConfirmPopupVisible && (
        <div>
          <p>Are you sure you want to proceed?</p>
          <Link to="/">
            <button onClick={handleConfirm}>Yes</button>
          </Link>
          <button onClick={handleCancel}>No</button>
        </div>
      )}
    </div>
  );
}

export default ConfirmPopup;
