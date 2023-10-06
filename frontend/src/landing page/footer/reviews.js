import React, { useState, useEffect } from "react";
import reviewService from "../../services/reviewService";

function ReviewComponent() {
  const [reviews, setReviews] = useState([]);
  const [reviewData, setReviewData] = useState({
    id: null,
    text: "",
  });

  const handleChange = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const addReviewDetails = async (e) => {
    e.preventDefault();
    try {
      const newReview = await reviewService.addReview(reviewData.text);
      setReviews([...reviews, newReview]);
      setReviewData({ id: null, text: "" });
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  const editReviewDetails = async (id) => {
    try {
      await reviewService.editReview(id, reviewData.text);
      const updatedReviews = reviews.map((review) =>
        review._id === id ? { ...review, text: reviewData.text } : review
      );
      setReviews(updatedReviews);
      setReviewData({ id: null, text: "" });
    } catch (error) {
      console.error('Error editing review:', error);
    }
  };

  const deleteReviewDetails = async (id) => {
    try {
      await reviewService.deleteReview(id);
      setReviews((prevReviews) => prevReviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await reviewService.getAllReviews();
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div style={{display:"flex",backgroundColor:"black",color:"white",height:"100vh",flexDirection:"column",padding:"50px"}}>
      <h1>Reviews</h1>
      <form onSubmit={reviewData.id ? () => editReviewDetails(reviewData.id) : addReviewDetails}>
        <label htmlFor="reviewText">Review Text:</label>
        <input
          type="text"
          id="reviewText"
          name="text"
          value={reviewData.text}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">
          {reviewData.id ? "Edit Review" : "Add Review"}
        </button>
      </form>

      <table>
        <thead>
          <tr>
            
            <th>Text</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review._id}>
              {/* <td>{review._id}</td> */}
              <td>{review.text}</td>
              <td>
                <button onClick={() => setReviewData({ id: review._id, text: review.text })}>Edit</button>
                <button onClick={() => deleteReviewDetails(review._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReviewComponent;
