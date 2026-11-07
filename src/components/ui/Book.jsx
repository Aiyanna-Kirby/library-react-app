import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Book = ({ book }) => {
  if (!book) {
    return null;
  }

  return (
    <div className="book">
      <a href={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt={book.title} className="book__img" />
        </figure>
      </a>

      <div className="book__title">
        <a href={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </a>
      </div>

      <div className="book__ratings">
        {Array.from({ length: Math.floor(book.rating) }, (_, index) => (
          <FontAwesomeIcon icon={faStar} key={index} />
        ))}

        {!Number.isInteger(book.rating) && (
          <FontAwesomeIcon icon={faStarHalfAlt} />
        )}
      </div>

      <div className="book__price">
        {book.salePrice != null ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            <span>${book.salePrice.toFixed(2)}</span>
          </>
        ) : (
          <span>${book.originalPrice.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

export default Book;
