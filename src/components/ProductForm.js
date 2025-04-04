import React, { useEffect, useState } from "react";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const ProductForm = ({ productToEdit, onSaved }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setPrice(productToEdit.price);
      setCategory(productToEdit.category);
    } else {
      setName("");
      setPrice("");
      setCategory("");
    }
  }, [productToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name,
      price: parseFloat(price),
      category,
      updatedAt: new Date(),
    };

    try {
      if (productToEdit) {
        const docRef = doc(db, "products", productToEdit.id);
        await updateDoc(docRef, productData);
        alert("Product updated!");
      } else {
        await addDoc(collection(db, "products"), {
          ...productData,
          createdAt: new Date(),
        });
        alert("Product added!");
      }

      onSaved(); // Triggers a refresh in App.js
    } catch (err) {
      console.error("Error saving product:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded shadow-sm bg-light mb-4"
    >
      <h5 className="mb-3">
        {productToEdit ? "Edit Product" : "Add New Product"}
      </h5>

      <div className="mb-3">
        <label htmlFor="product-name" className="form-label">
          Name
        </label>
        <input
          id="product-name"
          name="name"
          className="form-control"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="product-price" className="form-label">
          Price (€)
        </label>
        <input
          id="product-price"
          name="price"
          type="number"
          className="form-control"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="product-category" className="form-label">
          Size
        </label>
        <input
          id="product-category"
          name="category"
          className="form-control"
          placeholder="Enter product size"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        {productToEdit ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
