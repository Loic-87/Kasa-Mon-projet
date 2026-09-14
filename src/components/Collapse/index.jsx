import { useState } from "react";
import ChevronIcon from "../ChevronIcon";
import "./Collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        type="button"
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="collapse-title">{title}</span>
        <span className={`collapse-arrow ${isOpen ? "open" : ""}`}>
          <ChevronIcon />
        </span>
      </button>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        <div className="collapse-content-inner">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
