import React, { useState } from "react";
import "./productdetail.css";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductById } from "../api/Api";
import { FaArrowLeft } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const ProductDetail = ({ onBack, setCartItems, cartItems }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(["product", id], () =>
    fetchProductById(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  const handleAddToCart = (result) => {
    setCartItems([...cartItems, result]);
    setModalVisible(true); // Show the modal when the product is added to the cart
    setTimeout(() => {
      setModalVisible(false); // Hide the modal after a few seconds
    }, 2000); // 2000 milliseconds (2 seconds) for the modal to automatically close
  };

  return (
    <div>
      <div className="container my-3">
        {/* The Bootstrap Modal */}
        <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              Product added to cart!
              <Link to="/cart">
                <button>view cart</button>
              </Link>
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalVisible(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Link to="/" className="btn btn-primary">
          <FaArrowLeft /> Back
        </Link>
        <div className="product">
          <img src={data.image} className="detail-img" alt={data.title} />
          <div className="product-details">
            <h1>{data.title}</h1>
            <p>${data.price}</p>
            <p>{data.description}</p>
          </div>
        </div>

        <div className="button-container">
          {/* Add the button container */}
          <button className="cardbtns" onClick={() => handleAddToCart(data)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
