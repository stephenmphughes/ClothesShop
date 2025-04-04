import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { db } from "./firebase";
import './App.css';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(productData);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  const handleSaved = () => {
    setProductToEdit(null);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container py-4">
        <h1 className="mb-4 text-center">Clothing Store Inventory</h1>

        <ProductForm
          productToEdit={productToEdit}
          onSaved={handleSaved}
        />

        <ProductList
          products={products}
          onEdit={(product) => setProductToEdit(product)}
          onDelete={handleDelete}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
