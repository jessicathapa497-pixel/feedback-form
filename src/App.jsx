import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeedbackForm from "./pages/FeedbackForm";
import List from "./pages/List";
import FeedbackDetail from "./pages/FeedbackDetail";
import EditFeedback  from "./pages/EditFeedback";
import Navbar from "./components/Navbar";

function App() {
  return (
      <Router>
        <div>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<FeedbackForm/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/list/:id" element={<FeedbackDetail/>} />
          <Route path="/list/:id/edit" element={<EditFeedback/>}/>

          </Routes>
          </div>
      </Router>
    
  );
}
export default App;