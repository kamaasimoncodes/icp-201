import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../auth/login";
const NavBar = () => {
  const [auth, setAuth] = useState(true);
  const router=useNavigate();
  return (
    <div className="nav">
      <h1 className="" onClick={()=>router("/")}>GHub</h1>
      <div className="">
        <Link to="/projects">Projects</Link>
       
      </div>

      <div className="">
        <Link to="/profile">Profile</Link>
        {
          auth&&(
            <>
                      <Link to="/addproject" className="add">add project</Link>
            </>
          )
        }
        <AuthButton/>
      </div>
    </div>
  );
};

export default NavBar;
