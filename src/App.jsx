import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CoverPage from "./pages/CoverPage";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast"


// This page is meant for the Routing while the functions should be in the pages directly//.....

function App() {
 // BaseURL for API request from our backend
  const baseURL = "https://task-manager-back-end-zlc1.onrender.com" ;


  return (
    <>
      <Router>
        <Toaster position="top-right"/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<CoverPage />} />   
          <Route path="/tasks" element={<MyTask baseURL={baseURL} />} />
          <Route path="/new" element={<NewTask baseURL={baseURL} />} />
          <Route path="/edit/:id" element={<EditTask baseURL={baseURL}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


// Netlify, Vercel, Render etc are popular free cloud platform for hosting web applications.

// Netlify is best for static sites and application with a focus on simplicity and serverless functions.

// Vercel is optimized for front-end development, especially for those using React and Next.j, with strong serverless and edge capabilities.

// Render is a versatile platform suitable for FULLstack applications, offering a more flexible in terms of supported frameworks, databases and backend services. 



// https://task-manager-back-end-zlc1.onrender.com