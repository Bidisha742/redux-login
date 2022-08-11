import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../redux/actions";
export const Navigation = ({ children }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.login);
  const dispatch = useDispatch();
 
  const handleLogout = () => {
    dispatch(logoutAction());
    navigate('/');
  }
  return (
    <>
      <nav
        className="navbar bg-primary 
      justify-content-between align-items-center p-3"
      >
        <div
          className="d-flex justify-content-between"
          style={{ width: "10%" }}
        >
          <Link to="/" className="text-light">
            Home
          </Link>
          {isLoggedIn && (
            <Link to="/about" className="text-light">
              About
            </Link>
          )}
        </div>
        {isLoggedIn ? (
          <button className="btn btn-light p-2 rounded-3" onClick={handleLogout}>Logout</button>
        ) : (
          <button
            className="btn btn-light p-2 rounded-3"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </nav>
      {children}
    </>
  );
};
