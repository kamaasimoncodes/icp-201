import { useState } from "react";
import { posts_backend } from 'declarations/posts_backend';
import { useNavigate } from "react-router-dom";
import { useAuthClient } from "../auth/authetication";
const CreateProfile = () => {
  const router = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [glink, setGlink] = useState("");
  const [skills, setSkills] = useState("");

  const { isAuthenticated, login, principal, logout } = useAuthClient();

  const [image, setImage] = useState("");

  //get user

  const handleimage = (e) => {
    console.log(e.target.files);

    const data = new FileReader();
    data.addEventListener("load", () => setImage(data.result));
    data.readAsDataURL(e.target.files[0]);
  };
  console.log("img", image);

  const handlesubmit = (e) => {
    e.preventDefault();

    posts_backend 
      .register_user(
        username,
        email,
       glink,
       skills,
        image,
      )
      .then((result) => {
        console.log(result, "user1");
        alert(result.ok);
      });
  };
  return (
    <div className="">
      {isAuthenticated ? (
        <div className="create">
          <div className="">
            <h1 className="">create profile or update profile</h1>
          </div>
          <form action="" className="form1" onSubmit={handlesubmit}>
            <div className="">
              <label htmlFor="">your username</label>
              <input
                type="text"
                value={username}
                min={10}
                max={50}
                required
                className=""
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="">your email</label>
              <input
                type="text"
                value={email}
                min={10}
                max={50}
                required
                className=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="">your githublink</label>
              <input
                type="url"
                value={glink}
                required
                className=""
                onChange={(e) => setGlink(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="">your skills</label>
              <textarea
                type="text"
                value={skills}
                min={10}
                max={50}
                required
                className=""
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>

            <div className="">
              <label htmlFor="">Image cover of yourself</label>
              <input type="file" required onChange={handleimage} />
            </div>

            <button type="submit" className="button" onClick={handlesubmit}>
              submit
            </button>
          </form>
        </div>
      ) : (
        <div className="">
          <h1 className="not">must be logged</h1>
        </div>
      )}
    </div>
  );
};

export default CreateProfile;
