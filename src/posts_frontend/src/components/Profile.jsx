import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authetication";
import { posts_backend } from "declarations/posts_backend";
const Profile = () => {
  const { isAuthenticated, login, principal, logout } = useAuth();
  const [data, setData] = useState([]);
  const [errr, setError] = useState("");
  const router = useNavigate();
  posts_backend.register_user().then((result) => {
    console.log(result, "profi0le");
  });
  useEffect(() => {
    posts_backend.get_my_profile().then((result) => {
      console.log(result, "profi0le77777");
      setData(result.ok.projects);
    });
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <>
          <div className="">
            <div className="project">
              {!data ? (
                <div className="no">
                  <h1>No you dont any project vailable </h1>
                </div>
              ) : (
                <>
                  <div className="projos">
                    {data.map((val, index) => (
                      <div className="ma" key={index}>
                        <div className="na">
                          <img src={val.coverimage} alt="" />
                        </div>
                        <h1 className="">{val.nameofproject}</h1>
                        <div className="bt">
                          <div className="bt3">
                            <button
                              className="button"
                              onClick={() =>
                                router(`/details/${val.projectid}`)
                              }
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="no">
            <h1 className="">not logged in</h1>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
