import { useEffect, useState } from "react";
import { useAuth } from "../auth/authetication";
import { posts_backend } from "declarations/posts_backend";
import { useNavigate } from "react-router-dom";
const AddProject = () => {
  const { isAuthenticated, login, principal, logout } = useAuth();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image1, setImage1] = useState("");
  const [chain, setChain] = useState("");
  const [tech, setTech] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errr, setError] = useState("");
  const router = useNavigate();

  const handleimage1 = (e) => {
    const data = new FileReader();
    data.addEventListener("load", () => setImage1(data.result));
    data.readAsDataURL(e.target.files[0]);
  };

  if (!isAuthenticated) {
    return <div className="no">must be logged in</div>;
  }
   posts_backend.register_user().then((result) => {
  
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("there");
    posts_backend
      .add_project(name, link, description, chain, tech, image1)
      .then((result) => {
        console.log(result, "added");
        alert(result.ok);
      });
  };
  return (
    <div className="">
      <div className="add">
    
        <h1 className="">add project</h1>
        <div className="add1">
          <form className="form" onSubmit={handlesubmit}>
            <div className="add2">
              <label htmlFor="">name of your project</label>
              <input
                type="text"
                value={name}
                required
                className=""
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="add2">
              <label htmlFor="">Github link of your project</label>
              <input
                type="text"
                value={link}
                required
                className=""
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="add2">
              <label htmlFor="">Chain used</label>
              <input
                type="text"
                value={chain}
                required
                className=""
                onChange={(e) => setChain(e.target.value)}
              />
            </div>

            <div className="add2">
              <label htmlFor="">Tech used</label>
              <input
                type="text"
                value={tech}
                required
                className=""
                onChange={(e) => setTech(e.target.value)}
              />
            </div>

            <div className="add2">
              <label htmlFor="">Description of your project</label>
              <textarea
                type="text"
                value={description}
                min={40}
                max={500}
                required
                className=""
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="add2">
              <label htmlFor="">Image cover of project</label>
              <input type="file" required onChange={handleimage1} />
            </div>
            <div className="submit ">
              <button className="butt" type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
