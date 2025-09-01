import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/popup.css";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check sessionStorage to show popup only once per session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      setShowPopup(true);
      sessionStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    navigate("/register");
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={handleClose}>
          ✖
        </button>
        <h2>Limited Seats Only!</h2>
        <p>
          Join our <strong>Cyber Security Workshop</strong> and explore the
          latest trends in security and ethical hacking.
        </p>
       
        <button className="popup-action" onClick={handleClose}>
          View
        </button>
      </div>
    </div>
  );
}
