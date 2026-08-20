import { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="collapse-title">{title}</span>
        <span className={`collapse-arrow ${isOpen ? "open" : ""}`}>
          <svg
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7L7 1L13 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        <div className="collapse-content-inner">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
