import React from "react";

function ProductList({ products, onDelete, onEdit }) {
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-2 mb-2 rounded d-flex justify-content-between align-items-center"
        >
          <div>
            <strong>{product.name}</strong> — €{product.price} ({product.category})
          </div>
          <div>
            <button
              className="btn btn-sm btn-danger me-2"
              onClick={() => onDelete(product.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => onEdit(product)}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
