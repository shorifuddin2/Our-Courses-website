import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div className="header-container my-5">
            <div className="header-title w-full  ">
                <p>
                    Welcome to Our <span>COURSES</span>
                </p>
                <Link to="/about">
                    
                    <button>About Me</button>
                </Link>
            </ div >
        
        </div>
    );
};

export default Header;
