// services/reviewService.js
import axios from "axios";

const API_URL = "http://localhost:8000/reviews"; // Assuming your reviews route is at /review

const reviewService = {
  getAllReviews: async () => {
    try {
      const response = await axios.get(API_URL + '/reviews');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  addReview: async (text) => {
    try {
      const response = await axios.post(API_URL + '/reviews', { text });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  editReview: async (id, text) => {
    try {
      const response = await axios.put(`${API_URL}/reviews/${id}`, { text });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  deleteReview: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/reviews/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default reviewService;
