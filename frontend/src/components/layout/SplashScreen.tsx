import { useEffect, useState } from "react";
import "../../styles/SplashScreen.css";
import Icon from "../../assets/icon.png";



interface SplashScreenProps {
  fadeOut: boolean;
}

const SplashScreen = ({ fadeOut }: SplashScreenProps) => {
    const messages = [
  "Initializing AI...",
  "Preparing Workspace...",
  "Loading Smart Features...",
  "Almost Ready..."
];


const [messageIndex, setMessageIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setMessageIndex((prev) =>
      prev < messages.length - 1 ? prev + 1 : prev
    );
  }, 600);

  return () => clearInterval(interval);
}, [messages.length]);

    
  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="splash-content">
        <div className="logo">
            <img src={Icon} alt="MailCraft AI Icon" />
        </div>

        <h1>MailCraft AI</h1>

        <p>Crafting Professional Emails</p>

        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>

        <span className="loading-text">
          {messages[messageIndex]}
        </span>
      </div>
    </div>
  );
};

export default SplashScreen;