// api/services/ProductService.js
import axiosInstance from "../axios";

const getAllProduct = async () => {
  const response = await axiosInstance.get(`/comments`);
  return response.data;
};

const getProduct = async (id) => {
  const response = await axiosInstance.get(`/comments/${id}`);
  return response.data;
};

// more functions for product-related endpoints...

const productService = {
  getProduct,
  getAllProduct,
};

export default productService;
