import React from "react";
import "./product.css";
import product from "./prodcut.json";
import { FaBeer } from "react-icons/fa";

function Product() {
    return (
        <div className="container mt-4">
            <div className="row">
                {product.map((item) => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {item.category}
                                </h6>
                                <p className="card-text">Price: {item.price}</p>
                                <p className="card-text">
                                    {item.inStock ? "In Stock" : "Out of Stock"}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
