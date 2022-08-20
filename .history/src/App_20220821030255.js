import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Login from "./components/Auth/Login/Login";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import Signup from "./components/Auth/Signup/Signup";
import Blogs from "./components/Blogs/Blogs";
import Checkout from "./components/Checkout/Coursess"
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";


function App() {
    
    return (
        
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route
                    path="/courses"
                    element={
                        <RequireAuth>
                            <Cour />
                        </RequireAuth>
                    }
                />
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            
            </Routes>
           <Footer></Footer>
        </div>
    );
}

export default App;
