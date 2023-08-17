// containers/Products/Products.jsx
import React, { useEffect, useState } from "react";
import { productService } from "../../api";
import styles from "./products.module.scss";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await productService.getAllProduct();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.Products}>
      <h1>Products Page</h1>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
