import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTag } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";

const SearchResult = ({ searchResults, setCartItems, cartItems }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddToCart = (result) => {
    setCartItems([...cartItems, result]);
    setModalVisible(true); // Show the modal when the product is added to the cart
    setTimeout(() => {
      setModalVisible(false); // Hide the modal after a few seconds
    }, 2000); // 2000 milliseconds (2 seconds) for the modal to automatically close
  };

  return (
    <div className="search-result">
      <div className="row">
        <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              Product added to cart! view cart <Link to="/cart">here</Link>
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalVisible(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {searchResults.map((result) => (
          <div key={result.id} className="col-md-3 mb-3">
            <div className="card">
              <img
                className="card-img-top img-card"
                src={result.image}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">{result.title}</h5>
                <p className="card-text">
                  Price : ${result.price}
                  <FontAwesomeIcon className="flagicon" icon={faTag} />
                  <span className="category-text">{result.category}</span>
                </p>
                <div className="button-cart-view">
                  <Link
                    to={`/productdetail/${result.id}`}
                    className="btn view-btn"
                  >
                    View
                  </Link>
                  {/* Add to cart button */}
                  <button
                    onClick={() => handleAddToCart(result)}
                    className="btn cart-btn"
                  >
                    <FontAwesomeIcon icon={faPlus} /> Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
