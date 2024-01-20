import { useState } from "react";
import './AccordionItem.css';

const AccordionItem = ({ heading, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordionItem = () => {
    setIsOpen((wasOpen) => {
      return !wasOpen;
    });
  };
  return (
    <>
      <div
        className="accordion-item-heading"
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: isOpen ? "darkgray" : "lightgray",
        }}
      >
        <button onClick={toggleAccordionItem} className="accordion-button">
          <h2>{heading}</h2>
          <span>{isOpen ? "-" : "+"} </span>
        </button>
      </div>
      {isOpen && (
        <div className="accordion-item-content">
          <p>{content}</p>
        </div>
      )}
    </>
  );
};

export default AccordionItem;
