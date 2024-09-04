 
import React, { useState, useEffect } from 'react';
import { API_URL } from '../data/apiPath';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const productsHandler = async () => {
    const firmId = localStorage.getItem('firmId');
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      const newProductsData = await response.json();
      setProducts(newProductsData.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      alert('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    productsHandler();
  }, []);

  const deleteProductById = async (productId) => {
    if (window.confirm("🚨Are you sure you want to delete this product?🚨")) {
      try {
        const response = await fetch(`${API_URL}/product/${productId}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          setProducts(products.filter(product => product._id !== productId));
          alert("Product deleted successfully");
        } else {
          throw new Error('Failed to delete product');
        }
      } catch (error) {
        console.error('Failed to delete product:', error);
        alert('Failed to delete product');
      }
    }
  };

  return (
    <div className='productSection'>
      {!products ? (<p>No Products Added 
 {/*      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products added</p>
      ) : ( */}
        </p>):(<table className="product-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item._id}>
                <td>{item.productName}</td>
                <td>₹{item.price}</td>
                <td>
                  {item.image && (
                    <img
                      src={`${API_URL}/uploads/${item.image}`}
                      alt={item.productName}
                      style={{ width: '50px', height: '50px' }}
                    />
                  )}
                </td>
                <td>
                  <button onClick={() => deleteProductById(item._id)} className='deleteBtn'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>)}
      {/* )} */}
    </div>
  );
};

export default AllProducts;
