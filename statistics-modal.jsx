import React, { useState } from "react";

const ModalMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExitClick = () => {
    setIsModalOpen(true);
  };

  const handleLogout = () => {
    console.log("Logged out");
    setIsModalOpen(false);

    window.location.href = "http://localhost:3000/";
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="header">
        <h2 className="header-title">Money Guard</h2>
        <button className="exit-btn" onClick={handleExitClick}>
          Exit
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Are you sure you want to log out?</h3>
            <div className="modal-buttons">
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
              <button className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalMenu;
