import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const List = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("feedbacks") || "[]");
    setFeedbacks(data);
  }, []);

  const deleteFeedback = (id) => {
    if (!confirm("Are you sure you want to delete this feedback?")) {
      return;
    }
    const updatedFeedbacks = feedbacks.filter((item) => item.id !== id);
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Students Feedbacks</h2>
      <div className="grid gap-4">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="p-4 rounded shadow border">
            <h3 className="font-bold">
              {fb.name} ({fb.rating}⭐)
            </h3>
            <p>{fb.comment}</p>
            <div className="flex gap-4 text-sm mt-2">
              <Link className="text-blue-600" to={`/list/${fb.id}`}>View</Link>
              <Link className="text-yellow-600" to={`/list/${fb.id}/edit`}>Edit</Link>
              <button onClick={()=>deleteFeedback(fb.id)} className="text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
