import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
);

export default App;

/*{ <Routes>
  <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
  <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
  <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
</Routes>; }*/
