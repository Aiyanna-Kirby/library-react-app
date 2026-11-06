import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight.jsx";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>?
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt"></FontAwesomeIcon>}
              title= "Easy and Quick"
              para="Get access to the book you purchased instantly!"
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="book-open"></FontAwesomeIcon>}
              title= "10,000+ Books"
              para="Get books in all your favorite genres."
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="tags"></FontAwesomeIcon>}
              title= "Great Affordability"
              para="Get the books you love at prices you can afford."
            ></Highlight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
