import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction} from "../redux/actions";

export const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    //client side validation(form-validation)
    //api call - if response is correct, then perform redux actions
    dispatch(loginAction(userName));
    navigate('/');
  };

  

  return (
    <div className="w-100 d-flex align-items-center justify-content-center my-4">
      <div className="card p-3 rounded-3 w-25">
        <input
          className="form-control my-2"
          type="text"
          placeholder="User Name"
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          className="form-control my-2"
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="btn btn-primary p-2 rounded-3" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
